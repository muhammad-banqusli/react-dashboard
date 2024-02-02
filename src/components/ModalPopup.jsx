import React, { useState } from "react";
import {PropTypes} from "prop-types";
import { Button, Dialog, DialogContent } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//     dialog: {
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         margin: 0,
//         zIndex: theme.zIndex.modal + 1,
//         backdropFilter: "blur(3px)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     dialogContent: {
//         position: "relative",
//         backgroundColor: theme.palette.background.paper,
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2),
//         outline: "none",
//     },
// }));

const ModalPopup = ({ buttonText, popupTitle, popupContent }) => {
    // const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                {buttonText}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                // classes={{
                //     paper: classes.dialog,
                //     paperScrollPaper: classes.dialogContent,
                // }}
            >
                <DialogContent>
                    {popupTitle && <h2>{popupTitle}</h2>}
                    {popupContent}
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
};

ModalPopup.propTypes = {
    buttonText: PropTypes.string.isRequired,
    popupTitle: PropTypes.string,
    popupContent: PropTypes.node.isRequired,
};

export default ModalPopup;
