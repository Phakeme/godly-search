import { Link } from "react-router-dom";

export const EachLink = ({ btn, path, label }) => {
  return (
    <Link to={path}>
      {btn ? (
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          {label}
        </button>
      ) : (
        label
      )}
    </Link>
  );
};
