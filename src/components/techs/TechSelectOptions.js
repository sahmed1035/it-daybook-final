import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//racfp . functional component with proptypes.
import { getTechs } from "../../actions/techActions";

// from the tech state pulling out techs and loading
const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  /**
   * empty bracket for running only when the component mounts
   * eslint for dependencies warning.
   */
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

// pulling the whole tech state
const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(
  mapStateToProps,
  { getTechs }
)(TechSelectOptions);
