import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AppLayout, RootLayout } from "@/layouts";
import {
  HomePage,
  DashboardHome,
  Projects,
  SignUpPage,
  SignInPage,
  ForgotPassword,
  TermsServices,
  PrivacyPolicy,
} from "@/features";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="auth">
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="terms-of-service" element={<TermsServices />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard">
          <Route index element={<DashboardHome />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Route>
    </Route>
  ),
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
