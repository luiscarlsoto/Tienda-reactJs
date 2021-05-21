import React,{useState} from 'react'
import NavBar from '../NavBar/NavBar'
import './Payment.css'
import Bill from '../Bill/Bill'

const Payment = () => {
    const [bill, setBill] = useState(false)
    const showBill = () =>{
        setBill(true)
    }
    return (
        <div className="dashboard">
            <NavBar/>
            {bill ? <Bill/> : null}
            <div className="container" style={{marginTop:"5rem"}}>
                <div className="payment">
                    <div>
                        <div><h2>Tarjeta de crédito</h2></div>
                    </div>
                    <label>Numero de tarjeta</label><input/>
                    <div>
                        <label>Exp</label><input type="date"/>
                        <label>CVC</label><input/>
                    </div>
                    <button onClick={() => showBill()}>Procesar pago</button>
                </div>
                </div>
        </div>
    )
}

export default Payment
