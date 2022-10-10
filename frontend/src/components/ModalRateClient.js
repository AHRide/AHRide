import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import style from "../components/ModalRateClient.module.css";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import axios from "axios";


const AlertDialog = ({ historyID }) => {;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [updatedPost, setUpdatedPost] = useState({
    rating: "",
    comment: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const updatePost = (rating) => {
  //   setUpdatedPost((prev) => {
  //     return {
  //       ...prev,
  //       rating: rating,
  //     };
  //   });
  //   handleShow();
  // };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedPost = () => {
    console.log(updatedPost);

    axios
      .put(`http://localhost:3001/deliveryHistory/${historyID}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
  };

  return (
    <>
      <div>
        <Button
          className={style.RateLocation}
          variant="outlined"
          onClick={handleClickOpen}
        >
          Rate
        </Button>
        <Dialog
          fullHeight={200}
          // maxWidth={100}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"How is your experience with the delivery?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
            <Rating
              name="rating"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                handleChange(event);
              }}
            />
            <h1 className={style.rating}>Suggestion: </h1>
          </DialogContent>
          <div>
            <TextField
              className={style.tf}
              name="comment"
              value={updatedPost.comment ? updatedPost.comment : ""}
              id="filled-multiline-static"
              label="Please write your experience with us!"
              multiline
              rows={4}
              variant="filled"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </div>
          <DialogActions>
            <Button
              className={style.ratebutton}
              onClick={saveUpdatedPost}
              autoFocus
            >
              Rate
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
export default AlertDialog;
