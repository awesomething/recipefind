import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  

export default function Recipe(props) {
    const classes = useStyles()
    let recipe = props.recipe
    console.log(recipe)
    let calorieObj = recipe.dataPoints.filter(dataPoint => dataPoint.key === 'Calories')
    return(
        <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={recipe.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {recipe.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Prep Time: {recipe.dataPoints[6].value}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Calories: {calorieObj[1].value}
          </Typography>
        </CardContent>
        
        <Button href={recipe.link} target="_blank" size="small" color="primary">
          Click Here For Recipe
        </Button>
    </Card>
    )
}

