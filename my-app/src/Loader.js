import { useState} from "react";
import PacmanLoader from "react-spinners/PacmanLoader";



function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}></button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />
<h2> We are looking for the best place for you!</h2>
      <PacmanLoader
        color="blueviolet"
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
        size={85}
      /> 
    </div>
  );
}

export default Loader;


