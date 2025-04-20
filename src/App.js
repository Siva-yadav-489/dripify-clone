import Campaigns from "./components/Campaigns";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import IntegrateTools from "./components/IntegrateTools";
import Personalize from "./components/Personalize";
import Reviews from "./components/Reviews";
import SignupAtBottom from "./components/SignupAtBottom";
import TestMessage from "./components/TestMessage";
import WorksBestFor from "./components/WorksBestFor";

function App() {
  return (
    <div className="mx-5 max-sm:mx-2">
      <Header />
      <Hero />
      <Companies />
      <Campaigns />
      <Insights />
      <Personalize />
      <TestMessage />
      <WorksBestFor />
      <IntegrateTools />
      <Reviews />
      <SignupAtBottom />
      <Footer />
    </div>
  );
}

export default App;
