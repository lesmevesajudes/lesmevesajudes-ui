//@flow
export type HelpSystemState = {
  currentHelpTopic: string
};

export type ReduxFormFocus = {
  type: '@@redux-form/FOCUS',
  meta: {
    field: string,
    form: string
  }
}
export type ShowHelpFor = {
  type: 'SHOW_HELP_FOR',
  meta: {
    topic: string,
  }
}
export const showHelpFor = (topic: string) => (
    {
      type: 'SHOW_HELP_FOR',
      meta: {
        topic: topic
      }
    });

export type HelpSystemActions = ReduxFormFocus | ShowHelpFor;

export default function (
    state: HelpSystemState = {currentHelpTopic: ''},
    action: HelpSystemActions
): HelpSystemState {
  switch (action.type) {
    case '@@redux-form/FOCUS':
      return {currentHelpTopic: action.meta.field};
    case 'SHOW_HELP_FOR':
      return {currentHelpTopic: action.meta.topic};
    default:
      return state;
  }
}
