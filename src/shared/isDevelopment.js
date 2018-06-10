let isDevelopment = !!(
    typeof process !== 'undefined' &&
  process.env &&
    process.env.NODE_ENV === 'development'
);

module.exports = isDevelopment;
