import React from "react";
import logo from '../images/blueloadinggif.gif'
export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    handleClearForm = () => {
        document.getElementById('question-form').reset()
    }

    componentDidMount() {
        // Change the meta description
        const metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        metaDescription.content = "Fill this Questionnaire for your Project";

        // Remove any existing meta description
        const existingMetaDescription = document.querySelector('meta[name="description"]');
        if (existingMetaDescription) {
            document.head.removeChild(existingMetaDescription);
        }

        // Add the new meta description to the head
        document.head.appendChild(metaDescription);

        // Change the page title
        document.title = "PaulTheChampion | Client's Questionnaire";  // Change the title if needed
    }

    render() {
        const { status } = this.state;
        return (
            <div className="question-div" id="question">
                
                    <div className="main-question-form appear">
                        <form
                            className="question-form"
                            onSubmit={this.submitForm}
                            action="https://formspree.io/f/xqkggvpd"
                            method="POST"
                            id="question-form"
                        >   
                            <div className="question-form-div header">
                                <h1>Quick Questionnaire</h1>
                                <p>Project Details</p>
                            </div>
                            
                            <div className="question-form-div input">
                                <label for="Project Name">1. What is the name of your business or project?</label><br/>
                                <input type="text" required className="question-input " name="Project Name" placeholder="Project Name"/><br/>
                            </div>

                            <div className="question-form-div input">
                                <label for="Project Goals">2. Can you describe the main goals and objectives for your website or web application?</label><br/>
                                <input type="text" required className="question-input " name="Project Goals" placeholder="What do you want to achieve?"/><br/>
                            </div>

                            <div className="question-form-div input">
                                <label for="Project Design and Branding">3. Do you have any specific design or branding preferences in mind?</label><br/>
                                <input type="text" className="question-input " name="Project Design and Branding" placeholder="How do you want your project to look?"/><br/>
                            </div>

                            <div className="question-form-div input">
                                <label for="Project Functionalities">4. What are some important features or functionalities you require for your project?</label><br/>
                                <input type="text" className="question-input " name="Project Functionalities" placeholder="Eg. Payment system, appointment booking, pictures gallery etc..."/><br/>
                            </div>

                            <div className="question-form-div input">
                                <label for="Project Budget and Time">5. What is your budget and preferred timeline for this project?</label><br/>
                                <input type="text" className="question-input " name="Project Budget and Time" placeholder="Project budget and timeline"/><br/>
                            </div>
                           

                            <div className="question-form-div input">
                                <label for="Domain and Hosting">6. Have you already purchased a domain name and hosting for your project?</label><br/>
                                <label for="Yes">Yes</label>
                                <input type="radio" name="Do you have a domain?" value="Yes I have domain" className="first-radio"/><br/>
                                <label for="Yes">No</label>
                                <input type="radio" name="Do you have a domain?" value="No I don't have a domain" className="second-radio"/><br/>
                            </div>

                            <div className="question-form-div input">
                                <label for="Logo">7. Does your business or project have a Logo?</label><br/>
                                <label for="Yes">Yes</label>
                                <input type="radio" name="Do you have a Logo?" value="Yes I have Logo" className="first-radio"/><br/>
                                <label for="Yes">No</label>
                                <input type="radio" name="Do you have a Logo?" value="No I don't have a Lodo" className="second-radio"/><br/>
                            </div>

                            <div className="question-form-div input">
                                <label for="Project Budget and Time">8. What is your Name?</label><br/>
                                <input type="text" required className="question-input " name="Name" placeholder="Type in your Name"/><br/>
                            </div>

                            <div className="question-form-div input">
                                <label for="Project Budget and Time">9. How can I contact you? Type in your Email, Phone number or both</label><br/>
                                <input type="text" className="question-input " required name="Contact Info" placeholder="customer@email.com, (647)-534-2898"/><br/>
                            </div>

                            

                            <div className="question-send">
                                <div>
                                    {status === "SUCCESS" ? <p className="status">Thank You! I will contact you in 24hrs Max</p> : <button  className="subsub question-sub" >Submit</button>}
                                    {status === "ERROR" && <p className="status error">Error!!</p>}
                                </div>

                                <div>
                                    <button className="clear-form" onClick={this.handleClearForm}>
                                        Reset Form
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="question-conclusion">
                            <p>This was solely created to help Clients manifest their dream websites and web applications.</p>

                            <img src={logo} alt="logo" className="question-logo"/><a href="/">View my portfolio</a><img src={logo} alt="logo" className="question-logo"/>
                        </div>
                    </div>
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
