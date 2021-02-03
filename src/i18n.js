import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const urlSearchParams = new URLSearchParams(location.search);

const resources = {
  it: {
    translation: {
      title: 'Siamo felici di celebrare il nostro matrimonio con voi. Aiutateci ad organizzarlo al meglio.',
      sunday: 'Domenica',
      date: '22 agosto 2021',
      rsvp: 'Conferma la tua presenza',
      month: '{{count}} mese',
      month_plural: '{{count}} mesi',
      day: '{{count}} giorno',
      day_plural: '{{count}} giorni',
      hour: '{{count}} ora',
      hour_plural: '{{count}} ore',
      minute: '{{count}} minuto',
      minute_plural: '{{count}} minuti',
      second: 'e {{count}} secondo',
      second_plural: 'e {{count}} secondi',
    },
  },
  es: {
    translation: {
      title:
        'Estamos encantados de celebrar nuestro gran día con vosotros. Ayudadnos a organizarlo de la mejor manera.',
      sunday: 'Domingo',
      date: '22 de agosto de 2021',
      rsvp: 'Confirma tu presencia',
      month: '{{count}} mes',
      month_plural: '{{count}} meses',
      day: '{{count}} día',
      day_plural: '{{count}} días',
      hour: '{{count}} hora',
      hour_plural: '{{count}} horas',
      minute: '{{count}} minuto',
      minute_plural: '{{count}} minutos',
      second: 'y {{count}} segundo',
      second_plural: 'y {{count}} segundos',
    },
  },
  ro: {
    translation: {
      title: 'Suntem fericiți să putem sărbători această zi specială împreună. Ajută-ne să o organizăm cât mai bine.',
      sunday: 'Duminică',
      date: '22 august 2021',
      rsvp: 'Confirmă-ți prezența',
      month: '{{count}} lună',
      month_1: '{{count}} luni',
      month_2: '{{count}} luni',
      day: '{{count}} zi',
      day_1: '{{count}} zile',
      day_2: '{{count}} zile',
      hour: '{{count}} oră',
      hour_1: '{{count}} ore',
      hour_2: '{{count}} ore',
      minute: '{{count}} minut',
      minute_1: '{{count}} minute',
      minute_2: '{{count}} minute',
      second: 'și {{count}} secundă',
      second_1: 'și {{count}} secunde',
      second_2: 'și {{count}} secunde',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'it',
    lng: urlSearchParams.get('lang'),
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export const doodleUrl = ((lang) => {
  if (lang === 'es')
    return 'https://docs.google.com/forms/d/e/1FAIpQLSdMFgUo88A_k2_xRu2PpsNQCmxQ-gzXfc0HPOENYgN2DMO_Kg/viewform?usp=sf_link';
  if (lang === 'ro')
    return 'https://docs.google.com/forms/d/e/1FAIpQLSdObOwqQKzvd_YMho_OxBeXnbhESHEdVHSJN2umGq4pjl8NTQ/viewform?usp=sf_link';
  return 'https://docs.google.com/forms/d/e/1FAIpQLScbnhsw3Swei5LUwmR1B2qjgEtjqEoSNlaE8wM6a2z4et5LXA/viewform?usp=sf_link';
})(urlSearchParams.get('lang'));

export default i18n;
