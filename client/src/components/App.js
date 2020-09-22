import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import CommunityPage from "./views/CommunityPage/CommunityPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import Postlist from "./views/CommunityPage/NoticeBoard/PostList/Postlist"
import DetailBoardPage from "./views/CommunityPage/DetailBoardPage/DetailBoardPage"
import Logo from "./views/Logo/Logo"
import FindPassword from "./views/LoginPage/FindPassword/FindPassword"

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar /> 
      
      
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div style={{ paddingTop: '140px'}}>
          <Logo/>
        </div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/community" component={Auth(CommunityPage, null)} />
          <Route exact path="/write" component={Auth(Postlist, true)} />
          <Route exact path="/community/:postId" component={Auth(DetailBoardPage, true)} />
          <Route exact path="/findpassword" component={Auth(FindPassword, false)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
