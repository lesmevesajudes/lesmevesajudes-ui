// @flow
import type {BugReport} from './ReportBugTypes';

type ReportBugAction = {
  type: 'REPORT_BUG',
  bugReport: BugReport
};

export type ReportBugActions = ReportBugAction;

export function reportBug(bugReport: BugReport): ReportBugAction {
  return {
    type: 'REPORT_BUG',
    bugReport: bugReport
  };
}
