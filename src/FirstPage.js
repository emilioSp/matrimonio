import React from 'react';
import { createUseStyles } from 'react-jss';
import { useTranslation } from 'react-i18next';

const useStyle = createUseStyles({
  container: {
    composes: 'col-sm-12',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  photoContainer: {
    marginTop: 'auto',
  },
  photo: {
    width: '100%',
    height: 'auto',
  },
  language: {
    composes: 'btn-group mt-4',
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
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.language} role="group">
        <button
          type="button"
          className={`btn btn-lg ${i18n.language === 'it' ? 'btn-info' : 'btn-secondary'}`}
          onClick={() => changeLanguage('it')}
        >
          Italiano
        </button>
        <button
          type="button"
          className={`btn btn-lg ${i18n.language === 'ro' ? 'btn-info' : 'btn-secondary'}`}
          onClick={() => changeLanguage('ro')}
        >
          Română
        </button>
        <button
          type="button"
          className={`btn btn-lg ${i18n.language === 'es' ? 'btn-info' : 'btn-secondary'}`}
          onClick={() => changeLanguage('es')}
        >
          Español
        </button>
      </div>
      <div className={classes.photoContainer}>
        <img src="photo.jpeg" className={classes.photo} />
      </div>
      <div className={classes.welcome}>
        <h1 className={classes.title}>Crina & Emilio</h1>
        <h3>{t('title')}</h3>
      </div>
    </div>
  );
};
