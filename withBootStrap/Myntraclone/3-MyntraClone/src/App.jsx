import "./index.css";
import Bag from "./Components/bag";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeItem from "./Components/HomeItem";
import image1 from "./images/image1.jpg";
function App() {
  const item = {
    id: "001",
    image: { image1 },
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.5,
      count: 1400,
    },
  };
  return (
    <>
      <Header />
      <main>
        <div className="items-container">
          <HomeItem item={item} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
