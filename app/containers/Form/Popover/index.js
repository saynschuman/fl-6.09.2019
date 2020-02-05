import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const useStyles = makeStyles(() => ({
  deleteBtn: {
    padding: 15,
    textTransform: 'none',
  },
}));

export default function PopoverPopupState() {
  const classes = useStyles();
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <ListItemSecondaryAction {...bindTrigger(popupState)}>
            <IconButton edge="end" aria-label="action">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Button className={classes.deleteBtn}>Delete</Button>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
