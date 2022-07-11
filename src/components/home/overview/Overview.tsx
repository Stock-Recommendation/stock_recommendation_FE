import { useRouter } from "next/router";
import React, { FC } from "react";

export const Overview: FC = () => {
  const router = useRouter();
  return (
    <div>
      This is the main part
      <button
        onClick={() => {
          router.push(`/stock-details/${1}`);
        }}
      >
        Click on this to go to stock-details with id
      </button>
      <button
        onClick={() => {
          router.push(`/dashboard-details/${1}`);
        }}
      >
        Click on this to go to dashboard-details with id
      </button>
    </div>
  );
};
