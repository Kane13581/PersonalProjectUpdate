import React from "react";

function Sports() {
    return (
        <div className="SportsPageStyle">
            <div className="SportsParagraph">
                <p className="SportsParStyle">
                    When it comes to sport, I think it is just something I did for as long as I can remember.
                </p>
            </div>


            <div className="SportsStory">

                <div className="FootballContent" >
                    <img className="ContactInfoBackground" src={require('./../Assets/footballstory.jpg')} alt="location.jpg" />
                </div>

                <div className="VolleyballContent" >
                    <img className="ContactInfoBackground" src={require('./../Assets/volleyballstory.jpg')} alt="location.jpg" />
                </div>

                <div className="BoxContent" >
                    <img className="ContactInfoBackground" src={require('./../Assets/fightstory.jpg')} alt="location.jpg" />
                </div>

            </div>


            <div className="SportsContent">

                <div className="FootballStory">
                    <p className="FootballStoryPar">Football was a sport I practiced at a younger age, and it later developed into a hobby. Much fun playing it, not so much watching it tho'.</p>
                </div>

                <div className="VoleyballStory">
                    <p className="FootballStoryPar">I started playing volleyball at about 10 years, and it went on until my 18's. I played as a pro during highschool, then I left for a different lifestyle. </p>
                </div>

                <div className="FootballStory">
                    <p className="BoxStoryPar">Having the right mindset, I think it can get you anywhere. Even into a fight. </p>
                </div>
            </div>



        </div >
    );
}


export default Sports;