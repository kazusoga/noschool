import React from "react";

import {
  makeStyles,
  Fab
} from '@material-ui/core'

import CreateIcon from '@material-ui/icons/Create';

import Header from '../Common/Header';
import QuestionHeader from '../Common/QuestionHeader'

const Top = () => {
  const useStyles = makeStyles((theme) => ({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      width: theme.spacing(12),
      height: theme.spacing(12),
      zIndex: 20,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Header />
      <QuestionHeader />
      <Fab color="primary" className={classes.fab}>
        <CreateIcon fontSize="large" />
      </Fab>
    </div>
  );
};

export default Top;