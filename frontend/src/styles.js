import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    margin: "30px 0",
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
  },
  searchField: {
    marginRight: "10px",
    width: "100%",
  },
  searchButton: {
    width: "30%",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    width: "100%",
    height: "300px",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: "50px 0",
    justifyContent: "center",
  },
  page: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
}));

export default useStyles;
