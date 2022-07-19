import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  CardContent: {
    cursor: "pointer",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
    cursor: "pointer",
  },
  overlay2: {
    position: "absolute",
    top: "25px",
    left:"100px",
    right: "10px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    cursor: "pointer",
  },
  title: {
    padding: "0 16px",
    cursor: "pointer",
  },
  // cardActions: {
  //   padding: "0 16px 8px 16px",
  //   display: "flex",
  //   justifyContent: "space-between",
  // },
  cardd: {
    "&:hover": {
      backgroundColor: "#d0d0cf",
    },
    cursor: "pointer",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
}));

