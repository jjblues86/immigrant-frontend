import React, {Component} from 'react';

class FooterItems extends Component{

    contactUsHandler = () => {
        console.log('in contact us handler')
        //const {history} = this.props;
        //history.push({pathname: '/contact'})
    }
    render() {
        return (
            <footer className='footer'>
                <div className="content has-text-centered">
                    <button className='btn btn-info'
                            onClick={this.contactUsHandler}>Contact Us</button>
                    <p>
                        <strong>Immigrant dreams</strong> by <a href="http://theimmigrantdream.com/">JJ & ABC</a>. The
                        source code is
                        licensed
                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                    <div>
                        <i className="fa fa-home"/>
                        <i className="fab fa-facebook"/>
                    </div>
                </div>
            </footer>
        )
    }
};

export default FooterItems;