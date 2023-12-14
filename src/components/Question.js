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

    componentDidMount() {
        // Get the element by its ID
        const divElement = document.getElementById('circleDiv');
    
        // Check if the element exists before attempting to hide it
        if (divElement) {
          // Set the display property to "none" to hide it
          divElement.style.display = 'none';
        }
      }

    handleClearForm = () => {
        document.getElementById('question-form').reset()
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
                                    <p>Fill this Questionnaire to begin project ASAP</p>
                                </div>
                                
                                <h1 className="phone-q-h2">Questions about you</h1>

                                <div className="question-form-div input">
                                    <label for="Project Budget and Time">1. Client name</label><br/>
                                    <input type="text" required className="question-input " name="Name" placeholder="Type in your Name"/><br/>
                                </div>

                                <div className="question-form-div input">
                                    <label for="Project Budget and Time">2. Email, Phone number or both</label><br/>
                                    <input type="text" className="question-input " required name="Contact Info" placeholder="customer@email.com, (647)-534-2898"/><br/>
                                </div>
                                
                                <h1 className="phone-q-h2">Questions about your project</h1>

                                <div className="question-form-div input">
                                    <label for="Project Name">1. Name of business / project</label><br/>
                                    <input type="text" required className="question-input " name="Project Name" placeholder="Project Name"/><br/>
                                </div>

                                <div className="question-form-div input">
                                    <label for="Project Goals">2. What services and / or products do you offer?</label><br/>
                                    <input type="text" required className="question-input " name="Project services and products" placeholder="Project services and products"/><br/>
                                </div>

                                <div className="question-form-div input">
                                    <label for="Project Design and Branding">3. What are your company’s value propositions to the market?</label><br/>
                                    <input type="text" className="question-input " name="company value propositions" placeholder="Company value propositions"/><br/>
                                </div>

                                <div className="question-form-div input">
                                    <label for="Project Functionalities">4. Would you want your website to be an e-commerce platform (ie sales through the website)?</label><br/>
                                    <label for="Yes">Yes</label>
                                    <input type="radio" name="Do you want e-commerce?" value="Yes I want e-commerce" className="first-radio"/><br/>
                                    <label for="Yes">No</label>
                                    <input type="radio" name="Do you want e-commerce?" value="No I don't want e-commerce" className="second-radio"/><br/>
                                </div>

                                <div className="question-form-div input">
                                    <label for="Project Budget and Time">5. What are the base colors representing your company?</label><br/>
                                    <input type="text" className="question-input " name="Company colors" placeholder="Company colors"/><br/>
                                </div>

                                <div className="question-form-div input">
                                    <label for="Project Budget and Time">6. What are the base shapes representing your company?</label><br/>
                                    <input type="text" className="question-input " name="Base shapes for company" placeholder="Base shapes for company"/><br/>
                                </div>

                                <div className="question-form-div input">
                                    <label for="Project Budget and Time">7. Is this project is for re-designing your website / webapp? If so, please provide the current website to be revised.</label><br/>
                                    <input type="text" className="question-input " name="Current website link" placeholder="Current website link"/><br/>
                                </div>
                            
                                <div className="question-form-div input">
                                    <label for="Domain and Hosting">8. Have you already purchased a domain name and hosting for your project?</label><br/>
                                    <label for="Yes">Yes</label>
                                    <input type="radio" name="Do you have a domain?" value="Yes I have domain" className="first-radio"/><br/>
                                    <label for="Yes">No</label>
                                    <input type="radio" name="Do you have a domain?" value="No I don't have a domain" className="second-radio"/><br/>
                                </div>

                                <div className="question-form-div input">
                                    <label for="Logo">9. Do you have a Logo or specific pictures for your project?</label><br/>
                                    <label for="Yes">Yes</label>
                                    <input type="radio" name="Do you have a Logo?" value="Yes I have Logo" className="first-radio"/><br/>
                                    <label for="Yes">No</label>
                                    <input type="radio" name="Do you have a Logo?" value="No I don't have a Lodo" className="second-radio"/><br/>
                                </div>

                                <div className="question-form-div input">
                                    <label for="Project Budget and Time">8. Provide example websites you may have as a benchmark.</label><br/>
                                    <input type="text" className="question-input " name="Example website benchmark link" placeholder="Example website benchmark link"/><br/>
                                </div>

                                <div className="question-form-div input">
                                    <label for="Project Budget and Time">9. What would be your base tabs (topics or subjects) on the homepage?</label><br/>
                                    <input type="text" className="question-input " name="Base tabs (topics or subjects)" placeholder="Base tabs (topics or subjects)"/><br/>
                                </div>

                                <div className="question-form-div input">
                                    <label for="Project Budget and Time">10. What is your budget and preferred timeline for this project?</label><br/>
                                    <input type="text" className="question-input " name="Project Budget and Time" placeholder="Project budget and timeline" required/><br/>
                                </div>

                                <div className="question-form-div input">
                                    <label for="Project Budget and Time">11. Provide any other requirements to discuss (ie. Specific features, functions, your imagination, etc)</label><br/>
                                    <input type="text" className="question-input " name="Specific requirements and features" placeholder="Specific requirements and features"/><br/>
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
