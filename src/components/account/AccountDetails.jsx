import moment from "moment";
import React from "react";
import { FcRating } from "react-icons/fc";
// import { FcShipped } from "react-icons/fc";

export const AccountDetails = ({ account }) => {
  console.log(account.credit_score, "test")
  const calculateInterestRate = (creditScore) => {
    const baseRate = 5; // Base rate is 5%
    let creditScoreRate = 0;

    if (creditScore < 25) {
      creditScoreRate = 5;
    } else if (creditScore >= 25 && creditScore < 35) {
      creditScoreRate = 4;
    } else if (creditScore >= 35 && creditScore < 50) {
      creditScoreRate = 3;
    } else if (creditScore >= 50 && creditScore < 70) {
      creditScoreRate = 2;
    } else if (creditScore >= 70 && creditScore < 90) {
      creditScoreRate = 1.5;
    } else if (creditScore >= 90 && creditScore < 99) {
      creditScoreRate = 1;
    } else if (creditScore === 100) {
      creditScoreRate = 0.5;
    }

    return baseRate + creditScoreRate;
  };
  const interestRate = calculateInterestRate(account.credit_score);

  return (
    <div className="flex items-center justify-center flex-col gap-4 px-6 py-8 my-10 bg-blue-200 border-y-4 border-blue-800 rounded shadow">
      <h3 className="w-full flex items-center text-xl my-5 p-3 text-left font-bold   text-blue-900 bg-slate-50 rounded shadow-md">
        <FcRating className="mr-1" size={35} />
        Account Details:-
      </h3>

      <div className="w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
        <p className="w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
          Account ID
        </p>
        <span className="w-full lg:w-auto text-slate-900 bg-white  px-4 py-2 rounded-md">
          {account._id}
        </span>
      </div>

      <div className="w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
        <p className="w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
          Created At
        </p>
        <span className="w-full lg:w-auto text-slate-900 bg-white px-4 py-2 rounded-md">
          {moment(account.createdAt).format("DD MMMM YYYY")}
        </span>
      </div>

      <div className=" w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
        <p className=" w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
          Balance
        </p>
        <span className="w-full lg:w-auto text-slate-900 bg-white px-4 py-2 rounded-md">
          {account.balance}
        </span>
      </div>
      <div className=" w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
        <p className=" w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
          Credit Score
        </p>
        <span className="w-full lg:w-auto text-slate-900 bg-white px-4 py-2 rounded-md">
          {account.credit_score.toFixed(2)}
        </span>
      </div>

      <div className="w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
        <p className="w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
          OutGoing Transcations
        </p>
        <span className="w-full lg:w-auto text-slate-900 bg-white  px-4 py-2 rounded-md">
          {account.out.length > 0
            ?
            account.out.reduce(
              (totalAmount, log) => (totalAmount += log.balance_transfered),
              0
            )

            : 0}
        </span>
      </div>

      <div className="w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
        <p className="w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
          Incoming Transcations
        </p>
        <span className="w-full lg:w-auto text-slate-900 bg-white  px-4 py-2 rounded-md">
          {account.in.length > 0
            ?
            account.in.reduce(
              (totalAmount, log) => (totalAmount += log.balance_transfered),
              0
            )

            : 0}
        </span>
      </div>

      <div className="w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
        <p className="w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
          Deposit Amount
        </p>
        <span className="w-full lg:w-auto text-slate-900 bg-white  px-4 py-2 rounded-md">
          {account.deposit_logs.length > 0
            ?
            account.deposit_logs.reduce(
              (totalAmount, log) => (totalAmount += log.depositted_amount),
              0
            )

            : 0}
        </span>
      </div>

      <div className="w-full flex justify-between items-center flex-col  lg:flex-row gap-2 lg:gap-0 p-3  text-white text-center font-semibold bg-blue-500 border-r-4 border-blue-800 rounded shadow">
        <p className="w-full lg:w-auto bg-slate-900  px-4 py-2 rounded-md">
          Withdrawal Amount
        </p>
        <span className="w-full lg:w-auto text-slate-900 bg-white  px-4 py-2 rounded-md">
          {account.withdraw_logs.length > 0
            ?
            account.withdraw_logs.reduce(
              (totalAmount, log) => (totalAmount += log.withdrawed_amount),
              0
            )

            : 0}
        </span>
      </div>
      <h3 className="flex justify-center items-center text-2xl text-center font-bold px-2 py-4 mb-10 bg-blue-200 border-b-4 border-blue-800 rounded shadow">
        Since Your Credit score is {account.credit_score.toFixed(2)}
      </h3>
      <p>
        <span className="w-full lg:w-auto text-slate-900 bg-white px-4 py-2 rounded-md">
          Credit Score: {account.credit_score ? account.credit_score.toFixed(2) : 'N/A'}
        </span>
      </p>
      <p>
        <span className="w-full lg:w-auto text-slate-900 bg-white px-4 py-2 rounded-md">
          Interest Rate: {interestRate}%
        </span>
      </p>
      {/* Interest Rate Table */}
      <div className="w-full bg-blue-200 rounded shadow-md p-4 mt-6">
        <h4 className="text-lg font-bold mb-4">Interest Rate Brackets</h4>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-blue-800 px-4 py-2">Credit Score Range</th>
              <th className="border-b-2 border-blue-800 px-4 py-2">Additional Rate (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b px-4 py-2">0 - 24</td>
              <td className="border-b px-4 py-2">5%</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">25 - 34</td>
              <td className="border-b px-4 py-2">4%</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">35 - 49</td>
              <td className="border-b px-4 py-2">3%</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">50 - 69</td>
              <td className="border-b px-4 py-2">2%</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">70 - 89</td>
              <td className="border-b px-4 py-2">1.5%</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">90 - 98</td>
              <td className="border-b px-4 py-2">1%</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">99 - 100</td>
              <td className="border-b px-4 py-2">0.5%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
