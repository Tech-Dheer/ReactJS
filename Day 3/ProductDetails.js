import { useState } from "react";
import './ProductDetails.css';

function ProductDetails()
{
    const [pname, setPname] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [total, setTotal] = useState("");

    function Calculate(){
        let totalPrice = price * qty;
        let discount = 0;

        if (qty >= 30){
            discount = 0.15;
        }
        else if(qty > 20){
            discount = 0.10;
        }
        else if(qty > 10){
            discount = 0.05;
        }

        let discountPrice = totalPrice - (totalPrice * discount);
        setTotal(discountPrice);
    };
    return(
        <div className="container" >
            <h2>Product Details</h2>
            <hr/>

            <label>
                Product Name : <input type="text" value={pname} onChange={(e) => setPname(e.target.value)} />
            </label>
            <br/>
            <label>
                Price : <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <br/>
            <label>
                Quantity: <input type="text" value={qty} onChange={(e) => setQty(e.target.value)} />
            </label>
            <br/>

            <button onClick={Calculate}>Calculate Total Amount</button>
            <br/>
            {total > 0 && (
                <div><p>Total Amount: Rs{total.toFixed(2)}</p></div>
            )}
        </div>
    );


}
export default ProductDetails;