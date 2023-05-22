import '../scssPages/home.scss'
// import '../components/Home/Section1/Section1'
// import '../components/Home/Section2/Section2'
// import '../components/Home/Section3/Section3'
// import '../components/Home/Section4/Section4'
// import '../components/Home/Section5/Section5'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/features/products/productListSlice'
import Loader from '../components/Loader/Loader'
// import Section1 from '../components/Home/Section1/Section1'
import Section2 from '../components/Home/Section2/Section2'
// import Section3 from '../components/Home/Section3/Section3'
// import Section4 from '../components/Home/Section4/Section4'
// import Section5 from '../components/Home/Section5/Section5'


const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const { products, loading, error } = useSelector(state => state.productList)

  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <div className="container-home">
        {/* {
          <Section1 key={'bajs'} product={products} />
        } */}
        {
          <Section2 key={products.id} products={products} />
        }
        {/* {
          <Section3 key={'korv'} product={products} />
        } */}
        {/* {
          <Section4 key={'med'} product={products} />
        }
        {
          <Section5 key={'bröd'} product={products} />
        } */}
      </div>
    </div>
  )
}

export default Home