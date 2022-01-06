import { useState } from "react";
import "./App.css";
import poolImg from "./assets/images/pool.png";
import sheetImg from "./assets/images/sheet.png";
import orangesImg from "./assets/images/oranges.png";
import Modal from "react-bootstrap/Modal";

console.log(poolImg);
console.log(sheetImg);
console.log(orangesImg);

function dropFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header>
        <nav className="dropdown">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <p>Not available, very busy and famous.</p>
              <a onClick={handleClose}>Close</a>
            </Modal.Header>
          </Modal>
          <a onClick={dropFunction} className="dropbtn">
            More
          </a>
          <div id="myDropdown" className="dropdown-content">
            <a>Work</a>
            <a>About</a>
            <a onClick={handleShow}>Hire me</a>
          </div>
        </nav>
      </header>
      <main>
        <section className="headerTitle">
          <h1>Octavia Design</h1>
        </section>
        <div className="mainImages">
          <img
            src={poolImg}
            className="img-pool"
            alt="abstract photograph of someone diving udner the water in a pool"
          />
          <img
            src={sheetImg}
            className="img-sheet"
            alt="naked girl reaching for the sky wrapped in white sheet"
          />
          <img
            src={orangesImg}
            className="img-citrus"
            alt="karaff pouring water into glass in the sun besides slices of bloodgrape"
          />
        </div>
      </main>
    </>
  );
}

export default App;
