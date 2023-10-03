import { useEffect, useState } from "react";
import axios from "axios";
import ScrollableDiv from "../ui/ScrollableDiv";
import Wrapper from "../ui/Wrapper";
import Card from "../ui/Card";
import SearchBar from "../ui/SearchBar";

const Home = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchReciters = async () => {
      try {
        const surahResponse = await axios.get(
          "https://api.quran.com/api/v4/chapters"
        );
        setChapters(surahResponse.data.chapters);
        console.log(surahResponse.data.chapters);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reciters:", error);
        setLoading(false);
      }
    };

    fetchReciters();
  }, []);
  return (
    <Wrapper className="h-[calc(90vh-112px)] max-h-[calc(90vh-112px)] flex flex-col gap-6">
      <SearchBar
        placeholder="ابحث عن سورة.."
        value={searchValue}
        onSearch={(e) => setSearchValue(e.target.value)}
        containerClass="max-w-sm"
        inputClass="h-10 rounded-md"
      />
      <ScrollableDiv className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <div className="">Loading</div>
        ) : (
          <>
            {chapters.map((chapter) => (
              <Card
                key={chapter.id}
                id={chapter.id}
                name={chapter.name_arabic}
              />
            ))}
          </>
        )}
      </ScrollableDiv>
    </Wrapper>
  );
};
export default Home;
