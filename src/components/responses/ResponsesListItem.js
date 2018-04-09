import React from 'react'
import {Comment} from "semantic-ui-react";

const ResponseListItem = ({response}) => (
    <div>

            <Comment style={{width:'100%'}}>

                <Comment.Content>
                    <Comment.Author as='a'>Matt</Comment.Author>
                    <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>{response}</Comment.Text>
                    <Comment.Actions>
                        <div>Today at 5:42PM</div>
                    </Comment.Actions>
                </Comment.Content>
                <hr/>
            </Comment>


    </div>
);

export default ResponseListItem