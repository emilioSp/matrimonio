import React from 'react';
import { createUseStyles } from 'react-jss';
import { CountDown } from './CountDown.js';
import { doodleUrl, labels } from './l10n.js';

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
  rsvp: {
    composes: 'btn btn-info btn-lg',
    color: 'white',
  },
  icons: {
    composes: 'btn btn-info m-2',
    color: 'white',
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
        <CountDown />
      </div>
      <a href={doodleUrl} target="_blank" rel="noreferrer" className={classes.rsvp}>
        {labels.rsvp}
      </a>
      <div>
        <a href="https://goo.gl/maps/KPGTtV1ncPz6P3wt5" target="_blank" rel="noreferrer" className={classes.icons}>
          <i className="fas fa-church"></i>
        </a>
        <a href="https://www.laportadelprincipe.it/" target="_blank" rel="noreferrer" className={classes.icons}>
          <i className="fas fa-utensils"></i>
        </a>
      </div>
    </div>
  );
};
