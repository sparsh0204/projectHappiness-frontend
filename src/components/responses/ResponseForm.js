import React from 'react';
import {Button, Checkbox, Form, Message, Segment, TextArea} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {addResponse, startPostResponse} from "../../actions/responses";
import {connect} from "react-redux";

class ResponseForm extends React.Component {
    state = {
        storyId: this.props.storyId,
        response: '',
        responseError: false,
        conditionError: false,
        conditionsChecked: false,
        error: false,
        errorContent: {
            content: 'Please read the terms and conditions first.'
        },
    };

    handleChange = (e, {name}) => {
        const error = [name] + 'Error';
        this.setState({[name]: e.target.value, [error]: false});
        // console.log(this.state.response);
    };
    handleCheckBox = (e, {name}) => {
        const error = [name] + 'Error';
        this.setState({conditionsChecked: !this.state.conditionsChecked, [error]: false});
    };
    handleSubmit = () => {
        this.setState({error: false, responseError: false, conditionError: false});
        const errorResponse = this.state.response.length === 0;
        const errorCondition = !this.state.conditionsChecked;


        if (this.state.response.split(' ').length < 5) {
            this.setState({
                error: true,
                errorContent: {content: 'Your Comment should me more then 50 words'},
                responseError: true
            });
        }

        if (errorResponse) {
            this.setState({
                error: true,
                errorContent: {content: 'Please fill all the required fields'},
                responseError: true
            });

        }
        if (errorCondition) {
            this.setState({
                error: true,
                errorContent: {content: 'Please fill all the required fields'},
                conditionError: true
            });

        }

        if (!errorResponse && !errorCondition  && this.state.response.split(' ').length >= 5) {
            console.log({response:this.state.response,isModerated:true,storyId:this.state.storyId,published_date:'2018-04-13'});
            this.props.startPostResponse({response:this.state.response,isModerated:true,storyId:this.state.storyId,published_date:'2018-04-13'});
            this.setState({response: '',error: false, responseError: false, conditionError: false,conditionsChecked: false });

            // this.props.history.push('/');
        }

        // console.log(this.state);
    };
    handleSubmit2 = () => {
        this.setState({response:''});
    };

    render() {
        // console.log(this.props);
        return (
            <div>
                <Segment style={{marginTop: '1em'}}>
                    <Form onSubmit={this.handleSubmit} error={this.state.error}>

                        <Form.Field style={{}} control={TextArea} name='response' value={this.state.response}
                                    label='Your Comment'
                                    error={this.state.responseError}
                                    onChange={this.handleChange} placeholder='Tell us more about you...'/>
                        {/*<Form.Field control={Checkbox} checked={this.state.conditionsChecked}*/}
                        {/*onChange={this.handleCheckBox} label={termCondition}/>*/}
                        <Form.Field error={this.state.conditionError}>
                            <Checkbox name='condition' checked={this.state.conditionsChecked}
                                      onChange={this.handleCheckBox} style={{display: 'inline-block'}}/>
                            <label style={{display: 'inline-block', marginLeft: '10px'}}>I agree with the <Link
                                to={'/'}>Terms & Condition</Link></label>
                        </Form.Field>
                        <Message
                            error
                            header={this.state.errorContent.header}
                            content={this.state.errorContent.content}
                        />
                        <Form.Field control={Button}>Submit</Form.Field>
                    </Form>
                </Segment>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addResponse: (story) => dispatch(addResponse(story)),
    startPostResponse: (response) => dispatch(startPostResponse(response))
});

export default connect(null, mapDispatchToProps)(ResponseForm);