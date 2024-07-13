import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().toLocaleString("en-US", { year: "numeric" });

  return (
    <footer className="">
      {currentYear} Gyanendra Singh | All &copy; Rights Reserved
    </footer>
  );
};

export default Footer;
