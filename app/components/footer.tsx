"use client";
import Image from "next/image";
import customer from "../../public/assets/images/customers.webp";

export default function Footer() {
  return (
    <footer className="relative z-[99999] -mt-10 rounded-t-[40px] bg-[#005B6C] px-5 pb-20 pt-20 md:px-10 lg:px-20 xl:px-32">
      <div className="flex flex-row items-start justify-evenly gap-y-10 max-md:flex-wrap md:justify-between md:gap-x-20">
        <div className="max-md:w-[40%]">
          <h4 className="font-bold text-white md:text-xl">Company</h4>
          <ul className="mt-5 space-y-3 text-xs">
            <li className="font-bold text-white/50">About Us</li>
            <li className="font-bold text-white/50">Products</li>
            <li className="font-bold text-white/50">Pricing</li>
            <li className="font-bold text-white/50">Careers</li>
          </ul>
        </div>
        <div className="max-md:w-[40%]">
          <h4 className="font-bold text-white md:text-xl">Support</h4>
          <ul className="mt-5 space-y-3 text-xs">
            <li className="font-bold text-white/50">Support</li>
            <li className="font-bold text-white/50">
              <a href="/fundTransfer">Fund Transfer</a>
            </li>
            <li className="font-bold text-white/50">Contact Us</li>
            <li className="font-bold text-white/50">Partner</li>
            <li className="font-bold text-white/50">Referral</li>
          </ul>
        </div>
        <div className="max-md:w-[40%]">
          <h4 className="font-bold text-white md:text-xl">Tools</h4>
          <ul className="mt-5 space-y-3 text-xs">
            <li className="font-bold text-white/50">Brokerage Calculator</li>
            <li className="font-bold text-white/50">Margin Calculator</li>
            <li className="font-bold text-white/50">Referral Calculator</li>
          </ul>
        </div>
        <div className="max-md:w-[40%]">
          <h4 className="font-bold text-white md:text-xl">Downloads</h4>
          <a href="/downloads">
            <ul className="mt-5 space-y-3 text-xs">
              <li className="font-bold text-white/50">Forms</li>
              <li className="font-bold text-white/50">Software</li>
              <li className="font-bold text-white/50">Charges</li>
              <li className="font-bold text-white/50">Holidays</li>
            </ul>
          </a>
        </div>
      </div>
      <div className="my-5 flex flex-row flex-wrap items-center gap-x-5 text-[8px] font-bold text-white/50 md:my-10 md:text-xs">
        <div className="md:divide-x-black/50 flex flex-row flex-wrap items-center gap-x-5 md:divide-x">
          <a className="underline" href="/policies-procedures">
            Policy and Procedures
          </a>
          <a
            target="_blank"
            href="https://tradejini.com/wp-content/uploads/PMLA_POLICY.pdf"
            className="pl-5 underline"
          >
            PMLA
          </a>
          <a
            target="_blank"
            href="https://tradejini.com/wp-content/uploads/DATACLASIFICATION_AND_PROTECTION_POLICY-DCP.pdf"
            className="pl-5 underline"
          >
            Data classNameification and Protection
          </a>
          <a
            target="_blank"
            href="https://tradejini.com/wp-content/uploads/Sample-Contract-Note-1.pdf"
            className="pl-5 underline"
          >
            Sample Contract Note
          </a>
          <a
            target="_blank"
            href="https://tradejini.com/wp-content/uploads/Details-of-Tradejini-Client-Bank-Accounts.pdf"
            className="pl-5 underline"
          >
            Details of Client Bank Accounts
          </a>
          <a className="pl-5 underline" href="/downloads#investor-corner">
            Investor&#x27;s Corner
          </a>
        </div>
      </div>
      <p className="text-[8px] font-bold text-white/50 md:text-xs">
        Please ensure you carefully read the Risk Disclosure Documents as
        prescribed by SEBI. For any complaints email at{" "}
        <a
          href="mailto:complaints@tradejini.com"
          className="underline decoration-white/50"
        >
          complaints@tradejini.com
        </a>
      </p>
      <div className="my-5 flex flex-row gap-x-3 md:gap-x-5">
        <a
          href="https://www.bseindia.com/"
          target="_blank"
          className="text-nowrap rounded-xl bg-[#118b64] px-2 py-1 text-sm font-bold text-white md:px-4 md:py-3 md:text-base"
        >
          BSE
        </a>
        <a
          href="https://www.nseindia.com/"
          target="_blank"
          className="text-nowrap rounded-xl bg-[#118b64] px-2 py-1 text-sm font-bold text-white md:px-4 md:py-3 md:text-base"
        >
          NSE
        </a>
        <a
          href="http://www.mcx-sx.com/"
          target="_blank"
          className="text-nowrap rounded-xl bg-[#118b64] px-2 py-1 text-sm font-bold text-white md:px-4 md:py-3 md:text-base"
        >
          MSEI
        </a>
        <a
          href="https://www.mcxindia.com/"
          target="_blank"
          className="text-nowrap rounded-xl bg-[#118b64] px-2 py-1 text-sm font-bold text-white md:px-4 md:py-3 md:text-base"
        >
          MCX
        </a>
        <a
          href="https://www.cdslindia.com/"
          target="_blank"
          className="text-nowrap rounded-xl bg-[#118b64] px-2 py-1 text-sm font-bold text-white md:px-4 md:py-3 md:text-base"
        >
          CDSL
        </a>
        <a
          href="https://www.clientam.com/Universal/servlet/OpenAccount.IBrokerGuestLogin?partnerID=INXGALITE&amp;invitedBy=&amp;template=Tradejini_plan1&amp;invitation_id=83160548"
          target="_blank"
          className="text-nowrap rounded-xl bg-[#118b64] px-2 py-1 text-sm font-bold text-white md:px-4 md:py-3 md:text-base"
        >
          India INX
        </a>
      </div>
      <div className="mt-10">
        <p className="text-[8px] font-bold text-white/50 md:text-xs">
          <span className="text-[14px] font-black text-white md:text-lg">
            Attention Investors
          </span>
          <br />
          Investments in securities market are subject to market risks, read all
          the related documents carefully before investing. The securities are
          quoted as an example and not as a recommendation.
          <br />
          <br />
          “Prevent Unauthorized Transactions in your trading/demat account
          Update your Mobile Number/Email IDs with your Stock brokers/Depository
          Participant.Receive alerts/information of your transactions on your
          Registered Mobile/Email for all debit and other important transactions
          in your trading/demat account directly from Exchange/CDSL on the same
          day”.
          <br />
          <br />
          “KYC is one time exercise while dealing in securities markets – once
          KYC is done through a SEBI registered intermediary (broker, DP, Mutual
          Fund etc.),you need not undergo the same process again when you
          approach another intermediary.
          <br />
          <br />
          No need to issue cheques by investors while subscribing to IPO. Just
          write the bank account number and sign in the application form to
          authorize your bank to make payment in case of allotment. No worry for
          refund as the money remains in investor’s account.
          <br />
          <br />
          This is to inform you as per Rules, Regulations and Bye-laws of Multi
          Commodity Exchange of India Ltd (MCX),that we do client based trading
          and proprietary trading.
          <br />
          Procedure to file a complaint on{" "}
          <a
            href="https://scores.sebi.gov.in/"
            className="underline decoration-white/50"
          >
            SCORES
          </a>{" "}
          (Easy &amp; quick). Register on SCORES portal and have the mandatory
          details for filing complaints on SCORES (Name, PAN, Address, Mobile
          Number and E-mail ID). Benefits: Effective Communication and Speedy
          redressal of the grievances.
          <br />
          <br />
          Stock Brokers can accept securities as margin from clients only by way
          of pledge in the depository system w.e.f. September 01, 2020 Update
          your email id and mobile number with your stock broker / depository
          participant and receive OTP directly from depository on your email id
          and/or mobile number to create pledge Check your securities / MF /
          bonds in the consolidated account statement issued by NSDL/CDSL every
          month.
          <br />
          <br />
          Please be informed that we, TRADEJINI Financial Services Pvt. Ltd.,
          are not associated with and have not granted any right/permission to
          use our name, trademark, logo etc. to any third-party platform and/or
          service provider which is directly or indirectly providing any
          reference to the past or expected future return/performance of any
          algorithm and/or trading strategy.
          <br />
          <br />
          Accordingly, any such third-party should not be deemed to be our
          agent, business partner and/or associate in any manner whatsoever.
          <br />
          <br />
          In case our name, trademark, logo etc., is being reflected/used by any
          such third-party platform and/or service provider, kindly inform us at
          the earliest to enable us to take appropriate action in law.
        </p>
        <div className="divide-y-white flex flex-row gap-x-4 text-xs font-bold text-white/50">
          <a href="#" className="underline decoration-white underline-offset-4">
            e-Voting facility for Shareholders
          </a>
          <div className="text-white/50">|</div>
          <a href="#" className="underline decoration-white underline-offset-4">
            Common Online Dispute Resolution Portal
          </a>
        </div>
        <div className="divide-y-white my-5 flex flex-row gap-x-4 gap-y-4 text-nowrap text-xs font-bold text-white/50 max-md:flex-wrap">
          <a href="#" className="underline decoration-white underline-offset-4">
            Disclaimer
          </a>
          <div className="text-white/50">|</div>
          <a href="#" className="underline decoration-white underline-offset-4">
            Copyright Policy
          </a>
          <div className="text-white/50">|</div>
          <a href="#" className="underline decoration-white underline-offset-4">
            Fraud Prevention
          </a>
          <div className="text-white/50">|</div>
          <a href="#" className="underline decoration-white underline-offset-4">
            Privacy Policy
          </a>
          <div className="text-white/50">|</div>
          <a
            href="https://clientreports.mcxccl.com/#/"
            className="underline decoration-white underline-offset-4"
          >
            MCXCCL Client Reports
          </a>
        </div>
        <div className="mt-20 hidden place-items-center text-xs">
          <div className="flex flex-row items-center rounded-xl bg-[#231691] px-5 py-2 shadow-xl">
            <div className="">
              <Image src={customer} alt="" />
            </div>
            <p className="ml-5 mr-4 font-bold text-white md:mr-20">
              Live Market insights only at...
            </p>
            <button className="text-nowrap rounded-full bg-white px-4 py-2 text-xs font-bold text-[#221182] md:px-6 md:text-2xl">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
