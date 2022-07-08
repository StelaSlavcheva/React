import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import Spinner from "./Components/Spinner";
import { ToDoList } from "./Components/ToDoList";

/* eslint-disable */

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        {/* <!-- Section container --> */}
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">
            {/* <Spinner /> */}
            <ToDoList />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
