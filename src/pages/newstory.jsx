import { Toolbar } from "./text-editor-components/toolbar";
import TextEditor from "./text-editor-components/texteditor";
import Header from './text-editor-components/header.jsx'
import Sidebar from "./dashboard-components/sidebar.jsx";
export default  function Newstory(){
  return(
  <>
  <div className="flex flex-row">
    <div className="flex flex-1 h-200 p-4">
       <Sidebar/>
    </div>

    <div className="flex flex-11 p-10  justify-center flex-col">
      <Header></Header>

      <TextEditor></TextEditor>
    </div>

  </div>
  
  </>
  )

}