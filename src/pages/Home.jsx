import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import ScrollableDiv from "../ui/ScrollableDiv";
import Wrapper from "../ui/Wrapper";
import Card from "../ui/Card";

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
    <Wrapper>
      <ScrollableDiv className="grid grid-cols-1 md:grid-cols-2 h-[calc(90vh-112px)] max-h-[calc(90vh-112px)] lg:grid-cols-3 gap-4">
        {loading ? (
          <div className="">Loading</div>
        ) : (
          <>
            {reciters.map((reciter) => (
              <Card key={reciter.id} id={reciter.id} name={reciter.name} />
            ))}
          </>
        )}
      </ScrollableDiv>
    </Wrapper>
  );
};
export default Home;
