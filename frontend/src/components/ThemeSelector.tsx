import { THEMES } from "@/constants";
import { useThemeStore } from "@/store/useThemeStore";
import { Palette } from "lucide-react";

function ThemeSelector() {
  const { theme: currTheme, setTheme } = useThemeStore();
  return (
    <div className="dropdown dropdown-end" role="combobox">
      <button className="btn btn-ghost btn-circle" aria-label="Select Theme">
        <Palette className="size-5" />
      </button>
      <ul
        role="list"
        className="dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg rounded-2xl w-56 border border-base-content/10"
      >
        {THEMES.map((theme) => (
          <li key={theme.name}>
            <button
              className={`w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${
                currTheme === theme.name
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-base-content/5"
              }`}
              onClick={() => setTheme(theme.name)}
            >
              <Palette className="size-4" />
              <span className="text-sm font-medium">{theme.label}</span>
              <p className="flex items-center ml-auto" aria-hidden>
                {theme.colors.map((color, i) => (
                  <i
                    key={i}
                    className={`size-2 rounded-full`}
                    style={{ backgroundColor: color }}
                  ></i>
                ))}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThemeSelector;
