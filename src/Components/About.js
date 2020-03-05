import React, { useState } from "react";
import Modal from "react-modal";
import HTML5 from "./AboutComponents/HTML5";
import JAVASCRIPT from "./AboutComponents/JAVASCRIPT";
import HTTP from "./AboutComponents/HTTP";
import MySQL from "./AboutComponents/MySQL";
import OOP from "./AboutComponents/OOP";
import MVC from "./AboutComponents/MVC"
import GIT from "./AboutComponents/GIT";



function About() {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="AboutPageStyle">

      <div className="AboutTopStyle">
        <h1 className="AboutH1Style"> Skill Tree </h1>
      </div>

      <div className="AboutContainer">

        <div className="AboutPopUp1">
          <button className="AboutPopUpStyle1" onClick={() => setModalIsOpen(true)}>Web Development</button>
          <Modal isOpen={modalIsOpen}
            style={
              {
                overlay: {
                  backgroundColor: 'darkgrey'
                },
                content: {
                  color: 'white',
                  backgroundColor: 'Grey'
                }
              }
            }
          >
            <h2>Web Development<span class="modal-trigger" ></span> </h2>
            <p>HTML5 / CSS3: How to build a User Interface.<br></br>
              JAVASCRIPT: How to use variables, functions, objects, scope, AJAX, jQuery, DOM. <br></br>
              HTTP: Fundamentals about the protocol: methods, headers, error codes.<br></br>
              PHP: How to use variables, functions, classes, includes interaction with the browser and CRUD operations on a database (MySql).<br></br>
              MySQL: How to create and update a database, perform CRUD operations on tables.<br></br>
              OOP: Basics about classes, objects and inheritance in PHP. <br></br>
              MVC: Built a blog with administrative features creating a custom MVC framework from scratch.<br></br>
              GIT: Learned the principles and basic commands. <br></br>
              Deployment: learned the basics about deploying a LAMP architecture and installing and running a PHP/MySQL application.
            </p>
            <div>
              <button className="ModalButtonStyle" onClick={() => setModalIsOpen(false)}>Close</button>
            </div>
          </Modal>
        </div>

        <div className="HtmlStyle">
          <HTML5 />
        </div>

        <div className="HtmlStyle">
          <JAVASCRIPT />
        </div>

        <div className="HtmlStyle">
          <HTTP />
        </div>

        <div className="HtmlStyle">
          <MySQL />
        </div>

        <div className="HtmlStyle">
          <OOP />
        </div>

        <div className="HtmlStyle">
          <MVC />
        </div>

        <div className="HtmlStyle">
          <GIT />
        </div>

      </div>


    </div>
  );
}


export default About;