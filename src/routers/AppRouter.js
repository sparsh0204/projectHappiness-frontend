import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFoundPage from "../components/NotFoundPage";
import MainDashboard from "../components/MainDashboard";
import ResponseMain from "../components/responses/ResponsesMain";
import ResponsiveContainer from "../components/responsive/ResponsiveContainer";
import QuotesSharePage from "../components/moderator/QuotesSharePage";
import ShareStory from "../components/stories/ShareStory";
import Test from "../components/Test";
import Login from "../components/stories/Login";
import Terms from "../components/stories/Terms";
import About from "../components/About";
//import QuoteDisplay from "../components/moderator/QuoteDisplay";

const AppRouter = () => (
    <BrowserRouter>
        <ResponsiveContainer >

            <Switch>
                <Route path='/' exact={true} component={MainDashboard}/>
                <Route path='/sharestory' component={ShareStory}/>
                <Route path='/test' component={Test}/>
                <Route path='/login' component={Login}/>
                <Route path='/about' component={About}/>
                <Route path='/terms' component={Terms}/>
                <Route path='/stories/:slug' component={ResponseMain}/>
                {/*<Route path='/quotes/:id' component={QuoteDisplay}/>*/}
                <Route path='/quotes' component={QuotesSharePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </ResponsiveContainer>
    </BrowserRouter>
);

export default AppRouter;