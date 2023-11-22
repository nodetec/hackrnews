import "./dialog.css";

export default function Dialog() {
  return (
    <>
      <p>
        <a href="#dialog">Open lialog</a>
      </p>

      <div id="dialog" className="menu-open">
        <h2>Dialog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#">Close</a>
      </div>
    </>
  );
}
