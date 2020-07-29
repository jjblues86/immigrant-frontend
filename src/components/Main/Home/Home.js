import React, {Component} from 'react';
import Logo from "../../Navigation/Logo/Logo";
import styles from "./Home.module.css";
import homeImage from '../../../assets/home-image.jpg';
import Story from "../Stories/Story/Story";
import data from '../../../assets/stories-data.json';

class Home extends Component {
    constructor(props) {
        super(props);
        this.stories = Array.from(data);
    }

    render() {
        const firstThree = this.stories.filter(value => (
            value.id <= 3
        ))
        return (

            <div className='container-fluid'>
                <div className='col-xl-12'>
                    <Logo picture={homeImage} className={styles.Picture} alternate='Home Image'/>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tortor eget est venenatis
                        venenatis.
                        Duis purus justo, auctor non pellentesque ac, venenatis et nunc. Ut quis hendrerit est. Sed sit
                        amet
                        dui nibh. Integer pharetra, orci eget lobortis porttitor, leo diam cursus tortor, vitae euismod
                        nibh
                        metus at metus. Proin eu odio lacinia, semper nibh id, rhoncus ante. Maecenas eget ipsum ac
                        dolor
                        semper dapibus. In elementum, sem vel suscipit sodales, lectus metus feugiat elit, at vehicula
                        sem
                        leo sed lorem. Vivamus ut felis leo. Fusce turpis odio, varius et dui vel, vulputate consequat
                        neque. Phasellus cursus leo nibh, nec tincidunt tortor cursus vel. Nulla consectetur vitae justo
                        eu
                        faucibus. Fusce a ornare est.

                        Nam quis augue et lacus tristique elementum. In hac habitasse platea dictumst. Nullam
                        scelerisque
                        nibh id est lobortis consequat. Vestibulum ultrices bibendum est. Donec a tristique sapien.
                        Mauris
                        varius ac urna ut venenatis. Aenean eleifend dui ut erat placerat, ac laoreet ligula ultrices.
                        Vestibulum mollis aliquet mauris vel fermentum.</p>
                </div>
                <div className='row mb-5'>
                    {firstThree.map(story => (

                        <Story key={story.id}
                               name={story.firstName + ' ' + story.lastName}
                               degree={story.degree}
                               biography={story.biography}/>
                    ))}
                </div>
            </div>
        )
    }
};

export default Home;