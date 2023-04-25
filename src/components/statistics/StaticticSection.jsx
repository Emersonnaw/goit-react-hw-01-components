import  css from 'components/statistics/Statistics.module.css'
export const StatisticSection = ({title, children}) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            {children}
        </section>
    );
}