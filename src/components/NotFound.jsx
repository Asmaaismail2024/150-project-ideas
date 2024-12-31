import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div style={styles.container}>
      <XMarkIcon style={styles.icon} />
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>Page Not Found!</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#ffe6e6", // Light red background
    color: "#b22222", // Firebrick red for text
  },
  icon: {
    width: "100px",
    height: "100px",
    color: "#b22222", // Firebrick red for the icon
    marginBottom: "20px",
  },
  heading: {
    fontSize: "4rem",
    fontWeight: "bold",
     color: "#b22222"
  },
  message: {
    fontSize: "1.5rem",
  },
};
