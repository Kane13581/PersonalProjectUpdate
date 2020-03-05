import React from "react";

function IT() {
    return (
        <div className="ITPageStyle">

            <div className="ITMidBorder">

            </div>

            <div className="ITFloatingDiv">

                <div class="element1">
                    <img className="ITElement1Img" src={require('./../Assets/ITleft.jpg')} alt="location.jpg" />
                </div>
                <div class="element2">
                    <img className="ITElement1Img" src={require('./../Assets/ITmid.jpg')} alt="location.jpg" />
                </div>
                <div class="element3">
                    <img className="ITElement1Img" src={require('./../Assets/ITright.jpg')} alt="location.jpg" />
                </div>


            </div>




        </div>
    );
}


export default IT;