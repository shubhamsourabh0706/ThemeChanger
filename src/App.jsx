import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theme";
import Button from "./Component/Button";
import User from "./Component/User";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  };
  const darkMode = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen item-center mt-4">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button />{" "}
          </div>
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {" "}
            <User />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
