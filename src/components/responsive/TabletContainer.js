import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Container, Menu, Responsive, Visibility} from 'semantic-ui-react'
import Navbar from './Navbar';
import Footer from "./Footer";


class TabletContainer extends Component {
    state = {};


    hideFixedMenu = () => this.setState({fixed: false});
    showFixedMenu = () => this.setState({fixed: true});

    render() {
        const {children} = this.props;
        const {fixed} = this.state;

        return (
            <Responsive {...Responsive.onlyTablet} >
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <Menu
                        fixed={fixed && 'top'}
                        inverted
                        pointing={!fixed}
                        size='large'
                    >
                        <Navbar/>
                    </Menu>
                </Visibility>
                <Container style={{marginTop: '1.5em', marginLeft: '1.5em', marginRight: '15em', marginBottom: '10em'}}>
                    {children}
                </Container>
                <Footer/>
            </Responsive>
        )
    }
}

TabletContainer.propTypes = {
    children: PropTypes.node,
};

export default TabletContainer;
