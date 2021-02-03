import React from "react";
import {FaGithub} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"

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
     
      <form
        className="contForm"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xqkggvpd"
        method="POST"
      >
        
       
        <label className="Dlabel">Name </label><br/>
        <input type="text" required className="inputCont" name="name"/><br/>
        
        <label className="Dlabel">Email</label><br/>
        <input type="email" required className="inputCont" name="email"/><br/>
        
        <label className="Dlabel">Message</label><br/>
        <textarea className="inputText" name="message"></textarea><br/>
                        
        {status === "SUCCESS" ? <p className="status">Thank You for the Message!</p> : <button  className="buttonClass subsub" >Submit</button>}
        {status === "ERROR" && <p className="status">Ooops! There was an error.</p>}
      <div className="phoneLink">
      <a href="https://github.com/paulthechampion" className="iconLink" target="_blank">  <FaGithub className="chatIcons"/></a>
       <a href="https://twitter.com/_championpaul"className="iconLink" target="_blank"> <FaTwitter className="chatIcons"/></a>
       <a href="https://www.linkedin.com/in/enwerem-paul-9a307518b/"className="iconLink" target="_blank">  <FaLinkedin className="chatIcons"/></a>
      </div>
      </form>
      
      
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
  }
}