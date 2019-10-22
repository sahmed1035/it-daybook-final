import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLogs } from "../../actions/logActions";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
/**
 * make the request in the useEffect hook.
 * setLogs to change the state. an empty array by default
 * loading. since we are making a request to get the data
 * destructuring props log from state.log that we brought in here through mapStateToProp
 */
const Logs = ({ log: { logs, loading }, getLogs }) => {
  // calling getLogs function in the useEffect
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []); // passing an empty array becuase we want it to run only once.

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    /**
     * we should have access to logs here.
     * using collection class.
     * Looping through logs and outputting a list item
     * putting expressing with a condition.
     * if not loading and logs.length is zero then show a paragraph saying No logs to show.
     * else logs.map and for each log display a log item
     */

    <ul className="collection with-header z-depth-2">
      <li className="collection-header ">
        <h2 className="center ">System Logs</h2>
      </li>

      {!loading && logs.length === 0 ? (
        <p className="center ">No logs to show...</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />) // will display LogItem Component here.
        //passing in current log as a prop.
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

/**
 * to get anything from your app level state and bring to the component, you bring it as a prop.
 * mapStateToProps we are mapping anything in our app level state to a local component prop.
 * call this prop in the connect.
 */
const mapStateToProps = state => ({
  //set an object and describe what we want to get from the state.
  log: state.log // rootReducer variable name should be the same
});
// connects takes in two props, mapStatetoProps and any function we want to run
export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
