import React from "react";
import smartedge from "../assets/home.png";
import smartedgeProduct from "../assets/product.png";
import smartedge3DModel from "../assets/smartEdgeWatch.mp4";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      type: "image",
      src: smartedge,
      link: "https://smart-edge.store/",
    },
    {
      id: 2,
      type: "image",
      src: smartedgeProduct,
      link: "https://smart-edge.store/#/smart-watches",
    },
    {
      id: 3,
      type: "video",
      src: smartedge3DModel, 
      link: "https://smart-edge.store/#/smartWatch-3d",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, type, src, link }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                {type === "image" ? (
                  <img
                    src={src}
                    alt={`project-${id}`}
                    className="w-full h-64 object-cover transform transition duration-300 hover:scale-105"
                  />
                ) : (
                  <video
                    src={src}
                      autoPlay
                      loop
                      muted
                      playsInline
                    className="w-full h-64 object-cover transform transition duration-300 hover:scale-105"
                  />
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

