import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { AboutPage } from "./pages/AboutPage";
import { CareerMentoringPage } from "./pages/CareerMentoringPage";
import { ContactPage } from "./pages/ContactPage";
import { CorporateTrainingPage } from "./pages/CorporateTrainingPage";
import { FacultyDevelopmentPage } from "./pages/FacultyDevelopmentPage";
import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { StudentProgramsPage } from "./pages/StudentProgramsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/corporate-training" element={<CorporateTrainingPage />} />
        <Route path="/student-programs" element={<StudentProgramsPage />} />
        <Route path="/faculty-development" element={<FacultyDevelopmentPage />} />
        <Route path="/career-mentoring" element={<CareerMentoringPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
