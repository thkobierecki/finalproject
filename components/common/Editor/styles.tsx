import styled from "styled-components";

export const Label = styled.div`
  margin: 10px 0px 10px 10px;
  font-size: 12px;
  text-transform: capitalize;
  @media (max-width: 500px) {
    margin: 10px 0px;
  }
`;
export const Wrapper = styled.div`
  border-radius: 2px;
  margin-top: 10px;
  border: none;
  color: #000;
  box-shadow: 0 0 0 2px rgb(0 0 0 / 10%);
  padding: 10px 5px 0 5px;
  @media (max-width: 500px) {
    margin: 10px 0px;
  }
  .editor {
    box-sizing: border-box;
    border: none;
    cursor: text;
    padding: 45px;
    margin-bottom: 2em;
    background: transparent;
    min-height: 240px;
    position: relative;
  }

  .editor :global(.public-DraftEditor-content) {
    min-height: 240px;
  }

  .demo-editor {
    height: 40vh !important;
    max-height: 40vh;
    padding: 10px 15px;
    border: none;
  }

  .rdw-option-wrapper {
    border: none !important;
    width: 20px !important;
    height: 20px !important;
    min-width: 20px;
    padding: 2px;
  }
  .rdw-block-dropdown {
    width: 90px;
    font-size: 12px;
  }
  .rdw-dropdown-optionwrapper:hover {
    box-shadow: none;
  }
  .rdw-option-wrapper img {
    /* max-width: 100%;
    max-height: 100%; */
  }
  .rdw-option-wrapper:hover,
  .rdw-option-active {
    background-color: lightgray;
    box-shadow: none !important;
  }

  .rdw-dropdown-wrapper:hover {
    box-shadow: none !important;
  }

  .rdw-editor-toolbar {
    border: none !important;
  }
`;
