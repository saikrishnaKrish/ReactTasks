import useApiCall from '../hooks/useApiCall';
import ShowProducts from './ShowProducts';
// import useApiCall from './useApiCall';
import './styles.css'
const PLPpage = () => {
    const {     data,
        error,
        isLoading, } = useApiCall("https://api.escuelajs.co/api/v1/products", []);

    const showProducts=(productsData)=>{

        return productsData?.map((item)=>{
            return <ShowProducts key={item.id} item={item}/>
        })

    }   

  return (
    <div>
        <h1> PLPpage </h1>
        {isLoading && "Loading Products...."}
        {error && "Error occurred"}
        {data.length > 0 &&
         showProducts(data) }    
    </div>
  )
}

export default PLPpage