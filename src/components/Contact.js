import React from "react";
import astroMan from '../images/astroMan.png'
import logo from '../images/siphle-nobg.png'
import { moveDown } from './swipe';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <div className="contact section" id="contact">
                <h1 className="phoneNone">Message Me</h1>
                <div className='phone-mini-div extraWidth leftPad'>
                    <h1>MESSAGE ME</h1>
                    <img src={logo} alt='Logo' className='phone-logo'  onClick={() => {moveDown('left-rail', 'contact')}}/>
                </div>
                <p>Let's build something Amazing together!</p>
                <div className="contactFlex">
                    <div>
                        <img src={astroMan}/>
                    </div>
                    <div className="main-form appear">
                        <form
                            className="contForm"
                            onSubmit={this.submitForm}
                            action="https://formspree.io/f/xqkggvpd"
                            method="POST"
                        >
                            <input type="text" required className="inputCont " name="name" placeholder="NAME"/><br/>
                            
                            <input type="email" required className="inputCont " name="email" placeholder="EMAIL"/><br/>

                            <textarea required className="inputCont messageCont" name="message" placeholder="MESSAGE" type="text">

                            </textarea>

                            <div className="send-div">            
                                {status === "SUCCESS" ? <p className="status">Thank You!</p> : <button  className="subsub" >SEND MESSAGE</button>}
                                {status === "ERROR" && <p className="status error">Error!!</p>}
                            </div>
                        </form>
                    </div>
                </div>
                <div id='contact-blank' className='blank appear'>ssssssssssssssssss<br/>ssssssssssss</div>
            </div>
        );
    }

    submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
        } else {
        this.setState({ status: "ERROR" });
        }
    };
    xhr.send(data);
    setTimeout(() => { this.setState({status:null}) }, 10000);
    }
    }
