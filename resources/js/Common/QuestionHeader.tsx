import React from "react";

import {
  Typography,
  makeStyles,
  useScrollTrigger,
  Slide,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'

import Filter from './Filter';

import axios from 'axios';


const QuestionHeader = () => {
  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    formControl: {
      margin: theme.spacing(1),
      marginRight: theme.spacing(2),
      minWidth: 180,
    },
    questionListHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      marginLeft: theme.spacing(2),
    },
    slide: {
      position: 'fixed',
      top: '70px', // 動的
      zIndex: 20,
      width: '100%',
      backgroundColor: 'white',
    },
  }));
  const classes = useStyles();

  interface categoriesType {
    id: string,
    name: string
  }

  const [categories, setCategories] = React.useState<[categoriesType]>([{id: "", name: ""}]);

  React.useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios
    .get("http://localhost:3001/categories")
    .then(response => {
      console.log(response);
      setCategories(response["data"]);
    })
    .catch(() => {
      console.log("api error");
    });
  };

  const [subject, setSubject] = React.useState('');
  const handleChange = (event: any) => {
    setSubject(event.target.value);
    //　APIで表示リストの絞り込み
    var q = "?category";
  };

  const trigger = useScrollTrigger();

  return (
      <div className={classes.slide}>
       <Slide in={!trigger}>
        <div>
          <div className={classes.questionListHeader}>
            <Typography variant="h5" className={classes.headerTitle}>
              <b>勉強の質問一覧</b>
            </Typography>
            <div className={classes.grow} />
            <FormControl className={classes.formControl}>
              <InputLabel id="subject">科目</InputLabel>
              <Select labelId="subject" onChange={handleChange} value={subject}>
                {categories.map(category => {
                  return <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                })}
              </Select>
            </FormControl>
          </div>
          <Filter />
        </div>
      </Slide>
    </div>
  );
}


export default QuestionHeader;