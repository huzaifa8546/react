
// import React, { useState } from "react";
// import user_icon from "../assets/person.png";
// import email_icon from "../assets/email.png";
// import password_icon from "../assets/password.png";

// function LoginSignup() {
//   const [action, setAction] = useState("Sign Up");

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(#2A00B7,#42006C)]">
//       <div className="flex flex-col m-auto w-[400px] mt-[70px] bg-white pb-[50px] shadow-lg rounded-xl">
//         {/* Header */}
//         <div className="flex flex-col items-center gap-5 w-full mt-10">
//           <div className="text-[#3c009d] text-4xl font-medium">{action}</div>
//           <div className="w-10 h-3 rounded-lg bg-[#3c009d]"></div>
//         </div>

//         {/* Inputs */}
//         <div className="mt-10 flex flex-col gap-5">
//           {action === "Login" ? (
//             <div></div>
//           ) : (
//             <div className="flex items-center m-auto w-[350px] h-12 bg-[#eaeaea] rounded-lg">
//               <img className="mx-4 w-5 h-5" src={user_icon} alt="user" />
//               <input
//                 className="flex-1 bg-transparent outline-none text-[#797979] text-[19px]"
//                 type="text"
//                 placeholder="Name"
//               />
//             </div>
//           )}

//           <div className="flex items-center m-auto w-[350px] h-12 bg-[#eaeaea] rounded-lg">
//             <img className="mx-4 w-5 h-5" src={email_icon} alt="email" />
//             <input
//               className="flex-1 bg-transparent outline-none text-[#797979] text-[19px]"
//               type="email"
//               placeholder="Email Id"
//             />
//           </div>

//           <div className="flex items-center m-auto w-[350px] h-12 bg-[#eaeaea] rounded-lg">
//             <img className="mx-4 w-5 h-5" src={password_icon} alt="password" />
//             <input
//               className="flex-1 bg-transparent outline-none text-[#797979] text-[19px]"
//               type="password"
//               placeholder="Password"
//             />
//           </div>
//         </div>

//         {/* Lost Password */}
//         {action === "Login" ? (
//           <div></div>
//         ) : (
//           <div className="mt-10 text-[#797979] text-[18px] text-center">
//             Lost Password?{" "}
//             <span className="text-[#4c00b4] cursor-pointer font-medium">
//               Click Here!
//             </span>
//           </div>
//         )}

//         {/* Buttons */}
//         <div className="mt-8 flex justify-center gap-5">
//           <button
//             className={
//               action === "Login"
//                 ? "px-6 py-2 bg-[#75717a] text-white rounded-lg cursor-pointer hover:bg-[#343337] transition"
//                 : "px-6 py-2 bg-[#4c00b4] text-white rounded-lg cursor-pointer hover:bg-[#3c009d] transition"
//             }
//             onClick={() => setAction("Sign Up")}
//           >
//             Sign Up
//           </button>
//           <button
//             className={
//               action === "Sign Up"
//                 ? "px-6 py-2 bg-[#75717a] text-white rounded-lg cursor-pointer hover:bg-[#343337] transition"
//                 : "px-6 py-2 bg-[#4c00b4] text-white rounded-lg cursor-pointer hover:bg-[#3c009d] transition"
//             }
//             onClick={() => setAction("Login")}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginSignup;


import React, { useState } from "react";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

function LoginSignup() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(#2A00B7,#42006C)] px-4">
      <div className="flex flex-col w-full max-w-md bg-white mt-10 pb-10 shadow-lg rounded-xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 w-full mt-10">
          <div className="text-[#3c009d] text-3xl md:text-4xl font-medium">
            {action}
          </div>
          <div className="w-10 h-3 rounded-lg bg-[#3c009d]"></div>
        </div>

        {/* Inputs */}
        <div className="mt-10 flex flex-col gap-5 px-6">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="flex items-center w-full h-12 bg-[#eaeaea] rounded-lg px-4">
              <img className="w-5 h-5 mr-3" src={user_icon} alt="user" />
              <input
                className="flex-1 bg-transparent outline-none text-[#797979] text-base md:text-lg"
                type="text"
                placeholder="Name"
              />
            </div>
          )}

          <div className="flex items-center w-full h-12 bg-[#eaeaea] rounded-lg px-4">
            <img className="w-5 h-5 mr-3" src={email_icon} alt="email" />
            <input
              className="flex-1 bg-transparent outline-none text-[#797979] text-base md:text-lg"
              type="email"
              placeholder="Email Id"
            />
          </div>

          <div className="flex items-center w-full h-12 bg-[#eaeaea] rounded-lg px-4">
            <img className="w-5 h-5 mr-3" src={password_icon} alt="password" />
            <input
              className="flex-1 bg-transparent outline-none text-[#797979] text-base md:text-lg"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>

        {/* Lost Password */}
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="mt-8 text-[#797979] text-sm md:text-base text-center px-6">
            Lost Password?{" "}
            <span className="text-[#4c00b4] cursor-pointer font-medium">
              Click Here!
            </span>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 px-6">
          <button
            className={`flex-1 py-2 rounded-lg text-white transition ${
              action === "Login"
                ? "bg-[#75717a] hover:bg-[#343337]"
                : "bg-[#4c00b4] hover:bg-[#3c009d]"
            }`}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </button>
          <button
            className={`flex-1 py-2 rounded-lg text-white transition ${
              action === "Sign Up"
                ? "bg-[#75717a] hover:bg-[#343337]"
                : "bg-[#4c00b4] hover:bg-[#3c009d]"
            }`}
            onClick={() => setAction("Login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
