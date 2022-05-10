import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ data, handleFilter }) => {
    return (
        <>
            <label className={s.label}>
                <span className={s.title}>Find contacts by name</span>
                <input
                    type="text"
                    name="filter"
                    className={s.input}
                    value={data}
                    onChange={handleFilter}
                />
            </label>
        </>
    );
};

export default Filter;

Filter.propTypes = {
    data: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
};
