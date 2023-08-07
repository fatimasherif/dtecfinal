import React from "react";
import Header from "../../Shared/Header";

const Layout = ({ children }) => (
  <div class="flex flex-col min-h-screen  ">
    <Header />
    <main class="flex-grow">{children}</main>
  </div>
);

export default Layout;
