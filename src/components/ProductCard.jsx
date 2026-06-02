export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded-md mb-3"
      />

      <h4 className="font-semibold">{product.name}</h4>
    

        <p className="text-sm text-gray-500">
        {product.size} {product.unit}
      </p>
      <p className="text-gray-600">
        Price: Ksh {product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>

    </div>
  );
}