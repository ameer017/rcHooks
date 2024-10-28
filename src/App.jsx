import { useEffect, useState } from "react";
import useWindowWidth from "./hook/useWindowWidth";
// import useFetch from "./hook/useFetch";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const width = useWindowWidth();

  // const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        // console.log(response.data)
        // const data = await response.json();
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <p className="text-sm text-gray-500 mb-8">Window width: {width}px</p>

      {/* {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>} */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/*         {users && users.map((user) => ( */}
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-700">{user.email}</p>
            <p className="text-gray-500">{user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
