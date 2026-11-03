import { useState } from "react";
import { Button } from "@cal-ui/react";

const styles = ["default", "compact", "sharp"];
const themes = ["default", "forest", "ocean", "rose"];

export function App() {
  const [style, setStyle] = useState("default");
  const [theme, setTheme] = useState("default");
  const [dark, setDark] = useState(false);

  return (
    <div
      data-style={style}
      data-theme={theme}
      className={`min-h-screen bg-background text-foreground ${dark ? "dark" : ""}`}
    >
      <main className="mx-auto max-w-3xl space-y-10 p-8">
        <h1 className="text-3xl font-bold">Cal UI Playground</h1>

        <section className="space-y-3">
          <h2 className="font-semibold">Controls</h2>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted">Style:</span>
            {styles.map((s) => (
              <Button key={s} size="sm" variant={style === s ? "primary" : "secondary"} onPress={() => setStyle(s)}>
                {s}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted">Theme:</span>
            {themes.map((t) => (
              <Button key={t} size="sm" variant={theme === t ? "primary" : "secondary"} onPress={() => setTheme(t)}>
                {t}
              </Button>
            ))}
          </div>
          <Button size="sm" variant="ghost" onPress={() => setDark(!dark)}>
            {dark ? "Switch to light" : "Switch to dark"}
          </Button>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold">Button variants</h2>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button isDisabled>Disabled</Button>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold">Button sizes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
