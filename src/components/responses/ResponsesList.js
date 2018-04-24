import React from 'react';
import {connect} from "react-redux";
import {Card, Feed} from "semantic-ui-react";
import ResponsesListItem from './ResponsesListItem'
import {storyResponsesOnly} from "../../selectors/responses";
import {startSetResponse} from "../../actions/responses";

class ResponsesList extends React.Component {
    componentDidMount(){
        // setTimeout(() => this.props.startSetResponse(this.props.storyId),2000);
        this.props.startSetResponse(this.props.storyId)
    }
    render() {


        return (
            <Card style={{width: '100%', marginTop: '1em'}}>
                <Card.Content>
                    <Card.Header>
                        Comments
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed size='large'>
                        {this.props.responses.map(response => (<ResponsesListItem key={response.id}{...response}/>))}

                    </Feed>
                </Card.Content>
            </Card>

        )
    }
}

const mapStateToProps = (state, props) => ({
    responses: storyResponsesOnly(state.responses, props.storyId)
});

const mapDispatchToProps = (dispatch) => ({
    startSetResponse : (id) => dispatch(startSetResponse(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(ResponsesList);