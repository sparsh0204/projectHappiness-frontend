import React from 'react';
import {connect} from "react-redux";
import {Card} from 'semantic-ui-react';
import StoriesListItem from "./StoriesListItem";
import {Link} from "react-router-dom";


class StoriesList extends React.Component{
    render(){
        return(
            <div  style={{ marginTop:'1em'}}>
                <Card.Group itemsPerRow={1}>
                    {this.props.stories.map(story => (<Card style={{height:'5em', textAlign:'center'}} as={Link} to={`/stories/${story.id}`} link  key={story.id}><StoriesListItem {...story} /></Card>))}
                </Card.Group>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    stories: state.stories
});

export default connect(mapStateToProps)(StoriesList);