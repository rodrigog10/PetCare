import AboutUs from "./_components/AboutUs";
import Footer from "./_components/Footer";
import Main from "./_components/Main";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";


export default function Home() {
  return (
    <div>
      <Main />
      <Services />
      <Testimonials/>
      <AboutUs />
      
      <Footer />
      
    </div>
  );
}
