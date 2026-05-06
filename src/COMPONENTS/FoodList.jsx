import FoodCard from "./FoodCard"

function FoodList({ products }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((p, i) => (
        <FoodCard key={i} product={p} />
      ))}
    </div>
  )
}

export default FoodList