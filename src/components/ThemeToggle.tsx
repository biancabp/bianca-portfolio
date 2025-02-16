
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-accent hover:bg-accent/60 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-secondary" />
      ) : (
        <Moon className="w-5 h-5 text-secondary" />
      )}
    </button>
  );
};

export default ThemeToggle;
