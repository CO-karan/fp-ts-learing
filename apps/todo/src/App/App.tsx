import "./App.css";
import TodoContainer from "../feature/TodoContainer/TodoContainer";
import { Container } from "@mui/material";
import TodoProvider from "../feature/TodoContext/TodoProvider";
function App() {
  return (
    <Container
      sx={{
        backgroundColor: "#E8E1EF",
        height: "100vh",
        margin: "none",
      }}
    >
      <TodoProvider>
        <TodoContainer />
      </TodoProvider>
    </Container>
  );
}

export default App;
