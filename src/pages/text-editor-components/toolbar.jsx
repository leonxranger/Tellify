import { useSlate } from "slate-react";
import React, { useState } from 'react'
import { createEditor, Editor } from 'slate'
import { Slate, Editable, withReact , ReactEditor  } from 'slate-react'


export const Toolbar =()=>{
    const editor = useSlate();
     const togglebold = (editor) =>{
        
        const isBold = Editor.marks(editor)?.bold === true;
        if(isBold){
          Editor.removeMark(editor,'bold',true);
        }else{
          Editor.addMark(editor,'bold',true);
        }
      }
    
      const toggleitalic = (editor) =>{
        const isitalic = Editor.marks(editor)?.italic === true;
        if(isitalic){
          Editor.removeMark(editor,'italic',true);
        }else{
          Editor.addMark(editor,'italic',true);
        }
      }
      


    
    return(
      <>

      <div className="p-4 bg-white my-4 rounded-md shadow-sm gap-3 flex ">



       <button className='p-1 px-4 border-2 rounded-md'
          onMouseDown={event=>{
          event.preventDefault();
          ReactEditor.focus(editor);
            setTimeout(() => {
            togglebold(editor);
            ;
          }, 0);
          console.log('Bold')
        }}> 
          Bold
      </button> 

      <button className='p-1 px-4 border-2 rounded-md'
        onMouseDown={event=>{
          event.preventDefault();
          ReactEditor.focus(editor);
            setTimeout(() => {
            toggleitalic(editor);
            ;
          }, 0);
          console.log('Bold')
        }}
        >
          Italic

      </button>

      </div>
      </>
    )

  }