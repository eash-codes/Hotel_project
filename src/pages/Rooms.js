import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import Room from "../components/Room";
import { ClipLoader } from 'react-spinners'; // Ensure this is installed and imported correctly

const Rooms = () => {
    const { rooms, loading } = useContext(RoomContext); // Extract loading from context

    return (
        <section className="bg-white py-24">
            {/* Overlay and spinner */}
            {loading && (
                <div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex items-center justify-center">
                    <ClipLoader color="#ffffff" size={50} />
                </div>
            )}
            <div className="container mx-auto lg:px-0">
                {/* Grid */}
                <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
                    {rooms.map((room) => (
                        <Room room={room} key={room.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rooms;
