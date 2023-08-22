import Header from "./components/Header";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function Community() {
  return (
    <div className="font-sans   p-4">
      <Header />
      <h1 className="font-medium text-center text-cyan-500 md:text-xl">
        Welcome to Community!
      </h1>
      <div className="flex justify-center items-center mt-2 ">
        <p
          className="
     text-gray-600 text-small
        text-center  shadow-md  p-2 rounded-full"
        >
          remember youre not alone here!
        </p>
      </div>

      <PostForm />

      <Posts />
    </div>
  );
}

export default Community;
