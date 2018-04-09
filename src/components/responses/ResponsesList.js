import React from 'react';
import {connect} from "react-redux";
import {Comment, Segment} from "semantic-ui-react";
import ResponsesListItem from './ResponsesListItem'
import {storyResponsesOnly} from "../../selectors/responses";

class ResponsesList extends React.Component {
    render() {
        return (
            <div>
                <Segment style={{marginTop: '1em'}}>
                    <Comment.Group style={{width:'100%'}}>
                        {this.props.responses.map(response => (<ResponsesListItem  key={response.id}{...response}/>))}
                    </Comment.Group>
                </Segment>

            </div>
        )
    }
}

const mapStateToProps = (state,props)=> ({
    responses: storyResponsesOnly(state.responses,props.storyId)
});

export default connect(mapStateToProps)(ResponsesList);