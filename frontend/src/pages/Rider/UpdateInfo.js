import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import style from "../Rider/UpdateInfo.module.css";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const update = (post) => {
  //   console.log(post);
  // };

  return (
    <div>
      <div className={style.buttonpos}>
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          className={style.button1}
        >
          Update Info
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Updating your information will automatically update it to all
            necessary location.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Name"
            type="name"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Contact Number"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button>Update</Button>
          {/* onClick={() => updatePost(post)} */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
