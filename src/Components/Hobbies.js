import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";


import IT from './IT';
import Movies from "./Movies";
import Sports from "./Sports";


function Hobbies() {

    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();

    return (
        <div>

            <div className="HobbieNav">

                <div className="SportsNav">
                    <Link className="HobbieLinkStyle" to={`${url}/Sports`}>Sports</Link>
                </div>
                <div className="ItNav">
                    <Link className="HobbieLinkStyle" to={`${url}/IT`}>IT</Link>
                </div>
                <div className="MoviesNav">
                    <Link className="HobbieLinkStyle" to={`${url}/Movies`}>Movies</Link>
                </div>

            </div>


            <div>
                <Switch>
                    <Route exact path={path}>

                        <div className="HobbieMidBorder">
                            <h3 className="HobbieSelect">If you like to see more information about a specific hobby, please select it.</h3>
                        </div>
                        <div className="HobbieBackground">
                            <img className="HobbieBackImgStyle" src={require('./../Assets/full.jpg')} alt="location.jpg" />
                        </div>
                    </Route>
                    <Route path="/Hobbies/Sports">
                        <Sports />
                    </Route>
                    <Route path="/Hobbies/IT">
                        <IT />
                    </Route>
                    <Route path="/Hobbies/Movies">
                        <Movies />
                    </Route>
                </Switch>
            </div>

        </div>
    );
}

export default Hobbies;