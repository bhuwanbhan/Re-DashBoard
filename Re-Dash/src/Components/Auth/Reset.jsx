import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import man from "../Auth/man.png";
import AuthUser from "./AuthUser";

function Reset() {
    const{http,setToken} = AuthUser();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [ email , setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(" ");

  const submitForm = () =>{
 http.post('/Reset',{name:name, Address:Address,email:email}).then
 ((res)=>{

  setToken(res.data.User, res.data.success_token);
  
 })
    
}

const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setPreviewURL(URL.createObjectURL(uploadedFile));
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (password !== confirmPassword) {
  //     alert("Passwords do not match!");
  //     return;
    
  //   console.log("Email:", email, "Password:", password, "File:", file);
  //   navigate("/opt");

  // }
 
  return (
    <section className="h-screen flex items-center justify-center ">
      <div className="container px-6 py-2 w-full max-w-4xl flex flex-wrap bg-white rounded-2xl ">

        <div className="hidden lg:block w-1/2 rounded-2xl overflow-hidden">
          <img src={man} alt="Man" className="h-full w-full" />
        </div>

       
        <div className="w-full lg:w-1/2 px-6 ">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

          {/* <form onSubmit={handleSubmit}>
            */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="College Name"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
               
              />
            </div>

            
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="College Address"
                className="w-full p-2 border border-gray-300 rounded mt-1 pr-10"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
    
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>

  
            <div className="mb-4">
              <input
                type="password"
                placeholder="Admin Email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>


            <div className="mb-4">
              <label className="block text-xl font-semibold text-gray-700 mb-2">
                Upload File
              </label>
              <div className="relative flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
                <input
                  type="file"
                  className="sr-only"
                  id="file"
                  onChange={handleFileUpload}
                />
                <label
                  htmlFor="file"
                  className="cursor-pointer text-center"
                >
                  {previewURL ? (
                    <img
                      src={previewURL}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-md"
                    />
                  ) : (
                    <>
                      <span className="block text-gray-500">
                        Drop files here {" "}
                      
                      </span>
                    </>
                  )}
                </label>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                className="mr-2"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <p className="text-gray-600">
                I agree to the{" "}
                <span className="text-blue-500">terms of use</span>
              </p>
            </div>


            <button
              type="submit"
              onClick={submitForm}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600  cursor-pointer transition">
              Submit
            </button>
          {/* </form> */}
        </div>
      </div>
    </section>
  );
}

export default Reset;