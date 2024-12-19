import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components";
import router from "./routes";

function App() {
  return (
    <div vaul-drawer-wrapper="">
      <div className="relative flex min-h-screen flex-col bg-background text-foreground">
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
