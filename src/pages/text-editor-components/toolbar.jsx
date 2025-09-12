import { useSlate } from "slate-react";
import React, { useEffect, useState } from 'react'
import { createEditor, Editor ,Text , Transforms} from 'slate'
import { useSlateSelection, ReactEditor  } from 'slate-react'

import { ImBold } from "react-icons/im";
import { FaItalic } from "react-icons/fa";

import { MdOutlineFormatAlignLeft,MdFormatAlignRight ,MdFormatAlignCenter,MdOutlineFormatAlignJustify} from "react-icons/md";

import { CiBoxList } from "react-icons/ci";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";



export const Toolbar =()=>{
  const selection = useSlateSelection(); 
  
  const [background,setbackground] = useState('#333446');
  const [text,setText] = useState('')
  const editor = useSlate();  
   


   
           const isBold= () =>{
              if (!selection) return false;
              const [match] = Editor.nodes(editor, {
              at:editor.selection,
              match: n => Text.isText(n) && n?.bold === true,
              mode:'all',
              
            });
            return !!match;
          };

           const isItalic= () =>{
              if (!selection) return false;
              const [match] = Editor.nodes(editor, {
              at:editor.selection,
              match: n => Text.isText(n) && n?.italic === true,
              mode:'any',
              
            });
            return !!match;
          };

          const isCenter = ()=>{
             if (!selection) return false;
              const [match] = Editor.nodes(editor, {
              at:editor.selection,
              match: n => Text.isText(n) && n?.center === true,
              mode:'any',
              });
              console.log("Text-centered");
              return !!match;

            
          };
          const isStart = ()=>{
             if (!selection) return false;
              const [match] = Editor.nodes(editor, {
              at:editor.selection,
              match: n => Text.isText(n) && n?.start === true,
              mode:'any',
              });
              return !!match;

            
          };

          const isEnd = ()=>{
             if (!selection) return false;
              const [match] = Editor.nodes(editor, {
              at:editor.selection,
              match: n => Text.isText(n) && n?.end === true,
              mode:'any',
              });
              return !!match;

            
          };



          
    
      
          useEffect(()=>{
                  setbackground(isBold() ? '#EAEFEF' : '#333446');
                  setText(isBold() ? '#333446' : 'white');

          })
             
      
    
          
        const togglebold=(editor)=>{  
          if(isBold()){
            Editor.removeMark(editor,'bold');
       
          }else{
            Editor.addMark(editor,'bold',true);
          
          }
        }
        
        
    
      const toggleitalic = (editor) =>{
        
        if(isItalic()){
          Editor.removeMark(editor,'italic');
        }else{
          Editor.addMark(editor,'italic',true);
          
        }
      }


      const toggleAlign = (allignment) => {
      if (!editor.selection) return;

      Transforms.setNodes(
        editor,
        { align: allignment},
        {
          match: n => Text.isText(n),
          split: true,
        }
      );
    };
      


    
    return(
      <>
      

      <div className="p-3 bg-white gap-0 my-4 rounded-sm shadow-xl  flex flex-row items-center fixed z-1000 w-3/4 left-10 lg:left-50 " >
            <div className="flex flex-row flex-1">


               <select className=" px-3 justify-center align-center  h-10 bg-[#f8f8f8] hover:cursor-pointer shadow-xl mx-4 "
                    style={{borderRadius:'2px'}}>
              {[{type:"Select Text",function:""},
                {type:"Heading 1",function:""},
                {type:"Heading 2" , function:""},
                {type:"Heading 3",function:""},
                {type:"Paragraph",function:""},].map((item , i)=>(
                  
                      <option className=" bg-[#f8f8f8] p-2">{item.type}</option>
                  
              ))}

            </select>



              <button  className={`p-2 m-0   bg-${background}   hover:cursor-pointer `}
                  style={{backgroundColor:background,borderRadius:'2px' , color:text ,margin:'2px'}}
                  onMouseDown={event=>{
                  event.preventDefault();
                  ReactEditor.focus(editor);
                    setTimeout(() => {
                    togglebold(editor);
                    ;
                  }, 0);
                  console.log('Bold')
                }}> 
                  <ImBold />
              </button> 

              <button className={`p-2 mx-11/12  hover:cursor-pointer`}
              style={{backgroundColor:isItalic() ? '#EAEFEF' : '#333446' , color:isItalic() ? '#333446' : 'white' , borderRadius:'2px' ,margin:'2px'}}
                onMouseDown={event=>{
                  event.preventDefault();
                  ReactEditor.focus(editor);
                    setTimeout(() => {
                    toggleitalic(editor);
              
                  }, 0);
                  console.log('Italic')
                }}
                >
                  <FaItalic/>

              </button>
              

          </div>

          <div className="flex flex-1 justify-center">
            <LiaGripLinesVerticalSolid className="items-center h-6 w-6 bg-[#ffffff]"/>

          </div>
          

            <div className="flex flex-2 justify-center gap-3  items-center ">
              
                <button className=" p-1 bg-[#333446] text-white hover:cursor-pointer" style={{borderRadius:'2px'}} 
                onMouseDown={event=>{
                  event.preventDefault();
                  ReactEditor.focus(editor);
                    setTimeout(() => {
                    toggleAlign('start');
                    ;
                  }, 0);
                  
                  
                }}>
                  <MdOutlineFormatAlignLeft className=" h-5 w-5  "
                  />
                </button>
                <button className=" p-1 bg-[#333446] text-white hover:cursor-pointer" style={{borderRadius:'2px'}}> 
                  <MdFormatAlignRight className=" h-5 w-5 "/>
                </button>

                <button className=" p-1 bg-[#333446] text-white hover:cursor-pointer" style={{borderRadius:'2px'}} 
                  onMouseDown={event=>{
                  event.preventDefault();
                  ReactEditor.focus(editor);
                    setTimeout(() => {
                    toggleAlign('center');
                    ;
                  }, 0);
                  
                  
                }}> 
                  <MdFormatAlignCenter className=" h-5 w-5 "/>
                </button>

                <button className=" p-1 bg-[#333446] text-white hover:cursor-pointer" style={{borderRadius:'2px'}}>
                  <MdOutlineFormatAlignJustify className=" h-5 w-5 "/>
                </button>

            </div>

            <div className="flex justify-center  flex-1">
              <LiaGripLinesVerticalSolid className="items-center h-6 w-6 bg-[#ffffff]"/>

            </div>

           

            <div className="flex flex-1  mx-5 gap-3  items-center">
                <button className=" p-1 bg-[#333446] text-white hover:cursor-pointer" style={{borderRadius:'2px'}}>
                    <CiBoxList className=" h-5 w-5 "/>
                </button>

            </div>

            <div className="flex-4">

            </div>

      </div>
      </>
    )
    }
