import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import camera from "./components/images/camera.png";


const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Imageboard
                </Typography>
                <img src={camera} alt="icon" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between">

                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
