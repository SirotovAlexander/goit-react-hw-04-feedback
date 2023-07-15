import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.mid}>
      {options.map(option => {
        const classes = {
          good: css.good,
          neutral: css.neutral,
          bad: css.bad,
        };

        return (
          <div className={css.media} key={option}>
            <button
              name={option}
              className={classes[option]}
              onClick={onLeaveFeedback}
            ></button>
          </div>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  option: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { FeedbackOptions };
