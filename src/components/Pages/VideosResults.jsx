import React from "react";
import ReactPlayer from "react-player";

export const VideosResults = ({ localState, searchTerm }) => {
  return (
    <div className="">
      <p className="text-base mb-2 mt-2 text-gray-500">
        About {localState?.results?.length} results {searchTerm}
      </p>
      {localState && (
        <div className="flex flex-col flex-wrap">
          {localState?.results?.map(
            (
              { additional_links, description, title, cite: { domain } },
              index
            ) => (
              <div key={index} className="mb-3 flex flex-col flex-wrap w-full">
                <div className="mt-2 hidden md:block ">
                  <p>{domain}</p>
                  <a href="" className="w-full">
                    <p className="text md:text-xl text-blue-500 hover:underline mb-2">
                      {description.length > 60
                        ? description.substring(0, 60) + "..."
                        : description}
                    </p>
                  </a>
                </div>
                <div className="flex flex-col md:flex-row ">
                  <div className="mr-5 mb-0 w-64 md:w-96 h-52 object-contain">
                    <ReactPlayer
                      url={additional_links?.[0]?.href}
                      controls
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="w-full sm:w-64 lg:w-96 break-words">
                    <p className="text-sm my-2">
                      <strong>{title}</strong>
                    </p>
                    <p className="w-full hidden md:block">{description}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};
