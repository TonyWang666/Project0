import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Nav from     "./Components/Nav";
import Home from    "./Components/Home";
import Tony from    "./Components/Tony";
import Jack from    "./Components/Jack";
import Leo from     "./Components/Leo";
import Error from   "./Components/Error";



import homebackground  from './download.png';
const homeImage = {
    backgroundSize: '100% 100%', //记得这里100%
    background: `url(${ homebackground })`,
    //或者下面这种也行
    //backgroundImage: 'url(' + homebackground + ')'
}



//switch is allow only one website show at one time
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div style={homeImage}>
        <Nav/>
        <Switch> 
        <Route path = "/" component = {Home} exact />
        <Route path = "/Tony" component = {Tony} />
        <Route path = "/Leo"  component = {Leo} />
        <Route path = "/Jack"  component = {Jack} />
        <Route  component = {Error} />
       </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
