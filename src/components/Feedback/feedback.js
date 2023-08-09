import { ButtonFeedback } from './feedback.styled';

export const FeedbackOption = ({ options, onLeaveFeedback }) => (<div>
    {options.map((option) => (
      <ButtonFeedback key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </ButtonFeedback>
    ))}

  </div>)
