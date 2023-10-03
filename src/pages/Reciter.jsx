import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Card from "../ui/Card";
import Wrapper from "../ui/Wrapper";
import ScrollableDiv from "../ui/ScrollableDiv";

const Reciter = () => {
  const { id } = useParams();
  const [reciter, setReciter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReciter = async () => {
      try {
        const response = await axios.get(
          `https://www.mp3quran.net/api/v3/reciters?reciter=${id}`
        );
        const reciterData = response.data.reciters[0];

        const surahResponse = await axios.get(
          "https://api.quran.com/api/v4/chapters"
        );
        const surahData = surahResponse.data.chapters;

        const surahList = surahData.filter((surah) => {
          return reciterData.moshaf[0].surah_list.includes(surah.id.toString());
        });

        reciterData.surah_list = surahList;

        setReciter(reciterData);
        console.log(reciterData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reciter:", error);
        setLoading(false);
      }
    };

    fetchReciter();
  }, [id]);

  return (
    <Wrapper>
      <ScrollableDiv className="grid grid-cols-1 md:grid-cols-2 h-[calc(90vh-112px)] max-h-[calc(90vh-112px)] lg:grid-cols-3 gap-4">
        {" "}
        {loading ? (
          <p>Loading...</p>
        ) : (
          reciter.surah_list.map((surah) => (
            <Card key={surah.id} id={surah.id} name={surah.name_arabic} />
          ))
        )}
      </ScrollableDiv>
    </Wrapper>
  );
};

export default Reciter;
