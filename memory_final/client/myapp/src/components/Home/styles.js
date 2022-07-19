import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBarSearch:{
       borderRadius:"4px",
       padding:"16px",
       display: "flex",
       marginBottom: "1rem"
    },
//   appBarSearch: {
//     borderRadius: 4,
//     marginBottom: "1rem",
//     display: "flex",
//     padding: "16px",
//   },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  Button:{
      marginTop:"1rem"
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
}));
