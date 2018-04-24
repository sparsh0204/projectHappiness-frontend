import React from 'react';

import {connect} from "react-redux";
import StoriesList from "./stories/StoriesList";



class MainDashboard extends React.Component {

    render() {

        return (
            <div>
                <StoriesList/>
            </div>
        )
    }
}




export default connect(null)(MainDashboard)