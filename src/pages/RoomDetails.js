import React,{useContext} from "react";
import { useParams } from "react-router-dom";
//components

import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
//scroll to top

import ScrollToTop from "../components/ScrollToTop";

//context

import { RoomContext } from "../context/RoomContext";
//icons
import { FaCheck } from "react-icons/fa";


const RoomDetails = () => {
  const {rooms} = useContext(RoomContext)
  const { id } = useParams();
  

  //get room

  const room = rooms.find(room => {
    return room.id === Number(id)
  });
  console.log(room);

  //destructure
  const {name, description,facilities,imageLg,price}=room;
  return (
  <section >
    <ScrollToTop />
    {/* {banner} */}
    <div className="bg-room bg-cover bg-center h-[560px] reltive flex justify-center items-center">
      {/* {overlay} */}
      <div className="absolute w-full h h-full bg-black/70"></div>
      {/* {title} */}
      <h1 className="text-6xl text-white z-20 font-primary text center">
        {name} Details
      </h1>
    </div>
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row h-full py-24">
        {/* {left} */}
        <div className="w-full h-full lg:w-[60%] px-6 ">
          <h2 className="h2">{name}</h2>
          <p className='mb-8'>{description}</p>
          <img className="mb-8" src={imageLg} alt="" />
          {/* {facilities} */}
          <div className="mt-12">
            <h3 className="h3 mb-3">Room facilities</h3>
            <p className="mb-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus reiciendis quae molestias similique voluptate! Dicta exercitationem eius accusamus quos, facilis alias officia dolor doloremque? Quidem odio officiis qui provident distinctio!

            </p>
            {/* {grid} */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {facilities.map((item,index)=>{
                //destructure item

                const {name,icon }=item;
                return (
                <div className=' flex items-center gap-x-3'key={index}>
                  <div className="text-3xl text-accent">{icon}</div>
                  <div className="text-base">{name}</div>
                  </div>);
              })}
            </div>
          </div>
        </div>
        {/* {right} */}
        <div className="w-full h-full lg:w-[40%]">
         {/* {reservation}  */}
         <div className="py-8 px-6 bg-accent/20 mb-12">
          <div className="flex flex-col space-y-4 mb-4">
            <h3>Your Reservation</h3>
            <div>
              <CheckIn />
            </div>
            <div>
              <CheckOut />
            </div>
            <div>
              <AdultsDropdown />
            </div>
            <div>
              <KidsDropdown />
            </div>
            <button className="btn btn-lg btn-primary w-full">
              book now for Rs {price}
              </button>
          </div>
         </div>
        </div>
        
      </div>
    </div>
    </section>
);
  };
 
export default RoomDetails;