import React from 'react';
import { createUseStyles } from 'react-jss';
import { CountDown } from './CountDown.js';
import { labels } from './l10n.js';

const useStyle = createUseStyles({
  container: {
    composes: 'col-sm-12',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    textAlign: 'center',
    backgroundImage: `url('flowers.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  kittens: {
    backgroundImage: `url('kitten.png')`,
    width: '150px',
    height: '150px',
    backgroundPositionX: '323px',
    backgroundPositionY: '210px',
    backgroundSize: '450px 450px',
    marginBottom: '2vh',
  },
});

export const SecondPage = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.kittens} />
      <div>
        <h3>{labels.sunday},</h3>
        <h2>{labels.date}</h2>
        <h3>Roma</h3>
        <h5>
          <CountDown />
        </h5>
      </div>
      <button className="btn btn-primary">{labels.rsvp}</button>
    </div>
  );
};
