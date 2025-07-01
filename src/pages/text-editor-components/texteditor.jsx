import  {React, useCallback, useState } from 'react'
import { createEditor, Editor } from 'slate'
import { Slate, Editable, withReact, useSlate ,ReactEditor } from 'slate-react'
import { Toolbar } from './toolbar'

export default function TextEditor(){
  const Leaf= props =>{
    console.log(props.Leaf)

   
    return(
      <span {...props.attributes}
      style={{fontWeight:props.leaf.bold? 'bold' : 'normal', fontStyle:props.leaf.italic?'italic' : 'normal'}}
      >
        {props.children}

      </span>
    )
  }

  const renderLeaf = useCallback(
    props =>{

    return(
      <Leaf {...props}></Leaf>

    )},[]
  )
    
    const [value,setvalue] =useState( [
      {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },
    ]
    )


  const [editor] = useState(() => withReact(createEditor()))


 



  return (
    // Add the editable component inside the context.
    <div className='h-screen  w-200 font-CabinetGrotesk-Bold overflow-x-hidden bg-cyan-400 '>

       

      



    <Slate editor={editor} initialValue={value} onChange={setvalue} className='h-10 w-10'>
      
      <Toolbar></Toolbar>
      

      <Editable
      style={{fontFamily:'CabinetGrotesk-Regular',minHeight:'10rem',marginTop: '3rem',backgroundColor:'white',boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.25);'}}
      
      
      renderLeaf={renderLeaf}
      onKeyDown={event=>{
        if(!event.ctrlKey){
          return;
        }else{
          switch(event.key){
            case 'b':
              event.preventDefault();
              togglebold(editor);
              break;
          }
        }
        
      }}/>

     

    </Slate>
    </div>
  )


}