import Recipe from './Recipe'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    gridItem: {
        padding: '1em'
    }
  }));

export default function Recipes (props) {
    const classes = useStyles();

    function mapRecipes() {
        return props.data.map(recipe => <Grid className={classes.gridItem} item md={3}><Recipe className={classes.card} recipe={recipe} key={recipe.name} /></Grid>)
    }

    return (
        
        <div>
            {props.data.length > 0 ? <h1>{props.term.toUpperCase()} RECIPES</h1> : <h1>Search For Recipes</h1>}
            <div className={classes.root}>
            <Grid container spacing={24} >
            {mapRecipes()}
            </Grid>
            </div>
        </div>
    )
}