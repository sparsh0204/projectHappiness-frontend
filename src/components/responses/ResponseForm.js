import React from 'react';
import {Button, Checkbox, Form, Message, Segment, TextArea} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {addResponse} from "../../actions/responses";
import {connect} from "react-redux";

class ResponseForm extends React.Component{
    state = {
        storyId:this.props.storyId,
        response: '',
        conditionsChecked: false,
        error: false,
        errorContent:{
            conditionsChecked:{
                header: 'Action Forbidden',
                content: 'Please read the terms and conditions first.'
            },
        },
    };

    handleChange = (e, {name, value}) => this.setState({[name]: e.target.value});
    handleCheckBox = (e) => this.setState({conditionsChecked: !this.state.conditionsChecked});
    handleSubmit = () => {
        if (this.state.conditionsChecked) {
            console.log({storyId:this.state.storyId,response:this.state.response,isModerated:true});
            this.props.addResponse({storyId:this.state.storyId,response:this.state.response,isModerated:true});
            this.setState({error: false});
            return
        }
        this.setState({error: true})


    };

    render(){
        // console.log(this.props);
        return(
            <div>
                <Segment style={{marginTop:'1em'}}>
                    <Form onSubmit={this.handleSubmit} error={this.state.error} >

                        <Form.Field style={{}} control={TextArea} name='response' value={this.state.story} label='Response'
                                    onChange={this.handleChange} placeholder='Tell us more about you...'/>
                        {/*<Form.Field control={Checkbox} checked={this.state.conditionsChecked}*/}
                        {/*onChange={this.handleCheckBox} label={termCondition}/>*/}
                        <Form.Field>
                            <Checkbox checked={this.state.conditionsChecked} onChange={this.handleCheckBox} style={{display: 'inline-block'}} />
                            <label style={{display: 'inline-block', marginLeft:'10px'}}>I agree with the <Link to={'/'}>Terms & Condition</Link></label>
                        </Form.Field>
                        <Message
                            error
                            header={this.state.errorContent.conditionsChecked.header}
                            content={this.state.errorContent.conditionsChecked.content}
                        />
                        <Form.Field control={Button}>Submit</Form.Field>
                    </Form>
                </Segment>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addResponse : (story) => dispatch(addResponse(story)),
});

export default connect(null,mapDispatchToProps)(ResponseForm);