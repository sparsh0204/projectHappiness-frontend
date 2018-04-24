import React from 'react'
import {Input, Segment} from "semantic-ui-react";
import {setTextFilter} from "../../actions/filters";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class MobileSearch extends React.Component{
    handleSearch = (e) => {
        this.props.dispatch(setTextFilter(e.target.value))
        this.props.history.push('/');
    };
    render(){
        return(
            <Segment>
                <Input style={{width:'100%'}} icon='search' placeholder='Search by title or post number'
                       value={this.props.filters.text} onChange={this.handleSearch}/>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => ({filters: state.filters});

export default withRouter(connect(mapStateToProps)(MobileSearch))