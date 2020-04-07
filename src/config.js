const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:2000';
const SHOW_REPORT_BUG = process.env.REACT_APP_SHOW_REPORT_BUG === 'true';
const REPORT_BUG_URL = process.env.REACT_APP_REPORT_BUG_URL || 'http://localhost:3001/api/simulation_reports';
const SIMULATION_STORE_URL = process.env.REACT_APP_SIMULATION_STORE_URL || 'http://localhost:3001/api/simulations';
const ENVIRONMENT = process.env.NODE_ENV || 'development';
const STATIC_ROOT = process.env.REACT_APP_PUBLIC_URL || '';
export {API_URL, SHOW_REPORT_BUG, REPORT_BUG_URL, ENVIRONMENT, SIMULATION_STORE_URL, STATIC_ROOT};
