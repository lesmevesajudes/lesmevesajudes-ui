// @flow

export type BugReport = {
  accepted_result: boolean,
  application_state: string,
  comments: string,
  expected_result: string,
  reporter_email: string,
  simulation_id: string,
  test_group: string,
};
