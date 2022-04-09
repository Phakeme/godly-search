import React from "react";

export const NewsResults = ({ localState, searchTerm }) => {
  return (
    <div className="">
      <p className="text-base mb-2 mt-2 text-gray-500">
        About {localState?.entries?.length} results {searchTerm}
      </p>
      {localState && (
        <div>
          {localState?.entries?.map(({ title, link, published }, index) => (
            <div key={index} className="mb-4">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-xl text-blue-500 hover:underline">{title}</p>
              </a>
              <p>{published}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
