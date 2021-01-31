const labelsIT = {
  title: 'Siamo felici di celebrare il nostro matrimonio con voi. Aiutaci ad organizzarlo al meglio.',
  sunday: 'Domenica',
  date: '22 agosto 2021',
  rsvp: 'Conferma la tua presenza',
};

const labelsES = {
  title: 'Estamos felici di celebrare il nostro matrimonio con voi. Aiutaci ad organizzarlo al meglio.',
  sunday: 'Domingo',
  date: '22 agosto 2021',
  rsvp: 'Conferma la tua presenza',
};

const labelsRO = {
  title: 'Sunt felici di celebrare il nostro matrimonio con voi. Aiutaci ad organizzarlo al meglio.',
  sunday: 'Cozonac',
  date: '22 agosto 2021',
  rsvp: 'Conferma la tua presenza',
};

const urlSearchParams = new URLSearchParams(location.search);
const lang = urlSearchParams.get('lang');

export const labels = ((lang) => {
  if (lang === 'es') return labelsES;
  if (lang === 'ro') return labelsRO;
  return labelsIT;
})(lang);
