import Footer from "../components/Footer"
import Header from "../components/Header"
import ChatNow from "../assets/chat-now.png"
import CutIt from "../assets/cut-it.jpg"
import Gyan from "../assets/gyan.png"
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
              <ProjectCard title="ChatNow" image={ChatNow} description="ChatNow is a real-time chat application built using React.js, Express and Socket.io." source="https://github.com/gyanendra-baghel/ChatNow"/>
              <ProjectCard title="Cut.it" image={CutIt} description="Cut.it allows you to create concise and memorable short links for your long URLs. " source="https://github.com/gyanendra-baghel/Cut.it"/>
              <ProjectCard title="Gyan" image={Gyan} description="This search engine is implemented using PHP and MySQL, providing a powerful and efficient way to retrieve information." source="https://github.com/gyanendra-baghel/Gyan-SearchEngine"/>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Projects