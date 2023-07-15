import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      <ul className={css.statistics__list}>
        <li className={css.statistics__item} value={good}>
          Good:{good}
        </li>
        <li className={css.statistics__item} value={neutral}>
          Neutral:{neutral}
        </li>
        <li className={css.statistics__item} value={bad}>
          Bad:{bad}
        </li>
        <li className={css.statistics__item}>Total:{total}</li>
        <li className={css.statistics__item}>
          Positive feedbacks:{positivePercentage + '%' || 0}
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export { Statistics };
