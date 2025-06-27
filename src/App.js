import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [inputState, setInputState] = useState("");
  const [inputTask, setInputTask] = useState([]);

  const task = () => {
    if (inputState.trim() === "") {
      return;
    }
    setInputTask([...inputTask, inputState]);
    setInputState("");
  };

  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-4">📝 TODO LIST</h1>
      <div className="d-flex justify-content-center gap-3 mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Enter a task..."
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
        />
        <button className="btn btn-success" onClick={task}>Add</button>
        <button className="btn btn-info" onClick={() => console.log("Edit")}>Edit</button>
      </div>
      <div className="row text-center">
        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h4 className="text-success">Tasks</h4>
            {inputTask.length === 0 ? (
              <p>No tasks added yet.</p>
            ) : (
              <ul className="list-group">
                {inputTask.map((task, index) => (
                  <li key={index} className="list-group-item">{task}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h4 className="text-info">Updates</h4>
            <p>No updates available.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
