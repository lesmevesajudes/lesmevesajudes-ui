const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:2000';
const REPORT_BUG_URL = process.env.REACT_APP_REPORT_BUG_URL || 'https://lesmevesajudes-ss.herokuapp.com/api/simulations';
const ENVIRONMENT = process.env.NODE_ENV || 'development';

export {API_URL, REPORT_BUG_URL, ENVIRONMENT};
