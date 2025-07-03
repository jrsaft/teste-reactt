import React from 'react';
import { FaCat } from "react-icons/fa";

function App() {
  return (
    <div>
      <header>
        <section
          className="bg-white flex items-center justify-center gap-4"
          style={{ padding: '15px' }}
        >
          <FaCat size={25} color="#2e1065" />
          <h1 className="text-purple-950 font-bold m-0 text-2xl">DudaSys</h1>
          <FaCat size={25} color="#2e1065" />
        </section>
      </header>

      <div className="bg-pink-300 h-screen p-5 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xs">
          <h2 className= "text-xl mb-3 text-center text-black">Entrar na sua conta</h2>
          
          <form action="https://getform.io/f/axoypomb" method="POST">
            <label className="block mb-0 font-semibold text-gray-700 rounded-sm" htmlFor="email">
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            <label className="block mb-0 font-semibold text-gray-700 rounded-sm color" htmlFor="password">
            </label>
            <input
              type="password"
              id="password"
              name="senha"
              placeholder="Digite sua senha"
              className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            <button
              type="submit"
              className="w-full bg-purple-950 text-white py-3 rounded hover:bg-purple-800 transition"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

