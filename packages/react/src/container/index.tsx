import React from "react";

export const Container = () => {
  return (
    <div className="flex h-dvh w-full flex-col">
      <div className="h-20 bg-opacity-10 bg-primary"></div>

      <div className="flex flex-row h-dvh-subtract-20">
        <div className="w-24 bg-opacity-5 bg-primary"></div>

        <div></div>
      </div>
    </div>
  );
};
