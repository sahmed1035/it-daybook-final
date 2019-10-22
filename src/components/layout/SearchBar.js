import React, { useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchLogs } from "../../actions/logActions";

// passing serchLogs action as a prop.
const SearchBar = ({ searchLogs }) => {
  // useRef hook to get the value from the search form.
  const text = useRef(""); // default value is empty

  // onChange method. we dont have a submit button. filter as we type. as we type make a request to our bckend
  const onChange = e => {
    searchLogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: "30px", background: "#5587a2" }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs..."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">close</i>
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
};

// PropTypes
SearchBar.propTypes = {
  serchLogs: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchLogs }
)(SearchBar);
