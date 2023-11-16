import Hero from "./sections/Hero"
import PopularProdcut from "./sections/PopularProduct"
import Services from "./sections/Services"
import Support from "./sections/Subscribe"
import SpecialOffers from "./sections/SpecialOffers"
import SuperQuality from "./sections/SuperQuality"
import Footer from "./sections/Footer"
import CustomerReview from "./sections/CustomerReview"
import Navbar from "./components/Navbar"


const App = () => (
  <main className="relative"> 
      <Navbar />

      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      
      <section className="padding">
        <PopularProdcut />
      </section>

      <section className="padding">
        <SuperQuality/>
      </section>

      <section className="padding-x py-10"> 
        <Services />
      </section>

      <section className="padding">
        <SpecialOffers />
      </section>

      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>
      
      <section className="padding-x sm:py-32 py-16 w-full">
        <Support /> 
      </section>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
  </main>
)

export default App