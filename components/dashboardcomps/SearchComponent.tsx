import { useState, ReactNode } from "react";

interface SearchComponentProps {
  content: (string | number | ReactNode)[];
}

const SearchComponent: React.FC<SearchComponentProps> = ({ content }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredContent = content.filter((item) => {
    if (typeof item === "string") {
      return item.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (typeof item === "number") {
      return item.toString().toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      if (item && typeof item === "object" && "props" in item) {
        return (
          item.props.children &&
          item.props.children
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
      }
      return false;
    }
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an exercise."
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="mt-4">
        {filteredContent.length > 0 ? (
          filteredContent.map((item, index) => (
            <div key={index} className="text-gray-800">
              {item}
            </div>
          ))
        ) : (
          <p className="text-gray-800"></p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
