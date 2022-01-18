import axios from "axios";

const api = axios.create({
    baseURL: `https://api.m3o.com/v1/user/Create`,
});

const { UserService } = require("m3o/user");

const userService = new UserService(process.env.M3O_API_TOKEN);

// Create a new user account. The email address and username for the account must be unique.
async function createAnAccount() {
    const rsp = await userService.create({
        username: "",
        email: "",
        password: "",
        id: "",
    
    });
    console.log(rsp);
}

createAnAccount();


export default api;