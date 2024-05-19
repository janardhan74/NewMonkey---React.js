import React from "react";
// Your API key is: 3cbdee7cc20f42459638cfe0fde36b3e
export default function NewsItem (props)  {
    let { title, description, imageURL, newsURL, date, author , source } = props;
    // if(!imageURL) console.log(title)
    return (
      <div>
        <div className="card">
          <div style={{display:'flex',justifyContent:'end',position:'relative',top:'5px',right:'5px'}}>
            <span className="position-absolute top-0 start-100translate-middle badge rounded-pill bg-danger">
              {source?source:"Unknown"}
            </span>
          </div>
          <img
            src={
              imageURL
                ? imageURL
                : "https://t3.ftcdn.net/jpg/00/96/45/06/240_F_96450662_SPjrCNYmHizwNptyLBv7kRdjplt5hRIz.jpg"
            }
            className="card-img-top"
            alt="..."
            height="200px"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>

            <div className="card-footer text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toUTCString()}
            </div>
            <a href={newsURL} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}
