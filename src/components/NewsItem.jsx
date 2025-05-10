import image from '../assets/img/news.jpg';

function NewsItem({ title, description, src, url }) {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block mx-3"
      style={{ width: "22rem", height: "32rem" }}
    >
      <img
        src={src || image}
        className="card-img-top"
        alt="news"
        style={{
          height: "200px",
          objectFit: "cover", // ensures the image fills without distortion
        }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{title ? title.slice(0, 50) : "Untitled News"}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Latest update: Something important just happened!"}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
