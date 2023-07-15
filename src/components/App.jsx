import { useState } from 'react';
import { Statistics } from './stats/Statistics';
import { Section } from './section/Section';
import { FeedbackOptions } from './buttons/FeedbackOptions';
import { Notification } from './message/Notification';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    const name = event.target.name;
    if (name === 'good') {
      return setGood(good + 1);
    } else if (name === 'neutral') {
      return setNeutral(neutral + 1);
    } else if (name === 'bad') {
      return setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return Math.round((100 / total) * good || 0);
  };

  return (
    <div className={css.content}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>

      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
