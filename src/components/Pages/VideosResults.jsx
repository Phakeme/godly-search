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
              <div key={index} className="mb-3">
                <div key={index} className="mt-2">
                  {domain}
                </div>
                <a href="">
                  <p className="text-2xl text-blue-500 hover:underline mb-2">
                    {description.length > 60
                      ? description.substring(0, 60) + "..."
                      : description}
                  </p>
                </a>
                <div className="flex flecx-row flex-wrap">
                  <div className="mr-5 mb-2">
                    <ReactPlayer
                      url={additional_links?.[0]?.href}
                      controls
                      width="355px"
                      height="200px"
                    />
                  </div>
                  <div className="flex flex-col flex-wrap w-96">
                    <p className="text-sm my-2">
                      <strong>{title}</strong>
                    </p>
                    <p className="">{description}</p>
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

{
  /* <div className="flex flex-wrap ">
{results?.results?.map((video, index) => (
  <div key={index} className="p-2">
    <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
  </div>
))}
</div> */
}
