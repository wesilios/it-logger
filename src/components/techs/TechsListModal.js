import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';

const TechsListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs.length !== 0 &&
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

TechsListModal.propType = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(
  mapStateToProps,
  { getTechs }
)(TechsListModal);
