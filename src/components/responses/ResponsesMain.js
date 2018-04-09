import React from 'react';
import {connect} from "react-redux";
import { particularStory} from "../../selectors/stories";
import StoryDisplay from "./StoryDisplay";
import ResponseForm from "./ResponseForm";
import {Segment} from "semantic-ui-react";
import Responses from './ResponsesList'

class ResponsesMain extends React.Component {

    storyHandler = () => {
        this.props.history.push('/');
    };


    storyExist = () => ('Response of ' + this.props.storyId);

    render() {
        const storyExists = !(this.props.story.length === 0);
        // console.log(storyExists);
        const story = this.props.story;
        const body= (<Segment><StoryDisplay story={story} /><Responses storyId={this.props.storyId}/><ResponseForm storyId={this.props.storyId}/> </Segment>);
        return (

            <div>
                {storyExists ? body: this.storyHandler()}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    story: particularStory(state.stories,props.match.params.id),
    storyId: props.match.params.id,
});


export default connect(mapStateToProps)(ResponsesMain)