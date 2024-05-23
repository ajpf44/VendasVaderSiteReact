import api from "./api";

async function createUserAtFirebase( user: UserType ){
    try {
        const res = await api.post("/users.json", user)

        console.log("Creating user at fibebase status: " + res.status)
    } catch (error) {
        console.log("Error creating new user at firebase: " + error);
    }       
}

async function getAllUsers(){
    try {
        const {data} = await api.get("/users.json");
        console.log(data);
    } catch (error) {
        console.log("Error getting all users: " + error);
    }
}

async function getUserByEmail(email: string){

}

export {getAllUsers, createUserAtFirebase}