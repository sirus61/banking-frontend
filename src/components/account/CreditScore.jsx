// import React, { useState, useEffect } from "react";
// import { FcPaid } from "react-icons/fc";
// import { RiFileTransferFill } from "react-icons/ri";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import {
//   getAccount,
//   resetAccountStatus,
//   transfer
// } from "../../state/features/Account/accountSlice";
// import FormButton from "../shared/FormButton";
// import MessagesContainer from "../shared/MessagesContainer";
// import { UseResetStatus } from "../../hooks/UseResetStatus";
// import axios from "axios";


// export const CreditScore = (account) => {
//   console.log(account.credit_score, "check")



//   const dispatch = useDispatch();

//   //get account id
//   const accountId = useLocation()?.pathname?.split("/").at(-1);

  

//   UseResetStatus(() => {
//     return () => {
//       dispatch(resetAccountStatus());
//     };
//   });

//   return (
//     <div className="max-w-5xl w-full self-start">
//       <h3 className="flex justify-center items-center text-2xl text-center font-bold px-2 py-4 mb-10 bg-blue-200 border-b-4 border-blue-800 rounded shadow ">
//         <FcPaid className="mr-1" size={50} />
//         Your Credit Score is : 
//         <span className="w-full lg:w-auto text-slate-900 bg-white  px-4 py-2 rounded-md">
//           {account.credit_score}
//         </span>
//       </h3>

//     </div>
//   );
// };
