import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Contact } from "./sections/Contact"; // ← importera Contact

export function Layout(): JSX.Element {
  
  return (
    <>
      
      <main className="scroll-smooth p-4">
        <Outlet />
      </main>
    </>
  );
}
