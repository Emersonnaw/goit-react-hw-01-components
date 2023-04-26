import PropTypes from 'prop-types';
import  css from 'components/statistics/StatisticSection.module.css'
export const StatisticSection = ({title, children}) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            {children}
        </section>
    );
}


StatisticSection.propTypes = {
title: PropTypes.string,
children: PropTypes.object.isRequired
};