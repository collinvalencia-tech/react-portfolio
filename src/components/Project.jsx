import React from "react";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
import vid1 from "../assets/videos/vid1.mp4";
import vid2 from "../assets/videos/vid2.mp4";

function Project() {
  return (
    <section id="portfolio" className="portfolio-section bg-light">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row g-4">

          {/* Project 1 */}
          <div className="col-md-4">
            <div className="card portfolio-card">
              <img src={pic1} alt="Speaking Monkey - Blender" />
              <div className="card-body">
                <h5 className="card-title project-title">Project One</h5>
                <p className="card-text">Speaking Monkey - Blender</p>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#project1Modal">More Details</button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4">
            <div className="card portfolio-card">
              <img src={pic2} alt="Flying Bird - Blender" />
              <div className="card-body">
                <h5 className="card-title project-title">Project Two</h5>
                <p className="card-text">Flying Bird - Blender</p>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#project2Modal">More Details</button>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4">
            <div className="card portfolio-card">
              <img src={pic3} alt="Tyrant Logo - Adobe Fresco" />
              <div className="card-body">
                <h5 className="card-title project-title">Project Three</h5>
                <p className="card-text">Tyrant Logo - Adobe Fresco</p>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#project3Modal">More Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {/* Project 1 Modal */}
      <div className="modal fade" id="project1Modal" tabIndex="-1">
        <div className="modal-dialog modal-lg">  
          <div className="modal-content">
            <div className="modal-header">
              <h5>Project One Details</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p>3D monkey rigged and animated in Blender with lip sync and facial expressions.</p>
              <video controls width="100%">
                <source src={vid1} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 Modal */}
      <div className="modal fade" id="project2Modal" tabIndex="-1">
        <div className="modal-dialog modal-lg">  
          <div className="modal-content">
            <div className="modal-header">
              <h5>Project Two Details</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p>3D animation of a flying bird with realistic wing motion in Blender.</p>
              <video controls width="100%">
                <source src={vid2} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 Modal */}
      <div className="modal fade" id="project3Modal" tabIndex="-1">
        <div className="modal-dialog">  
          <div className="modal-content">
            <div className="modal-header">
              <h5>Project Three Details</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src={pic3} alt="Tyrant Logo" className="img-fluid mb-3" />
              <p>A bold logo created for esports team Tyrant with striking design elements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
