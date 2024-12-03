import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // تابع ورود شما (لگین) را در اینجا فراخوانی کنید
    // برای مثال:
    if (username === "" || password === "") {
      setError("please fill all the fild");
      return;
    }
    // اینجا می‌توانید منطق ارسال درخواست برای ورود را پیاده‌سازی کنید.
    console.log("وارد شد:", username, password);
  };

  return (
    <div className=" w-full h-screen flex items-start justify-center pt-14 md:pt-20">
      <div className="bg-[#003366] text-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
        <h2 className="text-3xl font-bold mb-4 text-center">{currentState}</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={onSubmitHandler}>
          {currentState === "Login" ? (
            <div className="mb-4">
              <label className="block text-sm font-medium">UserName</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 text-black text-sm block w-full p-2 border rounded-md placeholder:text-[12px]"
                placeholder="UserName / Email"
              />
            </div>
          ) : (
            <div className="mb-4">
              <label className="block text-sm font-medium">UserName</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 text-black text-sm block w-full p-2 border rounded-md placeholder:text-[12px]"
                placeholder="Enter your UserName"
              />
            </div>
          )}
          {currentState === "Login" ? (
            ""
          ) : (
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 text-black text-sm block w-full p-2 border rounded-md placeholder:text-[12px]"
                placeholder="Enter your Email"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 text-black text-sm block w-full p-2 border rounded-md placeholder:text-[12px]"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md"
          >
            {currentState === "Login" ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="flex justify-between items-center mt-5">
          <a href="#" className="text-sm text-blue-300">
            Forgat your Password?
          </a>

          {currentState === "Login" ? (
            <a
              className="cursor-pointer text-sm text-blue-300"
              onClick={() => setCurrentState("Sign Up")}
            >
              Sign Up Here
            </a>
          ) : (
            <a
              className="cursor-pointer text-sm text-blue-300"
              onClick={() => setCurrentState("Login")}
            >
              Login Here
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
