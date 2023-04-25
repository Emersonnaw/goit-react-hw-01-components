import PropTypes from 'prop-types';
import css from 'components/statistics/Statistics.module.css'
export const Statistics =({label,percentage})=> {
    return(
        <>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
        </>
        
    );
}


Statistics.propTypes ={
    label:PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};