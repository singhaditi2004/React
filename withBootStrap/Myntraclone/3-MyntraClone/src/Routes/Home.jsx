import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";
const Home = () => {
  const item = useSelector((store) => store.items);
  console.log("g", item);
  return (
    <>
      <div className="items-container">
        {item.map((item) => (
          <HomeItem item={item[0]} key={item.id} />
        ))}
      </div>
    </>
  );
};
export default Home;
