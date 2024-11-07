import Image from "next/image";
import image1 from "../public/assets/images/Laptop-Mockup2.webp";
import mobile from "../public/assets/images/mobile2.webp";
import customer from "../public/assets/images/customers.webp";
import IpoTabs from "./components/Ipo";
import AboutIpo from "./components/about";
import InvestIpo from "./components/invest";
// import TimelineSection from "./components/apply";
import IPOStepsCard from "./components/applyIpo";
import FAQSection from "./components/faq";
import Footer from "./components/footer";
// import ResponsiveIPOSteps from "./components/apply";

export default function Home() {
  return (
    <>
      <div className="max-w-full bg-white container">
        <section className="flex flex-col lg:flex-row w-full h-full min-h-[100vh] overflow-hidden pt-16 relative">
          {/* Background Video */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 bg-blend-multiply">
            <video
              autoPlay
              loop
              muted
              className="min-w-full min-h-full w-full h-full object-cover z-[-1] absolute top-0 left-0"
            >
              <source src="assets/images/video2_11.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Left Column */}

          <div className="flex flex-col justify-center items-start p-8 md:p-16 w-full lg:w-1/2 z-10">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-2">
              Apply for
            </h1>
            <span className="text-3xl md:text-6xl font-bold text-[#06e298] mb-4">
              Upcoming IPOs
            </span>
            {/* 045D37 */}
            {/* <p className="text-lg text-gray-600 mb-6">
            Start your journey with us today. Enter your mobile number to get
            started.
          </p> */}
            <Image
              alt=""
              loading="lazy"
              width="1000"
              height="1000"
              decoding="async"
              data-nimg="1"
              className="w-64"
              src={customer}
            />
            <p className="text-sm text-white">
              Open <span className="text-[#06e298] font-semibold">FREE</span>{" "}
              demat Account in minutes!
            </p>

            <div className="flex flex-col md:flex-row items-start w-full gap-3">
              <input
                type="tel"
                placeholder="+91 | Enter your mobile number"
                className="w-[100%] md:w-[40%] p-3 mb-4 border rounded-lg border-black"
              />
              <button className="px-4 py-6 h-9 bg-[#075D6D] text-white font-semibold rounded-lg hover:bg-[#038f6b] transition duration-300 inline-flex items-center">
                Start Trading
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative flex md:items-start items-end pt-16 z-10">
            <Image
              src={image1} // Replace with your image path
              alt="Descriptive Alt Text"
              // layout="fill"
              objectFit="contain"
              width={3000}
              height={3000}
              className="translate-x-1/4 scale-[150%] hidden lg:block"
            />

            <Image
              src={mobile}
              alt="Descriptive Alt Text"
              objectFit="contain"
              width={3000}
              height={3000}
              className="w-full h-full mx-auto translate-y-2/4 scale-[180%] lg:hidden"
            />
          </div>
        </section>

        <IpoTabs />

        <AboutIpo />

        <InvestIpo />

        {/* <ResponsiveIPOSteps /> */}

        <IPOStepsCard />

        <FAQSection />

        <Footer />
      </div>
    </>
  );
}
