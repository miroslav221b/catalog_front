import { createSlice } from "@reduxjs/toolkit";
const contactSlice = createSlice({
    name: "contact",
    initialState: {
        form:{
            firstName:null,
            lastName:null,
            email:null,
            phone:null,
            message:null,
        },
        alerts:[],
        isFormLoadding:false,
        status:null,
    },
    reducers: {
        setForm: (state, action) => {
            const form = {...action.payload}
            state.alerts=[]
            if(form.firstName.length < 2 ){
                state.alerts.push("specify First Name")
            }
            if(form.lastName.length < 2 ){
                state.alerts.push("specify Last Name")
            }
            if(form.email.length < 2 ){
                state.alerts.push("specify Last Email")
            }
            if(form.phone.length < 7 ){
                state.alerts.push("enter a phone number")
            }
            if(form.message.length < 10 ){
                state.alerts.push("the message is short")
            }
            if(state.alerts.length === 0 ){
                state.isFormLoadding = true
                
            }
        },
    }, extraReducers: (builder) => {
        
    }
})
export const { setForm } = contactSlice.actions
export default contactSlice.reducer