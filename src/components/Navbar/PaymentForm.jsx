import React from 'react'
const PaymentForm = () => {
  return (
    <div className="red m-10 mx-auto w-4/5 rounded-lg bg-white p-4 shadow-md">
      <h2 className="mb-4 p-3 text-center text-3xl font-semibold">
        <span className="bg-yellow-300 px-1">Select Payment Gateways</span> Accepted by you
      </h2>

      <form>
        <div className="flex justify-evenly">
          <div className="space-y-4">
            <label className="flex items-center space-x-2 rounded-xl bg-slate-200 p-4 odd:bg-slate-400">
              <input type="checkbox" className="form-checkbox text-blue-500" name="googlepay" />
              <span className="text-lg text-white">Google Pay</span>
            </label>

            <label className="flex items-center space-x-2 rounded-xl bg-slate-200 p-4 odd:bg-slate-400">
              <input type="checkbox" className="form-checkbox text-blue-500" name="phonepe" />
              <span className="text-lg">PhonePe</span>
            </label>

            <label className="flex items-center space-x-2 rounded-xl bg-slate-200 p-4 odd:bg-slate-400">
              <input type="checkbox" className="form-checkbox text-blue-500" name="bhim" />
              <span className="text-lg text-white">BHIM App</span>
            </label>

            <label className="flex items-center space-x-2 rounded-xl bg-slate-200 p-4 odd:bg-slate-400">
              <input type="checkbox" className="form-checkbox text-blue-500" name="mobikwik" />
              <span className="text-lg">MobiKwik</span>
            </label>

            <label className="flex items-center space-x-2 rounded-xl bg-slate-200 p-4 odd:bg-slate-400">
              <input type="checkbox" className="form-checkbox text-blue-500" name="uber" />
              <span className="text-lg text-white">Uber</span>
            </label>

            <label className="flex items-center space-x-2 rounded-xl bg-slate-200 p-4 odd:bg-slate-400">
              <input type="checkbox" className="form-checkbox text-blue-500" name="chillr" />
              <span className="text-lg">Chillr</span>
            </label>

            <label className="flex items-center space-x-2 rounded-xl bg-slate-200 p-4 odd:bg-slate-400">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                name="paytmpaymentsbank"
              />
              <span className="text-lg text-white">Paytm Payments Bank</span>
            </label>
          </div>
          <div className="space-y-4">
            <label className="flex items-center space-x-2 rounded-xl bg-slate-200 p-4 odd:bg-slate-400">
              <input type="checkbox" className="form-checkbox text-blue-500" name="sbipay" />
              <span className="text-lg text-white">SBI Pay</span>
            </label>

            <label className="flex items-center space-x-2 rounded-xl bg-slate-200 p-4 odd:bg-slate-400">
              <input type="checkbox" className="form-checkbox text-blue-500" name="imobile" />
              <span className="text-lg">iMobile</span>
            </label>

            <label className="flex items-center space-x-2 rounded-xl bg-slate-200 p-4 odd:bg-slate-400">
              <input type="checkbox" className="form-checkbox text-blue-500" name="axispay" />
              <span className="text-lg text-white">Axis Pay</span>
            </label>

            <label className="flex items-center space-x-2 rounded-xl bg-slate-200 p-4 odd:bg-slate-400">
              <input type="checkbox" className="form-checkbox text-blue-500" name="bobupi" />
              <span className="text-lg">Bank of Baroda (BOB) UPI</span>
            </label>

            <label className="flex items-center space-x-2 rounded-xl bg-slate-200 p-4 odd:bg-slate-400">
              <input type="checkbox" className="form-checkbox text-blue-500" name="amazonpay" />
              <span className="text-lg text-white">Amazon Pay</span>
            </label>

            <label className="flex items-center space-x-2 rounded-xl bg-slate-200 p-4 odd:bg-slate-400">
              <input type="checkbox" className="form-checkbox text-blue-500" name="freecharge" />
              <span className="text-lg">Freecharge</span>
            </label>

            <label className="flex items-center space-x-2 rounded-xl bg-slate-200 p-4 odd:bg-slate-400">
              <input type="checkbox" className="form-checkbox text-blue-500" name="cred" />
              <span className="text-lg text-white">Cred</span>
            </label>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default PaymentForm
