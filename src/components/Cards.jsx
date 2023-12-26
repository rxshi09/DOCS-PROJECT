import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Cards({ data , reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}}className="relative w-56 h-60 rounded-[40px] flex-shrink-0 bg-zinc-800 text-white p-5 overflow-hidden">
      <FaFileAlt />
      <p className="text-sm font-semibold mt-5">{data.desc} </p>
      <div className="footer absolute w-full min-h-[55px] bottom-0 left-0 ">
        <div className="flex justify-between py-3 align-center m-5 -mb-2">
          <div>{data.Filesize}</div>
          <span className="mb-5">
            {data.Close ? <IoCloseCircleSharp size={25}/> : <FaDownload />}
            {/* <FaDownload /> */}
          </span>
        </div>
        {
          data.tag.isOpen ? (
            <div className={`tag w-full h-10 top-1/2 left-1/2 ${data.tag.Tagcolor === "Green" ? "bg-green-600" : "bg-sky-600"}`}>
          <h1 className="text-md flex items-center justify-center mt-6d">
          <h1 className="mt-1 text-ll">
           {data.tag.TagTitle }
          </h1>
          </h1>
        </div>

          ) : null
        }
      </div>
    </motion.div>
  );
}

export default Cards;
