import React from "react";
import Header from "../components/Header";
import Banner from "./Banner";
import HowItWorks from "./Howitworks";
import WhyThis from "./WhyThis";

function MarketingPage() {
  return (
    <div>
      <Header />
      <Banner />
      <HowItWorks />
      <WhyThis />
    </div>
  );
}

export default MarketingPage;
