import { useNavigate } from "react-router-dom"

function FoodCard({ product }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() =>
        navigate(`/product/${product.id}`, {
          state: { product },
        })
      }
      style={{
        border: "1px solid #ddd",
        padding: "12px",
        margin: "10px",
        cursor: "pointer",
      }}
    >
      <h3>{product.product_name}</h3>
      <p>{product.brands}</p>
    </div>
  )
}

export default FoodCard