import React from "react";



function Contacts() {
  return (
    <div class="ContactPageStyle">

      <div className="ContactContainer">

        <div className="BoxStyle">
          <h1 className="Hstyle"> Contact this dude! It's worth it.</h1>
        </div>


        {/* First box on the left with contact details down here -> */}
        <div className="ContactInfo">

          <img className="ContactInfoBackground" src={require('./../Assets/location.png')} alt="location.jpg" />

          <div className="TextInfoStyle">
            <h1 className="InfoTextStyle">
              Contact Info:
            </h1>
            <p className="ContactPstyle"><span class="glyphicon glyphicon-envelope" ></span>: justperfect@everything.com</p>
            <p className="ContactPstyle"><span class="glyphicon glyphicon-phone"></span>: 040(095)242-07-30 </p>
            <p className="ContactPstyle"><span class="glyphicon glyphicon-map-marker"></span>: British Columbia, Hope Street, 11A </p>
          </div>
        </div>
        {/* First box on the left with contact details up here <- */}



        {/* Second box on the right with forms for comments down here -> */}

        <div className="ContactInput">

          <img className="ContactInputBackground" src={require('./../Assets/office.jpg')} alt="location.jpg" />

          <div className="TextInputStyle">
            <form>
              <p className="InputParagraphStyle">
                Please let me know if there is anything that needs improvement.
              </p>
              <div class="form-group">
                <label for="usr">Name:</label>
                <input type="text" class="form-control" placeholder="Enter full name" id="usr" />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Email address:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
        {/* Second box on the right with forms for comment down here <- */}


      </div>
    </div >
  );
}


export default Contacts;