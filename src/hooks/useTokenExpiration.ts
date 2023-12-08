import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number;
}

export const useTokenExpiration = (token: string | undefined) => {
  const [formattedTimeRemaining, setFormattedTimeRemaining] = useState("");

  useEffect(() => {
    const updateTokenExpiration = () => {
      try {
        if (typeof token === "string") {
          const decoded: DecodedToken = jwtDecode(token);
          if (decoded.exp) {
            const currentTime = Math.floor(Date.now() / 1000);
            const remaining = decoded.exp - currentTime;
            const remainingInMillis = remaining > 0 ? remaining * 1000 : 0;

            setFormattedTimeRemaining(formatTimeRemaining(remainingInMillis));
          }
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };

    updateTokenExpiration();

    const intervalId = setInterval(updateTokenExpiration, 1000);

    return () => clearInterval(intervalId);
  }, [token]);

  const formatTimeRemaining = (timeRemaining: number): string => {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
  };

  return { formattedTimeRemaining };
};
