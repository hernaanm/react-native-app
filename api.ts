const API = "http://localhost:3000/api/users/";

export const getUsers = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const loginUser = async (credentials: Object) => {
  const res = await fetch(`${API}auth/`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return await res.json();
};
