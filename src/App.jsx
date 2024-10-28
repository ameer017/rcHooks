import { useState } from "react";
import useWindowWidth from "./hook/useWindowWidth";
import useFetch from "./hook/useFetch";

const App = () => {
  const [endpoint, setEndpoint] = useState("users");
  const { data, loading, error } = useFetch(endpoint);
  const width = useWindowWidth();

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Data List</h1>
      <p className="text-sm text-gray-500 mb-8">Window width: {width}px</p>

      <div className="mb-4">
        <button
          onClick={() => setEndpoint("users")}
          className="bg-blue-500 text-white px-4 py-2 rounded m-2"
        >
          Users
        </button>
        <button
          onClick={() => setEndpoint("posts")}
          className="bg-blue-500 text-white px-4 py-2 rounded m-2"
        >
          Posts
        </button>
        <button
          onClick={() => setEndpoint("comments")}
          className="bg-blue-500 text-white px-4 py-2 rounded m-2"
        >
          Comments
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data &&
          endpoint === "users" &&
          data.map((user) => (
            <div key={user.id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-700">{user.email}</p>
              <p className="text-gray-500">{user.address.city}</p>
            </div>
          ))}

        {data &&
          endpoint === "posts" &&
          data.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </div>
          ))}

        {data &&
          endpoint === "comments" &&
          data.map((comment) => (
            <div key={comment.id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold">{comment.name}</h2>
              <p className="text-gray-700">{comment.body}</p>
              <p className="text-gray-500">{comment.email}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
