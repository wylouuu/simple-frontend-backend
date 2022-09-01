import React, { useState, useEffect } from "react";
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
  Button,
  Pagination,
  TextField,
} from "@mui/material";

import CollectionsIcon from "@mui/icons-material/Collections";

import useStyles from "./styles";

import publicFeedApi from "./api/publicFeed";

import usePagination from "./pagination";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const App = () => {
  const classes = useStyles();
  const [photoList, setPhotoList] = useState([]);
  const [page, setPage] = useState(1);
  const [tags, setTags] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [images, setImages] = useState("");
  const PER_PAGE = 6;

  useEffect(() => {
    const getAllPublicFeed = async () => {
      const response = await publicFeedApi.getAllPublicFeed("all");
      setPhotoList(response.data);
    };

    getAllPublicFeed();
  }, []);

  const getAllPublicFeedWithTags = async () => {
    const response = await publicFeedApi.getAllPublicFeedWithTags(tags, "all");
    setPhotoList(response.data);
  };

  let count = Math.ceil(photoList.length / PER_PAGE);
  let _DATA = usePagination(photoList, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CollectionsIcon className={classes.icon} />
          <Typography variant="h6">
            Simple Photo Gallery FrontEnd and BackEnd with Flicker API
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Flicker Public Feed Gallery
            </Typography>
            <div className={classes.button}>
              <TextField
                style={{ marginRight: "10px", width: "100%" }}
                value={tags}
                onChange={handleTagsChange}
              />
              <Button
                style={{ width: "30%" }}
                variant="contained"
                onClick={() => {
                  getAllPublicFeedWithTags();
                }}
              >
                Search Tags
              </Button>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {isOpen && (
              <Lightbox
                mainSrc={images}
                onCloseRequest={() => setIsOpen(false)}
              />
            )}
            {_DATA.currentData().map((pl) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={pl.photo}
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        lineClamp: 2,
                      }}
                    >
                      {pl.title}
                    </Typography>
                    <Typography>Author : {pl.author}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => {
                        setIsOpen(true);
                        setImages(pl.photo);
                      }}
                    >
                      View
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => window.open(pl.sourceLink, "_blank")}
                    >
                      Source Link
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <div className={classes.page}>
          <Pagination
            count={count}
            size="large"
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </div>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Made by Wylouuu
        </Typography>
      </footer>
    </>
  );
};

export default App;
