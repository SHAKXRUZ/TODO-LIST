import "./Completed.css";
import { useState, useEffect } from "react";

const Completed = () => {
  const [data, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="all">
      <div className="all_task">
        {data.map((el, inx) => (
          <div key={inx} className="tasks">
            <input className="form_checkbox" type="checkbox" />
            <p className="data_text">{el.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Completed;
