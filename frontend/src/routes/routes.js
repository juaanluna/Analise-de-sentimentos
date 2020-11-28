import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Home } from "../pages/home";
import { SearchData } from "../pages/search";
import { SearchList, Details } from "../pages/details";
import { Users, UsersForm } from "../pages/users";
import Auth from "../pages/auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Auth" component={Auth} />
        <Route exact path="/home" component={Home} />

        <Route exact path="/users" component={Users} />
        <Route exact path="/users/form" component={UsersForm} />
        <Route exact path="/users/form/:id" component={UsersForm} />

        <Route exact path="/searchData" component={SearchData} />
        <Route exact path="/searchList" component={SearchList} />
        <Route exact path="/searchDetails/:id" component={Details} />

        <Redirect from="*" to="/Auth" />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
