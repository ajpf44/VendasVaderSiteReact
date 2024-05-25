import api from "./api";

import UserType from "../types/UserType";

async function createUserAtFirebase( user: UserType ){
    try {
        const res = await api.post("/users.json", user)

        console.log("Creating user at fibebase status: " + res.status)
    } catch (error) {
        console.log("Error creating new user at firebase: " + error);
    }       
}

async function getAllUsers(): Promise<UserType[]>{
    const arrUsers:Array<UserType> = [];
    try {
        const res = await api.get('/users.json')
        
        for(const key in res.data){
            arrUsers.push({
                ...res.data[key],
                id: key
            })
        }

        console.log(arrUsers);
        return arrUsers;
    } catch (error) {
        console.log("Error getting all users: ", error);
        return [];
    }

}

async function getUserByEmail(email: string){
    const arrUsers:Array<UserType> =  await getAllUsers();

    const user = arrUsers.find(user => user.email == email);

    return user;
}

export {getAllUsers, createUserAtFirebase, getUserByEmail}