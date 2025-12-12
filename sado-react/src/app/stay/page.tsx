import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import Footer from "@/components/Layout/Footer"; 
import NewsletterForm from "@/components/Common/NewsletterForm"; 
import PageBanner from "@/components/Stay/PageBanner";
import BookingSearchFrom from "@/components/Stay/BookingSearchFrom";
import ListingCardContent from "@/components/Stay/ListingCardContent";
import OurHottestNearbyCities from "@/components/Common/OurHottestNearbyCities";
import TopAuthorStyleTwo from "@/components/Common/TopAuthorStyleTwo";
  
export default function StayPage() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBanner />

      <BookingSearchFrom />
      
      <ListingCardContent />

      <div className="bg-color-fff7ed">
        <OurHottestNearbyCities />
      </div>
 
      <TopAuthorStyleTwo />

      <NewsletterForm />

      <Footer />
    </>
  )
}
