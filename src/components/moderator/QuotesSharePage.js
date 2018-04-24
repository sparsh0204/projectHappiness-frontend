import React from 'react';
import {connect} from "react-redux";
//import {Link} from "react-router-dom";
import {Card} from "semantic-ui-react";
import QuotesListItem from "./QuotesListItem";
import {startSetQuotes} from "../../actions/quotes";

class QuotesSharePage extends React.Component{
    componentDidMount() {
        this.props.startSetQuotes();
    }
    render(){
        return(
            <div  style={{ marginTop:'1em'}}>
                Moderator can share quotes here
                <Card.Group itemsPerRow={1}>
                    {this.props.quotes.map(quote => (<Card   link  key={quote.id}><QuotesListItem {...quote} /></Card>))}
                </Card.Group>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    quotes: state.quotes
});

const mapDispatchToProps = (dispatch) => ({
    startSetQuotes: () => dispatch(startSetQuotes())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuotesSharePage);