import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removing } from "./Store";
import { useState } from "react";

function Cart() {
    const dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart);
    const [disamount, setdisamount] = useState(0);
    const [couponCode, setCouponCode] = useState('');
    const [coupon,setCoupon] = useState(0);
    

    /* Coupon Switch */
    const handleApplyCoupon = () => {
        switch (couponCode) {
            case "NEW10":
                setCoupon(10);
                
                break;
            case "SUPER20":
                setCoupon(20);
                
                break;
            case "NEW50":
                setCoupon(50);
                
                break;
            default:
                alert("plz enter valid coupon code!!!")
            setCoupon(0);
            
                
        }
    };

    const data = cartitems.map((item, index) => (
        <li key={index}>
            {item.name} - ${item.price} - 
            <button onClick={() => dispatch(increment(item))}>+</button>
            {item.quantity}
            <button onClick={() => dispatch(decrement(item))}>-</button>
            <button onClick={() => dispatch(removing(item))}>remove</button>
            <strong style={{ color: "black" }}>Total: ${item.quantity * item.price}</strong>
        </li>
    ));
    
    const handleDiscount = (dvalue) => {
        setdisamount(dvalue);
    };

    const calculateTotal = () => {
        const totalAmount = cartitems.reduce((sum, item) => sum + item.quantity * item.price, 0);
        const discountAmount = (disamount / 100) * totalAmount;
        const netAmount = totalAmount - discountAmount ;
        const copondis = (netAmount*coupon)/100;
        const Afterdis = netAmount-(netAmount *coupon)/100;
        return {
            total: totalAmount.toFixed(2),
            discountAmount: discountAmount.toFixed(2),
            netAmount: netAmount.toFixed(2),
            copondis:copondis.toFixed(2),
            Afterdis:Afterdis.toFixed(2)
        };
    };

    const { total, discountAmount, netAmount,Afterdis,copondis} = calculateTotal();

    return (
        <>
            <h1>This is Cart</h1>
            {cartitems.length > 0 ? (
                <>
                    <ul style={{ color: "red" }}>{data}</ul>
                    <h2>Total Price: ${total}</h2>
                    <span><button onClick={() => handleDiscount(10)}>10%</button></span>
                    <span><button onClick={() => handleDiscount(20)}>20%</button></span>
                    <span><button onClick={() => handleDiscount(30)}>30%</button></span>
                    <h2>Discount Price: ${discountAmount}</h2> 
                    <p>copondiscount:{copondis}</p>
                    <h2>Net Total: ${Afterdis}</h2>
                    <input 
                        type="text" 
                        value={couponCode} 
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon code" 
                    />
                    <button onClick={handleApplyCoupon}>Apply Coupon</button>
                    <p>"✨Coupon applied successfully✨: {coupon}% discount!"</p>

                </>
            ) : (
                <h2>Cart is empty</h2>
            )}
        </>
    );
}

export default Cart;
