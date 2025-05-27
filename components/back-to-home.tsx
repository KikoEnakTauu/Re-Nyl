import { Home } from "lucide-react";

const BackToHome = () => {
  return (
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        borderRadius: "8px",
        textDecoration: "none",
        color: "#FFF",
        fontWeight: 600,
        fontSize: "1.5rem",
        fontStyle: "bold",
      }}
    >
      <Home size={30} />
      Back to Home
    </a>
  );
};

export default BackToHome;
