import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import StartPage from "./Start page/StartPage";
import SetupPage from "./Setup page/SetupPage";
import QuizPage from "./Quiz page/QuizPage";
import ScorePage from "./Score page/ScorePage";

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/setup" element={<SetupPage />} />
                    <Route path="/quiz" element={<QuizPage />} />
                    <Route path="/score" element={<ScorePage />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;

