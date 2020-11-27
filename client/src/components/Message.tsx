import { Box, makeStyles, Paper } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

interface MessageProps {
  text: string,
  side?: 'left' | 'right'
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: '5px',
  },
  messagePaper: {
    display: 'inline-block',
    padding: '10px',
    maxWidth: '300px'
  },
  left: {
    backgroundColor: theme.palette.secondary.light
  },
  right: {
    backgroundColor: theme.palette.primary.light
  }
}));

const Message = ({
  text,
  side = 'left'
}: MessageProps) => {
  const classes = useStyles();
  
  return (
    <Box className={classes.root} style={{textAlign: side}}>
      <Paper className={clsx(classes.messagePaper, (side === 'left') ? classes.left : classes.right)} elevation={1}>
        {text}
      </Paper>
    </Box>
  )
};

export default Message;