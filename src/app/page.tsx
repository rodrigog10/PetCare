import AboutUs from "./_components/AboutUs";
import { FadeInSection } from "./_components/FadeInSection";
import Footer from "./_components/Footer";
import Main from "./_components/Main";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <div>
      <Main />
      <FadeInSection>
        <Services />
      </FadeInSection>
      <FadeInSection>
        <Testimonials />
      </FadeInSection>
      <FadeInSection>
        <AboutUs />
      </FadeInSection>

      <Footer />
    </div>
  );
}
