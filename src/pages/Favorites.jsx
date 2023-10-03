import Wrapper from "../ui/Wrapper";
import ScrollableDiv from "../ui/ScrollableDiv";

const Favorites = () => {
  return (
    <Wrapper>
      <ScrollableDiv className="grid grid-cols-1 md:grid-cols-2 h-[calc(90vh-112px)] max-h-[calc(90vh-112px)] lg:grid-cols-3 gap-4">
        <div>Fav</div>
      </ScrollableDiv>
    </Wrapper>
  );
};
export default Favorites;
