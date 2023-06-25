import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Helmet, HelmetProvider } from "react-helmet-async";

type ThemeOptions = "light" | "dark";
type ThemeIconOptions = "bx:sun" | "bx:moon";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeOptions>("light");
  const [themeIcon, setThemeIcon] = useState<ThemeIconOptions>("bx:sun");

  useEffect(() => {
    const pastTheme =
      (localStorage.getItem("theme") as ThemeOptions | null) ||
      ("light" as ThemeOptions);
    setTheme(pastTheme);
    setThemeIcon(pastTheme === "light" ? "bx:sun" : "bx:moon");
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("dark-theme");
  }, []);

  const _toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setThemeIcon(theme === "light" ? "bx:sun" : "bx:moon");
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
        <Icon
          className="bx change-theme"
          icon={`${themeIcon}`}
          id="theme-button"
          onClick={_toggleTheme}
        />
      </div>
    </>
  );
};
