import React, { ReactElement, useEffect, useState } from "react";

import "antd/dist/antd.css";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

export default function LayoutGlobal(props: any): ReactElement {
  const NavbarHome = dynamic(() =>
    import("../navbar").then((mod: any) => mod.NavbarHome)
  ) as any;
  const FooterHome = dynamic(() =>
    import("../footer").then((mod: any) => mod.FooterHome)
  ) as any;
  return (
    <>
      <NavbarHome />
      {props.children}
      <FooterHome />
    </>
  );
}
