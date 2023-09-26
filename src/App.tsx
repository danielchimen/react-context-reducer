import "./App.css";
import { Counter } from "@components/Counter";
import { LastUpdated } from "@components/LastUpdated";

function App() {
  return (
    <>
      <div className="card">
        <Counter />
        <LastUpdated />
      </div>
    </>
  );
}

export default App;
