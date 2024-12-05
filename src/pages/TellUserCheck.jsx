import { useState } from "react";
import axios from "axios";

const TelegramUserCheck = () => {
  const [username, setUsername] = useState("");
  const [telegramId, setTelegramId] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckUser = async (e) => {
    e.preventDefault();
    const token = "7582360930:AAE7RUvKz52e66aYitLmvi--TwxSxGCf31M"; // Bot Token

    // if ID or UserName Empty
    if (!username && !telegramId) {
      setMessage("لطفاً آیدی تلگرام یا نام کاربری را وارد کنید.");
      return;
    }

    // Choose ID should CheckOut
    const chatId = username ? username : telegramId;

    try {
      const response = await axios.get(
        `https://api.telegram.org/bot${token}/getChat?chat_id=${chatId}`
      );
      if (response.data.ok) {
        setMessage(`کاربر وجود دارد: ${response.data.result.username}`);
      } else {
        setMessage("کاربر وجود ندارد.");
      }
    } catch (error) {
      console.error("خطا در بررسی:", error);
      setMessage("خطا در ارتباط با سرور تلگرام.");
    }
  };

  return (
    <div className="w-full h-screen flex items-start justify-center pt-14 md:pt-20">
      <div className="bg-[#003366] text-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
        <h2 className="text-3xl font-bold mb-4 text-center">
          بررسی کاربر تلگرام
        </h2>
        <form onSubmit={handleCheckUser}>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              آیدی تلگرام یا نام کاربری
            </label>
            <input
              type="text"
              value={telegramId || username}
              onChange={(e) => {
                const input = e.target.value;
                if (input.startsWith("@")) {
                  // اگر نام کاربری است
                  setUsername(input.slice(1)); // @ را حذف می‌کنیم
                  setTelegramId("");
                } else {
                  setUsername("");
                  setTelegramId(input); // فرض می‌کنیم آیدی است
                }
              }}
              className="mt-1 text-black text-sm block w-full p-2 border rounded-md placeholder:text-[12px]"
              placeholder="اینجا آیدی تلگرام یا نام کاربری را وارد کنید"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md"
          >
            بررسی
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default TelegramUserCheck;
