import Navbar from "@/components/BanVe/Layout/Navbar";
import DiscoverGreatPlaces from "@/components/BanVe/Common/DiscoverGreatPlaces";
import NewsletterForm from "@/components/BanVe/Common/NewsletterForm";
import TestimonialSlider from "@/components/BanVe/Common/TestimonialSlider";
import TopAuthor from "@/components/BanVe/Common/TopAuthor";
import Benefits from "@/components/BanVe/Benefits";
import DiscountOfferTrip from "@/components/BanVe/DiscountOfferTrip";
import HeroBanner from "@/components/BanVe/HeroBanner";
import HowItWorks from "@/components/BanVe/HowItWorks";
import MostPopularPlaces from "@/components/BanVe/MostPopularPlaces";
import OurHottestVideos from "@/components/BanVe/OurHottestVideos";
import Partner from "@/components/BanVe/Partner";
import PopularDestination from "@/components/BanVe/PopularDestination";
import Welcome from "@/components/BanVe/Welcome";
import WhyChooseUs from "@/components/BanVe/WhyChooseUs";
import Footer from "@/components/BanVe/Layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
 
      <HeroBanner />

      <Partner />

      <Benefits />

      <PopularDestination />

      <Welcome />

      <MostPopularPlaces />

      <HowItWorks />

      <DiscountOfferTrip />

      <WhyChooseUs />

      <TopAuthor />

      <TestimonialSlider />

      <DiscoverGreatPlaces />

      <OurHottestVideos />

      <NewsletterForm />

      <Footer />
    </>
  )
}
