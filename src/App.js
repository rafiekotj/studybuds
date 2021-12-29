import "./App.css";
import createRoutes from "./routes/routes";

function App() {
  console.warn = () => {};
  const routes = createRoutes();

  return routes;
}

export default App;
