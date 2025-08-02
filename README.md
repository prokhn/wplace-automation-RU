# WPlace Bot - Automação de Desenhos

Bot para automatizar a criação de desenhos no site wplace.live.

## 🚀 Como Usar

### Método 1: Console do Navegador (Recomendado)

1. **Abra o site**: Acesse [wplace.live](https://wplace.live)
2. **Abra o Console**: Pressione `F12` e vá para a aba "Console"
3. **Cole o script**: Copie todo o conteúdo do arquivo `wplace-bot.js` e cole no console
4. **Pressione Enter**: O bot será carregado e um painel de controle aparecerá no canto superior direito

### Método 2: Bookmarklet

1. Crie um novo bookmark no seu navegador
2. Como URL, cole: `javascript:(function(){fetch('https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPO/main/wplace-bot.js').then(r=>r.text()).then(eval)})();`
3. Quando estiver no wplace.live, clique no bookmark

## 🎮 Como Usar o Bot

### Painel de Controle

O bot cria um painel de controle no canto superior direito com:

- **Posição X/Y**: Define onde o desenho começará
- **Delay**: Tempo entre cada pixel (em milissegundos)
- **Botões de imagem**: Carrega imagens pré-definidas
- **Iniciar/Parar**: Controla a execução do bot

### Comandos no Console

```javascript
// Define posição inicial (x, y)
wplaceBot.setStartPosition(100, 100);

// Define delay entre cliques (em ms)
wplaceBot.setDelay(2000);

// Carrega imagens pré-definidas
wplaceBot.loadHeartImage();    // Coração 7x7
wplaceBot.loadSmileyImage();   // Smiley 7x7

// Controla o bot
wplaceBot.start();  // Inicia
wplaceBot.stop();   // Para
```

## 🎨 Imagens Disponíveis

### Coração (7x7)
```
⬜🟥🟥⬜🟥🟥⬜
🟥🟥🟥🟥🟥🟥🟥
🟥🟥🟥🟥🟥🟥🟥
🟥🟥🟥🟥🟥🟥🟥
⬜🟥🟥🟥🟥🟥⬜
⬜⬜🟥🟥🟥⬜⬜
⬜⬜⬜🟥⬜⬜⬜
```

### Smiley (7x7)
```
⬜⬜🟨🟨🟨⬜⬜
⬜🟨🟨🟨🟨🟨⬜
🟨🟨⬛🟨⬛🟨🟨
🟨🟨🟨🟨🟨🟨🟨
🟨⬛🟨🟨🟨⬛🟨
⬜🟨⬛⬛⬛🟨⬜
⬜⬜🟨🟨🟨⬜⬜
```

## 🔧 Criando Suas Próprias Imagens

### Método Simples

```javascript
// Crie uma matriz de cores (7x7 exemplo)
const minhaImagem = [
    '#FF0000', '#FF0000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FF0000', '#FF0000',
    '#FF0000', '#FFFFFF', '#FF0000', '#FFFFFF', '#FF0000', '#FFFFFF', '#FF0000',
    // ... continue para 49 pixels (7x7)
];

// Carregue a imagem
wplaceBot.loadSimpleImage(minhaImagem, 7, 7);
```

### Método com Emojis

```javascript
const design = [
    '🟦', '🟦', '🟦',
    '🟦', '🟨', '🟦',
    '🟦', '🟦', '🟦'
];

const colorMap = {
    '🟦': '#0000FF',
    '🟨': '#FFFF00'
};

const imageData = design.map(emoji => colorMap[emoji]);
wplaceBot.loadSimpleImage(imageData, 3, 3);
```

## ⚠️ Avisos Importantes

1. **Use com responsabilidade**: Respeite a comunidade do wplace.live
2. **Delays adequados**: Use delays de pelo menos 1000ms para não sobrecarregar o servidor
3. **Tamanho das imagens**: Comece com imagens pequenas (máximo 10x10)
4. **Coordenadas**: Verifique se suas coordenadas não vão além dos limites do canvas

## 🛠️ Recursos do Bot

- ✅ Interface gráfica integrada
- ✅ Detecção automática do canvas
- ✅ Detecção automática da paleta de cores
- ✅ Seleção automática da cor mais próxima
- ✅ Controle de velocidade (delay)
- ✅ Imagens pré-definidas
- ✅ Sistema de parada de emergência
- ✅ Log detalhado das ações

## 🐛 Solução de Problemas

### "Canvas não encontrado"
- Certifique-se de estar no site wplace.live
- Aguarde o site carregar completamente
- Recarregue a página e tente novamente

### "Cores não selecionadas"
- O site pode ter mudado a estrutura da paleta de cores
- Tente selecionar as cores manualmente primeiro

### Bot não funciona
- Verifique se não há bloqueadores de script
- Tente recarregar o script
- Verifique o console para erros

## 📝 Licença

Este script é fornecido "como está" para fins educacionais. Use por sua própria conta e risco.
