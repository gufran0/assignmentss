import { useEffect, useState } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import { db } from "../config/firebase";
import { addDoc, getDoc, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [textArea, setTextArea] = useState("");
  const saveForm = async () => {
    await addDoc(collection(db, "emails"), {
      name,
      email,
      message: textArea,
    }).then(res=>{
      console.log(res);
      setName('')
      setEmail("")
      setTextArea("")
      setCheckbox(!checkbox)
      alert("Save sucess");
    }).catch(e=>{
      alert("Save failed");
      console.log(e)
    });
    
    
  };
 

 
  return (
    <div className="container-fluid">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="row">
          <div className="col-md-5 left-part">
            <h1>Write Us</h1>
            <div className="orange-border"></div>

            <div className="form-group">
              <Label for="name">Name</Label>
              <br />
              <Input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                type="text"
              />
            </div>
            <div className="form-group">
              <Label for="email">E-mail</Label>
              <br />
              <Input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                type="email"
              />
            </div>
            <div className="form-group">
              <Label for="verification">Verification</Label>
              <br />
              <Input
                value={checkbox}
                onChange={(e) => {
                  setCheckbox(e.target.checked);
                }}
                type="checkbox"
                name="verification"
              />
              <span id="robot">I am not a robot</span>
            </div>
          </div>
          <div className="col-md-7  p-5">
            <label className="labels" htmlFor="message">
              Message
            </label>
            <br />
            <textarea
              value={textArea}
              onChange={(e) => {
                setTextArea(e.target.value);
              }}
              className="textareas"
              placeholder="Write text here.."
            ></textarea>
            <button onClick={saveForm} className="sendbutton">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
