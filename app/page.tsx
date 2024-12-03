import Image from "next/image";
import image1 from "../public/assets/images/Laptop-Mockup2.webp";
import mobile from "../public/assets/images/mobile2.webp";
import customer from "../public/assets/images/Customers1.webp";
import Active from "../public/assets/images/users.png";
import star from "../public/assets/images/star.png"
import IpoTabs from "./components/Ipos";
import AboutIpo from "./components/about";
// import InvestIpo from "./components/invest";  
// import TimelineSection from "./components/apply";
import IPOStepsCard from "./components/applyIpo";
import FAQSection from "./components/faq";
import SavingsFeatures from "./components/Features";
// import ResponsiveIPOSteps from "./components/apply";




export default async function Home() {
 
  return (
    <>
      <div className="max-w-full bg-white container">
        <section className="flex flex-col lg:flex-row w-full h-full min-h-[100vh] overflow-hidden pt-16 relative py-12 px-4">
          {/* Background Video */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 bg-blend-multiply" style={{ backgroundColor: '#000' }}>
         
          </div>

          {/* Left Column */}

          <div className="flex flex-col justify-center items-start p-8 md:p-16 w-full lg:w-1/2 z-10">
            <h1 className="text-3xl lg:text-6xl font-bold text-white mb-2">
              Apply for
            </h1>
            <span className="text-3xl lg:text-6xl font-bold text-[#06e298] mb-4">
              Upcoming IPOs
            </span>
           
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
            <p className="text-sm text-white mb-6">
              Open your <span className="text-[#06e298] font-semibold">FREE</span>{" "}
              demat Account in minutes!
            </p>

            <div className="flex flex-col md:flex-row items-start w-full gap-3">
              <input
                type="tel"
                placeholder="+91 | Enter your mobile number"
                className="w-[100%] md:w-[45%] p-3 mb-4 border rounded-lg border-black
                hover:border-[#38B990] 
                    focus:border-[#38B990] 
                    focus:outline-none 
                    focus:ring-1 
                    focus:ring-[#38B990] 
                    transition-all 
                    duration-200"
              />
              <button className="px-4 py-6 h-9 text-white font-semibold rounded-lg inline-flex items-center overflow-hidden bg-sliding-gradient bg-300% animate-slideGradient">
                Start Trading
              </button>
            </div>

            <div className="flex flex-col max-md:divide-y-[0.6px] md:flex-row md:space-x-6 md:divide-x-[.7px]">
              <div className="flex items-center gap-4 py-4 md:justify-center md:pr-3">
                <div className="text-[#06e298] text-4xl font-semibold">
                 <Image src={Active} alt="Active Users"  width={30} height={30} />
                </div>
                <div className="lg:text-base text-sm text-[#06e298] font-semibold">
                 10K+ Downloads
                </div>
              </div>

              <div className="flex items-center gap-4 py-4 md:justify-center md:pl-6">
                <div className="text-[#06e298] text-4xl font-semibold">
                <Image src={star} alt="Star Ratings"  width={30} height={30}/>
                </div>
                <div className="lg:text-base text-sm text-[#06e298] font-semibold">
                 4.9 Play Store Rating
                </div>
              </div>

            </div>
          </div>

          <div className="lg:w-1/2 relative flex md:items-start items-end pt-16 z-10">
            <Image
              src={image1} // Replace with your image path
              alt="Descriptive Alt Text"
              priority
              objectFit="contain"
              width={3000}
              height={3000}
              className="translate-x-1/6 scale-[150%] hidden lg:block"
            />

            <Image
              src={mobile}
              alt="Descriptive Alt Text"
              objectFit="contain"
              width={3000}
              height={3000}
              className="w-full h-full mx-auto translate-y-1/6 scale-[180%] lg:hidden"
            />
          </div>
        </section>

        <IpoTabs />

        <AboutIpo  />

        {/* <InvestIpo  /> */}

        <SavingsFeatures />

        {/* <ResponsiveIPOSteps /> */}

        <IPOStepsCard  />

        <FAQSection />
      </div>
    </>
  );
}
