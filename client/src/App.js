import "./App.css";
import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home.jsx";
import CreatePost from "./components/CreatePost/CreatePost.jsx";
import About from "./components/About/About";
import Help from "./components/Help/Help";
import Detail from "./components/Detail/Detail";
import NewUser from "./components/Check_in/Check_in";
import Error404 from "./components/Error404/Error404.jsx";
import { getCities, getServices, getTypesOfProperties } from "./redux/actions/index.js";
import UpdatePost from "./components/UpdatePost/UpdatePost";
import PerfilPropietario from "./components/Perfiles/PerfilPropietario";
// import PerfilInquilino from "./components/Perfiles/PerfilInquilino";
import PaymentOk from "./components/Payment/PaymentOk";
import PaymentFail from "./components/Payment/PaymentFail.jsx";
import Select from "./components/SelectTypeUser/Select";
import { useAuth0 } from "@auth0/auth0-react";
import EditPerfil from "./components/Perfiles/EditPerfil";

function App() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const dispatch = useDispatch();

  const infoUser = useSelector((state) => state.infoUser);

  const user = window.localStorage.getItem("User");
  const user2 = JSON.parse(user);

  useEffect(() => {
    dispatch(getCities());
    dispatch(getServices());
    dispatch(getTypesOfProperties());
  });

  console.log(infoUser, "desde rutas infoUser");
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/createPost"
          render={() => {
            return infoUser ? <CreatePost /> : <Redirect to="*" />;
          }}
        />
        <Route exact path="/about" component={About} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/details/:id" component={Detail} />
        <Route exact path="/updatePublicaction/:id" component={UpdatePost} />
        <Route exact path="/updatePerfil/:id" component={EditPerfil} />
        <Route
          exact
          path="/perfilPropietario"
          render={() => {
            return infoUser ? <PerfilPropietario /> : <Redirect to="*" />;
          }}
        />

        {/* <Route exact path="/perfilInquilino" render={() => {
          return user2 && user2[0].typeOfUserId === 2? <PerfilInquilino/> :
          <Redirect to="*"/>
        }} /> */}

        <Route
          exact
          path="/PaymentOk"
          render={() => {
            return infoUser ? <PaymentOk /> : <Redirect to="*" />;
          }}
        />
        <Route exact path="/select" component={Select} />
        <Route path="*" component={Error404} />
      </Switch>
    </>
  );
}

export default App;
