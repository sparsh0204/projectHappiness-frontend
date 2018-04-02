import React from 'react';
import {Button, Container, Menu} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";

class Navbar extends React.Component {

    render() {

        return (
            <Container>
                <Menu.Item  as={Link} to={'/'} active={this.props.location.pathname === '/'}>Home</Menu.Item>
                <Menu.Item  as={Link} to={'/quotes'} active={this.props.location.pathname === '/quotes'}>Moderator</Menu.Item>
                {/*<Menu.Item as='a'>Company</Menu.Item>*/}
                {/*<Menu.Item as='a'>Careers</Menu.Item>*/}
                <Menu.Item position='right'>
                    <Link to={'/sharestory'}>
                        <Button as='button' inverted primary style={{marginLeft: '0.5em', width: '100%'}}>
                            Share your story
                        </Button>
                    </Link>
                </Menu.Item>
            </Container>
        )
    }

}



export default withRouter(Navbar);