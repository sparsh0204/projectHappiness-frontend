import React from 'react';
import {connect} from "react-redux";

import {Container, Icon, Input, Segment} from "semantic-ui-react";
import {setTextFilter} from "../../actions/filters";
import {withRouter} from "react-router-dom";
// // import Header from "./Header";
//
// const menuStyle = {
//     border: 'none',
//     borderRadius: 0,
//     boxShadow: 'none',
//     marginBottom: '1em',
//     marginTop: '4em',
//     transition: 'box-shadow 0.5s ease, padding 0.5s ease',
// };

const fixedMenuStyle = {
    backgroundColor: '#fff',
    width: '100%',
    margin: '0 auto',
    // border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
};

const notTop = {
    width: '100%'
};

class Search extends React.Component {
    state = {
        menuFixed: false,
    };
    handleSearch = (e) => {
        this.props.dispatch(setTextFilter(e.target.value));
        this.props.history.push('/');
    };

    stickTopMenu = () => this.setState({menuFixed: true});

    unStickTopMenu = () => this.setState({menuFixed: false});

    render() {
        const {menuFixed} = this.state;
        return (




                    <Segment
                        style={menuFixed ? fixedMenuStyle : notTop}
                    >
                        <Container>
                            <Input
                                icon={<Icon name='search' inverted circular link/>}
                                style={{width: '100%'}}
                                placeholder='Search...'
                                type='text'
                                value={this.props.filters.text}
                                onChange={this.handleSearch}
                            />
                        </Container>
                    </Segment>



        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default withRouter(connect(mapStateToProps)(Search));