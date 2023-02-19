import "./Create.css";
import { Link } from "react-router-dom";
const Create = () => {
  return (
    <div className="create">
      <form className="form">
        <input
          className="form_input"
          type="text"
          name="text"
          required
          placeholder="New Task..."
        />
      </form>
      <nav>
        <ul className="navbar_item">
          <li className="navbar_list">
            <Link className="navbar_link">All</Link>
          </li>
          <li className="navbar_list">
            <Link className="navbar_link">Active</Link>
          </li>
          <li className="navbar_list">
            <Link className="navbar_link">Completed</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Create;
