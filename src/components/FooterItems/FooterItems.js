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
                <div className={style.Resources}>
                    <h4 className="title is-4 has-text-dark">
                        Resources
                    </h4>
                    <a href="https://www.aclu.org/" target="_blank" rel="noreferrer noopener"><p>ACLU</p></a>
                    <a href="https://www.uscis.gov/" target="_blank" rel="noreferrer noopener"><p>USCIS</p></a>
                    <a href="https://www.boundless.com/" target="_blank" rel="noreferrer noopener"><p>BOUNDLESS</p></a>
                    {/*<a href="https://immigrationforum.org/" target="_blank"><p>NATIONAL IMMIGRATION FORUM</p></a>*/}
                </div>
                <div className="content has-text-centered">
                    <div className={style.FontAwesome}>
                        <div className="row justify-content-center">
                            <div className="col-1">
                                <a href="https://www.instagram.com/the_immigrantdream/?igshid=awwxanpb9zem" target="_blank" rel="noreferrer noopener"> <i className="fab fa-instagram"/></a>
                                <a href="/" target="_blank" rel="noreferrer noopener"> <i className="fab fa-facebook"/></a>
                            </div>
                        </div>
                        <button className='btn btn-info'
                                onClick={this.contactUsHandler}>Contact Us
                        </button>
                    </div>
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