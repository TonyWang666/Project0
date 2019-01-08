import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Nav4Tony from "./TonysData/Nav4Tony";
import PersonalInfo from "./TonysData/PersonalInfo";
import Grades from "./TonysData/Grades";
import Plan from "./TonysData/Plan";
import TonyHome from "./TonysData/TonyHome";


class Tony extends Component {
    render() {
      return (
    <div>
       <BrowserRouter>
      <div>
        <Nav4Tony/>
        <Switch> 
        <Route path = "/Tony/" component = {TonyHome} exact />
        <Route path = "/Tony/PersonalInfo" component = {PersonalInfo} />
        <Route path = "/Tony/Grades"  component = {Grades} />
        <Route path = "/Tony/Plan"  component = {Plan} />       
        <Route  component = {Error} />
       </Switch>
      </div>
      </BrowserRouter>
     </div>
      );
    }
}
/*****
const Tony = () => {
    return(
     <div>
         <Linkfunc/>
         <Link to="/Tony/" innerRef={TonyHome} />
         <Link to="/Tony/PersonalInfo" innerRef={PersonalInfo} />
         <Link to="/Tony/Grades" innerRef={Grades} />
         <Link to="/Tony/Plan" innerRef={Plan} />

     </div>
    )
};
*******/


export default Tony;