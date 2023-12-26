import React, { useRef, useState } from "react";
import Cards from "./Cards";

function Foreground() {
  const ref = useRef()
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat",
      Filesize: ".9mb",
      Close: false,
      tag:{isOpen: true ,TagTitle:"Download Now ",Tagcolor:"Green"}, 
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat",
      Filesize: ".9mb",
      Close: false,
      tag:{isOpen: true ,TagTitle:"Upload",Tagcolor:"blue"}, 
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat",
      Filesize: ".9mb",
      Close:true,
      tag:{isOpen: false,TagTitle:"Download Now",Tagcolor:"Green"}, 
    },
  ];
  useState();
  return (
    <div ref={ref} className=" fixed w-full top-0 left-0 h-full z-[3] flex gap-10 flex-wrap p-6 ">
      {data.map((item,index)=>(
        <Cards data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
