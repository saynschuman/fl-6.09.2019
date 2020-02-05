import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Cloud from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import PlusOne from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Popover from './Popover';

import Buttons from './Buttons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
  },
  bottomTitle: {
    marginRight: 15,
  },
  bottom: {
    display: 'flex',
    alignItems: 'center',
  },
  bottomButton: {
    boxShadow: '0 1px 3px 0px rgba(0,0,0,0.4)',
    textTransform: 'none',
    fontWeight: 700,
  },
  fab: {
    backgroundColor: '#fff',
    position: 'absolute',
    right: 20,
    top: 20,
    width: 32,
    height: 5,
  },
  cardHeaderBig: {
    fontSize: 14,
    color: '#999',
    fontWeight: 600,
  },
  icon: {
    fontSize: '1rem',
    color: '#999',
  },
  paperContent: {
    padding: '0 15px',
  },
  grid20: {
    flexBasis: 'calc(20% - 8px)',
    maxWidth: '100%',
    '@media screen and (max-width: 599px)': {
      flexBasis: '100%',
      maxWidth: '100%',
    },
  },
  card: {
    position: 'relative',
    marginBottom: 20,
  },
  fileInput: {
    display: 'none',
  },
  fileIcons: {
    display: 'flex',
    position: 'absolute',
    right: 0,
    top: '18px',
  },
  uploadIcon: {
    color: '#999',
    cursor: 'pointer',
    transition: '.3s',
    '&:hover': {
      color: '#444',
      transition: '.3s',
    },
  },
  textField: {
    width: '100%',
  },
  formControl: {
    width: '100%',
    marginTop: '16px',
    marginBottom: '8px',
    position: 'relative',
  },
  button: {
    backgroundColor: '#fff',
    fontWeight: 700,
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  },
  buttons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardContent: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  listItem: {
    padding: '0 20px',
  },
  filesTitle: {
    fontSize: '14px',
    color: '#999',
  },
  cardHeader: {
    padding: '20px 20px 10px',
  },
  createButton: {
    borderRadius: '30px',
    border: '1px solid #0093dd !important',
    color: '#0093dd',
    fontSize: '12px',
    textTransform: 'none',
    padding: '2px 15px',
    fontWeight: 700,
    display: 'block',
    margin: '5px auto',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  const [selectedPickUpDate, handlePickUpDateChange] = React.useState(
    new Date(),
  );

  const [selectedDeliverDate, handleDeliverChange] = React.useState(new Date());

  const [values, setValues] = React.useState({
    drivers: [{ name: '' }],
    pickUps: [{ id: 'fl42f2523' }],
    delivers: [{ id: 'fl3242f2523' }],
    status: '',
    file1: '',
    file2: '',
    file3: '',
  });

  const getFileName = fullPath => {
    const startIndex =
      fullPath.indexOf('\\') >= 0
        ? fullPath.lastIndexOf('\\')
        : fullPath.lastIndexOf('/');
    let filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
      filename = filename.substring(1);
    }
    return filename;
  };

  const handleChangeFile = event => {
    setValues({
      ...values,
      [event.target.name]: getFileName(event.target.value),
    });
  };

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  /* eslint-disable no-console */
  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };

  const addNewPickUp = () => {
    const id = `f${(+new Date()).toString(16)}`;
    setValues({
      ...values,
      pickUps: values.pickUps.concat({ id }),
    });
  };

  const addNewDeliver = () => {
    const id = `f${(+new Date()).toString(16)}`;
    setValues({
      ...values,
      delivers: values.delivers.concat({ id }),
    });
  };

  const removePickUp = id => {
    setValues({
      ...values,
      pickUps: values.pickUps.filter(el => el.id !== id),
    });
  };

  const removeDeliver = id => {
    setValues({
      ...values,
      delivers: values.delivers.filter(el => el.id !== id),
    });
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Buttons />
      <Grid container spacing={1}>
        {/* 1 row */}
        <Grid item xs={12} sm={4}>
          <FormControl className={classes.formControl}>
            <TextField label="Group" className={classes.textField} />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Number"
              type="number"
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="status">Status</InputLabel>
            <Select
              value={values.status}
              onChange={handleChange}
              input={<Input name="status" id="status" />}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* 2 row */}
        <Grid item xs={12} sm={4}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <TextField label="RC signed by" className={classes.textField} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  label="RC"
                  type="input"
                  value={values.file1}
                  className={classes.textField}
                />
                <TextField
                  label="file1"
                  type="file"
                  name="file1"
                  id="file1"
                  value={values.number}
                  className={classes.fileInput}
                  onChange={handleChangeFile}
                />
                <div className={classes.fileIcons}>
                  <label htmlFor="file1">
                    <PlusOne className={classes.uploadIcon} />
                  </label>
                  <Cloud className={classes.uploadIcon} />
                </div>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  label="BOD signed by"
                  className={classes.textField}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  label="BOL"
                  type="input"
                  value={values.file2}
                  className={classes.textField}
                />
                <TextField
                  label="file2"
                  type="file"
                  name="file2"
                  id="file2"
                  value={values.number}
                  className={classes.fileInput}
                  onChange={handleChangeFile}
                />
                <div className={classes.fileIcons}>
                  <label htmlFor="file2">
                    <PlusOne className={classes.uploadIcon} />
                  </label>
                  <Cloud className={classes.uploadIcon} />
                </div>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  label="BOL signed by"
                  className={classes.textField}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  label="POD"
                  type="input"
                  value={values.file3}
                  className={classes.textField}
                />
                <TextField
                  label="file3"
                  type="file"
                  id="file3"
                  name="file3"
                  value={values.number}
                  className={classes.fileInput}
                  onChange={handleChangeFile}
                />
                <div className={classes.fileIcons}>
                  <label htmlFor="file3">
                    <PlusOne className={classes.uploadIcon} />
                  </label>
                  <Cloud className={classes.uploadIcon} />
                </div>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardHeader
              className={classes.cardHeader}
              title={
                <Typography className={classes.filesTitle}>Files</Typography>
              }
            />
            <CardContent className={classes.cardContent}>
              <List aria-label="file folder">
                <ListItem button className={classes.listItem}>
                  <ListItemText
                    primary="RC [steve gray]"
                    secondary="04 Sep, 2019 10:59"
                  />
                  <Popover />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardHeader
              className={classes.cardHeader}
              title={
                <Typography className={classes.filesTitle}>Invoices</Typography>
              }
            />
            <CardContent className={classes.cardContent}>
              <List aria-label="file folder">{/* list of invoices */}</List>
            </CardContent>
          </Card>
          <Button
            variant="outlined"
            color="primary"
            className={classes.createButton}
          >
            create ivoice
          </Button>
        </Grid>
        {/* 3 row */}
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <TextField label="note" className={classes.textField} />
            </FormControl>
          </Grid>
        </Grid>
        {/* 4 row */}
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item className={classes.grid20} sm={2} xs={12}>
            <FormControl className={classes.formControl}>
              <TextField label="Postedloads Id" className={classes.textField} />
            </FormControl>
          </Grid>
          <Grid item className={classes.grid20} sm={2} xs={12}>
            <FormControl className={classes.formControl}>
              <TextField label="Sylectus Id" className={classes.textField} />
            </FormControl>
          </Grid>
          <Grid item className={classes.grid20} sm={2} xs={12}>
            <FormControl className={classes.formControl}>
              <TextField label="Refs" className={classes.textField} />
            </FormControl>
          </Grid>
          <Grid item className={classes.grid20} sm={2} xs={12}>
            <FormControl className={classes.formControl}>
              <TextField
                label="Cost"
                className={classes.textField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>
          <Grid item className={classes.grid20} sm={2} xs={12}>
            <FormControl className={classes.formControl}>
              <TextField
                label="Driver Payment"
                className={classes.textField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
        {/* 5 row */}
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <TextField label="Broker" className={classes.textField} />
            </FormControl>
          </Grid>
        </Grid>
        {/* 6 row */}
        <Grid container spacing={1}>
          <Grid item sm={6} xs={12}>
            <b>Broker Contact</b>
            <FormControl className={classes.formControl}>
              <TextField label="Person" className={classes.textField} />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField label="Phone" className={classes.textField} />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField label="Email" className={classes.textField} />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField label="Vehicle ID" className={classes.textField} />
            </FormControl>
          </Grid>
          <Grid item sm={6} xs={12}>
            <b>Tracking Team Contact</b>
            <FormControl className={classes.formControl}>
              <TextField label="Person" className={classes.textField} />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField label="Phone" className={classes.textField} />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField label="Email" className={classes.textField} />
            </FormControl>
            {values.drivers.map((el, index) => (
              <FormControl
                // eslint-disable-next-line react/no-array-index-key
                key={`${el.name}-${index}`}
                className={classes.formControl}
              >
                <TextField label="Driver" className={classes.textField} />
              </FormControl>
            ))}
            <Button
              variant="outlined"
              onClick={() =>
                setValues({
                  ...values,
                  drivers: values.drivers.concat({ name: '' }),
                })
              }
              color="primary"
              className={classes.createButton}
            >
              add one more
            </Button>
          </Grid>
        </Grid>
        {/* 7 row */}
        <Grid container spacing={1}>
          <Grid item sm={4} xs={12}>
            <FormControl className={classes.formControl}>
              <TextField label="Total Pieces" className={classes.textField} />
            </FormControl>
          </Grid>
          <Grid item sm={4} xs={12}>
            <FormControl className={classes.formControl}>
              <TextField label="Total Weight" className={classes.textField} />
            </FormControl>
          </Grid>
          <Grid item sm={4} xs={12}>
            <FormControl className={classes.formControl}>
              <TextField label="Total miles" className={classes.textField} />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <b style={{ color: '#999', paddingLeft: 3 }}>Dimensions</b>
        </Grid>
        <Grid container spacing={1}>
          <Grid item sm={4} xs={12}>
            <FormControl className={classes.formControl}>
              <TextField label="length" className={classes.textField} />
            </FormControl>
          </Grid>
          <Grid item sm={4} xs={12}>
            <FormControl className={classes.formControl}>
              <TextField label="width" className={classes.textField} />
            </FormControl>
          </Grid>
          <Grid item sm={4} xs={12}>
            <FormControl className={classes.formControl}>
              <TextField label="height" className={classes.textField} />
            </FormControl>
          </Grid>
        </Grid>
        {/* 8 row */}
        <Grid container spacing={1}>
          <Grid item sm={6} xs={12}>
            {values.pickUps.map(el => (
              <Card key={el.id} className={classes.card}>
                <CardHeader
                  title={<div className={classes.cardHeaderBig}>Pick Up</div>}
                />
                <Fab
                  aria-label="delete"
                  className={classes.fab}
                  onClick={() => removePickUp(el.id)}
                >
                  <DeleteIcon className={classes.icon} />
                </Fab>
                <CardContent className={classes.paperContent}>
                  <FormControl className={classes.formControl}>
                    <TextField label="note" className={classes.textField} />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField label="name" className={classes.textField} />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField label="street" className={classes.textField} />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField
                      label="city/town"
                      className={classes.textField}
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField label="state" className={classes.textField} />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField label="zip" className={classes.textField} />
                  </FormControl>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container spacing={1}>
                      <Grid item sm={6} xs={12}>
                        <FormControl className={classes.formControl}>
                          <DatePicker
                            label="scheduled date"
                            value={selectedPickUpDate}
                            onChange={handlePickUpDateChange}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <FormControl className={classes.formControl}>
                          <TimePicker
                            label="and time"
                            value={selectedPickUpDate}
                            onChange={handlePickUpDateChange}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </MuiPickersUtilsProvider>

                  <FormControl className={classes.formControl}>
                    <div className={classes.bottom}>
                      <div className={classes.bottomTitle}>
                        <b>Completed</b>
                      </div>
                      <Button className={classes.bottomButton}>On Time</Button>
                      <Button className={classes.bottomButton}>Late</Button>
                    </div>
                  </FormControl>
                  <Button
                    variant="outlined"
                    onClick={addNewPickUp}
                    color="primary"
                    className={classes.createButton}
                  >
                    add one more
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item sm={6} xs={12}>
            {values.delivers.map(el => (
              <Card key={el.id} className={classes.card}>
                <CardHeader
                  title={<div className={classes.cardHeaderBig}>Deliver</div>}
                />
                <Fab
                  aria-label="delete"
                  className={classes.fab}
                  onClick={() => removeDeliver(el.id)}
                >
                  <DeleteIcon className={classes.icon} />
                </Fab>
                <CardContent className={classes.paperContent}>
                  <FormControl className={classes.formControl}>
                    <TextField label="note" className={classes.textField} />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField label="name" className={classes.textField} />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField label="street" className={classes.textField} />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField
                      label="city/town"
                      className={classes.textField}
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField label="state" className={classes.textField} />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField label="zip" className={classes.textField} />
                  </FormControl>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container spacing={1}>
                      <Grid item sm={6} xs={12}>
                        <FormControl className={classes.formControl}>
                          <DatePicker
                            label="scheduled date"
                            value={selectedDeliverDate}
                            onChange={handleDeliverChange}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <FormControl className={classes.formControl}>
                          <TimePicker
                            label="and time"
                            value={selectedDeliverDate}
                            onChange={handleDeliverChange}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </MuiPickersUtilsProvider>

                  <FormControl className={classes.formControl}>
                    <div className={classes.bottom}>
                      <div className={classes.bottomTitle}>
                        <b>Completed</b>
                      </div>
                      <Button className={classes.bottomButton}>On Time</Button>
                      <Button className={classes.bottomButton}>Late</Button>
                    </div>
                  </FormControl>
                  <Button
                    variant="outlined"
                    onClick={addNewDeliver}
                    color="primary"
                    className={classes.createButton}
                  >
                    add one more
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Buttons />
    </form>
  );
}
