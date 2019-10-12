import React from 'react';
import PropTypes from 'prop-types';
import Lane from './LaneContainer.js';

import styles from './Lane.css';

const Lanes = ({ lanes }) => {
  return (
    <div className={styles.LanesContainer}>
	    <div className={styles.lanes}>
	      {lanes.map(lane =>
	        <Lane className='lane' key={lane.id} lane={lane} />
	      )}
	    </div>
    </div>
  )
}

Lanes.propTypes = {
  lanes: PropTypes.array,
};

export default Lanes;
