import React from "react";
import PropTypes from 'prop-types'
import DesktopContainer from './DesktopContainer';
import MobileContainer from "./MobileContainer";
import TabletContainer from "./TabletContainer";
const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
        <TabletContainer>{children}</TabletContainer>
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};

export default ResponsiveContainer;