import React from "react";

export const ImagesResults = ({ localState, searchTerm }) => {
  return (
    <div className="">
      <p className="text-base mb-1 mt-2 text-gray-500">
        About {localState?.image_results?.length} results {searchTerm}
      </p>
      {localState && (
        <div className="grid grid-cols-2 xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2    grid-flow-cols auto-cols-auto auto-cols-min gap-4 grid-flow-row ">
          {/* <div className="flex flex-wrap justify-center items-center bg-red-200"> */}
          {localState?.image_results?.map(
            (
              { image, link: { domain, href, title }, image: { src, alt } },
              index
            ) => (
              <a
                href={href}
                target="_blank"
                key={index}
                rel="noreferrer"
                className="flex flex-col items-center"
              >
                <img src={image?.src} alt={title} loading="lazy" />

                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
};

{
  /* <a
href={href}
target="_blank"
key={index}
rel="noreferrer"
className="sm:p-3 p-5"
> */
}
