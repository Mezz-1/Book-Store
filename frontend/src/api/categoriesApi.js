import http from "./axiosClient";
export async function getCategories(){
    return await http.get("/api/categories");

}
export async function addCategory(c){
    return await http.post("/api/categories",c)
}