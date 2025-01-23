// import React from 'react'

const signUp = () => {
  return (
    <div>
      <div className="flex h-full w-full justify-center mt-32">
      <div className="flex flex-col gap-8 h-full w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/5 justify-center ">
        <div className="text-center">
          <h1 className="text-2xl font-medium">Create a new account</h1>
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 underline">
              Sign in
            </a>
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex gap-4 items-center justify-between">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                id="firstName"
                className="border border-slate-400 p-2 rounded"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                id="lastName"
                className="border border-slate-400 p-2 rounded"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="border border-slate-400 p-2 rounded"
            />
          </div>

          <div className="flex gap-8 items-center justify-between ">
          <div className="flex flex-col gap-2 w-[60%]">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="border border-slate-400 p-2 rounded"
            />
          </div>

          <div className="flex flex-col gap-2 w-[60%]">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              className="border border-slate-400 p-2 rounded"
            />
          </div>
          </div>

          <button className="bg-blue-500 hover:bg-blue-800 py-3 px-8 rounded text-white text-lg font-semibold">
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default signUp
