import "./App.css";
import BookComp from "./mainComp/mainComp";
import MainElements from "./mainComp/newElement/elements";

function App() {
  return (
    <BookComp>
      <MainElements text={"Main text"} />
      <MainElements text={"Main text"} />
    </BookComp>
  );
}

export default App;
