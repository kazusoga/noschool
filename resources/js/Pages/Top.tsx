import React from "react";

import {
  makeStyles,
  Fab
} from '@material-ui/core'

import CreateIcon from '@material-ui/icons/Create';

import Header from '../Common/Header';
import QuestionHeader from '../Common/QuestionHeader'
import QuestionList from '../Common/QuestionList'

import axios from 'axios'

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

  const [windowSize, setWindowSize] = React.useState(window.innerHeight);

  interface categoryType {
    name: string
  }

  interface replyerType {
    image: any,
    username: string
  }

  interface userType {
    image: any,
    username: string
  }

  interface questionsType {
    id: string,
    name: string,
    image: any;
    tags: [string];
    posted_time: string,
    created_at: string,
    category: categoryType,
    content: string,
    replyer: replyerType,
    user: userType
  }
  const [questions, setQuestions] = React.useState<questionsType[]>([]);

  const generateDisplayPostedTime = (createdAt: any) => {
    // 現在日時との差
    const now = new Date();
    const createdAtDate = new Date(createdAt);
    const diffDate = now.getTime() - createdAtDate.getTime();
    var diffHours = diffDate / 3600000;
    // 60分未満なら1分単位で表示
    let result:string = "";
    if (diffHours < 1) {
      result = diffHours*60 + '分前';
    }
    // 60分以上24時間未満なら1時間単位で表示
    if (diffHours < 24) {
      result = diffHours + '時間前';
    }
    // 24時間以上30日未満なら1日単位で表示
    if (diffHours < 24*30) {
      result = diffHours/24 + '日前';
    }
    // 30日以上1年未満なら1月単位で表示
    if (diffHours < 24*365) {
      result = diffHours/(24*30) + 'ヶ月前';
    }

    return result;

  }


  React.useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = () => {
    axios
    .get<[questionsType]>("http://localhost:3001/questions")
    .then(response => {
      console.log(response);
      response["data"].map(value => {
        return value["posted_time"] = generateDisplayPostedTime(value["created_at"]);
      });

      // for (let i=0; i<response['data'].length; i++) {
      //   response['data'][i]["posted_time"] = generateDisplayPostedTime(value["created_at"]);
      // }
      setQuestions(response["data"]);
    })
    .catch(() => {
      console.log("api error");
    });
  };

  return (
    <div>
      <Header />
      <QuestionHeader />
      <Fab color="primary" className={classes.fab}>
        <CreateIcon fontSize="large" />
      </Fab>
      <QuestionList questions={questions}/>
    </div>
  );
};

export default Top;