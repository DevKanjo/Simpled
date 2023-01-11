import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Logo from "./img/logo.png";

export default function App() {
  return (
    <div className="d1">
      <div className="d2">
        <div className="d3">
          <img src={Logo} />
          <span className="text1">Simpled.app</span>
        </div>
        <ul className="list1">
          <li className="col-sm-9">
            <a
              type="button"
              style={{ textDecoration: "none" }}
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              New
            </a>
          </li>
          <li className="col-sm-1">Connect</li>
        </ul>
      </div>
      <div className="d4">
        <div>Products_______________</div>
        <div className="text2">YOUR PRODUCTS</div>
        <div className="row mt-5 d5">
          <div className="col-sm-3 mt-2" style={{ color: "#3598DC" }}>
            <div
              className="bg-light box1"
              style={{ display: "grid", justifyContent: "space-around" }}
            >
              PRO- <br />
              DUCT ONE
            </div>
            <span className="text-light">Edit</span>
          </div>
          <div className="col-sm-3 mt-2" style={{ color: "#3598DC" }}>
            <div
              className="bg-light box1"
              style={{ display: "grid", justifyContent: "space-around" }}
            >
              PRO- <br />
              DUCT TWO
            </div>
            <span className="text-light">Edit</span>
          </div>
          <div className="col-sm-3 mt-2" style={{ color: "#3598DC" }}>
            <div
              className="bg-light box1"
              style={{ display: "grid", justifyContent: "space-around" }}
            >
              PRO- <br />
              DUCT THREE
            </div>
            <span className="text-light">Edit</span>
          </div>
          
        </div>
      </div>
      <div className="modal fade m-0" id="myModal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h6>Please fill in this form!</h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <select className="form-select bg-primary">
                  <option defaultChecked>Product Type</option>
                  <option>Stake</option>
                  <option>Flip Coin</option>
                  <option>NFT</option>
                  <option>Token</option>
                  <option disabled>P2P</option>
                </select>
                <div className="mt-3 mb-3">
                  <label className="form-label">Choose color</label>
                  <input
                    className="form-control form-control-lg"
                    type="color"
                  ></input>
                </div>
                <div className="mt-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    style={{ backgroundColor: "lightgray" }}
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
