import { useState } from "react";
import { addCategory } from "../api/categoriesApi";

export default function CategoryForm(){
    const [name,setName]=useState("");
    async function handleForm(e){
    await addCategory({ name });
    setName(""); // Optional: clear the input after submission
}
    return(
        <>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={(e)=>setName(e.target.value)}/>
                    <input type="submit" value={"Enregistrer"}/>
                </div>
            </form>
        </>
    )
}