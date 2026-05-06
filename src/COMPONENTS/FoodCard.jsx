import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const navigate = useNavigate()

  return (
    <Card>
      <CardActionArea
        onClick={() =>
          navigate(`/product/${product.id}`, { state: { product } })
        }
      >
        <CardContent>
          <Typography variant="h6">
            {product.product_name || 'Unknown'}
          </Typography>
          <Typography color="text.secondary">
            {product.brands || 'Unknown Brand'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default FoodCard