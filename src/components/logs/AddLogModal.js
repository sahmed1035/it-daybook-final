import React, { useState } from "react";

// 1. bring in connect
import { connect } from "react-redux";
// 2. need PropTypes actions are prop and anything we bring from state
import PropTypes from "prop-types";
import { addLog } from "../../actions/logActions";
import TechSelectOptions from "../techs/TechSelectOptions";

//brining in materialize js for toast alert msg.
import M from "materialize-css/dist/js/materialize.min.js";

/**
 * A form. so it has component level state.
 * useState hook and useEffect to call it.
 */

const AddLogModal = ({ addLog }) => {
  // declearing initial states
  const [message, setMessage] = useState("");
  const [attention, seAttention] = useState(false);
  const [tech, setTech] = useState("");

  //onSubmit Method
  const onSubmit = () => {
    // error checking
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech." });
    } else {
      // create a new log
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      };
      // calling addLog action and passing in the newLog
      addLog(newLog);

      // putting material alert
      M.toast({ html: `Log added by ${tech}` });

      // Clear fields
      setMessage("");
      setTech("");
      seAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      {/* modal content. heading. a row with input field with the value and onChange method calling setMessage to set whatever we type in.*/}
      <div className="modal-content">
        <h4>Enter System Log</h4>
        {/* fisrt row */}
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            {/* materialize way of putting lable */}
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        {/* second row. value is tech from the state */}
        <div className="row">
          <div className="input-field purple">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>

        {/* third row for attention box. if attention is true then checked.  onChange change the value to NOT what it is right now*/}
        <div className="row">
          <div className="input-field ">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in "
                  checked={attention}
                  value={attention}
                  onChange={e => seAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      {/* modal content ends */}
      {/* modal footer starts. Enter button */}
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect wave-light green darken-4 btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

//propTypes
AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

const modalStyle = {
  width: "75%",
  height: "75%"
};
// putting null for mapStateToProps as we are not bringing in any states. just actions
export default connect(
  null,
  { addLog }
)(AddLogModal);
