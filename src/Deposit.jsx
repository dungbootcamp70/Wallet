import React from 'react';
const Deposit = () => {
  return (
    <div className="modal fade" id="myModal">
		<div className="modal-dialog">
			<div className="modal-content">

				<header className="head-form mb-0">
					<h2 id="header-title">Log In</h2>
				</header>
				<div className="modal-body">

				
				</div>

				
				<div className="modal-footer" id="modal-footer">
					<button id="btnThemNV" type="button" className="btn btn-success">Thêm người dùng</button>
					<button id="btnCapNhat" type="button" className="btn btn-success">Cập nhật</button>
					<button id="btnDong" type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
				</div>

			</div>
		</div>
	</div>

  );
};

export default Deposit;
