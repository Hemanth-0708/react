import {useDispatch, useSelector} from 'react-redux'
import { addtocart } from './Store'
function Veg()
{
    
    const dispatch = useDispatch()
    const vegproducts = useSelector(state => state.products.veg)
    const items = vegproducts.map((product,index)=>
    <li key = {index}>{product.name}  - ${product.price.toFixed(2)}
    <button onClick = {()=>dispatch(addtocart(product))}>AddCart</button>
    </li>
    )
    return(
        <>
        <h1>Veg Products</h1>
        <ul>
            {items}
        </ul>
        </>
    )
}
export default Veg;