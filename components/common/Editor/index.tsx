import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  convertToRaw,
  EditorState,
  ContentState,
  convertFromHTML,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Wrapper, Label } from "./styles";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
// type Props = {
//   name?: string;
//   value?: string;
//   onBlur?: () => void;
//   onChange?: (inpuText: string) => void;
// };
const EditorConvertToHTML = (props: any): JSX.Element => {
  const initState = props?.defaultValue
    ? ContentState.createFromBlockArray(
        convertFromHTML(props?.defaultValue).contentBlocks,
        convertFromHTML(props?.defaultValue).entityMap
      )
    : EditorState.createEmpty();
  const [editorState, setEditorState] = useState<EditorState>(
    props?.defaultValue
      ? EditorState.createWithContent(initState)
      : EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState:any) => {
    setEditorState(editorState);

    return props.onChange(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  return (
    <Wrapper>
      <Editor
        //@ts-ignore
        editorState={editorState}
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        //@ts-ignore
        // eslint-disable-next-line react/jsx-key
        toolbar={{
          options: ["inline", "blockType", "fontSize", "list", "link"],
          inline: {
            options: [
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "monospace",
            ],
          },
          list: {
            options: ["unordered", "ordered"],
          },
        }}
      />
    </Wrapper>
  );
};

export default EditorConvertToHTML;
