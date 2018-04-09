import React from 'react';
import {Card} from "semantic-ui-react";

class StoryDisplay extends React.Component {
    render() {
        // console.log(this.props.story);
        return (
            <div>

                <Card style={{width:'100%'}}>
                    <Card.Content>
                        <Card.Meta>
                            {/*<span className='date'>*/}
                                {/*Joined in 2015*/}
                            {/*</span>*/}
                        </Card.Meta>
                        <Card.Description>
                            {this.props.story[0].story}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            Joined in 2015
                        </a>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default StoryDisplay