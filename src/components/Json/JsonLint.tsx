import { Editor, Monaco } from "@monaco-editor/react";
import { useRef } from "react";
import backButton from '../../assets/left-arrow.png';
import useGoBack from "../navigations/useGoBack";
import { formatJSON } from "./formatJSON";

function JsonLint() {
  const editorRef = useRef<Monaco>();
  const defaultMessage = {
    " message ": " Paste your json "
  }
  const handleFormatClick = () => {
    const monaco = editorRef.current;
    if (monaco) {
      const editor = monaco.editor.getModels()[0]; // Assuming there is only one editor instance
      if (editor) {
        const currentValue = editor.getValue();
        const formattedValue = formatJSON(currentValue);
        console.log(formattedValue)
        editor.setValue(formattedValue);
      }
    }
  };

  return (<><div className="json-container">
    <button onClick={useGoBack()} className="backButton">
      <img src={backButton} alt="Back" />
    </button>
    <Editor
      width="500px"
      height="500px" theme="hc-light" defaultLanguage="json" defaultValue={JSON.stringify(defaultMessage)}
      onMount={(editor, monaco) => {
        editorRef.current = monaco; // Save the Monaco instance
      }} />
    <button type="button" className="btn json-format" onClick={handleFormatClick}>
      Format
    </button>
  </div></>)
}
export default JsonLint;