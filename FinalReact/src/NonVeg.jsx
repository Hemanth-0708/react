import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./Store";
function NonVeg()
{
    const dispatch = useDispatch();
    const nonvegproducts = useSelector(state => state.products.nonveg)
    const items = nonvegproducts.map((product,index)=>
    <li key = {index}>{product.name}  - ${product.price.toFixed(2)}
    <button onClick =  {()=>dispatch(addtocart(product))}>AddCart</button>
    </li>)

    return(
        <>
        <h1>this is NonVeg</h1>
        <ul>{items}</ul>
        </>
    )
}
export default NonVeg;