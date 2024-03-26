"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { createWorker } from "tesseract.js";

const TesseractJS = () => {

  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    setImage(window.URL.createObjectURL(e.target.files[0]));
    e.currentTarget.value = '';
  }

  useEffect(() => {
    const recognizeImage = async () => {
      const worker = await createWorker("jpn", 1);
      const { data: { text } } = await worker.recognize(image);
      setText(text);

      await worker.terminate();
    };
    recognizeImage();
  }, [image])

  return (
    <div className="mt-4 flex flex-col gap-2">
      画像から文字列を抽出
      <div>
        <img className="border border-slate-700 p-4 m-2" src={image} alt="" />
        <input type="file" name="image" id="" onChange={handleChangeFile} />
      </div>

      <div>
        <h3 className="font-bold">抽出した文字</h3>
        {text}
      </div>
    </div>
  );
}

export default TesseractJS;