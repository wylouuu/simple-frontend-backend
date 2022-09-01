import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "30px 0",
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
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
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: "50px 0",
  },
}));

export default useStyles;
