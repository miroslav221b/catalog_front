import React, { useState } from "react";
import style from "../style/pages/Contact.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../store/slices/ContactSlice";
import Loader from "../UI/loader/Loader";
import instLogo from "../static/icons/icons8-instagram.svg";
import facebookLogo from "../static/icons/icons8-facebook.svg";
import twitterLogo from "../static/icons/icons8-twitter.svg";
import mailLogo from "../static/icons/mail-symbol-3003.svg"
const Contact = () => {
    const dispatch = useDispatch()

    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [email , setEmail] = useState("")
    const [phone , setPhone] = useState("")
    const [message , setMessage] = useState("")

    const contact = useSelector((state) => {
        return state.contact
    })

    function submit(e){
        e.preventDefault()

        dispatch(setForm({
            firstName:firstName,
            lastName:lastName,
            email:email,
            phone:phone,
            message:message,
        }))
    }

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <form onSubmit={submit} className={style.form}>
                    <p className={style.title}>
                    Fill in the fields to send a message
                    </p> 
                    <Loader isLoading={contact.isFormLoadding}>
                        <ul className={style.alertsList}>
                            {contact.alerts.map((item)=>{
                                return(<li className={style.alert}>{item}</li>)
                            })}
                        </ul>
                        <input 
                            className={style.input} 
                            type={"text"} 
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e)=>{setFirstName(e.target.value)}}
                        />
                        <input 
                            className={style.input} 
                            type={"text"} 
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e)=>{setLastName(e.target.value)}}
                        />
                        <input 
                            className={style.input} 
                            type={"email"} 
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <input 
                            className={style.input} 
                            type={"number"} 
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e)=>{setPhone(e.target.value)}}
                        />
                        <textarea
                            className={
                                `${style.input} 
                                ${style.message}`} 
                            placeholder="Message"
                            value={message}
                            onChange={(e)=>{setMessage(e.target.value)}}
                        />
                        <input 
                            className={style.submit} 
                            type={"submit"} 
                            value="SEND"
                        />
                    </Loader>
                </form>
                <div className={style.line}>

                </div>
                <div className={style.contacts}>
                    <p className={style.title}>
                    Social networks
                    </p>
                    <div className={style.contact}>
                        <div className={style.img}>
                        <img src={mailLogo}/>
                        </div>
                        <a href="#">info@praguemorning.cz</a>
                    </div>    
                    <div className={style.contact}>
                        
                                <img src={instLogo}/>
                        
                        <a href="https://www.instagram.com/praguemorningcz/">@praguemorningcz</a>
                    </div>  
                    <div className={style.contact}>
                        
                        <img src={facebookLogo}/>
                        
                        <a href="https://www.facebook.com/praguemorning">Prague Morning</a>
                    </div>     
                    <div className={style.contact}>
                        
                        <img src={twitterLogo}/>
                        
                        <a href="https://twitter.com/PragueMorning">@PragueMorning</a>
                    </div>     
                </div>
            </div>

        </div>
    )
}
export default Contact