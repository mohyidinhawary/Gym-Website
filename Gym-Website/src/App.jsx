import { About } from "./components/about/about.component";
import { Contact } from "./components/contact/contact.component";
import { Feature } from "./components/feature/feature.component";
import { Header } from "./components/haeder/header.component";
import { Navbar } from "./components/navbar/navbar.component";
import { Offer } from "./components/offer/offer.component";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
    </>
  );
}

export default App;
