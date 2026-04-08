import "./App.css";
import { useCart } from "./hooks/useCart.js"
import  {products} from "./data/Products.js"
import Product from "./components/Product.jsx"
import Cart from "./components/Cart.jsx"
import CartItem from "./components/CartItem.jsx";

function App() {

  const { cart , addToCart , removeFromCart , updateCart , total } = useCart();
 
  return (
    <>
     <div className="app">
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <main className="products">
        <section>
          {
          products.map(product => (
            <Product 
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))
        }
        </section>
        <Cart 
        cart={cart}
        onUpdateQuantity={updateCart}
        onRemove={removeFromCart}
        total={total}
        />
      </main>
     </div>
     
    </>
  )
}

export default App
