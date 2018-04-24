import React from 'react';
import {Button, Form, Input, Message, Segment} from "semantic-ui-react";
import {passwordEntered} from "../../actions/filters";
import {connect} from "react-redux";

class Login extends React.Component {
    state = {
        password: '',
        passwordError: false,
        correctPassword: 'lnmiit',
        error: false,
        errorContent: {
            content: 'Entered password is wrong.'
        }
    };

    handleChange = (e, {name}) => {
        const error = [name] + 'Error';
        this.setState({[name]: e.target.value, [error]: false})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({error: false, passwordError: false});
        if (this.state.password === this.state.correctPassword) {
            this.props.passwordEntered();
            this.props.history.push('/terms');
        } else {
            this.setState({error: true, passwordError: true});
        }
        console.log(e.target['password']);
        const data = new FormData(e.target);
        console.log(data);
    };


    render() {
        // console.log(this.props.filters);

        return (
            <div>
                <Segment>
                    {/*<Container text content>*/}
                    <Form onSubmit={this.handleSubmit} error={this.state.error}>
                        <Form.Field control={Input} name='password' value={this.state.title} label='Password'
                                    onChange={this.handleChange} placeholder='Password' type='password'
                                    error={this.state.passwordError} width={5}
                                    style={{marginLeft:'auto', marginRight:'auto', textAlign:'center'}}
                        />
                        <Message
                            error
                            header={this.state.errorContent.header}
                            content={this.state.errorContent.content}
                        />
                        <Form.Field control={Button}>Submit</Form.Field>
                    </Form>
                    {/*</Container>Container*/}
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({filters: state.filters});


const mapDispatchToProps = (dispatch) => ({
    passwordEntered: () => dispatch(passwordEntered())
});


export default connect(mapStateToProps,mapDispatchToProps)(Login);