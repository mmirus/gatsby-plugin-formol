import React from "react";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
}
