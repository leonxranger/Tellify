import { Toolbar } from "./text-editor-components/toolbar";
import TextEditor from "./text-editor-components/texteditor";
import Header from './text-editor-components/header.jsx'
export default  function Newstory(){
  return(
  <>
  <div className="flex flex-row">
    <div className="flex flex-1">
        navbar
    </div>

    <div className="flex flex-8  flex-col">
      <Header></Header>

      <TextEditor></TextEditor>
    </div>

  </div>
  
  </>
  )

}