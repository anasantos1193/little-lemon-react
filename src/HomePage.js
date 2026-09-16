import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";
import ScrollReveal from "./ScrollReveal";

function HomePage() {
  return (
    <>
      <ScrollReveal>
        <CallToAction />
      </ScrollReveal>

      <ScrollReveal>
        <Specials />
      </ScrollReveal>

      <ScrollReveal>
        <CustomersSay />
      </ScrollReveal>

      <ScrollReveal>
        <Chicago />
      </ScrollReveal>
    </>
  );
}

export default HomePage;