import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Home from '../screens/mainscreens/home/Home'
import ExperiencePage from '../screens/mainscreens/experience/ExperiencePage'
import ToolsPage from '../screens/mainscreens/tools/ToolsPage'
import ProjectsPage from '../screens/mainscreens/projects/ProjectsPage'
import ContactPage from '../screens/mainscreens/contact/ContactPage'

const Navigation:React.FC = () => {
  return (
    <BrowserRouter>
    
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route  path="/experience" element={<ExperiencePage />} />
            <Route  path="/tools" element={<ToolsPage />} />
            <Route  path="/projects" element={<ProjectsPage />} />
            <Route  path="/contact" element={<ContactPage />} />
            <Route  path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation