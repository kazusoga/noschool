import React, { FC } from "react";

import {
  makeStyles,
  List,
  ListItem,
  Paper,
  Typography,
  CardContent,
  CardMedia,
  Chip,
  Avatar
} from '@material-ui/core'
import { SortOutlined } from "@material-ui/icons";

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

type Props = {
  questions: questionsType[]
}

const QuestionList:FC<Props> = ({ questions }) => {
  const useStyles = makeStyles((theme) => ({
    card: {
      width: '100%',
    },
    paper: {
      width: '100%',
      padding: theme.spacing(2),
    },
    questionContent: {
      display: 'flex',
    },
    grow: {
      flexGrow: 1,
    },
    image: {
      width: '120px',
      height: '120px',
    },
    chip: {
      margin: theme.spacing(0.5)
    },
    questionContentBottom: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatars: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    questionAvatar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    replyAvatar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatar: {
      margin: theme.spacing()
    },
    list: {
      paddingTop: '120px', // TODO :動的
    },
    questionCategory: {
      border: 'solid',
    },
    hr: {
      color: 'black'
    }
  }));
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {questions.map((question, i) => {
        return (
          <ListItem key={i}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="body1" className={classes.questionCategory}>
                {question["category"]["name"]}の質問&nbsp;&nbsp; <Chip label="解決済み" color="primary"/>
              </Typography>
              <CardContent className={classes.questionContent}>
                <div className={classes.grow} dangerouslySetInnerHTML={{__html: question["content"]}}></div>
                <CardMedia
                  className={classes.image}
                  image={question["image"]}
                />
              </CardContent>
              <div className={classes.questionContentBottom}>
                <div>
                  {question["tags"].map(tag => {
                      return <Chip className={classes.chip} label={tag} clickable />
                  })}
                </div>
                <div className={classes.grow}></div>
                <Typography variant="body2">
                  {question["posted_time"]}
                </Typography>
              </div>
              <hr className={classes.hr} />
              <div className={classes.avatars}>
                <div className={classes.replyAvatar}>
                  <Avatar className={classes.avatar} src={question["replyer"]["image"]} />
                  <div>
                    <div>
                      <b>{question["replyer"]["username"]} 先生</b>
                    </div>
                    <Typography variant="caption">
                      が回答しました
                    </Typography>
                  </div>
                </div>
                <div className={classes.grow}></div>
                <div className={classes.questionAvatar}>
                  <Avatar className={classes.avatar} src={question["user"]["image"]} />
                  <span>{question["user"]["username"]}</span>
                </div>
              </div>
            </Paper>
          </ListItem>
        );
      })}
    </List>
  );
}

export default QuestionList;