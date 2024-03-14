"use client"
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { SignupInput } from "utkarsh-medium";
import { BACKEND_URL } from "../../config";
import { useRouter } from "next/navigation";
import axios from "axios";
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const router = useRouter();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    'name': "",
    'username': "",
    'password': "",
  });
  async function sendRequest() {
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
      if (!res) {
        throw new Error('Failed to fetch data')
      }
      //@ts-ignore
      const jwt = res.data;
      localStorage.setItem("token", jwt)
      router.push("/blogs");
    } catch (e) {
      console.log(e);
      throw new Error('Failed to' + type);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">
              Create an account
            </div>
            <div className="text-slate-500">
              {type === 'signin' ? "Don't have an account?" : "Aleady have an account?"}
              <Link className="underline hover:text-blue-689" href={type === 'signin' ? '/signup' : '/signin'}>
                {type === "signin" ? " Sign up" : " Sign in"}
              </Link>
            </div>
          </div>
          <div className="pt-8">
            {type === 'signup' ? <LabelledInput label='Name' placeholder='Enter your name' onChange={(e) => {
              setPostInputs({
                ...postInputs,
                name: e.target.value
              })
            }} /> : null}
            <LabelledInput label="Email" type="email" placeholder="a@example.com" onChange={(e) => {
              setPostInputs({
                ...postInputs,
                username: e.target.value
              })
            }} />
            <LabelledInput label="Password" placeholder="" onChange={(e) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value
              })
            }} type="password" />
            <button onClick={sendRequest} type="button"
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === 'signup' ? "Sign up" : "Sign in"}</button>
          </div>
        </div>
      </div>

    </div>
  )
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
  return <div>
    <label className='block mb-2 text-sm text-block font-semibold pt-4'>{label}</label>
    <input onChange={onChange} type={type || "text"} id={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
  </div>
}
