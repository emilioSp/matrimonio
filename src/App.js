import React from 'react';
import { FirstPage } from './FirstPage.js';
import { SecondPage } from './SecondPage.js';
import { createUseStyles } from 'react-jss';
import { ThirdPage } from './ThirdPage.js';

const useStyles = createUseStyles({
  app: {
    composes: 'container',
    backgroundColor: '#fbedda',
    fontFamily: `'Dancing Script', cursive`,
  },
});

export const App = () => {
  const classes = useStyles();
  return (
    <main className={classes.app}>
      <div className="row">
        <FirstPage />
        <SecondPage />
        <ThirdPage />
      </div>
    </main>
  );
};
