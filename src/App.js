import "./App.css";
import Row from "./components/Row";
import request from "./request";
function App() {
  return (
    <div className="App">
      <Row title="NETFLIX_ORIGINAL" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="TRENDING" fetchUrl={request.fetchTrending} />
    </div>
  );
}

export default App;
