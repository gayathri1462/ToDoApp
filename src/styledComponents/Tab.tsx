import { styled } from "./index";

interface TabProps {
  selected: boolean;
}

export const Tab = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  color: ${(props: TabProps) => (props.selected ? "#068fff " : "#61677A")};
  padding: 0.75em;
  border-bottom: ${(props: TabProps) =>
    props.selected ? "3px solid #068fff " : "3px solid #eeeeee"};
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.75em;

  span {
    border-radius: 50%;
    width: 2em;
    height: 2em;
    padding: 0.25em;
    font-size: 0.75em;
    text-align: center;
    color: ${(props: TabProps) => (props.selected ? "#fff " : "#fff")};
    background-color: ${(props: TabProps) =>
      props.selected ? "#068fff " : "#61677A"};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
