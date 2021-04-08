const UTCtoDate = (utcDate) => {
  return new Date(utcDate * 1000);
};

export const getLocaleDate = (utcDate, locale = "pl-PL") => {
  const localeDate = UTCtoDate(utcDate);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  console.log(localeDate, utcDate);
  return localeDate.toLocaleString("locale", options);
};

export const getWeekday = (utcDate, locale = "pl-PL") => {
  const localeDate = UTCtoDate(utcDate);
  const options = {
    weekday: "long",
  };
  return localeDate.toLocaleDateString("locale", options);
};
