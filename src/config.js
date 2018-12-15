const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:2000';
const REPORT_BUG_URL = process.env.REACT_APP_REPORT_BUG_URL || 'http://localhost:3000/api/simulation_reports';
const SIMULATION_STORE_URL = process.env.REACT_APP_SIMULATION_STORE_URL || 'http://localhost:3000/api/simulations';
const ENVIRONMENT = process.env.NODE_ENV || 'development';
const STATIC_ROOT = process.env.PUBLIC_URL || '';
export {API_URL, REPORT_BUG_URL, ENVIRONMENT, SIMULATION_STORE_URL, STATIC_ROOT};
