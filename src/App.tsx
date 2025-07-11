import Navbar from "./components/Navbar";
import { RouterProvider } from "./routing/RouterProvider";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider />
    </div>
  );
}