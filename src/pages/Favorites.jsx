import Card from "../ui/Card";
import ScrollableDiv from "../ui/ScrollableDiv";

const Favorites = () => {
  return (
    <Card>
      <ScrollableDiv className="grid grid-cols-1 md:grid-cols-2 h-[calc(90vh-112px)] max-h-[calc(90vh-112px)] lg:grid-cols-3 gap-4">
        <div>Fav</div>
      </ScrollableDiv>
    </Card>
  );
};
export default Favorites;
