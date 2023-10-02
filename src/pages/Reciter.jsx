import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{reciter.name}</h2>
          <ul>
            {reciter.surah_list.map((surah) => (
              <li key={surah.id}>{`سورة ${surah.name_arabic}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Reciter;
