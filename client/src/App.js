import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import camera from "./components/images/camera.png";

import Form from './components/Form/Form';
import AllPosts from './components/Posts/AllPosts';

import useStyles from "./stylesApp";

const App = () => {
    const classes =useStyles()

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Imageboard
                </Typography>
                <img className={classes.image} src={camera} alt="icon" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <AllPosts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>                            
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
