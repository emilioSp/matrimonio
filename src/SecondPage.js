import React from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChurch } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { CountDown } from './CountDown.js';
import { doodleUrl } from './i18n.js';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <div className={classes.kittens} />
      <div>
        <h3>{t('sunday')},</h3>
        <h2>{t('date')}</h2>
        <h3>Roma</h3>
        <CountDown />
      </div>
      <a href={doodleUrl} target="_blank" rel="noreferrer" className={classes.rsvp}>
        {t('rsvp')}
      </a>
      <div>
        <a href="https://goo.gl/maps/KPGTtV1ncPz6P3wt5" target="_blank" rel="noreferrer" className={classes.icons}>
          <FontAwesomeIcon icon={faChurch} />
        </a>
        <a href="https://www.laportadelprincipe.it/" target="_blank" rel="noreferrer" className={classes.icons}>
          <FontAwesomeIcon icon={faPizzaSlice} />
        </a>
      </div>
    </div>
  );
};
