import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { Icon } from "@iconify/react/dist/iconify.js";

type ThemeOptions = "light" | "dark";

export const ThemeToggle = () => {
  const pastTheme =
    (localStorage.getItem("theme") as ThemeOptions | null) ||
    ("light" as ThemeOptions);
  const [theme, setTheme] = useState<ThemeOptions>(pastTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList[theme === "light" ? "remove" : "add"]("dark-theme");
  }, [theme]);

  const _toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            rel="icon"
            type="image/svg+xml"
            href={`/favicon-${theme}.svg`}
          />
        </Helmet>
      </HelmetProvider>
      <div className="home__options">
        <div className="change-theme" id="theme-button">
          <Icon icon="bx:moon" style={{ paddingRight: "0.15em" }} />
          <DarkModeToggle
            mode={theme}
            size="sm"
            inactiveTrackColor="#e2e8f0"
            inactiveTrackColorOnHover="#f8fafc"
            inactiveTrackColorOnActive="#cbd5e1"
            activeTrackColor="#334155"
            activeTrackColorOnHover="#1e293b"
            activeTrackColorOnActive="#0f172a"
            inactiveThumbColor="#1e293b"
            activeThumbColor="#e2e8f0"
            onChange={() => {
              _toggleTheme();
            }}
          />
          <Icon icon="bx:sun" style={{ paddingLeft: "0.15em" }} />
        </div>
      </div>
    </>
  );
};
