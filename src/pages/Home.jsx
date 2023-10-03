import { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa6";
import ScrollableDiv from "../ui/ScrollableDiv";
import Card from "../ui/Card";
import SearchBar from "../ui/SearchBar";

const Home = () => {
  const [reciters, setReciters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

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
    <Card className="flex flex-col gap-6">
      <SearchBar
        placeholder="ابحث عن قارئ.."
        value={searchValue}
        onSearch={(e) => setSearchValue(e.target.value)}
        containerClass="max-w-sm"
        inputClass="h-10 rounded-md"
      />
      <ScrollableDiv className="grid grid-cols-1 md:grid-cols-2 h-[calc(90vh-112px)] max-h-[calc(90vh-112px)] lg:grid-cols-3 gap-4">
        {loading ? (
          <div className="">Loading</div>
        ) : (
          <>
            {reciters.map((reciter) => (
              <div
                className="flex bg-white flex-grow justify-between p-2 rounded-2xl py-4 items-center"
                key={reciter.id}
              >
                <div className="number -mt-4 bg-green-200 text-green-600 p-1 rounded-full">
                  {reciter.id}
                </div>
                <h2 className="text-lg cursor-pointer font-medium">
                  {reciter.name}
                </h2>
                <div className="cursor-pointer -mt-4 text-lg text-green-600">
                  <FaHeart />
                </div>
              </div>
            ))}
          </>
        )}
      </ScrollableDiv>
    </Card>
  );
};
export default Home;
