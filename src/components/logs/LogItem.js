//racfp p will bring the propstypes.
import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteLog, setCurrent } from "../../actions/logActions";

import M from "materialize-css/dist/js/materialize.min.js";

// will pass in log as a prop. condition if attention needed red-text
const LogItem = ({ log, deleteLog, setCurrent }) => {
  //onDelete function
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: `Log number ${log.id} is deleted.` });
  };

  return (
    <li className="collection-item">
      <div>
        {/* log.message  #edit-log-modal*/}
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        {/* id date and tech */}
        <span className="grey-text">
          <span className="black-text">ID # {log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        {/* delete button */}
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  //ptor
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteLog, setCurrent }
)(LogItem);
