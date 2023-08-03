import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DataContext } from "./context/data.context";

function App() {
  const [count, setCount] = useState(0);
  const { data, loading } = useContext(DataContext);
  const country = data?.[0];
  console.log("Country", country?.languages, data);

  return (
    <>
      {loading ? (
        <>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
      ) : (
        <div>
          <h1>Country Data</h1>
          <img src={country?.flags?.png} alt="" />
          <div className="card">
            <p className="">Name: {country?.name?.common ?? ""}</p>
            <p>
              Languages: {Object.values(country?.languages ?? {}).join(", ")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
