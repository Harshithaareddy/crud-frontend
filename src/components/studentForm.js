import { useEffect, useState } from "react";

function StudentForm(props){
    const [name,setName] = useState("props.nameValue");
    const [email,setEmail] = useState("props.emailValue");
    const [rollno,setRollno] = useState("props.rollnoValue");

    useEffect(()=>{
        setName(props.nameValue)
        setEmail(props.emailValue);
        setRollno(props.rollnoValue)
    },[props.nameValue,props.emailValue,props.rollnoValue]);
    
    const arr= [name,email,rollno];

    const handleClick = ()=>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=> setName(event.target.value)} class= "form-control my-3" placeholder = "Enter your name" />
            <input defaultValue={props.emailValue} onChange={(event)=> setEmail(event.target.value)} class= "form-control my-3" placeholder = "Enter your email" />
            <input defaultValue={props.rollnoValue} onChange={(event)=> setRollno(event.target.value)} class= "form-control my-3" placeholder = "Enter your roll number" />
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
} 

export default StudentForm;