import { useEffect, useState } from "react"
import { getCategories } from "../api/categoriesApi"

export default function CategoryList(){
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetchCategories()
    },[])
    async function fetchCategories() {
        const resp=await getCategories();
        setCategories(resp.data)
        
    }
    return(
        <>
        <div>
            {categories.map((c)=><div>{c.name}</div>)}
        </div>
        </>
    )
}