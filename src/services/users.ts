import api from "./api";

import UserType from "../types/UserType";

async function createUserAtFirebase(user: UserType) {
  try {
    const res = await api.post("/users.json", user);

    console.log("Creating user at fibebase status: " + res.status);
  } catch (error) {
    console.log("Error creating new user at firebase: " + error);
  }
}

async function getAllUsers(): Promise<UserType[]> {
  const arrUsers: Array<UserType> = [];
  try {
    const res = await api.get("/users.json");

    for (const key in res.data) {
      arrUsers.push({
        ...res.data[key],
        id: key,
      });
    }

    console.log(arrUsers);
    return arrUsers;
  } catch (error) {
    console.log("Error getting all users: ", error);
    return [];
  }
}

async function getUserByEmail(email: string) {
  const arrUsers: Array<UserType> = await getAllUsers();
  const user = arrUsers.find((user) => user.email == email);
  console.log("found user: ", user);

  return user;
}

async function getUserById(id: string) {
  try {
    const res = await api.get(`/users/${id}.json`);
    console.log(res.data);
  } catch (error) {
    console.log("Error getting user " + id + " :" + error);
  }
}

async function updateUser(user: UserType | undefined) {
  if (!user) {
    console.log("Error updating user: undefined user");
    return;
  }

  try {
    const res = await api.patch(`/users/${user.id}.json`, user);
    console.log("updating user: " + res.status);
  } catch (error) {
    console.log(`Error updating user(${user.id}): ${error}`);
  }
}

export {
  getAllUsers,
  createUserAtFirebase,
  getUserByEmail,
  getUserById,
  updateUser,
};
