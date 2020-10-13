import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import './modal.css'
const useStyles = makeStyles((theme) => ({
    
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iframe :{
      
    width: "100%",
    height: "720px"
  },
  paper: {
    margin:"6%",
    //backgroundColor: theme.palette.background.paper,
    //border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <>
          <div className={classes.paper + " holds-the-iframe"}>
          <iframe className={classes.iframe} src={props.uri}></iframe>
          </div>
        </>
        {/* <Fade in={props.open}>
          
        </Fade> */}
      </Modal>
    </div>
  );
}
