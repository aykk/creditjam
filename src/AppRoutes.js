import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FormPages } from './pages/FormPages';
import { Hero } from './pages/Hero';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/formpage" element={<FormPages />} />
            </Routes>
        </Router>
    )
}