const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:2000';
const REPORT_BUG_URL = process.env.REACT_APP_REPORT_BUG_URL || 'http://localhost:3000/api/simulation_reports';
const ENVIRONMENT = process.env.NODE_ENV || 'development';

export {API_URL, REPORT_BUG_URL, ENVIRONMENT};
