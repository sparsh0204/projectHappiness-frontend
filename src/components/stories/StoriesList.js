import React from 'react';
import {connect} from "react-redux";
import {Card} from 'semantic-ui-react';
import StoriesListItem from "./StoriesListItem";
import {Link} from "react-router-dom";
import {getVisibleStories} from "../../selectors/stories";
import styles from '../../styles/common'
import {startSetStory} from "../../actions/stories";
import {removeResponses} from "../../actions/responses";


class StoriesList extends React.Component{
    componentDidMount() {
        // setTimeout(() => this.props.startSetStory(),1000);
        this.props.startSetStory();
        // this.props.removeResponse();
        // console.log('run');
    }
    render(){
        // console.log(this.props.filters);
        return(
            <div  >
                <Card.Group stackable itemsPerRow={1} >
                    {this.props.stories.map(story => {
                        return(
                        <Card style={styles.card} as={Link} to={`/stories/${story.slug}`} link  key={story.id}>
                            <StoriesListItem style={{backgroundColor:'#6cbba8',}} {...story} />
                        </Card>
                    )})}
                </Card.Group>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    stories: getVisibleStories(state.stories,state.filters),
    filters: state.filters
    // stories: state.stories
});

const mapDispatchToProps = (dispatch) => ({
    startSetStory: () => dispatch(startSetStory()),
    removeResponse: () => dispatch(removeResponses())
});

export default connect(mapStateToProps,mapDispatchToProps)(StoriesList);