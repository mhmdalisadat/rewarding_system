/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { getCookie } from "../../cookie";
import { AdminValid } from "../data";
import { useNavigate } from "react-router-dom";
import useAddClient from "../services/useAddClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddClient: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState<string>("");

  const navigate = useNavigate();
  const { mutate } = useAddClient();

  const admin = JSON.parse(getCookie("admin"));
  useEffect(() => {
    if (
      admin.username !== AdminValid.username ||
      admin.password !== AdminValid.password
    ) {
      navigate("./admin");
    }
  }, [admin, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (mobileNumber.length !== 11 || !/^[0-9]+$/.test(mobileNumber)) {
      toast.error("شماره موبایل باید 11 رقم باشد");
      return;
    }

    mutate(mobileNumber, {
      onSuccess: () => {
        toast.success("شماره موبایل با موفقیت ثبت شد");
        setMobileNumber("");
      },
      onError: (error: any) => {
        const errorMessage = error.response?.data?.error || "این شماره قبلا ثبت شده است ";
        toast.error(errorMessage);
        setMobileNumber("");
      },
    });
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center">ورود شماره موبایل</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-gray-700"
              >
                شماره موبایل
              </label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="شماره موبایل"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddClient;
