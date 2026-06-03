const puppeteer = require('puppeteer');

async function salvaRelatorio() {
    let navegador = null;
    try {
        console.log("[PUPPETEER] Iniciando navegador headless...");
        navegador = await puppeteer.launch({ headless: "new" });
        
        console.log("[PUPPETEER] Abrindo nova aba...");
        const pagina = await navegador.newPage();

        console.log("[PUPPETEER] Navegando para https://status.alura.com.br/ ...");
        await pagina.goto('https://status.alura.com.br/', { waitUntil: 'networkidle2', timeout: 30000 });
        
        console.log("[PUPPETEER] Aguardando seletor '.success' ficar visível...");
        await pagina.waitForSelector('.success', { visible: true, timeout: 15000 });
        
        console.log("[PUPPETEER] Capturando tela...");
        await pagina.screenshot({ path: 'captura.png' });
        console.log("[PUPPETEER] Captura salva com sucesso em 'captura.png'!");
        
    } catch (error) {
        console.error("[PUPPETEER] Erro durante a execução da automação:", error.message);
    } finally {
        if (navegador) {
            console.log("[PUPPETEER] Fechando navegador e liberando recursos...");
            await navegador.close();
            console.log("[PUPPETEER] Navegador fechado.");
        }
    }
}

salvaRelatorio();