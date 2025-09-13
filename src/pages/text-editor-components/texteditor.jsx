import  {React, useCallback, useState } from 'react'
import { createEditor, Editor } from 'slate'
import { Slate, Editable, withReact, useSlate ,ReactEditor } from 'slate-react'
import { Toolbar } from './toolbar'

export default function TextEditor(){
  const Leaf= props =>{
    console.log(props.Leaf)

   
    return(
      <span {...props.attributes}
      style={{display:'block',
              fontWeight:props.leaf.bold? 'bold' : 'normal',
              fontStyle:props.leaf.italic?'italic' : 'normal',
              textAlign:props.leaf.align || 'start',
            }}
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
    <div className='h-screen font-CabinetGrotesk-Bold overflow-x-hidden bg-[#f8f8f8]   ' style={{
         
              
}}>

       
        <Slate editor={editor} initialValue={value} onChange={setvalue} >
          
          <Toolbar></Toolbar>
          

          <Editable
          style={{fontFamily:'CabinetGrotesk-Regular',
                  Height:'100%',
                  width:'80%', 
                  marginTop: '6rem',
                  backgroundColor:'white',
                  boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.25)',
                  border:'0',outline:'none',
                  padding:'40px',
                  placeSelf:'center',
                  fontSize:'18px',
                  overflowY:'hidden',
                  }}

          onPaste={event => {
          event.preventDefault();
          const text = event.clipboardData.getData('text/plain');
          editor.insertText(text);
        }}
          
          
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