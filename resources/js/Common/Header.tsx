import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  makeStyles,
  fade,
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const Header = () => {
  const useStyles = makeStyles((theme) => ({
      grow: {
        flexGrow: 1,
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%', // ?
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto', // ?
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%', // ?
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // 意味ある？
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'), // ?
        width: '100%', // ?
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      iconButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      root: {
        position: 'relative'
      },
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
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Button>
            <Typography variant="h5">
            NoSchool&nbsp;
            </Typography>
            <Typography variant="h6">
            勉強Q&A
            </Typography>
          </Button>

          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="質問を探す"
              classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
              }}
            />
          </div>
          <Button>勉強の質問を探す</Button>
          <Button>
            <div className={classes.iconButton}>
              <AccountCircleOutlinedIcon fontSize="large" />
              <Typography variant="caption">
                  ログイン
              </Typography>
            </div>
          </Button>
          <Button>
            <div className={classes.iconButton}>
              <AccountCircleIcon fontSize="large" />
              <Typography variant="caption">
                  新規登録
              </Typography>
            </div>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;