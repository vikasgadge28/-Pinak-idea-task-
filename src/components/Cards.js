/** @format */

import React, { useRef } from "react";

const Card = ({ icon, title, description, link }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateY(360deg)";
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateY(0deg)";
    }
  };

  return (
    <div
      ref={cardRef}
      className=" flex flex-col justify-center items-center  mb-12 mt-10 bg-white shadow-lg p-[2vw] rounded-lg max-w-xs transition-transform duration-1000 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className=" p-[0.4vw] bg-white w-[6vw] h-[12v] -mt-16 overflow-hidden rounded-full object-contain border-4 border-primary ">
        <img className=" " src={icon} alt="icon" />
      </div>
      <h3 className="text-xl font-bold  mb-2">{title}</h3>
      <p className="text-gray-600  mb-4">{description}</p>
      <a
        href={link}
        className="text-primary hover:text-primary font-bold block">
        Explore This Service &rarr;
      </a>
    </div>
  );
};

export default Card;
