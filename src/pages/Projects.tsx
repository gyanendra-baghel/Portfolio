import Footer from "../components/Footer"
import Header from "../components/Header"
import projectsIcon from "../assets/projects/icon"
import ProjectCard from "../components/ProjectCard"
type Props = {}

function Projects({}: Props) {
  return (
    <div>
        <Header type='other'/>
        <main className="wrapper column">
            <h1 className="heading mt-6">Projects</h1>
            <hr/>
            <div className="features">
              <ProjectCard title="Pathshala" image={projectsIcon.Pathshala} description="Pathshala is a platform for students built using React.js, Express and MongoDB" source="https://github.com/gyanendra-baghel/pathshala" live="https://pathshala.vercel.app"/>
              <ProjectCard title="Social" image={projectsIcon.Umang} description="Social is a real-time chat application built using React.js, Express and Socket.io." source="https://github.com/gyanendra-baghel/Umang" live="https://umang-platform.vercel.app"/>
              <ProjectCard title="Gyan" image={projectsIcon.Gyan} description="This search engine is implemented using PHP and MySQL, providing a powerful and efficient way to retrieve information." source="https://github.com/gyanendra-baghel/Gyan-SearchEngine" live=""/>
              <ProjectCard title="Cut.it" image={projectsIcon.CutIt} description="Cut.it allows you to create concise and memorable short links for your long URLs. " source="https://github.com/gyanendra-baghel/Cut.it" live=""/>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Projects