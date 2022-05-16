import React from "react";
import "../styles/Header3.css";
import ScamDatabase from "../assets/ScamDatabase.png";
import ScamDashboard from "../assets/ScamDashboard.png";
import ScamEvidence from "../assets/ScamEvidence.png";
import ScamStatistics from "../assets/ScamStatistics.png";
import SystemSecurity from "../assets/SystemSecurity.png";
import Support from "../assets/Support.png";

import Logo_and_icon from "./Logo_and_icon";
import { Header4 } from "./Header4";

export const Header3 = () => {
  const dataArray = [
    {
      id: 1,
      image: ScamDatabase,
      title: "Scam Database",
    },
    {
      id: 2,
      image: ScamDashboard,
      title: "Scam Dashboard",
    },
    {
      id: 3,
      image: ScamEvidence,
      title: "Scam Evidence",
    },
    {
      id: 4,
      image: ScamStatistics,
      title: "Scam Statistics",
    },
    {
      id: 5,
      image: SystemSecurity,
      title: "System Security",
    },
    {
      id: 6,
      image: Support,
      title: "24*7 Support",
    },
  ];
  return (
    <div className="main-header3-div">
      {dataArray.map((data) => (
        <Logo_and_icon data={data} />
      ))}
      <Header4 />
    </div>
  );
};
