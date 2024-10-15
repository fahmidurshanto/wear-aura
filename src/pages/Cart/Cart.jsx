

const Cart = () => {
  const cart = [
    // Sample cart items
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">Your Cart</h2>
      {cart.length > 0 ? (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex gap-10 items-center justify-end">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md mr-4" />
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  +
                </button>
                <input type="number" min="1" value={item.quantity} className="border border-gray-300 rounded-md w-12 p-2 text-center" />
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  -
                </button>
              </div>
              <p className="text-gray-600">Total: ${item.price * item.quantity}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;