import React from 'react';
import {Button, Container, Icon, Input, Menu} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setTextFilter} from "../../actions/filters";

class Navbar extends React.Component {

    handleSearch = (e) => {
        this.props.dispatch(setTextFilter(e.target.value));
        // console.log(e.key);
        this.props.history.push('/');
    }
    render() {
        // console.log(this.props.filters.text);
        return (
            <Container >
                <Menu.Item as={Link} to={'/'} active={this.props.location.pathname === '/'}>Home</Menu.Item>
                <Menu.Item as={Link} to={'/quotes'}
                           active={this.props.location.pathname === '/quotes'}>Moderator</Menu.Item>
                <Menu.Item as={Link} to={'/about'}
                           active={this.props.location.pathname === '/about'}>About</Menu.Item>
                {/*<Menu.Item as='a'>Company</Menu.Item>*/}
                {/*<Menu.Item as='a'>Careers</Menu.Item>*/}
                <Menu.Item position='right'>
                    <Menu.Item>
                        <Input icon placeholder='Search by title or post number'>
                            <input value={this.props.filters.text} onChange={this.handleSearch} />
                            <Icon name='search' inverted circular link />
                        </Input>
                        {/*<Input icon='search' placeholder='Search by title or post number'*/}
                               {/*value={this.props.filters.text} onChange={this.handleSearch}/>*/}
                    </Menu.Item>
                    <Link to={'/login'}>
                        <Button as='button' inverted primary style={{marginLeft: '0.5em', width: '100%'}}>
                            Share your story
                        </Button>
                    </Link>
                </Menu.Item>
            </Container>
        )
    }

}

const mapStateToProps = (state) => ({filters: state.filters});

export default withRouter(connect(mapStateToProps)(Navbar));