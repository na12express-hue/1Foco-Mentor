import React, { useState } from 'react';
import { Key, Lock, CheckCircle, AlertCircle } from 'lucide-react';

interface ApiKeyModalProps {
  onSave: (key: string) => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ onSave }) => {
  const [inputKey, setInputKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputKey.trim()) {
      setError('Por favor, insira uma chave API válida.');
      return;
    }
    onSave(inputKey.trim());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-stone-800 rounded-xl shadow-2xl max-w-md w-full border border-stone-200 dark:border-stone-700 overflow-hidden">
        <div className="bg-amber-500 p-6 flex justify-center">
          <div className="bg-white/20 p-3 rounded-full text-white">
            <Key size={32} />
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-serif font-bold text-center text-stone-800 dark:text-stone-100 mb-2">
            Configuração Necessária
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-center mb-6 text-sm">
            Para ativar o Foco Mentor IA, insira sua chave da API do Google Gemini. Ela será salva apenas no seu navegador.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={18} />
              <input
                type="password"
                value={inputKey}
                onChange={(e) => {
                  setInputKey(e.target.value);
                  setError('');
                }}
                placeholder="Cole sua API Key aqui (AIza...)"
                className="w-full pl-10 pr-4 py-3 bg-stone-50 dark:bg-stone-900 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all dark:text-white"
              />
            </div>
            
            {error && (
              <div className="flex items-center gap-2 text-red-500 text-xs">
                <AlertCircle size={12} />
                <span>{error}</span>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-stone-800 hover:bg-stone-700 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Ativar Mentor</span>
              <CheckCircle size={18} />
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <a 
              href="https://aistudio.google.com/app/apikey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-amber-600 hover:text-amber-700 underline underline-offset-2"
            >
              Obter uma chave API gratuita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyModal;