import dynamic from "next/dynamic";
import React from "react";

const Home: React.FC = () => {
  const Overview = dynamic(() => import("@components/home").then((mod: any) => mod.Overview)) as any;
  return (
    <div
      // style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Overview/>
    </div>
  );
};

export default Home;
