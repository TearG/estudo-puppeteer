# 🕸️ Estudo de Automação com Puppeteer

Este repositório é um projeto prático de automação web e captura de tela (web scraping/testing) utilizando o **Puppeteer**, uma biblioteca de Node.js que fornece uma API de alto nível para controlar navegadores Chromium headless.

O script monitora a integridade de uma plataforma web em tempo real através da verificação de elementos visuais do DOM.

---

## 🎯 Fluxo de Execução
O script `index.js` realiza os seguintes passos:
1.  **Inicialização:** Abre uma instância em segundo plano (headless) do Chromium.
2.  **Navegação:** Acessa o endereço de monitoramento do status da Alura: `https://status.alura.com.br/`.
3.  **Validação de Status:** Aguarda até que o elemento com a classe `.success` esteja visível na página (confirmando que os serviços estão operantes).
4.  **Screenshot:** Tira um print screen da tela de status e salva localmente como `captura.png`.
5.  **Finalização:** Encerra a execução do navegador com segurança.

---

## 🛠️ Tecnologias Utilizadas
*   **Ambiente:** Node.js
*   **Biblioteca Principal:** Puppeteer (Automação de Navegadores)

---

## 📁 Estrutura de Arquivos
```text
estudo-puppeteer/
├── index.js            # Script principal com a lógica da automação
├── captura.png         # Print screen gerado da página de monitoramento
├── package.json        # Arquivo de configurações do projeto e dependências
└── README.md           # Documentação explicativa do projeto
```

---

## 🚀 Como Executar o Projeto

### Prerrequisitos
*   Ter o **Node.js** instalado na máquina.

### 1. Instalar Dependências
Com o terminal aberto na pasta do projeto, execute o comando abaixo para instalar as bibliotecas do `package.json`:
```bash
npm install
```

### 2. Rodar a Automação
Execute o script principal do Node:
```bash
node index.js
```
*Após a execução, o arquivo `captura.png` será gerado ou atualizado na raiz da pasta.*

---

*Desenvolvido por Vanessa de Carvalho Faria.*
