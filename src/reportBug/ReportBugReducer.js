import {REPORT_BUG_DONE, REPORT_BUG_ERROR, START_REPORT_BUG} from "./ReportBugActions";

export default function (
    state = {isError: false, requestInProgress: false, response: null, isRequestDone: false},
    action
) {

  switch (action.type) {
    case START_REPORT_BUG:
      return {
        isError: false,
        isRequestDone: false,
        requestInProgress: true,
        response: null
      };
    case REPORT_BUG_DONE:
      console.log('Response: ', action);
      return {
        isError: false,
        isRequestDone: true,
        requestInProgress: false,
        response: null
      };
    case REPORT_BUG_ERROR:
      console.log('error:', action.payload);
      return {
        isError: true,
        isRequestDone: true,
        requestInProgress: false,
        response: action.payload
      };

    default:
      return state;
  }
}
