import React, { useState, useEffect } from "react";

const themes = ["clair", "sombre", "alternatif"];

export default function ThemeSwitcher() {
  // Stockage local pour garder le thème au reload
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "clair";
  });

  useEffect(() => {
    // Applique le thème sur <html>
    if (theme === "clair") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    // Sauvegarde localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Prochain thème en boucle
  function changeTheme() {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  }

  return (
    <button
      onClick={changeTheme}
      style={{
        padding: "0.5rem 1rem",
        fontWeight: "600",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "var(--button-bg)",
        color: "var(--button-text)",
        transition: "background-color 0.3s ease",
      }}
      title="Changer le thème"
      aria-label="Changer le thème"
    >
      Thème : {theme.charAt(0).toUpperCase() + theme.slice(1)}
    </button>
  );
}
