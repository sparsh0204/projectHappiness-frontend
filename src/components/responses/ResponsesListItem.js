import React from 'react'
import {Card, Feed} from "semantic-ui-react";

// const ResponseListItem = ({response}) => (
//     <div>
//
//         <Comment style={{width: '100%'}}>
//
//             <Comment.Content>
//
//                 <Comment.Metadata>
//                     <div>Today at 5:42PM</div>
//                 </Comment.Metadata>
//                 <Comment.Text>{response}</Comment.Text>
//                 {/*<Comment.Actions>*/}
//                 {/*<div>Today at 5:42PM</div>*/}
//                 {/*</Comment.Actions>*/}
//             </Comment.Content>
//             <hr/>
//         </Comment>
//
//
//     </div>
// );
const ResponseListItem1 = ({response}) => (
    <div>
        <Feed.Event style={{width: '100%'}} as={Card} link={true}>
            <Feed.Content>
            </Feed.Content>
            <Feed.Content>


                <Feed.Summary>
                    {response}
                </Feed.Summary>
                <small><i><Feed.Date content='1 day ago'/></i></small>
            </Feed.Content>
        </Feed.Event>
        <br/>
    </div>
);

export default ResponseListItem1