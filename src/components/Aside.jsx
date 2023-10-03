import { Azan, IconBook, IconListen, IconLogo } from "../../src/svg";

const Aside = () => {
  const headIconStyles = {
    maxWidth: "90%",
    height: "auto",
    fill: "#ffffff",
  };

  const bodyIconStyles = {
    width: "4rem",
    height: "4rem",
    fill: "#6d6d6d",
    opacity: 0.2,
  };

  return (
    <aside className="md:sticky md:left-0 md:pl-4">
      <div className="bg-green-600 rounded-lg p-5 mb-10">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-2xl font-medium">آية اليوم</h3>
          <Azan />
        </div>
        <h3 className="text-white text-center text-xl font-medium my-4">
          وَأَنْ لَيْسَ لِلإِنسَانِ إِلَّا مَا سَعَى
        </h3>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-col gap-10">
        <div className="relative flex-1">
          <h6 className="text-green-600 mb-2 font-medium">اخر قراءة</h6>
          <h5 className="text-gray-600">لا يوجد</h5>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <IconBook style={bodyIconStyles} />
          </div>
        </div>

        <div className="relative flex-1">
          <h6 className="text-green-600 mb-2 font-medium">اخر ما استمعت</h6>
          <h5 className="text-gray-600">لا يوجد</h5>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <IconListen style={bodyIconStyles} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
