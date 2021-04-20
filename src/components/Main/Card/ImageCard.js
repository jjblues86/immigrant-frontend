import React, {Component} from 'react';
import AWS from 'aws-sdk';

const awsS3Bucket = new AWS.S3();

const params = {
    Bucket: "theimmigrantdream.com",
    Key: "home-image.jpg"
}

class ImageCard extends Component{
    state = {fileUrl: ''}

    componentDidMount = () => {
        awsS3Bucket.getObject(params)
            .then(data => {
                this.setState({
                    fileUrl: data
                })
            })
            .catch(err => {
                console.log('error fetching image')
            })
    }

    render() {
        return (
            <div>
                <img src={this.state.fileUrl} />
            </div>
        )
    }

}

export default ImageCard;