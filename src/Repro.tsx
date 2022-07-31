import React from "react";

type ReproProps = {
  children: React.ReactNode;
};
export const Repro = ({ children }: ReproProps) => {
  return (
    // We are adding these classes here
    <div className="mt-10 bg-yellow-100 p-5 rounded-md">{children}</div>
  );
};
