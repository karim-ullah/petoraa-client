"use client";

import { Moon, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

//   <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//        {theme === "dark" ? "Light" : "Dark"} 
//     </button>

  return (
    <Switch defaultSelected size="lg" onChange={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {({isSelected}) => (
            <>
              <Switch.Control 
            //   className={isSelected ? value.selectedControlClass : ""}
              >
                <Switch.Thumb>
                  <Switch.Icon>
                    {isSelected ? (
                      <Sun className="size-3 text-inherit opacity-100" />
                    ) : (
                      <Moon className="size-3 text-inherit opacity-70" />
                    )}
                  </Switch.Icon>
                </Switch.Thumb>
              </Switch.Control>
            </>
          )}
        </Switch>
  );
}