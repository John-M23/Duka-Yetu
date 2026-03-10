import DashboardLayout from "../Layouts/DashboardLayout";

export default function Pos() {
  const products = {
    drinks: [
      { id: 1, name: "Coca Cola", price: 50 },
      { id: 2, name: "Pepsi", price: 60 },
      { id: 3, name: "Sprite", price: 70 },
      { id: 4, name: "Fanta", price: 80 },
      { id: 5, name: "Mirinda", price: 90 },
      { id: 6, name: "Mountain Dew", price: 100 },
      { id: 7, name: "7Up", price: 110 },
    ],
    flour: [
      { id: 8, name: "Soko", price: 220 },
      { id: 9, name: "Unga", price: 250 },
    { id: 10, name: "Pembe", price: 300 },
        { id: 11, name: "Dola", price: 350 },
     { id: 12, name: "Mambo", price: 400 },],
    liquor: [
      { id: 9, name: "Battery", price: 30 },
      { id: 10, name: "Smirnoff", price: 1500 },
      { id: 11, name: "Johnnie Walker", price: 2000 },
      { id: 12, name: "Hennessy", price: 2500 },
    ]
  };

  return (
    <DashboardLayout>
      <h1>Point of Sale (POS)</h1>
      <div className="flex h-full">
        {/* Product Section */}
        <div className="w-2/3 p-6">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
 <span className="ml-2">
      {/* Search Icon SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
      </svg>
    </span>


{/* Drinks Section */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Drinks</h3>
            <div className="grid grid-cols-3 gap-4">
              {products.drinks.map((product) => (
                <div key={product.id} className="border p-4 rounded">
                  <h4>{product.name}</h4>
                  <p>Price: Ksh {product.price}</p>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Flour Section */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Flour</h3>
            <div className="grid grid-cols-3 gap-4">
              {products.flour.map((product) => (
                <div key={product.id} className="border p-4 rounded">
                  <h4>{product.name}</h4>
                  <p>Price: Ksh {product.price}</p>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Liquor Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Liquor</h3>
            <div className="grid grid-cols-3 gap-4">
              {products.liquor.map((product) => (
                <div key={product.id} className="border p-4 rounded">
                  <h4>{product.name}</h4>
                  <p>Price: Ksh {product.price}</p>
                  <button className="mt-2 bg-blue-500 text-purple px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Cart Section */}
        <div className="w-1/3 p-6 bg-gray-100">
          <h2 className="text-xl font-semibold mb-4">Cart</h2>
          <p className="text-gray-600">No items in cart</p>
        </div>
      </div>
    </DashboardLayout>
  );
}