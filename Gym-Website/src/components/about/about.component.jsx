import aboutimage from "../../assets/about.png";
export function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          architecto commodi nam culpa, quasi sunt ab omnis quisquam id suscipit
          maxime consequatur earum officiis cumque temporibus magni hic debitis
          recusandae.
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}
