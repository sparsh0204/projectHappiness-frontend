import React from 'react';
import {Card} from "semantic-ui-react";
import moment from 'moment';
import {FacebookShareButton, FacebookIcon} from 'react-share';
import {withRouter} from "react-router-dom";

class StoryDisplay extends React.Component {
    render() {
        // console.log(this.props);
        const story = this.props.story[0];
        const date = moment(story.published_date, "YYYY-MM-DD").format("MM-DD-YYYY");
        // const shareurl = `http://localhost:3000/stories/${story.slug}`;
        // console.log(shareurl);
        return (
            <div>

                <Card style={{width: '100%'}}>

                    <Card.Content style={{backgroundColor: '#f9f9fa'}}>
                        <Card.Header style={{display: 'inline-block'}}>{story.title}</Card.Header>
                        <FacebookShareButton style={{display: 'inline-block'}} url={'https://www.google.co.in/'}>
                            <FacebookIcon size={32} round={true}/>
                        </FacebookShareButton>
                    </Card.Content>
                    <Card.Content>
                        <Card.Meta>
                            {/*<span className='date'>*/}
                            {/*Joined in 2015*/}
                            {/*</span>*/}
                        </Card.Meta>
                        <Card.Description>
                            {story.story}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            Published on {date}
                        </a>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default withRouter(StoryDisplay);