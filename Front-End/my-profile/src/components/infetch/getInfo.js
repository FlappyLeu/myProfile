const getName = async () => {
  return await fetch("http://localhost:3000/api/name", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
};
const getAge = async () => {
  return await fetch("http://localhost:3000/api/age", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
};
const getMajor = async () => {
  return await fetch("http://localhost:3000/api/major", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
};
const getProfile = async () => {
  return await fetch("http://localhost:3000/api/profile", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
};
const getDescription = async () => {
  return await fetch("http://localhost:3000/api/description", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
};
const getImage = async () => {
  return await fetch("http://localhost:3000/api/description", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
};
export const infoService = {
  getName,
  getAge,
  getMajor,
  getProfile,
  getDescription,
  getImage,
};
