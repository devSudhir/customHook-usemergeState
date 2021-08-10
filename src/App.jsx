import "./styles.css";
import { useMergeState } from "./Hooks/UseMergeState";
import { useState } from "react";
export default function App() {
  const [userName, setUserName] = useState("");
  console.log(userName);

  const [email, setEmail] = useState("");
  console.log(email);
  const [password, setPassword] = useState("");
  console.log(password);
  const [state, setState] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      username: userName,
      email: email,
      password: password
    });
    //console.log(state);
  };
  const myDetails = useMergeState(state);
  console.log(myDetails);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <button type="submit">Submit</button>
      </form>

      <br />
      <br />
      <br />
      <br />
      <div>
        <h2 style={{ color: "coral" }}>UserDetails after submit shows below</h2>
        {myDetails[0] && (
          <>
            <h2>Name: {myDetails[0]}</h2>
            <h3>Mail: {myDetails[1]}</h3>
          </>
        )}
      </div>
    </div>
  );
}
