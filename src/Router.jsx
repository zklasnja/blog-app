import React from "react";
import { Switch, Route } from 'react-router-dom';
import AddPost from "./pages/AddPost";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";
import AddComment from "./components/AddComment";

export default function Router(){
    return (
        <Switch>
          <Route exact path='/posts'>
            <Posts />
          </Route>
          <Route exact path='/post/:id'>
            <SinglePost />
          </Route>
          <Route path='/add'>
            <AddPost />
          </Route>
          <Route path='/edit/:id'>
            <AddPost />
          </Route>
          <Route exact path='/post/:id/comments/:commentId'>
            <AddComment />
          </Route>
        </Switch>
    )
}