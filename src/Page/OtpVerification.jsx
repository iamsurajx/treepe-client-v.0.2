import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils.js';

function OtpVerification() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleVerify = async (e) => {
        e.preventDefault();
        if (!otp) {
            return handleError('OTP is required');
        }

        try {
            const url = `https://tripy-backend.vercel.app/auth/verify-email`; // Adjusted to your backend endpoint
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code: otp }) // Send OTP as 'code'
            });
            const result = await response.json();
            const { success, message } = result;

            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login'); // Redirect to login or another page on success
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (err) {
            handleError('An error occurred while verifying the OTP.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">OTP Verification</h1>
                <form onSubmit={handleVerify}>
                    <div className="mb-4">
                        <label htmlFor='otp' className="block text-sm font-medium text-gray-700">Enter your OTP</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='otp'
                            placeholder='Enter your OTP...'
                            value={otp}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <button type='submit' className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200">Verify OTP</button>
                    <p className="mt-4 text-center">
                        Didn't receive the OTP? 
                        <button className="text-blue-600 hover:underline" onClick={() => {/* Logic to resend OTP */}}> Resend</button>
                    </p>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default OtpVerification;