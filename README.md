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
- **Botões de imagem**: Carrega imagens pré-definidas (Coração, Smiley)
- **Carregar Imagem**: Permite carregar suas próprias imagens (PNG, JPG, etc.)
- **Conversor**: Abre a ferramenta de conversão avançada de imagens
- **Iniciar/Parar**: Controla a execução do bot

### 🖼️ Importando Suas Próprias Imagens

#### Método 1: Upload Direto no Painel
1. Clique em "📁 Carregar Imagem" no painel de controle
2. Selecione sua imagem (PNG, JPG, GIF)
3. A imagem será automaticamente redimensionada e carregada

#### Método 2: Conversor Avançado
1. Clique em "🔧 Conversor" no painel ou abra `image-converter.html`
2. Arraste sua imagem ou clique para selecionar
3. Configure as opções:
   - **Tamanho máximo**: Largura e altura em pixels
   - **Modo de cor**: Paleta limitada, cores completas ou escala de cinza
   - **Posição inicial**: Onde começar a desenhar
   - **Delay**: Tempo entre cada pixel
4. Clique em "🔄 Converter Imagem" para ver o preview
5. Clique em "📝 Gerar Script" para obter o código
6. Copie e cole o script no console do wplace.live

### Comandos no Console

```javascript
// Define posição inicial (x, y)
wplaceBot.setStartPosition(100, 100);

// Define delay entre cliques (em ms)
wplaceBot.setDelay(2000);

// Carrega imagens pré-definidas
wplaceBot.loadHeartImage();    // Coração 7x7
wplaceBot.loadSmileyImage();   // Smiley 7x7

// Carrega imagem de dados personalizados
const minhosPixels = [
    { x: 0, y: 0, color: '#FF0000' },
    { x: 1, y: 0, color: '#00FF00' },
    // ... mais pixels
];
wplaceBot.loadImageFromData(minhosPixels, 'Minha Imagem');

// Carrega imagem de URL (data URL ou URL externa)
wplaceBot.loadImageFromUrl('data:image/png;base64,...', 50, 50);

// Controla o bot
wplaceBot.start();  // Inicia
wplaceBot.stop();   // Para
```

## 🎨 Imagens Disponíveis

### Imagens Pré-definidas

- **❤️ Coração**: 7x7 pixels em vermelho
- **😊 Smiley**: 7x7 pixels amarelo com rosto sorridente

### 🆕 Suas Próprias Imagens

Agora você pode importar qualquer imagem! O bot suporta:

- **Formatos**: PNG, JPG, JPEG, GIF
- **Redimensionamento automático**: Suas imagens são redimensionadas para o tamanho ideal
- **Otimização de cores**: Converte para as cores disponíveis no wplace.live
- **Três modos de cor**:
  - **Paleta Limitada**: Usa apenas cores comuns do wplace
  - **Cores Completas**: Mantém cores originais (pode não ter correspondência exata)
  - **Escala de Cinza**: Converte para preto e branco

### Como Converter Suas Imagens

1. **Abra o Conversor**: Use `image-converter.html` ou clique no botão "🔧 Conversor" no painel
2. **Importe sua Imagem**: Arraste ou selecione o arquivo
3. **Configure as Opções**:
   - Tamanho máximo (recomendado: 50x50 para imagens pequenas)
   - Modo de cor (recomendado: Paleta Limitada)
   - Posição inicial no canvas
   - Delay entre pixels
4. **Visualize o Resultado**: Veja como ficará sua imagem pixelizada
5. **Gere o Script**: Obtenha o código pronto para usar
6. **Use no WPlace**: Cole o script no console do wplace.live

### ⚠️ Dicas Importantes

- **Tamanho**: Imagens muito grandes demoram muito para desenhar
- **Delay**: Use pelo menos 1000ms entre pixels para evitar sobrecarga
- **Cores**: Modo "Paleta Limitada" garante melhor compatibilidade
- **Posição**: Verifique se há espaço suficiente no canvas antes de iniciar

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

## 📁 Arquivos do Projeto

- `wplace-bot.js` - Script principal do bot com todas as funcionalidades
- `wplace-bot-minified.js` - Versão minificada do bot
- `image-converter.html` - **🆕 Conversor web de imagens** (Interface completa)
- `demo-converter.html` - Página de demonstração e instruções
- `custom-images.md` - Exemplos e guia para imagens personalizadas
- `README.md` - Este arquivo com todas as instruções

## 🆕 Novidades - Importação de Imagens

### Conversor Web Completo
O arquivo `image-converter.html` é uma ferramenta completa para converter suas imagens:

- **🖼️ Suporte completo**: PNG, JPG, JPEG, GIF
- **🎯 Redimensionamento inteligente**: Mantém proporções automaticamente  
- **🎨 Três modos de cor**:
  - Paleta Limitada (recomendado)
  - Cores Completas
  - Escala de Cinza
- **👀 Preview em tempo real**: Veja o resultado antes de gerar
- **📜 Múltiplos formatos de saída**: Script completo, função personalizada ou dados puros
- **📊 Estatísticas detalhadas**: Tempo estimado, cores únicas, etc.

### Upload Direto no Bot
- Novo botão "📁 Carregar Imagem" no painel de controle
- Upload direto de imagens pequenas
- Conversão automática

---

**🎉 Agora você pode transformar qualquer imagem em pixel art para o wplace.live!**
