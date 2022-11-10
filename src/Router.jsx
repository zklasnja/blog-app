import React from "react";
import { Switch, Route } from 'react-router-dom';
import Posts from "./pages/Posts";

export default function Router(){
    return (
        <Switch>
          <Route path='/posts'>
            <Posts />
          </Route>
        </Switch>
    )
}