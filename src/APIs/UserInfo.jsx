import { useEffect, useState } from "react";

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeTelegramWebApp = () => {
      if (!window.Telegram || !window.Telegram.WebApp) {
        setError("Telegram WebApp is not available");
        return;
      }

      window.Telegram.WebApp.ready();

      // بررسی وجود data
      const userData = window.Telegram.WebApp.initDataUnsafe.user;
      if (!userData) {
        setError("No user data found");
      } else {
        setUser(userData);
      }
    };

    initializeTelegramWebApp();
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {user ? (
        <div>
          <h3>User Info</h3>
          <div>
            <strong>Username:</strong> {user.username}
          </div>
          <div>
            <strong>First Name:</strong> {user.first_name}
          </div>
          <div>
            <strong>Last Name:</strong> {user.last_name}
          </div>
          <div>
            <strong>ID:</strong> {user.id}
          </div>
        </div>
      ) : (
        <div>Loading user data...</div>
      )}
    </div>
  );
};

export default UserInfo;
