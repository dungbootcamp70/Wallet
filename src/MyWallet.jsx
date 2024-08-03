import React, { useState } from "react";
import HistoryItem from "./HistoryItem";
import ModalW from "./ModalW";
import { Modal } from "bootstrap";

const MyWallet = () => {
  const contentModalDeposit = {
    type: 0,
    title: "Deposit money",
  };

  const contentModalWithdraw = {
    type: 1,
    title: "Withdraw money",
  };

  const getFormattedDateTime = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString("default", { month: "short" });
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${day} ${month} ${hours}:${minutes}${ampm}`;
  };

  const [modalContent, setModalContent] = useState({});
  const [inputValue, setInputValue] = useState(0);
  const [balance, setBalance] = useState(0);
  const [logInput, setLogInput] = useState("");
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [showModal, setShowModal] = useState("");

  const handleChangeSubmit = (type) => {
    const newTransaction = {
      type: type === 0 ? "Deposit" : "Withdraw",
      amount: inputValue,
      timestamp: getFormattedDateTime(),
    };

    if (type === 0) {
      if (inputValue !== "" && inputValue > 0) {
        setBalance(balance + inputValue);
        reset();
        // alert("Nạp tiền thành công");
      } else {
        setLogInput("Money is more than 0");
        return;
      }
    } else {
      if (inputValue !== "" && +inputValue <= balance && +inputValue > 0) {
        setBalance(balance - inputValue);
        reset();
        // alert("Rút tiền thành công");
      } else {
        setLogInput("Money is smaller or equal ");
        return;
      }
    }
    setTransactionHistory([...transactionHistory, newTransaction]);
  };

  const handleCloseModal = () => {
    reset();
  };

  const handleOpenModal = (type) => {
    reset();
    setModalContent(type === 0 ? contentModalDeposit : contentModalWithdraw);
  };

  const handleChangeInput = (value, type) => {
    if (type === 0) {
      value !== "" && +value > 0 ? setShowModal("modal") : setShowModal("");
    } else {
      value !== "" && +value > 0 && +value <= balance
        ? setShowModal("modal")
        : setShowModal("");
    }
    setInputValue(+value);
  };

  const reset = () => {
    setShowModal("");
    setLogInput("");
    setInputValue("");
  };

  return (
    <div className='container bg-dark text-white py-1' style={{ width: '600px', borderRadius: '10px' }}>
      <h1 className='py-5'>My Wallet</h1>
      <h1 style={{ color: 'yellow' }}>${balance.toLocaleString("de-DE")}</h1>  
      <h4 className='p-3'>Total balance</h4>
        <button
          className="btn btn-success m-3 px-3" style={{ fontSize: '25px', fontWeight: '600'}}
          data-bs-toggle="modal"
          data-bs-target="#modalWallet"
          onClick={() => {
            handleOpenModal(0);
          }}
        >
          Deposit
        </button>
        <button
          className="btn btn-danger px-3" style={{ fontSize: '25px', fontWeight: '600'}}
          data-bs-toggle="modal"
          data-bs-target="#modalWallet"
          onClick={() => {
            handleOpenModal(1);
          }}
        >
          Withdraw
        </button>
  
        <h2 className='mt-5'>Tranaction History</h2>
      <div className="w-100 bg-white text-dark">
        {transactionHistory.length > 0 ? (
          <table className="table w-100 mb-0">
            <tbody>
              {transactionHistory.map((transaction, index) => (
                <HistoryItem key={index} transaction={transaction} />
              ))}
            </tbody>
          </table>
        ) : (
          "No transaction history"
        )}
      </div>
      <ModalW
        handleChangeInput={handleChangeInput}
        handleChangeSubmit={handleChangeSubmit}
        handleCloseModal={handleCloseModal}
        modalContent={modalContent}
        logInput={logInput}
        inputValue={inputValue}
        showModal={showModal}
        balance={balance}
      />
    </div>
  );
};

export default MyWallet;
