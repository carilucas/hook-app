import React from 'react';
import {
BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";
import { NavBar } from "./NavBar";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { Screen404 } from './Screen404';

export const AppRouter = () => {
   return (
      <Router>
         <div>
            <NavBar />
            <main className="container">
               <Switch>
                  <Route exact path="/" component={ HomeScreen }/>
                  <Route exact path="/about" component= { AboutScreen }/>
                  <Route exact path="/login" component={ LoginScreen }/>
                  <Route path="/not-found" component={ Screen404 }/>
                  <Redirect to="./not-found" />
               </Switch>
            </main>
         </div>
      </Router>
   )
}
