import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles({
    media: {
        height: "200px"
    }
})

export function ProductCard({ id, image, title, price }) {
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    className = { classes.media }
                    component = "img"
                    image = { image }
                    title = { title }
                />
                <CardContent>
                    <Typography gutterBottom variant = "h4" >
                        { title }
                    </Typography>
                    <Typography gutterBottom variant = "h5" >
                        <b>Price: </b>{ price }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button color = "primary" >
                    ADD TO CART
                </Button>
            </CardActions>
        </Card>
    )
}
