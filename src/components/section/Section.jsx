import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.container}>
      <div>
        <div className={css.heading}>
          <h1>{title}</h1>
        </div>
      </div>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Section };
