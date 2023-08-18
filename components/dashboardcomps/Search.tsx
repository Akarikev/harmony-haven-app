import Quotes from "./Quotes";
import SearchComponent from "./SearchComponent";

const Search: React.FC = () => {
  // Define components that you want to render based on the search results
  // eslint-disable-next-line react/jsx-key
  const componentsToRender = [<Quotes />];

  return (
    <div className="container mx-auto py-10">
      <SearchComponent content={componentsToRender} />
    </div>
  );
};

export default Search;
