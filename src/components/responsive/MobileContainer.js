import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Button, Container, Icon, Menu, Responsive, Sidebar,} from 'semantic-ui-react'
import {Link, withRouter} from "react-router-dom";
import Search from "./Search";
import Footer from "./Footer";

class MobileContainer extends Component {
    state = {};

    handlePusherClick = () => {
        const {sidebarOpened} = this.state;

        if (sidebarOpened) this.setState({sidebarOpened: false})
    };

    handleToggle = () => this.setState({sidebarOpened: !this.state.sidebarOpened});


    render() {
        const {children} = this.props;
        const {sidebarOpened} = this.state;

        return (
            <Responsive {...Responsive.onlyMobile} minWidth={250}>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='overlay' inverted vertical visible={sidebarOpened}>
                        <Menu.Item onClick={this.handleToggle} as={Link} to={'/'}
                                   active={this.props.location.pathname === '/'}>Home</Menu.Item>
                        <Menu.Item onClick={this.handleToggle} as={Link} to={'/quotes'}
                                   active={this.props.location.pathname === '/quotes'}>Moderator</Menu.Item>
                        {/*<Menu.Item as='a'>Company</Menu.Item>*/}
                        {/*<Menu.Item as='a'>Careers</Menu.Item>*/}
                        {/*<Menu.Item as='a'>Log in</Menu.Item>*/}
                        {/*<Menu.Item as='a'>Sign Up</Menu.Item>*/}
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick}
                                    style={{minHeight: '100vh'}}>
                        <Container>
                            <Menu inverted fixed={'top'} pointing size='large'>
                                <Menu.Item style={{width: '10%'}} onClick={this.handleToggle}>
                                    <Icon name='sidebar'/>
                                </Menu.Item>
                                <Menu.Item style={{width: '90%'}}>

                                    <Button as={Link} to={'/sharestory'} inverted primary
                                            style={{marginLeft: '0.5em', width: '100%'}}>
                                        Share your story
                                    </Button>

                                </Menu.Item>
                            </Menu>
                        </Container>
                        <Container style={{marginTop: '4em'}}>
                            <Search/>
                            {/*<MobileSearch/>*/}
                        </Container>
                        <Container style={{marginBottom:'5em', marginTop: '2em', marginLeft:'0em'}}>
                            {children}
                        </Container>
                        <Footer/>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
};

export default withRouter(MobileContainer);