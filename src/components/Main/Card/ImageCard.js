import React, {Component} from 'react';
import AWS from 'aws-sdk';

AWS.config.update({accessKeyId: "AKIAYIEYNSW2K3UJJGN5",
    secretAccessKey: "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",
region: "eu-west-1"});

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