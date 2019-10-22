// fetch it from the backend from the component for now then we will move it to redux.
import React, { useEffect } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs } from "../../actions/techActions";

/**
 * make the request in the useEffect hook.
 * setLogs to change the state. an empty array by default
 * loading. since we are making a request to get the data
 */
const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  // calling getLogs function in the useEffect
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []); // passing an empty array becuase we want it to run only once.

  // don't need to write localhost/:5000 because we added proxy.

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technicians List</h4>
        <ul className="collection">
          {/* before looping through each item make sure loading is done and techs is not null */}
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>

    /**
     * we should have access to logs here.
     * using collection class.
     * Looping through logs and outputting a list item
     * putting expressing with a condition.
     * if not loading and logs.length is zero then show a paragraph saying No logs to show.
     * else logs.map and for each log display a log item
     */
  );
};

// PropTypes
TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(
  mapStateToProps,
  { getTechs }
)(TechListModal);
