export const SITE_LOCALE = 'en-US';

export const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(SITE_LOCALE, options);
};
