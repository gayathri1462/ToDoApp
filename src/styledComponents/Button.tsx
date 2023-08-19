import { styled } from "./index";

interface ButtonProps {
  inputValue: string;
}

export const Button = styled.button`
  min-width: 10%;
  background-color: ${(props: ButtonProps) =>
    props.inputValue.length ? "#068fff " : "#eeeeee"};
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  color: ${(props: ButtonProps) =>
    props.inputValue.length ? "#eeeeee " : "#61677A"};
  padding: 0.75em;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: ${(props: ButtonProps) =>
    props.inputValue.length ? "pointer" : "not-allowed"};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25em;

  &:hover {
    background-color: ${(props: ButtonProps) =>
      props.inputValue.length ? "#eeeeee " : "#eeeeee"};
    color: ${(props: ButtonProps) =>
      props.inputValue.length ? "#068fff " : "#61677A"};
    border: ${(props: ButtonProps) =>
      props.inputValue.length ? "1px solid #068fff " : "none"};
  }
`;

export const RemoveAllButton = styled.button`
  min-width: 10%;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  background-color: red;
  color: #fff;
  padding: 0.75em;
  margin: 0.5em 0em;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25em;

  &:hover {
    background-color: #fff;
    color: red;
    border: 1px solid red;
  }
`;
