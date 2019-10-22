import React, { useState } from "react";
//brining in materialize js for toast alert msg.
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTech } from "../../actions/techActions";

/**
 * A form. so it has component level state.
 * useState hook and useEffect to call it.
 *
 * bring in connect.
 * bring in propTypes
 * bring in addTech
 * put as a prop
 * also set techs state as a prop
 */

const AddTechModal = ({ addTech }) => {
  // declearing initial states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //onSubmit Method
  const onSubmit = () => {
    // error checking
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter first and last name." });
    } else {
      addTech({
        firstName,
        lastName
      });

      M.toast({
        html: `New tech ${firstName} ${lastName} is added in the tech list.`
      });

      // Clear fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      {/* modal content. heading. a row with input field with the value and onChange method calling setMessage to set whatever we type in.*/}
      <div className="modal-content">
        <h4>New Technician</h4>
        {/* fisrt row */}
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            {/* materialize way of putting lable */}
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        {/* second row. value is tech from the state */}
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            {/* materialize way of putting lable */}
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
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
AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired
};

export default connect(
  null,
  { addTech }
)(AddTechModal);
