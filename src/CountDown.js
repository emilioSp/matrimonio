import React, { useState, useEffect } from 'react';
import DateTime from 'luxon/src/datetime.js';

const weddingDate = DateTime.fromISO('2021-08-22');
export const CountDown = () => {
  const [diff, setDiff] = useState(null);

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

  return (
    <>
      <h3>
        {diff.months} months, {diff.days} days,
      </h3>
      <h3>
        {diff.hours} hours, {diff.minutes} minutes and {Math.floor(diff.seconds)} seconds
      </h3>
    </>
  );
};
