import React from 'react';
import { createUseStyles } from 'react-jss';
import { labels } from './l10n.js';

const useStyle = createUseStyles({
  container: {
    composes: 'col-sm-12',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  photo: {
    marginTop: 'auto',
  },
  language: {
    composes: 'btn-group',
    marginTop: '10px',
  },
  welcome: {
    marginTop: 'auto',
    marginBottom: '14vh',
    textAlign: 'center',
    padding: '5px',
  },
  title: {
    fontSize: '4rem',
    fontFamily: `'Lovers Quarrel', cursive`,
  },
});

const changeLanguage = (lang) => {
  const urlSearchParams = new URLSearchParams(location.search);
  urlSearchParams.set('lang', lang);
  location.search = urlSearchParams.toString();
};

export const FirstPage = () => {
  const classes = useStyle();
  const urlSearchParams = new URLSearchParams(location.search);
  const lang = urlSearchParams.get('lang') ?? 'it';
  return (
    <div className={classes.container}>
      <div className={classes.language} role="group">
        <button
          type="button"
          className={`btn ${lang === 'it' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => changeLanguage('it')}
        >
          Italiano
        </button>
        <button
          type="button"
          className={`btn ${lang === 'ro' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => changeLanguage('ro')}
        >
          Romana
        </button>
        <button
          type="button"
          className={`btn ${lang === 'es' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => changeLanguage('es')}
        >
          Espanol
        </button>
      </div>
      <img src="photo.jpeg" className={classes.photo} />
      <div className={classes.welcome}>
        <h1 className={classes.title}>Crina & Emilio</h1>
        {labels.title}
      </div>
    </div>
  );
};
