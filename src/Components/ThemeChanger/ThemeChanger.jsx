import React, { useEffect, useState } from "react";
import "./ThemeChanger.css";
const ThemeChanger = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div className="font-bold flex">
      <div className="flex gap-4 my-4 rounded-full border border-gray-200 px-4 py-2">
        <div
          onClick={() => setTheme("light")}
          className={` bg-black avatarThemeIcons`}
        >
          <i class="fa-regular text-white   fa-sun sm:text-4xl text-2xl"></i>
        </div>
        <div
          onClick={() => setTheme("dark")}
          className={` dark:bg-gray-200 avatarThemeIcons`}
        >
          <i class="fa-solid fa-moon text-black sm:text-4xl text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default ThemeChanger;
