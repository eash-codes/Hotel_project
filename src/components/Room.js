import React from "react";

// link
import { Link } from "react-router-dom";

//icons
import { BsArrowsFullscreen, BsPeople} from "react-icons/bs";

const Room = ({room}) => {
   //destructure room
   const {id, name, image, size, maxPerson, description, price} = room;
    return  (
    <div className="bg-white shadow-2xl min-h-[500px] group">
        {/*img*/}
        <div className="overflow-hidden">
            <img className='group-hover:scale-110 transistion-all duration-300 w-full ' 
            src={image} 
            alt="" 
            />
        </div>
        {/*details*/}
        <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px]">details</div>
    </div> 
    );
};
 
export default Room;