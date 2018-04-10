import React from 'react';
import {connect} from "react-redux";
import {particularQuote} from "../../selectors/quotes";

class QuoteDisplay extends React.Component {
    storyHandler = () => {
        this.props.history.push('/quotes');
    };

    render() {
        const quoteExists = !(this.props.quote.length === 0);
        // console.log(quoteExists);
        let body = null;
        if (quoteExists) {
            body = (
                "Quote no" + this.props.quote[0].id
            );
        }
        return (
            <div>
                {quoteExists ? body : this.storyHandler()}

            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    quote: particularQuote(state.quotes, props.match.params.id),
});


export default connect(mapStateToProps)(QuoteDisplay)