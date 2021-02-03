import React, { useState, useEffect } from 'react';
import DateTime from 'luxon/src/datetime.js';
import { useTranslation } from 'react-i18next';

const weddingDate = DateTime.fromISO('2021-08-22');
export const CountDown = () => {
  const [diff, setDiff] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const countdown = () => {
      const now = DateTime.local();
      const diff = weddingDate.diff(now, ['months', 'days', 'hours', 'minutes', 'seconds']);
      setDiff(diff.toObject());
    };
    const timeout = setTimeout(countdown, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [diff]);

  if (diff === null) return null;

  const months = t('month', { count: diff.months });
  const days = t('day', { count: diff.days });
  const hours = t('hour', { count: diff.hours });
  const minutes = t('minute', { count: diff.minutes });
  const seconds = t('second', { count: Math.floor(diff.seconds) });

  return (
    <>
      <h3>
        {months}, {days},
      </h3>
      <h3>
        {hours}, {minutes}, and {seconds}
      </h3>
    </>
  );
};
