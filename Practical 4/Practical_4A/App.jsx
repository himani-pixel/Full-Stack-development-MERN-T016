import "./App.css";
import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import PlacementEligibility from "./components/PlacementEligibility";
import PlacementStatus from "./components/PlacementStatus";
import CompanyOffer from "./components/CompanyOffer";
import SkillProgress from "./components/SkillProgress";
import Footer from "./components/Footer";

function App(){
  return(
    <div className = "dashboard">
      <Header />
      <StudentProfile />
      <PlacementEligibility />
      <PlacementStatus />
      <CompanyOffer />
      <SkillProgress />
      <Footer />
      </div>
  );
}

export default App;