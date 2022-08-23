import RoutesApp from "./routes"
import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <section className="App">
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </section>
  );
}

export default App;
