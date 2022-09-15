import React from "react";
import { Route, Router } from "react-router-dom";
import BlogDetails from "./Blogdetails";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./Notfound";

const Allroutes = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Allroutes;
