import {Grid} from "@material-ui/core";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {submitReport} from "./ReportBugActions";
import ReportBug from "./ReportBugForm";

export const getReportBugDataFromLocalStorage = () => (
    {
      ...(typeof localStorage.getItem('reporter_email') !== 'undefined' && {reporter_email: localStorage.getItem('reporter_email')}),
      ...(typeof localStorage.getItem('test_group') !== 'undefined' && {test_group: localStorage.getItem('test_group')})
    });

const ReportBugPage = (props) =>
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item xs={12} md={11}>
        <ReportBug initialValues={getReportBugDataFromLocalStorage()} onSubmit={values => props.submitReport(values)}/>
      </Grid>
    </Grid>;

const mapStateToProps = (state) => ({
  isError: state.results.isError,
  isRequestDone: state.results.isRequestDone,
  simulationData: state,
  resultsData: state.results.response,
  persons: state.persons
});

export default withTranslation('translations')(connect(mapStateToProps, {submitReport})(ReportBugPage));
