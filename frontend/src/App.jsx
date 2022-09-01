import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Container,
  CssBaseline,
  Button
} from "@mui/material";

import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';

import { makeStyles } from "@mui/styles";

const App = () => {
  return (
    <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <CameraOutlinedIcon />
                <Typography variant="h6">
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom style={{ marginTop: '100px' }}>
                        Photo Album
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        hello everyone this is a photo album and i am trying to make sentence as long as possible so we can see how does it look like on the screen
                    </Typography>
                    <div>
                        <Grid spacing={2} container justifyContent="center">
                            <Grid item>
                                <Button variant="contained">
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined">
                                    Secondary Action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </main>
    </>
  );
};

export default App;
