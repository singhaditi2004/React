import "../index.css";
import BagSummary from "../Components/BagSummary";
import BagItem from "../Components/BagItem";
const Bag = () => {
  const item = {
    company: "Roadster",
    item_name: "T-shirt",
    current_price: 499,
    original_price: 999,
    discount_percentage: 50,
    return_period: 30,
    delivery_date: "Fri, 20th Aug",
    image: "images/2.jpg",
    id: 1,
  };
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            <BagItem item={item} />
          </div>
          <BagSummary />
          <div className="bag-summary"></div>
        </div>
      </main>
    </>
  );
};
export default Bag;
