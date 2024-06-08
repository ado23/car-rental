import { LandingHero } from "components/index";
import { HowItWorks, Rent, WhyChooseUs } from "features/index";

const Home = () => (
  <section id="landing">
    <LandingHero />
    <Rent />
    <HowItWorks />
    <WhyChooseUs />
  </section>
);

export default Home;
