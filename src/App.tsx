import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@/components";

import store, { persistor } from "./store";
import router from "./routes";

function App() {
  return (
    <div vaul-drawer-wrapper="">
      <div className="relative flex min-h-screen flex-col bg-background text-foreground">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
              <RouterProvider router={router} />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </div>
    </div>
  );
}

export default App;
