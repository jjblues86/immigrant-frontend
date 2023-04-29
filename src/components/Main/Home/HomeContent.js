import React, {Component} from 'react';
import classNames from "classnames";

export default class HomeContent extends Component {

    render() {
        let intro = classNames(this.props.introClass);

        return (
            <div className={intro}>

                This website is an ode to the immigrants who have made significant contributions to their adopted communities, yet are often maligned and misrepresented in the media. Despite facing countless challenges and obstacles, these individuals have persevered to achieve success and make a meaningful impact in their respective fields. Through their stories, you'll gain insight into the unique experiences of immigrants from diverse backgrounds who have sacrificed everything to pursue a better life in the western world.

                At a time when anti-immigrant sentiment is pervasive, it's essential to recognize the significant contributions of immigrants to society. From doctors and lawyers to nurses and teachers, immigrants have played a pivotal role in shaping the fabric of our communities. Despite their achievements, however, many immigrants continue to face discrimination and marginalization, often finding themselves on the receiving end of hostility and xenophobia.

                This website is a testament to the resilience, strength, and determination of immigrants, serving as a source of inspiration for those who may be facing similar challenges. By sharing their stories, we hope to challenge existing stereotypes and misconceptions surrounding immigration, foster greater empathy and understanding, and celebrate the valuable contributions that immigrants make to our society.

                Whether you're an immigrant yourself, or simply interested in learning more about the experiences of those who have made the journey to a new country, this site offers a compelling and insightful window into the diverse and multifaceted world of immigration. Through their stories, you'll gain a deeper appreciation for the challenges and triumphs of immigrants, and come away with a greater understanding of the vital role they play in shaping our world.
            </div>
        )
    }
}