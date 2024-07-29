import React from "react";
import ImageSlider from "../components/TestLayout/imageSlider";
import images from "../dummyData/images.json";
import content from "../dummyData/content.json";

export const TestLayout: React.FC = () => {
  return (
    <>
      <div className="px-4 py-4 sm:px-12 lg:px-32">
        <ImageSlider images={images} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.map((item) => (
            <div key={item.id} className="p-4 bg-gray-100 border-2 rounded-2xl">
              <h2 className="mb-3 text-xl font-bold">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
              <p className="pt-3 text-sm font-semibold text-gray-500">
                Last Updated {item.lastUpdated}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
