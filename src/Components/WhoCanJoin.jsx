import startupImage from "../Images/w2.jpg";
import innovationImage from "../Images/w3.jpg";
import facultyImage from "../Images/w1.jpg";
import studentsImage from "../Images/w4.jpg";

import React from "react";

const WhoCanJoin = () => {
  const items = [
    {
      img: startupImage,
      title: "STARTUP FOUNDERS",
      desc: "Share your real-world experiences & mentor young innovators",
    },
    {
      img: innovationImage,
      title: "INCUBATOR HEADS",
      desc: "Transform institutions into Innovation hubs",
    },
    {
      img: facultyImage,
      title: "FACULTY MEMBERS",
      desc: "Become certified Innovation Sarathis on your campuses",
    },
    {
      img: studentsImage,
      title: "STUDENTS",
      desc: "Join as AVISHKANDHRA Ambassadors and inspire peers",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">
          WHO CAN JOIN ?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1 relative"
            >
              {/* Image */}
              <div className="h-60 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="bg-[#283643] text-white p-6 text-center flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-lg mb-2 group-hover:text-[#f8a857] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-md leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoin;