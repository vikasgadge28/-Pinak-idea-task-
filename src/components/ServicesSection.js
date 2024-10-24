/** @format */

import React from "react";
import Card from "./Cards";
const serviceData = [
  {
    title: "Emergency Plumbing Services",
    description:
      "Our plumbers are ready to go 24/7 for emergencies - including nights, weekends, and holidays.",
    icon: "https://img.freepik.com/premium-vector/ringing-phone-icon-3d-illustration-isolated-white-background_593228-95.jpg?w=740",
    link: "#",
  },
  {
    title: "Plumbing and Drains",
    description:
      "As the largest plumbing and drain service company, we make thousands of repairs every day.",
    icon: "https://cbx-prod.b-cdn.net/COLOURBOX43119674.jpg?width=1200&height=1200&quality=70",
    link: "#",
  },
  {
    title: "Water Damage",
    description:
      "Our teams are equipped with state-of-the-art water extraction and cleanup equipment.",
    icon: "https://as1.ftcdn.net/v2/jpg/00/96/93/40/1000_F_96934079_NnI7vUzC4f3q4Z15ZA3OoC7sG9cRNELb.jpg",
    link: "#",
  },
  {
    title: "Water Heaters",
    description:
      "Trust Roto-Rooter for repair and replacement of gas, electric, and tankless water heaters.",
    icon: "https://cdn-icons-png.freepik.com/128/899/899311.png",
    link: "#",
  },
];

const ServicesSection = () => {
  return (
    <div className="section bg-primary p-16 ">
      <h2 className="text-4xl font-bold text-white  mb-8 ">Our Services</h2>
      <div className="grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-8">
        {serviceData.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
