import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [reciters, setReciters] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchReciters = async () => {
      try {
        const response = await axios.get(
          "https://www.mp3quran.net/api/v3/reciters"
        );
        setReciters(response.data.reciters);
        console.log(response.data.reciters);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reciters:", error);
        setLoading(false);
      }
    };

    // Call the fetchReciters function when the component mounts
    fetchReciters();
  }, []); // The empty dependency array ensures this effect runs only once
  return (
    <div>
      <h1>List of Reciters</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {reciters.map((reciter) => (
            <Link key={reciter.id} to={`/${reciter.id}`}>
              <li>{reciter.name}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Home;
