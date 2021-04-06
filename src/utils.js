const UTCtoDate = (utcDate, timezone = 0) => {
  return new Date((utcDate + timezone) * 1000);
};

export const getLocaleDate = (utcDate, timezone = 0, locale = "pl-PL") => {
  const localeDate = UTCtoDate(utcDate, timezone);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return localeDate.toLocaleString("locale", options);
};

export const getWeekday = (utcDate, timezone = 0, locale = "pl-PL") => {
  const localeDate = UTCtoDate(utcDate, timezone);
  const options = {
    weekday: "long",
  };
  return localeDate.toLocaleDateString("locale", options);
};
