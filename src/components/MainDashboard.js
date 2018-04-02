import React from 'react';

import {connect} from "react-redux";
import StoriesList from "./stories/StoriesList";



class MainDashboard extends React.Component {

    render() {

        return (
            <div>
                this is the main dashboard
                <br/>
                <StoriesList/>
            </div>
        )
    }
}




export default connect(null)(MainDashboard)