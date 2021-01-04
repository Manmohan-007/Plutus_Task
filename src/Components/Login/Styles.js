import { makeStyles } from "@material-ui/core/styles";

const Styles = makeStyles((theme) => ({

  MainContainer: {
    display: "flex",
    alignItems: "center",
  },
  LoginFormContainer: {
    width: "calc(40% - 90px)",
    margin: "50px auto",
    textAlign: "center",
    padding: "40px  75px ",
    borderRadius: "10px",
    height: "500px",
    boxShadow: "0px 0px 12px 7px #ccc;",
  },
  LoginFormHeaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  LoginFormContent: {
    display: "flex",
    flexDirection: "column",
    "& .MuiTextField-root": {
      marginTop: "40px",
    },
    "& .MuiButton-root": {
      width: "40%",
      margin: "50px auto",
      // backgroundColor: "var(--primary-color)"
      backgroundColor: "#f4f4f4",
      display: "flex",
    }
  }
}));

export default Styles;
