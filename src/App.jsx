import './App.css';
import { Routes, Route } from 'react-router-dom';
import Index from './components';
import ProjectDetailed from './components/ProjectDetailed';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<ProjectDetailed />} />
      </Routes>
    </>
  )
}

export default App
