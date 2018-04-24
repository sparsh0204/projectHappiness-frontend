import React from 'react';
import {Card} from 'semantic-ui-react';

const QuotesListItem = ({title,body})=> (

        <Card.Content>
            <Card.Header>{title}</Card.Header>

            <Card.Description>{body}</Card.Description>
        </Card.Content>


);

export default QuotesListItem;