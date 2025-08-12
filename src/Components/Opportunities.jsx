import React from "react";

const Opportunities = () => {
  const items = [
    "Be part of the Train-the-Trainer (ToT) network",
    "Lead sensitization drives in your district or institution",
    "Ignite innovation in every home across Andhra Pradesh",
  ];

  return (
    <section
      className="py-12 text-center text-white"
      style={{
        background: "linear-gradient(99.96deg, #142E46 0%, #26425C 100%)",
        boxShadow: "0px 0px 20px 10px #FFFFFF33 inset",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-6">
        <h2 className="text-3xl sm:text-2xl md:text-5xl font-bold mb-8 tracking-wide">
          OPPURTUNITIES
        </h2>

        <div className="flex flex-col gap-6">
          {items.map((text, index) => (
            <div key={index} className="relative">
              <p className="text-sm sm:text-base md:text-2xl">{text}</p>
              {index !== items.length - 1 && (
                <div
                  className="mt-4"
                  style={{
                    borderTop: "2px solid",
                    borderImageSource:
                      "linear-gradient(90deg, rgba(24, 50, 74, 0.6) 0%, rgba(255, 255, 255, 0.6) 50.48%, rgba(35, 62, 88, 0.6) 100%)",
                    borderImageSlice: 1,
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>    
    </section>
  );
};

export default Opportunities;
