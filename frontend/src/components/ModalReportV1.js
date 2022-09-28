import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import style from "../components/ModalReportV1.module.css";
import TextField from "@mui/material/TextField";

export default function ModalReportV1() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={style.buttonDesign}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Report
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={style.text1} id="alert-dialog-title">
          {"Uh-oh, Can you tell us more?"}
        </DialogTitle>
        <DialogContent className={style.modalBackground}>
          <DialogContentText
            className={style.font}
            id="alert-dialog-description"
          >
            Information:
          </DialogContentText>
          <div className={style.column}>
            <TextField
              className={style.text2}
              id="outlined-multiline-static"
              label="Tell us more..."
              multiline
              rows={4}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button className={style.buttonDesignCancel} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className={style.buttonDesign}
            onClick={handleClose}
            autoFocus
          >
            Report
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
