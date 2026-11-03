import { faBolt, faBookOpen, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/highlight.jsx";
import React from "react";

const Highlights = () => {
  return (
    <div>
      <section id="highlights">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Why Choose <span className="purple">Library</span>
            </h2>
            <div className="highlight__wrapper">
              <Highlight
                icon={<FontAwesomeIcon icon={faBolt} />}
                title="Easy and Quick"
                para = "Get access to the book you purchased online instantly."
              />

              <Highlight
                icon={<FontAwesomeIcon icon={faBookOpen} />}
                title="10,000+ Books"
                para = "Library has books in all your favourite categories"
              />

              <Highlight
                icon={<FontAwesomeIcon icon={faTags} />}
                title="Affordable"
                para = " Get your hands on popular books for as little as $10."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Highlights;
