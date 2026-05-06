import { useNavigate } from "react-router-dom"

function FoodCard({ product }) {
  const navigate = useNavigate()

<<<<<<< HEAD
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
=======
  const handleClick = () => {
    navigate(`/product/${product.code}`)
  }

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
>>>>>>> origin/main
      <h3>{product.product_name}</h3>
      <p>{product.brands}</p>
    </div>
  )
}

export default FoodCard