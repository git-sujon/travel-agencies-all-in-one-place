import ContactCard from "@/components/contactPage/contactCard/ContactCard";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { BsGeoAlt, BsTelephoneInbound } from "react-icons/bs";
import ContactForm from "@/components/contactPage/contactForm/ContactForm";
import RootLayout from "@/components/layout/RootLayout";

const ContactUsPage = () => {
    return (
        <div className=' font-serif'>
            <div className="max-w-[1200px] mx-auto border min-h-screen">
                {/* contact section */}
                <div className="grid md:grid-cols-3 py-7 md:py-12">
                    <ContactCard icon={<FaRegEnvelopeOpen className="w-5 h-5 lg:w-8 lg:h-8"></FaRegEnvelopeOpen>} title={"Email:"} value={"travel2023@gmail.com"}></ContactCard>
                    <ContactCard icon={<BsGeoAlt className="w-5 h-5 lg:w-8 lg:h-8"></BsGeoAlt>} title={"Address:"} value={"New York, USA"}></ContactCard>
                    <ContactCard icon={<BsTelephoneInbound className="w-5 h-5 lg:w-8 lg:h-8"></BsTelephoneInbound>} title={"Phone:"} value={"+88017XXXXXXXX"}></ContactCard>
                </div>
                {/* contact form section */}
                <ContactForm></ContactForm>
            </div>

        </div>
    );
};

export default ContactUsPage;

ContactUsPage.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
  };