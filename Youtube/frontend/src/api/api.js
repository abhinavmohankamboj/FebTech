import axios from "axios";
console.log(baseURL);

const url=axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    WithCredentials:true
})
async function login(data){
    try{
        const response=await api.post('api/register',data)
        console.lop(response);
    }catch(error){
        console.log(error);
}
    
}