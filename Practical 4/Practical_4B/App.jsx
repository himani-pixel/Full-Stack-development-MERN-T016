import Header from "./components/Header";
import Footer from "./components/Footer";
import HotelCard from "./components/HotelCard"

function App(){
  return(
    <div>
      <Header />
      <HotelCard
        restaurant = "Eva's Pizza"
        food = "Special Eva's Pizza"
        price = {499}
        discount = {20}
        rating = {4.5}
        />

        <HotelCard
        restaurant = "Gajalee"
        food = "Crab Thali"
        price = {699}
        discount = {40}
        rating = {5.0}
        />

        <HotelCard
        restaurant = "Sai Palace"
        food = "Butter Chicken & Garlic Naan"
        price = {499}
        discount = {10}
        rating = {4.9}
        />

      <Footer />
    </div>
  );
}
export default App;
