import { CustomerReviews, Deals, Footer, Hero, Navbar, PopularProducts, Quality, Services, Subscribe } from "./pages";

const App = () => {
  return <>

    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide-padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <Quality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <Deals />
      </section>
      <section className=" bg-blue-200 padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  </>;
}

export default App;
