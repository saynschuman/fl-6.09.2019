import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  buttons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#fff',
    fontWeight: 700,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item className={classes.buttons}>
        <Button type="submit" variant="contained" className={classes.button}>
          <EditIcon className={classes.leftIcon} />
          Update
        </Button>
        <Button variant="contained" className={classes.button}>
          <CloseIcon className={classes.leftIcon} />
          Close
        </Button>
      </Grid>
    </Grid>
  );
}
