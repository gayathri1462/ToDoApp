import { styled } from "./index";

interface conatinerProps {
  isComplete: boolean;
}

export const TodoItemContainer = styled.div`
  width: 100%;
  border: 1px solid #068fff;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  color: #000;
  padding: 1em;
  border-radius: 6px;
  margin: 1em 0em;
  display: flex;
  flex-direction: column;

  .topContentDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 0em;
    gap: 1em;
  }

  h3 {
    overflow-wrap: break-word;
    word-break: break-all;
  }

  .btmContentDiv {
    padding-top: 0.5em;
    color: #61677a;
  }

  .buttonContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.25em;
  }
`;

export const CompletedContainer = styled(TodoItemContainer)`
  h3 {
    text-decoration: ${(props: conatinerProps) =>
      props.isComplete ? "line-through" : "none"};
  }
`;
