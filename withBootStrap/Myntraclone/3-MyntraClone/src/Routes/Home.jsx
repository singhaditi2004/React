import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";
const Home = () => {
  const item = useSelector((store) => store.items);
  console.log(item);
  return (
    <>
      <div className="items-container">
        {item.map((item) => (
          <HomeItem item={item} key={item.id} />
        ))}
        <HomeItem item={item[0]} />
      </div>
    </>
  );
};
export default Home;
