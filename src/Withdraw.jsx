import React from 'react'

const Withdraw = () => {
  return (
    <div className='container bg-dark text-white py-1' style={{ width: '600px', borderRadius: '10px' }}>
    <h1 className='py-5'>My Wallet</h1>
    <h1 style={{ color: 'yellow' }}>$2450</h1>
    <h4 className='p-3'>Total balance</h4>
    <button className='btn btn-success m-3 px-3' style={{ fontSize: '25px', fontWeight: 'bold'}} data-bs-toggle="modal" data-bs-target="myModal" onClick={()=>{
        //   handleChangeCar(dataCarItem);
        }}>Deposit</button>
    <button className='btn btn-danger px-3' style={{ fontSize: '25px', fontWeight: '600'}}>Withdraw</button>
    <h2 className='mt-5'>Tranaction History</h2>
    <div className="bg-light text-dark mx-1" style={{ height: '100%'}}>
    <table className='table'>
        <tbody>
            <tr>
                <td>dn,vdndvn</td>
            </tr>
            <tr>
                <td>dn,vdndvn</td>
            </tr>
        </tbody>
    </table>
    </div>
</div>
  )
}

export default Withdraw