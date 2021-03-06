import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import style from './FooterItems.module.css';

class FooterItems extends Component {

    contactUsHandler = () => {
        this.props.history.push('/contact');
    }

    render() {
        return (
            <footer className='footer'>
                <div className={style.FontAwesome}>
                    <div className={style.SocialContents}>
                        <a href="https://www.instagram.com/the_immigrantdream/?igshid=awwxanpb9zem" target="_blank" rel="noreferrer noopener"> <i className={[style.SocialContent,"fab fa-instagram"].join(" ")}/></a>
                        <a href="https://www.facebook.com/theimmigrantdream" target="_blank" rel="noreferrer noopener"> <i className={[style.SocialContent,"fab fa-facebook"].join(" ")}/></a>
                    </div>
                    <button className='btn btn-info' style={{backgroundColor: '#0984e3'}}
                            onClick={this.contactUsHandler}>Contact Us
                    </button>
                </div>
                <div className="footer-bottom has-text-centered">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} The Immigrant Dream - All Rights Reserved
                    </p>
                </div>
            </footer>
        )
    }
}

export default withRouter(FooterItems);