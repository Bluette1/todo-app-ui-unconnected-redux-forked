import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';
import VISIBILITY_FILTERS from '../constants';
import { setFilter } from '../redux/actions';

const VisibilityFilters = ({ activeFilter, setFilter }) => (
  <div className="visibility-filters">
    {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
      const currentFilter = VISIBILITY_FILTERS[filterKey];
      return (
        <span
          role="status"
          aria-hidden="true"
          key={`visibility-filter-${currentFilter}`}
          className={cx(
            'filter',
            currentFilter === activeFilter && 'filter--active',
          )}
          onClick={() => { setFilter(currentFilter); }}
          onKeyDown={() => { setFilter(currentFilter); }}
        >
          {currentFilter}
        </span>
      );
    })}
  </div>
);

const mapStateToProps = state => ({ activeFilter: state.visibilityFilter });

VisibilityFilters.propTypes = {
  setFilter: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  { setFilter },
)(VisibilityFilters);
