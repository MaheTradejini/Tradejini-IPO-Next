import AboutCompany from "../components/aboutCompany";
import Financials from "../components/chart";
import HomePage from "../components/detailhero";
import HomeDetailTab from "../components/detailtable";
import IpoTimeLine from "../components/IpoTimeLine";



export default function Home() {
  return (
    <>
      <div className="max-w-full max-w-7xl">
            <HomePage />

            <HomeDetailTab />

            <IpoTimeLine/>

            <AboutCompany />

            <Financials />
      </div>
    </>
  );
}
