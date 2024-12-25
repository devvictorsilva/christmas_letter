import LoginComponent from "@/components/login/login";
import React from "react";

export const Home: React.FC = () => {
  return (
    <>
      <LoginComponent></LoginComponent>
      <img
        src="border.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          pointerEvents: "none",
          width: window.innerWidth <= 768 ? '150px' : 'auto' 
        }}
      />
      <img
        src="border.png"
        alt=""
        style={{
          position: "absolute",
          top: -10,
          left: 0,
          transform: "rotate(270deg)",
          pointerEvents: "none",
          width: window.innerWidth <= 768 ? '150px' : 'auto' 
        }}
      />
      <img
        src="arvore.png"
        alt=""
        style={{
          position: "absolute",
          bottom: -4,
          left: -160,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </>
  );
};

export default Home;
