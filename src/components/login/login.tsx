import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const LoginComponent: React.FC = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const response = await axios.post(
        "https://christmaslettersapi-production.up.railway.app/send-code",
        { code: code },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        navigate(`/letter/${response.data.id}`);
      } else {
        alert("Código inválido");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div
      className="bg-[#F3EDE1] px-12 py-8 rounded-lg flex flex-col gap-16"
      style={{ maxWidth: "100%", position: "relative", zIndex: 1, boxSizing: 'border-box' }}
    >
      <div className="w-full">
        <h1 className="mb-6 font-bold">Feliz ___Natal!</h1>
        <p>Olá, amigos, amores, paixões, lindos, lindas e lindes</p>
        <p>Por favor, digite o código compartilhado com você para acessar</p>
      </div>
      <div className="flex gap-6 justify-center w-full">
        <Input
          onChange={(e) => setCode(e.target.value)}
          type="text"
          placeholder="Código"
          style={{width: '60%'}}
        />
        <Button style={{width: '40%'}} onClick={() => handleLogin()}>
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default LoginComponent;
