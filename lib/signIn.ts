import { LoginForm, ResLogin } from "../typing";

export default async function signIn(dataForm: LoginForm) {
  const data = await fetch(`https://devies-reads-be.onrender.com/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: dataForm.username,
      password: dataForm.password,
    }),
  })
    .then((res) => res.json())
    .then((data: ResLogin) => console.log(data))
    .catch((err) => console.log(err));
  console.log(data);
  return data;
}
