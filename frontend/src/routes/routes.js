import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Home } from "../pages/home";
import { SearchData } from "../pages/searchData";
import { SearchList } from "../pages/searchList";
import { Users, UsersForm } from "../pages/users";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/usersForm" component={UsersForm} />
        <Route path="/searchData" component={SearchData} />
        <Route path="/searchList" component={SearchList} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
