import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Project from "./pages/Project"

import { ProjectsProvider } from "./context/ProjectsProvider"


function App() {

  return (
    <>
      <ProjectsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<Project />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProjectsProvider>
    </>  
  )
}

export default App
