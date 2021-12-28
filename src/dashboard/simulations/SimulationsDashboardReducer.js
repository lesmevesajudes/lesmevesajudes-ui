export const SIMULATIONS_DASHBOARD_FILTER = 'SIMULATIONS_DASHBOARD_FILTER';


export default function(
  state = {
    fromDate: null,
    untilDate: null,
  },
  action
) {
  switch (action.type) {
    case SIMULATIONS_DASHBOARD_FILTER:
      return {
        ...state,
        fromDate : action.fromDate,
        untilDate: action.untilDate
    }
  default:
    return state;
  }
}
