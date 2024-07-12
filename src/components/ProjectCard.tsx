type Props = {
  image: any;
  title: string;
  description: string;
  source: string;
  live: string;
};

function ProjectCard({ title, image, description, source, live }: Props) {
  return (
    <div className="card">
      <img src={image} />
      <div className="card-left">
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a href={source} target="_blank">
            <button className="btn-grad">Source</button>
          </a>
          {live && (
            <a href={live} target="_blank">
              <button className="btn-grad">Live</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
