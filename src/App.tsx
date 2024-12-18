import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <div vaul-drawer-wrapper="">
      <div className="relative flex min-h-screen flex-col bg-background text-foreground">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
