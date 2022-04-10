import React from "react";

export const SearchResults = ({ localState, searchTerm }) => {
  return (
    <div className="">
      {localState && (
        <div className="">
          {localState?.results?.map(({ title, link, description }, index) => (
            <div key={index} className="mb-4">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-2xl text-blue-500 hover:underline">
                  {title}
                </p>
              </a>
              <p>
                {description.length > 30
                  ? description.substring(0, 80) + "..."
                  : description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
