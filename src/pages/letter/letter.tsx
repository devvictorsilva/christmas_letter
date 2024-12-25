import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './index.css';

export const Letter: React.FC = () => {

  interface Letter {
    letter_title: string;
    letter_content: string;
  }

  const [letter, setLetter] = useState<Letter>({ letter_title: "", letter_content: "" });
  const { id } = useParams();

  async function getLetter() {
    try {
      const response = await axios.get(`https://christmaslettersapi-production.up.railway.app/find-letter/${id}`, { headers: { "Content-Type": "application/json" } });

      setLetter(response.data);
    } catch {
      alert("Erro ao buscar carta");
    }
  }

  useEffect(() => {
    getLetter();
  }, []);

  return (
    <div
      className={`bg-[#F3EDE1] py-8 rounded-lg flex h-[740px] flex-col gap-16 ${window.innerWidth < 768 ? 'px-12' : 'px-6'}`}
      style={{ maxWidth: "560px", position: "relative", zIndex: 1, paddingInline: window.innerWidth < 768 ? '24px' : '48px' }}
    >
      <div>
        <h1 className="mb-6 font-bold">{letter.letter_title}</h1>
        <div
          style={{
            overflowY: "auto",
            maxHeight: "500px",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "pre-wrap",
            fontSize: window.innerWidth < 768 ? "16px" : "20px",
          }}
        >
          {letter.letter_content}
        </div>
      </div>
    </div>
  );
};

export default Letter;
