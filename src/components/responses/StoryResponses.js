import React from 'react';
import {connect} from "react-redux";
import storiesExist from "../../selectors/stories";

class StoryResponses extends React.Component {

    storyHandler = () => {
        this.props.history.push('/');
    };


    storyExist = () => ('Response of ' + this.props.storyId);

    render() {

        return (
            <div>
                {this.props.storyExists ? this.storyExist() : this.storyHandler()}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    storyId: props.match.params.id,
    storyExists: storiesExist(state.stories, props.match.params.id),

});


export default connect(mapStateToProps)(StoryResponses)