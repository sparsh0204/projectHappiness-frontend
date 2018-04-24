import React from 'react';
import {Button, Checkbox, Form, Icon, Input, Message, Popup, Segment, TextArea} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {addStory, startPostStory} from "../../actions/stories";
import {connect} from "react-redux";

class ShareStory extends React.Component {
    state = {
        story: '',
        title: '',
        titleError: false,
        storyError: false,
        conditionsChecked: false,
        conditionError: false,
        error: false,
        responsesRequired: true,
        errorContent: {

            content: 'Please read the terms and conditions first.'
        },
    };

    handleChange = (e, {name}) => {
        const error = [name]+'Error';
        this.setState({[name]: e.target.value ,[error]:false})
    };
    handleCheckBox = (e,{name}) => {
        const error = [name]+'Error';
        this.setState({conditionsChecked: !this.state.conditionsChecked,[error]:false})
    };
    handleResponsesRequired = (e) => (this.setState({responsesRequired: !this.state.responsesRequired}));
    handleSubmit = () => {
        this.setState({titleError:false,error:false,storyError:false,conditionError:false});
        const errorTitle = this.state.title.length === 0;
        const errorStory = this.state.story.length === 0;
        const errorCondition = !this.state.conditionsChecked;

        if(this.state.story.split(' ').length <5){
            this.setState({error: true, errorContent: {content:'Your Story should me more then 50 words'},storyError:true});
        }
        if (errorTitle) {
            this.setState({error: true, errorContent: {content:'Please fill all the required fields'},titleError:true});

        }
        if(errorStory){
            this.setState({error: true, errorContent: {content:'Please fill all the required fields'},storyError:true});

        }
        if(errorCondition){
            this.setState({error: true, errorContent: {content:'Please fill all the required fields'},conditionError:true});

        }

        if (!errorStory && !errorTitle && !errorCondition && !this.state.error && this.state.story.split(' ').length > 5) {
            // console.log(this.state);
            this.props.startPostStory({title: this.state.title, story: this.state.story, isModerated: false, responsesRequired:this.state.responsesRequired, published_date:'2018-04-13'});
            // this.setState({titlleError:false,error:false,storyError:false,conditionError:false});
            this.props.history.push('/');
        }



    };

    handleReroute =  () => {
        this.props.history.push('/');
    };

    render() {
        // console.log(this.props.filters);

        const conditionChecked = this.props.filters.condition;
        const passwordEntered = this.props.filters.password;
        if(!conditionChecked || !passwordEntered){
            this.handleReroute();
        }
        return (
            <div>
                <Segment>
                    <Form onSubmit={this.handleSubmit} error={this.state.error }>
                        <Form.Field control={Input} name='title' value={this.state.title} label='Title'
                                    onChange={this.handleChange} placeholder='Provide a title..' error={this.state.titleError} />
                        <Form.Field style={{minHeight: '15em'}} control={TextArea} name='story' value={this.state.story}
                                    label='You can share your feelings here' error={this.state.storyError}
                                    onChange={this.handleChange} placeholder='.....'/>
                        {/*<Form.Field control={Checkbox} checked={this.state.conditionsChecked}*/}
                        {/*onChange={this.handleCheckBox} label={termCondition}/>*/}
                        <Form.Field >
                            <Checkbox name='responsesRequired' checked={this.state.responsesRequired} onChange={this.handleResponsesRequired}
                                      style={{display: 'inline-block'}}
                            />
                            <label style={{display: 'inline-block', marginLeft: '10px'}}>
                                Enable Comments.</label>
                            <Popup

                                trigger={<Icon style={{display: 'inline-block'}} name='question circle outline'/>}
                                content='If not selected nobody will be able to comment on your post.'
                            />

                        </Form.Field>
                        <Form.Field error={this.state.conditionError}>
                            <Checkbox name='condition' checked={this.state.conditionsChecked} onChange={this.handleCheckBox}
                                      style={{display: 'inline-block'}} error={this.state.conditionError? 'true':'false'}
                            />
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

const mapStateToProps = (state) => ({filters: state.filters});


const mapDispatchToProps = (dispatch) => ({
    addStory: (story) => dispatch(addStory(story)),
    startPostStory: (story) => dispatch(startPostStory(story))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShareStory);