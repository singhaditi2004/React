import "../index.css";
import BagSummary from "../Components/BagSummary";
import BagItem from "../Components/BagItem";
const Bag = () => {
  
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
