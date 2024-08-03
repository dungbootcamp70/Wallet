import React from "react";

const Modal = ({
  modalContent,
  handleChangeInput,
  logInput,
  handleChangeSubmit,
  handleCloseModal,
  inputValue,
  showModal,
  balance,
}) => {
  const { type, title, } =
    modalContent;

  return (
    <div
      className="modal fade"
      id="modalWallet"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog text-dark" >
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" style={{fontWeight: 'bold'}} id="exampleModalLabel">
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <label className="d-block text-start fw-bold" htmlFor="inputAmount">
            Amount
              <span className="text-danger fw-light fst-italic">
                {logInput ? `(${logInput} ${balance})` : ""}
              </span>
            </label>
            <input
              className="form-control"
              id="inputAmount"
              name="inputAmount"
              placeholder="Input money"
              value={inputValue === 0 ? "" : inputValue}
              onChange={(e) => {
                handleChangeInput(e.target.value, type);
              }}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleCloseModal}
            >
              Close
            </button>
            <button
              onClick={() => {
                handleChangeSubmit(type);
              }}
              type="button"
              className="btn btn-primary"
              data-bs-dismiss={showModal}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
