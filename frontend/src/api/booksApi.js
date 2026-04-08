import http from "./axiosClient";

export async function getbook() {
    const { data } = await http.get("/api/livres");
    return data;
}

export async function deletebook(id) {
    const { data } = await http.delete(`/api/livres/${id}`);
    return data;
}

export async function addbook(book) {
    return await http.post("/api/livres", book);
}

// Add this update function
export async function updatebook(id, book) {
    const { data } = await http.put(`/api/livres/${id}`, book);
    return data;
}