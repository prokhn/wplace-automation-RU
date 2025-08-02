# WPlace Bot - Automação de Desenhos

Bot para automatizar a criação de desenhos no site wplace.live.

## 🚀 Como Usar (Passo-a-Passo)

### **Passo 1: Preparação**
1. **Abra** [wplace.live](https://wplace.live) no navegador
2. **Pressione** `F12` para abrir o Console (ou Ctrl+Shift+I)
3. **Clique** na aba "Console"

### **Passo 2: Carregar o Bot** ⚠️ **OBRIGATÓRIO**
**Cole este código no console e pressione Enter:**
```javascript
fetch('https://raw.githubusercontent.com/gcampos04/wplace-automation/main/wplace-bot.js').then(r=>r.text()).then(eval)
```

**Aguarde ver:**
- ✅ Mensagem "🎨 WPlace Bot Carregado!"
- ✅ Painel de controle no canto superior direito

### **Passo 3: Escolha Seu Método**

#### **🖼️ Opção A: Upload Direto (Mais Fácil)**
1. Clique **"📁 Carregar Imagem"** no painel
2. Selecione sua imagem
3. Configure posição (X, Y)
4. Clique **"▶️ Iniciar"**

#### **🔧 Opção B: Conversor Avançado**
1. Clique **"🔧 Conversor"** no painel
2. Arraste sua imagem
3. Configure opções
4. Gere e copie o script
5. Cole no console

#### **🎨 Opção C: Editor de Pixel Art**
1. Clique **"🎨 Editor"** no painel
2. Desenhe diretamente
3. Copie o script gerado
4. Cole no console

#### **❤️ Opção D: Teste Rápido**
```javascript
wplaceBot.loadHeartImage();
wplaceBot.setStartPosition(100, 100);
wplaceBot.start();
```

### **Controles Básicos**
```javascript
wplaceBot.start();    // Iniciar desenho
wplaceBot.stop();     // Parar desenho
wplaceBot.setStartPosition(x, y);  // Definir posição
wplaceBot.setDelay(1000);          // Definir velocidade
```

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

#### 🆕 Método 3: Editor de Pixel Art
1. Clique em "🎨 Editor" no painel ou abra `pixel-editor.html`
2. **Desenhe diretamente** na tela usando:
   - **🖌️ Pincel**: Desenhar pixels individuais
   - **🧽 Borracha**: Apagar pixels
   - **🪣 Balde**: Preencher áreas
   - **🎯 Conta-gotas**: Selecionar cores existentes
   - **📏 Linha**: Desenhar linhas retas
   - **⬜ Retângulo**: Criar formas retangulares
3. **Configure o canvas**: Tamanho, cores, zoom
4. **Visualize em tempo real**: Grade, estatísticas, preview
5. **Gere o script** automaticamente conforme desenha
6. **Exporte** em múltiplos formatos ou salve como PNG

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
- `image-converter.html` - **🔧 Conversor web de imagens** (Interface completa)
- `pixel-editor.html` - **🆕 Editor de Pixel Art** (Desenhe diretamente na tela!)
- `demo-converter.html` - Página de demonstração e instruções
- `custom-images.md` - Exemplos e guia para imagens personalizadas
- `README.md` - Este arquivo com todas as instruções

## 🆕 Novidades - Editor de Pixel Art

### 🎨 Editor Completo de Pixel Art
O arquivo `pixel-editor.html` é um editor completo onde você pode **desenhar diretamente**:

#### **🛠️ Ferramentas Disponíveis**:
- **�️ Pincel**: Desenhar pixel por pixel
- **🧽 Borracha**: Apagar pixels específicos
- **🪣 Balde**: Preencher áreas com uma cor
- **🎯 Conta-gotas**: Selecionar cores existentes no desenho
- **📏 Linha**: Desenhar linhas retas perfeitas
- **⬜ Retângulo**: Criar formas retangulares

#### **🎨 Sistema de Cores**:
- **Paleta de 30 cores** otimizada para wplace.live
- **Seletor de cor personalizado** para cores específicas
- **Preview em tempo real** de todas as cores

#### **📐 Controles de Canvas**:
- **Tamanho configurável**: De 5x5 até 100x100 pixels
- **Zoom ajustável**: 1x até 5x para precisão
- **Grade opcional**: Para melhor visualização
- **Histórico completo**: Desfazer/Refazer ilimitado

#### **📊 Recursos Avançados**:
- **Importação de imagens**: Arraste imagens existentes
- **Exportação PNG**: Salve seu trabalho em alta resolução
- **Estatísticas em tempo real**: Pixels, cores, tempo estimado
- **Múltiplos formatos de script**: Script completo, função ou dados puros

#### **⚡ Geração Automática**:
- **Script gerado em tempo real** conforme você desenha
- **Três formatos de saída**:
  - Script completo pronto para usar
  - Função personalizada
  - Dados puros da imagem
- **Cópia com um clique** para área de transferência

---

**🎉 Agora você tem 3 formas diferentes de criar arte para o wplace.live:**

### 1. 📁 **Upload Direto** - *Rápido e Simples*
- Clique em "📁 Carregar Imagem" no painel
- Selecione qualquer imagem
- Pronto para usar!

### 2. 🔧 **Conversor Avançado** - *Máximo Controle*
- Importe qualquer formato de imagem
- Configure tamanho, cores e otimizações
- Preview completo antes de gerar
- Múltiplos formatos de saída

### 3. 🎨 **Editor de Pixel Art** - *Criação Original*
- Desenhe diretamente na tela
- Ferramentas profissionais (pincel, balde, linha, etc.)
- Geração de script em tempo real
- Sistema completo de cores e zoom

**✨ Todos os métodos geram scripts prontos para colar no console do wplace.live!**
