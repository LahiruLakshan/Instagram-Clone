import React from "react";

function Suggestions(props) {
  return (
    <div
      className="position-absolute"
      style={{ right: "8rem", top: "5rem", width: "300px" }}
    >
      <div className="top-section w-100 mt-2 mx-3 d-flex align-items-center">
        <div className="me-sm-3">
          <img
            src={props.profilePicture}
            style={{ height: "60px", width: "60px", borderRadius: "50%" }}
          />
        </div>
        <div className="fw-bold username">{props.username}</div>
      </div>
      <div className="mt-3 d-flex justify-content-between">
        <div>Suggested For You</div>
        <div>See All</div>
      </div>
      <div className="suggestions d-flex flex-column">
        <div className="suggestion mx-2 my-2 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src="https://wallpapers.com/images/hd/shadow-boy-white-eyes-unique-cool-pfp-nft-13yuypusuweug9xn.jpg"
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            />
            <div className="d-flex flex-column mx-2">
              <div className="fw-bold">shami</div>
              <div className="fw-light">Suggested For You</div>
            </div>
          </div>
          <button className="btn btn-link">Follow</button>
        </div>
        <div className="suggestion mx-2 my-2 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src="https://wallpapers.com/images/hd/shadow-boy-white-eyes-unique-cool-pfp-nft-13yuypusuweug9xn.jpg"
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            />
            <div className="d-flex flex-column mx-2">
              <div className="fw-bold">shami</div>
              <div className="fw-light">Suggested For You</div>
            </div>
          </div>
          <button className="btn btn-link">Follow</button>
        </div>
        <div className="suggestion mx-2 my-2 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src="https://wallpapers.com/images/hd/shadow-boy-white-eyes-unique-cool-pfp-nft-13yuypusuweug9xn.jpg"
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            />
            <div className="d-flex flex-column mx-2">
              <div className="fw-bold">shami</div>
              <div className="fw-light">Suggested For You</div>
            </div>
          </div>
          <button className="btn btn-link">Follow</button>
        </div>
        <div className="suggestion mx-2 my-2 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src="https://wallpapers.com/images/hd/shadow-boy-white-eyes-unique-cool-pfp-nft-13yuypusuweug9xn.jpg"
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            />
            <div className="d-flex flex-column mx-2">
              <div className="fw-bold">shami</div>
              <div className="fw-light">Suggested For You</div>
            </div>
          </div>
          <button className="btn btn-link">Follow</button>
        </div>
        <div className="suggestion mx-2 my-2 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src="https://wallpapers.com/images/hd/shadow-boy-white-eyes-unique-cool-pfp-nft-13yuypusuweug9xn.jpg"
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            />
            <div className="d-flex flex-column mx-2">
              <div className="fw-bold">shami</div>
              <div className="fw-light">Suggested For You</div>
            </div>
          </div>
          <button className="btn btn-link">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
