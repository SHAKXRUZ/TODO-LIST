import "./Create.css";
import { Link } from "react-router-dom";
const Create = () => {
  const register = (e) => {
    e.preventDefault();
    let { text } = e.target;
    let new_user = {
      text: text.value,
    };
    fetch("http://localhost:3000/create_data", {
      method: "POST",
      body: JSON.stringify(new_user),
    })
      .then((res) => res.json())
      .then((data) => window.location.reload(false));
  };
  return (
    <div className="create">
      <form onSubmit={(e) => register(e)} className="form">
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
            <Link to="/" className="navbar_link">
              All
            </Link>
          </li>
          <li className="navbar_list">
            <Link to="/active" className="navbar_link">
              Active
            </Link>
          </li>
          <li className="navbar_list">
            <Link to="/completed" className="navbar_link">
              Completed
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Create;
