import '../scssPages/home.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/features/products/productListSlice'
import Loader from '../components/Loader/Loader'
import ProductCard from '../components/ProductCard/ProductCard'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const { products, loading, error } = useSelector(state => state.productList)

  return (
    <div>
      { loading && <Loader />}
      { error && <p>{error}</p>}
      <div className="container-home">
        {
          products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </div>
  )
}

export default Home