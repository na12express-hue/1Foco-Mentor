# Foco Mentor IA

Seu coach pessoal de produtividade e aplicação de conhecimento para a Mega Biblioteca.

## Executar localmente

### Pré-requisitos
*   Node.js (versão 18 ou superior recomendada)

### Instalação e Execução

1.  **Instalar dependências:**
    ```bash
    npm install
    ```

2.  **Configurar Chave API (Opcional para Dev):**
    Você pode criar um arquivo `.env` na raiz:
    ```
    VITE_API_KEY=sua_chave_aqui
    ```
    *Nota: O aplicativo também pedirá a chave via interface se não for encontrada.*

3.  **Executar o aplicativo:**
    ```bash
    npm run dev
    ```

4.  **Build para Produção:**
    ```bash
    npm run build
    ```
    Os arquivos estarão na pasta `dist/`.
