import React, {Component, Fragment} from 'react';
import axios from "axios";
import HomeContent from "./HomeContent";
import Card from '../Card/Card';
import picture from "../../../assets/immigrant.png";

const config = require('../../../config.json');

class Home extends Component {
    state = {
        immigrants: [],
    }
    myRef = React.createRef();


    getImmigrants = async () => {
        // add call to AWS API Gateway to fetch immigrants here
        //then set them in state
        try {
            const res = await axios.get(`${config.api.storiesUrl}/immigrant`);
            this.setState({immigrants: res.data.slice(0,3)});
        } catch (err) {
            console.log(`An error has occured: ${err}`);
        }
    }

    componentDidMount = () => {
        this.getImmigrants();
    }

    prevClick = () => {
        // alert('prev');
        // console.log(this.myRef.current);
        const slide = this.myRef.current;
        slide.scrollLeft += slide.offsetWidth;
        if(slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)) {
            slide.scrollLeft = 0;
        }
    };

    nextClick = () => {
        // alert('next');
        const slide = this.myRef.current;
        slide.scrollLeft -= slide.offsetWidth;
        if(slide.scrollLeft <= 0) {
            slide.scrollLeft = slide.scrollWidth;
        }
    }

    render() {
        const {immigrants} = this.state;
        const immigrantsList = immigrants.length ? (
            immigrants.map(immigrant => {
                return(
                    <Card key={immigrant.id}
                          photo={picture}
                          name={immigrant.immigrantName}
                          tag={immigrant.storyTitle}
                          tagId={'/story/' + immigrant.id}>
                    </Card>
                )
            })) : (<div className="center">No stories yet.</div>)
        return (
            <Fragment>
                <HomeContent />
            <div className='container'>
                <div className='row mb-5' ref={this.myRef}>
                    {immigrantsList}
                </div>
            </div>
            </Fragment>
        )
    }
};

export default Home;