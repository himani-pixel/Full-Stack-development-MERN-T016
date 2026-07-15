import HelloStudent from "./components/HelloStudent";
import WelcomeMessage from "./components/WelcomeStudent";
import ProfileCard from "./components/ProfileCard";
import SkillsList from "./components/Skills";
import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <hr />
      <HelloStudent />
      <hr />
      <WelcomeMessage />
      <hr />
      <ProfileCard />
      <hr />
      <SkillsList />
      <Footer />
    </div>
  );
}

export default App;
