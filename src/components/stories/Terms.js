import React from 'react';
import {Button, Checkbox, Form, Message, Segment} from "semantic-ui-react";
import {conditionsAccepted} from "../../actions/filters";
import {connect} from "react-redux";

class Terms extends React.Component {
    state = {
        condition1Checked: false,
        condition1Error: false,
        errorContent: {
            content: 'Please read the terms and conditions first.'
        },
    };

    handleCheckBox = (e, {name}) => {
        const error = [name] + 'Error';
        const checked = [name] + 'Checked';
        this.setState({[checked]: !this.state.checked, [error]: false})
    };

    handleSubmit = () => {
        this.setState({condition1Error:false});
        const errorCondition1 = !this.state.condition1Checked;
        if(errorCondition1){
            this.setState({condition1Error:true});
        }
        if (!errorCondition1) {
            this.props.conditionsAccepted();
            this.props.history.push('/sharestory');
            this.setState({condition1Error:false});
        }
    };
    handleReroute =  () => {
        this.props.history.push('/');
    };

    render() {
        // console.log(this.props.filters);

        const passwordEntered = this.props.filters.password;
        if(!passwordEntered){
            this.handleReroute();
        }
        return (
            <div>
                <Segment>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field error={this.state.condition1Error}>
                            <Checkbox name='condition1' checked={this.state.condition1Checked}
                                      onChange={this.handleCheckBox}
                                      style={{display: 'inline-block'}}
                                      error={this.state.condition1Error ? 'true' : 'false'}
                            />
                            <label style={{display: 'inline-block', marginLeft: '10px'}}>Don't use abusive
                                words.</label>
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

const mapStateToProps = (state) => ({filters: state.filters});


const mapDispatchToProps = (dispatch) => ({
    conditionsAccepted: () => dispatch(conditionsAccepted())
});

export default connect(mapStateToProps,mapDispatchToProps)(Terms)