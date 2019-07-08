import React  from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function SmallScreenBlocker() {
  return (
    <div className="small-screen hide-print">
      <section
        className="hero is-info is-fullheight"
        style={{
          background: "linear-gradient(126deg, #e1ebee -23%, #061c6d)"
        }}
      >
        <Header />

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1>In order to use ARKPaper, please increase the width of this window to at least 1024px...</h1>

          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}
