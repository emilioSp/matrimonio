import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  photo: {
    composes: 'col-sm-12',
    display: 'flex',
    backgroundImage: `url('bg.jpeg')`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  welcome: {
    marginTop: 'auto',
    marginBottom: '120px',
    color: 'white',
  },
  title: {
    fontSize: '4rem',
    fontFamily: `'Lovers Quarrel', cursive`,
  },
});

export const FirstPage = () => {
  const classes = useStyle();
  return (
    <div className={classes.photo}>
      <div className={classes.welcome}>
        <h1 className={classes.title}>Crina & Emilio</h1>
        Siamo felici di celebrare il nostro matrimonio con voi. Aiutaci ad organizzarlo al meglio.
      </div>
    </div>
  );
};
