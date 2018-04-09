import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFoundPage from "../components/NotFoundPage";
import MainDashboard from "../components/MainDashboard";
import StoryResponses from "../components/responses/ResponsesMain";
import ResponsiveContainer from "../components/responsive/ResponsiveContainer";
import QuotesSharePage from "../components/moderator/QuotesSharePage";
import ShareStory from "../components/stories/ShareStory";
import Test from "../components/Test";

const AppRouter = () => (
    <BrowserRouter>
        <ResponsiveContainer>
            <Switch>
                <Route path='/' exact={true} component={MainDashboard}/>
                <Route path='/sharestory' component={ShareStory}/>
                <Route path='/test' component={Test}/>
                <Route path='/stories/:id' component={StoryResponses}/>
                <Route path='/quotes' component={QuotesSharePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </ResponsiveContainer>
    </BrowserRouter>
);

export default AppRouter;