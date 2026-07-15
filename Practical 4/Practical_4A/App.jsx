import "./App.css";
import CafeHeader from "./components/CafeHeader";
import MenuItem from "./components/MenuItem";
import SpecialOffer from "./components/SpecialOffer";
import OpeningHours from "./components/OpeningHours";
import ContactInfo from "./components/ContactInfo";
import CafeFooter from "./components/CafeFooter";

function App() {
  return (
    <div className="app">
      <CafeHeader />
      <MenuItem />
      <SpecialOffer />
      <OpeningHours />
      <ContactInfo />
      <CafeFooter />
    </div>
  );
}

export default App;