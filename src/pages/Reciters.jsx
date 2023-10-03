import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const Reciters = () => {
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
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="surah col-span-3 sm:col-span-4 md:col-span-4 bg-white m-2 flex-grow">
          <h2 className="surah-name text-lg cursor-pointer">اسم</h2>
          <div className="fav-icon">
            <div className="heart cursor-pointer">
              <FaHeart />
            </div>
            <div className="number">1</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reciters;
