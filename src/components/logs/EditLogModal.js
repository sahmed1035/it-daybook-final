import React, { useState, useEffect } from "react";
// conneting to redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateLog } from "../../actions/logActions";
//brining in materialize js for toast alert msg.
import M from "materialize-css/dist/js/materialize.min.js";
import TechSelectOptions from "../techs/TechSelectOptions";

/**
 * A form. so it has component level state.
 * useState hook and useEffect to call it.
 */

const EditLogModal = ({ current, updateLog }) => {
  // Component Level States: declearing initial states
  const [message, setMessage] = useState("");
  const [attention, seAttention] = useState(false);
  const [tech, setTech] = useState("");

  // useEffect for lifeCycle methods. if data exists in current then setMessage to current.message
  useEffect(() => {
    if (current) {
      setMessage(current.message);
      seAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]); // passing current array as a dependency to useEffect

  //onSubmit Method
  const onSubmit = () => {
    // error checking
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech." });
    } else {
      //creating a new object for updated log
      const updLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      };

      updateLog(updLog);
      M.toast({ html: `Log number ${current.id} updated by ${tech}` });

      // Clear fields
      setMessage("");
      setTech("");
      seAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      {/* modal content. heading. a row with input field with the value and onChange method calling setMessage to set whatever we type in.*/}
      <div className="modal-content">
        <h4>Edit System Log</h4>
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
            {/* <label htmlFor="message" className="active">
              Log Message
            </label> */}
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

const modalStyle = {
  width: "75%",
  height: "75%"
};

// PropTypes
EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
};

// passing in the whole state and getting the current
const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(
  mapStateToProps,
  { updateLog }
)(EditLogModal);
