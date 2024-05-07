import React from "react";

const Preloading = () => {
  return (
    <div
      id="Preloading"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div class="flex flex-row gap-2">
        <div class="w-4 h-4 rounded-full bg-orange-700 animate-bounce"></div>
        <div class="w-4 h-4 rounded-full bg-red-700 animate-bounce [animation-delay:-.3s]"></div>
        <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export default Preloading;
