import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";

import Home from "./components/Home/Home.jsx";
import CreatePost from "./components/CreatePost/CreatePost.jsx";
import About from "./components/About/About";
import Help from "./components/Help/Help";
import Detail from "./components/Detail/detail"

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/createPost" component={CreatePost} />
      <Route path="/about" component={About} />
      <Route path="/help" component={Help} />
      <Route path="/details/:id" render={({match})=>{return <Detail id={match.params.id}></Detail>}}/>
      <Route path="/logi" />
    </>
  );
}

export default App;
