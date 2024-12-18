import { AppLayout, RootLayout } from "@/layouts";
import { AboutPage, HomePage, DashboardHome, Projects } from "@/features";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="dashboard">
          <Route index element={<DashboardHome />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Route>
    </Route>
  )
);

export default router;
