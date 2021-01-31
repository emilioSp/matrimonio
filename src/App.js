import React from 'react';
import { FirstPage } from './FirstPage.js';
import { SecondPage } from './SecondPage.js';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  app: {
    composes: 'container',
    backgroundColor: '#fbedda',
    fontFamily: `'Parisienne', cursive`,
    fontSize: '1.2rem',
  },
});

export const App = () => {
  const classes = useStyles();
  return (
    <main className={classes.app}>
      <div className="row">
        <FirstPage />
        <SecondPage />
      </div>
    </main>
  );
};
