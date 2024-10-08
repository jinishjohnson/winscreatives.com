import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contact.scss";
import * as emailjs from "emailjs-com";
import Contactinfo from "./contactInfo/contactinfo"
import ContactSocial from './contactInfo/contactSocial';
import Modal from '../contact-modal/Modal';
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import PageHeader from "../../components/ui-components/page-header/pageheader"

  
import ContactBackground from '../../assets/contact/contactUs.gif';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      sending: false,
      successModal: false,
      errorModal: false,
    };
  }

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    var self = this;
    this.setState({ sending: true });
    e.preventDefault();

    var template_params = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };




    // YOUR EMAIL.JS API KEY IN FORMAT user_xxxxxxxxxxxxxxxxxx
    let API_KEY = "fcJLNr3o-UjAoyCdW";

    // YOUR EMAIL.JS TEMPLATE ID
    let TEMPLATE_ID = "template_awr36af";




    emailjs.send("service_kaeohqb","template_awr36af").then(
      function (response) {
        if (response.status === 200) {
          self.showSuccessModal();
        } else {
          self.showErrorModal();
        }
      },
      function (error) {
        self.showErrorModal();
      }
    );
  };

  // SUCCESS MODAL
  showSuccessModal = () => {
    this.setState({ successModal: true, sending: false });
    this.resetForm();
  };
  // ERROR MODAL
  showErrorModal = () => {
    this.setState({ errorModal: true, sending: false });
    this.resetForm();
  };
  // RESET CONTACT FORM
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  // CLOSE ALL MODALS
  closeModal = () => {
    this.setState({ successModal: false, errorModal: false });
  };

  resetForm = () => {
    this.setState({ name: "", email: "", message: "" });
  };

  render() {
   

    let submitButtonRender = (
      <div className="small__button">
        <button aria-label="send message" type="submit" value="Send Message">
          Send Message
        </button>
      </div>
    );
    if (this.state.sending) {
      submitButtonRender = (
        <div className="small__button sending-btn">
          <div className="flex-center">
            <div className="sbl-circ"></div>
          </div>
        </div>
      );
    }
    let modalRender = null;
    if (this.state.successModal) {
      modalRender = <Modal closeModal={this.closeModal} status="success" />;
    } else if (this.state.errorModal) {
      modalRender = <Modal closeModal={this.closeModal} status="error" />;
    }
    return (
      <>
      <div className="container-flex">
      <PageHeader className="contactPageheader" titleSen="Let's Talk" />
      </div>
        {modalRender}
        <div className="container">
        {/* <h2>Ready to take your business to the next level? Contact us today to schedule a consultation.</h2> */}
          {/* <Title title="CONTACT US." />
          <p className="font19">
            get in touch to learn more about our full service advertising
            offering and how it will <br></br>take your business to the next
            level.
          </p> */}

          <Row className="padding40">
            <Col md={12} lg={6}>
              <form id="contact-form" onSubmit={this.handleSubmit}>
                <h4 className="font30 weight800 padding30">Send Us Message.</h4>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                  value={this.state.name}
                  onChange={this.inputHandler}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={this.state.email}
                  onChange={this.inputHandler}
                />
                <textarea
                  rows="6"
                  cols="50"
                  placeholder="Message..."
                  required
                  name="message"
                  value={this.state.message}
                  onChange={this.inputHandler}
                ></textarea>
                <AwesomeButton type="primary" className="btn">Send Message</AwesomeButton>
              </form>
            </Col>
            <Col md={12} lg={6}>
              <div className="flex-center">
                <img src={ContactBackground} alt="contact background" />
              </div>
            </Col>
          </Row>
          <Contactinfo/>
          <ContactSocial />
        </div>
      </>
    );
  }
};

export default Contact;
