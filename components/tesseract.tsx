"use client";

import { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";

const TesseractJS = () => {

  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    const recognizeImage = async () => {
      const worker = await createWorker("eng", 1);
      const { data: { text } } = await worker.recognize("/text.jpg")
      setText(text);

      await worker.terminate();
    };
    recognizeImage()
  }, [])

  return (
    <div className="mt-4 flex flex-col gap-2">
      画像から文字列を抽出

      <div>
        <input type="file" name="" id="" />
      </div>

      <div>
        {text}
      </div>
    </div>
  );
}

export default TesseractJS;