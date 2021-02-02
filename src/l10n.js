const labelsIT = {
  title: 'Siamo felici di celebrare il nostro matrimonio con voi. Aiutateci ad organizzarlo al meglio.',
  sunday: 'Domenica',
  date: '22 agosto 2021',
  rsvp: 'Conferma la tua presenza',
};

const labelsES = {
  title: 'Estamos encantados de celebrar nuestro gran día con vosotros. Ayudadnos a organizarlo de la mejor manera.',
  sunday: 'Domingo',
  date: '22 de agosto de 2021',
  rsvp: 'Confirma tu presencia',
};

const labelsRO = {
  title: 'Suntem fericiți să putem sărbători această zi specială împreună. Ajută-ne să o organizăm cât mai bine.',
  sunday: 'Duminică',
  date: '22 august 2021',
  rsvp: 'Confirmă-ți prezența',
};

const urlSearchParams = new URLSearchParams(location.search);
const lang = urlSearchParams.get('lang');

export const labels = ((lang) => {
  if (lang === 'es') return labelsES;
  if (lang === 'ro') return labelsRO;
  return labelsIT;
})(lang);

export const doodleUrl = ((lang) => {
  if (lang === 'es')
    return 'https://docs.google.com/forms/d/e/1FAIpQLSdMFgUo88A_k2_xRu2PpsNQCmxQ-gzXfc0HPOENYgN2DMO_Kg/viewform?usp=sf_link';
  if (lang === 'ro')
    return 'https://docs.google.com/forms/d/e/1FAIpQLSdObOwqQKzvd_YMho_OxBeXnbhESHEdVHSJN2umGq4pjl8NTQ/viewform?usp=sf_link';
  return 'https://docs.google.com/forms/d/e/1FAIpQLScbnhsw3Swei5LUwmR1B2qjgEtjqEoSNlaE8wM6a2z4et5LXA/viewform?usp=sf_link';
})(lang);
