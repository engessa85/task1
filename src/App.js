import logo from "./logo.svg";
import "./App.css";
import products from "./products";

function App() {
  return (
    <div className="App">
      <h1>Thi is my web app Task1</h1>
      <p>this is the solution of the first task</p>
      <img src="/market.jpg" alt="error" />
      <div>
        {products.map((element) => {
          return (
            <div>
              <h1>{element.name}</h1>
              <p>{element.price}</p>
              <img src={element.image} alt={element.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
