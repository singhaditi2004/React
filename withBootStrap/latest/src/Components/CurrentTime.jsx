import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <>{time.toLocaleTimeString()}</>;
};

export default CurrentTime;
