import { Footer, Navbar, Products } from "./components";
import { CartContext } from "./contexts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CartContext.Provider value={{cart: [
        {
          id: '1',
          name: 'Computer',
          price: 70000,
          quantity: 20
        },
        {
          id: '2',
          name: 'keyboard',
          price: 5000,
          quantity: 40,
        }
      ], appName: 'product app',
      }}>
        <Navbar />
        <main>
          <Products />
        </main>
      </CartContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
