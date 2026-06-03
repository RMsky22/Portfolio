// IntroductionPage.jsx - With full styling restored
import Hero from "./Hero";
import Card from "./Card";
import ResponsiveGrid from "./ResponsiveGrid";
import ToDoList from "./Todolist";
import { useState } from "react";
const IntroductionPage = () => {
  const skills = [
    { title: "React", description: "Hooks, Context," },
    { title: "JavaScript", description: "ES6+, DOM" },
    { title: "CSS", description: "Flexbox, Grid, Animations" },
    { title: "UI/UX", description: "Component libraries, Design systems" },
  ];

  const featuredWork = [
    {
      title: "Todo List App",
      description: "Task management with save/load features.",
      component: <ToDoList />, // Add this
      buttons: [{ label: "Try It", variant: "primary" }],
    },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("featured-projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    const [isTodoOpen, setIsTodoOpen] = useState(false);
  return (
    <div className="introduction-page">
      <Hero />

      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <ResponsiveGrid>
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </ResponsiveGrid>
        </div>
      </section>

      <section className="featured-section" id="featured-section">
        <div className="container">
          <h2 className="section-title">Featured projects</h2>
          <ResponsiveGrid>
            {featuredWork.map((project, idx) => (
              <Card
                key={idx}
                title={project.title}
                description={project.description}
                buttons={project.buttons}
              />
            ))}
          </ResponsiveGrid>
          <div className="center-link">
            <button
              onClick={scrollToProjects}
              className="link-more"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              Browse all projects →
            </button>
          </div>
        </div>
      </section>
            <section className="todo-demo-section">
        <div className="container">
          <div className="collapsible-header" onClick={() => setIsTodoOpen(!isTodoOpen)}>
            <h2 className="section-title">Live Demo: Todo List</h2>
            <span className="toggle-icon">{isTodoOpen ? '▲' : '▼'}</span>
          </div>
          {isTodoOpen && (
            <div className="collapsible-content">
              <ToDoList />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default IntroductionPage;
