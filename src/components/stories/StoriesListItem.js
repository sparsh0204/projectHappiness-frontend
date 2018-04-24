import React from 'react';
import {Card} from "semantic-ui-react";

const StoriesListItem = ({story,title,id}) => (

        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta># Story Number {id}</Card.Meta>
            <Card.Description>{story}</Card.Description>
        </Card.Content>

);
export default StoriesListItem;