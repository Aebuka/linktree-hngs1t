import Input from "../components/Input";
import Footer from "../components/Footer";
import { inputInfo } from "../components/Input";

export default function Contact() {

  let name = "Chukwuebuka";

  return (
    <div className="contact-form App">
      <div className="contact-form-wrapper">
        <div className="top-section">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form action="" method="post">
          <div className="form-container">
            <div className="fname-lname">
              <Input
                key={inputInfo[0].key}
                label={inputInfo[0].label}
                htmlFor={inputInfo[0].inputId}
                inputId={inputInfo[0].inputId}
                type={inputInfo[0].type}
                placeholder={inputInfo[0].placeholder}
              />
              <Input
                key={inputInfo[1].key}
                label={inputInfo[1].label}
                htmlFor={inputInfo[1].inputId}
                inputId={inputInfo[1].inputId}
                type={inputInfo[1].type}
                placeholder={inputInfo[1].placeholder}
              />
            </div>
            <Input
              key={inputInfo[2].key}
              label={inputInfo[2].label}
              htmlFor={inputInfo[2].inputId}
              inputId={inputInfo[2].inputId}
              type={inputInfo[2].type}
              placeholder={inputInfo[2].placeholder}
            />
            <div>
              <p>
                <label htmlFor="message">Message</label>
              </p>
              <textarea
                className="input"
                name="user_message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Send me a message and I'll reply you as soon as possible..."
              ></textarea>
            </div>
            <div className="checkbox">
              <input type="checkbox" name="" id="checkbox" />
              <label htmlFor="checkbox">
                You agree to providing your data to {name} who may contact
                you.
              </label>
            </div>
            <button type="submit" id="btn__submit">
              Send message
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
