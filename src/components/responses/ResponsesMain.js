import React from 'react';
import {connect} from "react-redux";
import {particularStory} from "../../selectors/stories";
import StoryDisplay from "./StoryDisplay";
import ResponseForm from "./ResponseForm";
import ResponsesList from './ResponsesList'

class ResponsesMain extends React.Component {

    storyHandler = () => {
        this.props.history.push('/');
    };


    // storyExist = () => ('Response of ' + this.props.storyId);

    render() {
        const storyExists = !(this.props.story.length === 0);
        // console.log(storyExists);
        let body = null;
        if (storyExists) {
            const story = this.props.story;
            let comments = null;

            if (this.props.story[0].responsesRequired) {
                comments = (
                    <div>
                        <ResponsesList storyId={this.props.story[0].id}/>
                        <ResponseForm storyId={this.props.story[0].id}/>
                    </div>
                )
            }
            body = (
                <div>
                    <StoryDisplay story={story}/>
                    {comments}
                </div>
            );
        }
        return (

            <div>
                {storyExists ? body : this.storyHandler()}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    story: particularStory(state.stories, props.match.params.slug),
    storyId: props.match.params.slug,
});


export default connect(mapStateToProps)(ResponsesMain)