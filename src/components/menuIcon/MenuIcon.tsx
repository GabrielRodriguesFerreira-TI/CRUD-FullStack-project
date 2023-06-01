"use client";
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { ClientContext } from "@/contexts/clientContext";

export const MenuIconComponent = () => {
  const { open, setOpen, isMenuOpen, setIsMenuOpen } =
    useContext(ClientContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpen(!open);
  };

  return (
    <div
      className="cursor-pointer md:hidden"
      onClick={toggleMenu}
      style={{ position: "relative", width: 24, height: 24 }}
    >
      <motion.div
        initial={{ rotate: 0, y: 0 }}
        animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute",
          width: "100%",
          height: "2px",
          backgroundColor: "black",
          top: "30%",
          left: 0,
          right: 0,
          transformOrigin: "center",
          pointerEvents: "none",
        }}
      />
      <motion.div
        initial={{ opacity: 1 }}
        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute",
          width: "100%",
          height: "2px",
          backgroundColor: "black",
          top: "50%",
          left: 0,
          right: 0,
          transformOrigin: "center",
          pointerEvents: "none",
        }}
      />
      <motion.div
        initial={{ rotate: 0, y: 0 }}
        animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute",
          width: "100%",
          height: "2px",
          backgroundColor: "black",
          top: "70%",
          left: 0,
          right: 0,
          transformOrigin: "center",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
