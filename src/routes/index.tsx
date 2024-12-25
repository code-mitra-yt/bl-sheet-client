import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  AppLayout,
  AuthLayout,
  DashboardLayout,
  RootLayout,
  ProjectLayout,
} from "@/layouts";
import {
  HomePage,
  DashboardHome,
  SignUpPage,
  SignInPage,
  ForgotPassword,
  TermsServices,
  PrivacyPolicy,
  Projects,
  Todos,
  Settings,
  Profile,
  CreatePassword,
  ResetPassword,
  Verification,
  ProjectDetails,
  ProjectMembers,
} from "@/features";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="create-password" element={<CreatePassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="terms-of-service" element={<TermsServices />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>

      <Route path="guidance">
        <Route path="verification" element={<Verification />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="dashboard" element={<DashboardLayout />}>
        <Route path="home" element={<DashboardHome />} />
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path=":projectId" element={<ProjectLayout />}>
            <Route path="details" element={<ProjectDetails />} />
            <Route path="members" element={<ProjectMembers />} />
          </Route>
        </Route>
        <Route path="todos" element={<Todos />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
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
