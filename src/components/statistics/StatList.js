import PropTypes from 'prop-types';
import css from 'components/statistics/Statistics.module.css'
import {Statistics} from 'components/statistics/Statistics';
export const StatList = ({stats})=> {
    return (
        // <section className={css.statistics}>
            <ul className={css.statList}>
                {stats.map(stat => (
                    <li className={css.item } key={stat.id}>
                        <Statistics  
                        label = {stat.label}
                        percentage = {stat.percentage}
                        />   
                    </li>
                ))} 
            </ul>
        // </section>
    );
}




// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
//   }


StatList.propTypes = {
    stats:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
};