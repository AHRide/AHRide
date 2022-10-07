import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import style from "../components/ModalRateClient.module.css";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <h1 className={style.rating}>Suggestion: </h1>
          </DialogContent>
          <div>
            <TextField
              className={style.tf}
              id="filled-multiline-static"
              label="Please write your experience with us!"
              multiline
              rows={4}
              variant="filled"
            />
          </div>
          <DialogActions>
            <Button
              className={style.ratebutton}
              onClick={handleClose}
              autoFocus
            >
              Rate
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
