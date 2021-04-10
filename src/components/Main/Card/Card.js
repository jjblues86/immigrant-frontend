import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import style from './Card.module.css';

class Card extends Component {

    storyData = () => {
        this.props.history.push(this.props.tagId);
    }

    render() {

        return (
            <section onClick={this.storyData} className={style.cards}>
                <img src={this.props.photo} alt={this.props.name}/>
                <h1 className={style.name}>{this.props.name}</h1>
                <h2 className={style.tag}>{this.props.tag}</h2>
                <h3>{this.props.desc}</h3>
                <div>
                    <Link to={this.props.tagId}>

                        <p>Learn More <i className="fa fa-chevron-right"></i> </p>
                    </Link>
                </div>
            </section>
        );
    }
}

export default withRouter(Card);


// <Container className={classes.cardGrid} maxWidth="md">
//     {/* End hero unit */}
//     <Grid container spacing={4}>
//         {cards.map(card => (
//             <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card className={classes.card}>
//                     <CardMedia
//                         className={classes.cardMedia}
//                         image={card.img}
//                         title="Image title"
//                     />
//                     <CardContent className={classes.cardContent}>
//                         <Typography gutterBottom variant="h5" component="h2">
//                             Heading
//                         </Typography>
//                         <Typography>{card.desc}</Typography>
//                     </CardContent>
//                     <CardActions>
//                         <Button size="small" color="primary">
//                             View
//                         </Button>
//                         <Button size="small" color="primary">
//                             Edit
//                         </Button>
//                     </CardActions>
//                 </Card>
//             </Grid>
//         ))}
//     </Grid>
// </Container>