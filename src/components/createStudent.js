import StudentForm from "./studentForm";
import {useState} from "react";
import Axios from "axios";

function CreateStudent(){
    const [arr,setArr] = useState([]);

    const getState = (childData) => {
        setArr(childData);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = {name: arr[0], email: arr[1], rollno: arr[2]};
        Axios.post("https://crud-backend-7oq5.onrender.com/studentRoute/create-student",data)
        .then((res) =>{
            if(res.status === 200)
                alert("record added successfully");
            else 
                Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}
                         nameValue = ""
                         emailValue = ""
                         rollnoValue = "">
                Create Student
            </StudentForm>
        </form>
    )
}

export default CreateStudent;