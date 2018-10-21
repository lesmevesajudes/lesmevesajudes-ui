export const focusFirstQuestionWithName = (name: string) => {
  const element = document.querySelector(`label[id='${name}']`);
  if (element !== null && typeof element.scrollIntoView) {
    element.scrollIntoView({behavior: "instant", block: "start", inline: "center"});
  }
  if (element !== null && typeof element.focus === 'function') {
    element.focus();
  }
};

export const namefirstFieldWithError = (errors: Object) => Object.keys(errors)[0];
