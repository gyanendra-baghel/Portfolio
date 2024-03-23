type Props = {
    image: any
    title: string,
    description: string
    source: string
}

function ProjectCard ({title, image, description, source}:Props) {
  return (
    <div className="card">
        <img src={image} />
        <div className="card-left">
            <p className="title">{title}</p>
            <p className="desc">{description}</p>
            <a href={source}><button className="btn-grad">Source Code</button></a>
        </div>
    </div>
  )
}

export default ProjectCard