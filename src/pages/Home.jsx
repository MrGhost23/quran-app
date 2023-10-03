import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

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

    fetchReciters();
  }, []);
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 max-h-[calc(90vh-112px)] lg:grid-cols-3 gap-4 px-4 pt-3 h-0 py-8">
        {loading ? (
          <div className="">Loading</div>
        ) : (
          reciters.map((reciter) => (
            <div
              className="flex bg-white flex-grow justify-between p-2 rounded-2xl py-4 items-center"
              key={reciter.id}
            >
              <div className="number bg-green-200 text-green-600 p-1 rounded-full">
                {reciter.id}
              </div>
              <h2 className="text-lg cursor-pointer font-medium">
                {reciter.name}
              </h2>
              <div className="fav-icon">
                <div className="cursor-pointer text-lg text-green-600">
                  <FaHeart />
                </div>
              </div>
            </div>
          ))
        )}
      </ul>
    </div>
  );
};
export default Home;
