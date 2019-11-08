import React from 'react'
import { Link } from "react-router-dom";

export default function Card(props) {
  console.log(props)
  return (
    <div>
      <div className="container-fluid">
        <div className="card mb-3" style={{ maxWidth: "330px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                className="img-thumbnail"
                src={props.image}
                alt=""
                height="230"
                width="160"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.tagline}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Contributed by:
                      <br />
                    {props.contributed}
                  </small>
                </p>

                <Link
                  to={`/beers/${props.id}`}
                  href="#"
                  class="btn btn-primary"
                >
                  Details
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




