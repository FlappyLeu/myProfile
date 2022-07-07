import { infoService } from "./components/infetch/getInfo";
import { useEffect, useState } from "react";
function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [major, setMajor] = useState();
  const [profile, setProfile] = useState();
  const [desc, setDesc] = useState();
  useEffect(() => {
    infoService
      .getName()
      .then((res) => res.json())
      .then((data) => setName(data));
    infoService
      .getAge()
      .then((res) => res.json())
      .then((age) => setAge(age));
    infoService
      .getMajor()
      .then((res) => res.json())
      .then((major) => setMajor(major));
    infoService
      .getProfile()
      .then((res) => res.json())
      .then((data) => setProfile(data));
    infoService
      .getDescription()
      .then((res) => res.json())
      .then((data) => setDesc(data));
  }, []);
  console.log(name);
  return (
    <div className="age">
      <h1>{name && name.name}</h1>
      <div>{age && age.age}</div>
      <div>{major && major.major}</div>
      <div>{desc && desc.description}</div>
    </div>
  );
}

export default App;
