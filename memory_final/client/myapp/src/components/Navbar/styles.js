
import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import { minWidth } from "@mui/system";
import { useMediaQuery } from "@material-ui/core";

export default makeStyles((theme) => ({
  button: {
    fontFamily: "cursive",
  },

  appBar: {
    borderRadius: 15,
    background: "#e8a91057",
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "rgba(0,0,0)",
    textDecoration: "none",
    fontFamily: "cursive",
  },
  image: {
    marginLeft: "15px",
    borderRadius: "10px",
  },

  toolbar: {
    // display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  signin: {
    backgroundColor: "#d68d05",
    color: "primary",
  },
  logout: {
    backgroundColor: "#ff1111",
  },

  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    // color:"#cf9f2a",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
