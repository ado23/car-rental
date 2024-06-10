import { HowItWorks, LandingHero } from "components/index";
import { Rent, WhyChooseUs } from "features/index";

const Home = () => (
  <section id="home">
    <LandingHero />
    <Rent />
    <HowItWorks />
    <WhyChooseUs />
  </section>
);

export default Home;
