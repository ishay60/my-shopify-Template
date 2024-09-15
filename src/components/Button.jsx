import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
