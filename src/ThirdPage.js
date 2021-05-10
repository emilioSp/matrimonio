import React from 'react';
import { createUseStyles } from 'react-jss';
import { useTranslation } from 'react-i18next';

const useStyle = createUseStyles({
  container: {
    composes: 'col-12 text-white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    textAlign: 'center',
    backgroundImage: `url('note.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  icons: {
    composes: 'btn btn-info m-2 btn-lg',
    color: 'white',
  },
});

export const ThirdPage = () => {
  const classes = useStyle();
  const { t, i18n } = useTranslation();

  if (i18n.language === 'ro' || i18n.language === 'es') return null;

  return (
    <div className={classes.container}>
      <div className="col-md-7 m-auto">
        <div className="h2">{t('gift')}</div>
        <div className="h2 mt-4">Spatola Emilio</div>
        <div className="h2 mt-1">Balaban Crina Ivona</div>
        <div className="h2 mt-4" style={{ wordBreak: 'break-all' }}>
          IT77V0326803214052141577080
        </div>
      </div>
    </div>
  );
};
