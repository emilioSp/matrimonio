import React from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChurch,
  faCross,
  faCocktail,
  faPizzaSlice,
  faClock,
  faExternalLinkSquareAlt,
} from '@fortawesome/free-solid-svg-icons';
import { CountDown } from './CountDown.js';
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
    composes: 'btn btn-info btn-lg mb-2',
    color: 'white',
    fontSize: '1.5rem',
    marginTop: '16px',
  },
  icons: {
    composes: 'btn btn-info m-2 btn-lg',
    color: 'white',
  },
});

export const SecondPage = () => {
  const classes = useStyle();
  const { t, i18n } = useTranslation();

  const doodleUrl = (() => {
    if (i18n.language === 'es')
      return 'https://docs.google.com/forms/d/e/1FAIpQLSdMFgUo88A_k2_xRu2PpsNQCmxQ-gzXfc0HPOENYgN2DMO_Kg/viewform?usp=sf_link';
    if (i18n.language === 'ro')
      return 'https://docs.google.com/forms/d/e/1FAIpQLSdObOwqQKzvd_YMho_OxBeXnbhESHEdVHSJN2umGq4pjl8NTQ/viewform?usp=sf_link';
    return 'https://docs.google.com/forms/d/e/1FAIpQLScbnhsw3Swei5LUwmR1B2qjgEtjqEoSNlaE8wM6a2z4et5LXA/viewform?usp=sf_link';
  })();

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
        {t('rsvp')} <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="small ml-2" />
      </a>
      <div>
        <a href="https://goo.gl/maps/KPGTtV1ncPz6P3wt5" target="_blank" rel="noreferrer" className={classes.icons}>
          <FontAwesomeIcon icon={faChurch} className="mr-2" />
          <FontAwesomeIcon icon={faCross} style={{ marginRight: '7px' }} />
          <span className="ml-4 mr-2">16:30</span>
          <FontAwesomeIcon icon={faClock} />
          <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="ml-4" />
        </a>
      </div>
      <div>
        <a href="https://www.laportadelprincipe.it/" target="_blank" rel="noreferrer" className={classes.icons}>
          <FontAwesomeIcon icon={faPizzaSlice} className="mr-2" />
          <FontAwesomeIcon icon={faCocktail} />
          <span className="ml-4 mr-2">19:00</span>
          <FontAwesomeIcon icon={faClock} />
          <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="ml-4" />
        </a>
      </div>
    </div>
  );
};
