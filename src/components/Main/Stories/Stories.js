import React, {Component} from 'react';
import Story from "./Story/Story";
import data from '../../../assets/stories-data.json';

class Stories extends Component {
    constructor(props) {
        super(props);
        this.stories = Array.from(data);
    }

    render() {
        return (
            <div>
                <div className='row mb-5'>
                    {this.stories.map(story => (
                        <Story key={story.id}
                               name={story.firstName + story.lastName}
                               degree={story.degree}
                               biography={story.biography}/>
                    ))}
                </div>
            </div>
        )
    }
};

export default Stories;