"use client";

import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    console.log("一回だけ呼ばれるはず");
    const interval = window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []) // 依存配列

  return (
    <div>
      タイマー：
      <time className="text-slate-500">{time}</time>
      <span>秒経過</span>
    </div>
  );
}

export default Timer;