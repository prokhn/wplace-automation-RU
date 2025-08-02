# 📋 Guia Completo - Como Usar o WPlace Bot

## 🚀 Passo-a-Passo Completo

### **1. Preparação Inicial**

#### **1.1 Abrir o Site**
1. Abra seu navegador (Chrome, Firefox, Edge, etc.)
2. Acesse: **https://wplace.live**
3. Aguarde o site carregar completamente
4. Certifique-se de que o canvas (área de desenho) está visível

#### **1.2 Abrir o Console do Desenvolvedor**
- **Windows/Linux**: Pressione `F12` ou `Ctrl + Shift + I`
- **Mac**: Pressione `Cmd + Option + I`
- **Alternativa**: Clique com botão direito → "Inspecionar" → aba "Console"

### **2. Carregar o Bot (OBRIGATÓRIO)**

#### **2.1 Cole o Código Principal**
No console, cole este código e pressione `Enter`:

```javascript
fetch('https://raw.githubusercontent.com/gcampos04/wplace-automation/main/wplace-bot.js').then(r=>r.text()).then(eval)
```

**OU** cole o código completo do arquivo `wplace-bot.js` diretamente.

#### **2.2 Verificar se Carregou**
Após executar, você deve ver:
- ✅ Mensagem: "🎨 WPlace Bot Carregado!"
- ✅ Painel de controle no canto superior direito
- ✅ Lista de comandos disponíveis no console

---

## 🎨 **3. Escolher Seu Método de Criação**

### **Método A: Imagens Pré-definidas (Mais Fácil)**

```javascript
// Carregar coração
wplaceBot.loadHeartImage();

// OU carregar smiley
wplaceBot.loadSmileyImage();

// Definir posição (onde começar a desenhar)
wplaceBot.setStartPosition(100, 100);

// Definir velocidade (delay entre pixels em ms)
wplaceBot.setDelay(1000);

// Iniciar o desenho
wplaceBot.start();
```

### **Método B: Upload de Imagem (Painel)**

1. **Clique em "📁 Carregar Imagem"** no painel
2. **Selecione sua imagem** (PNG, JPG, etc.)
3. **Configure posição** nos campos X e Y
4. **Ajuste o delay** se necessário
5. **Clique "▶️ Iniciar"**

### **Método C: Conversor Avançado**

1. **Clique em "🔧 Conversor"** no painel (abre nova aba)
2. **Arraste sua imagem** ou clique para selecionar
3. **Configure as opções**:
   - Tamanho máximo
   - Modo de cor (recomendado: Paleta Limitada)
   - Posição inicial
   - Delay
4. **Clique "🔄 Converter Imagem"**
5. **Clique "📝 Gerar Script"**
6. **Copie o código gerado**
7. **Volte para o wplace.live**
8. **Cole o código no console**

### **Método D: Editor de Pixel Art**

1. **Clique em "🎨 Editor"** no painel (abre nova aba)
2. **Desenhe diretamente** no canvas usando as ferramentas
3. **Configure as opções** na sidebar direita
4. **Copie o script gerado automaticamente**
5. **Volte para o wplace.live**
6. **Cole o código no console**

---

## ⚙️ **4. Configurações Importantes**

### **4.1 Posição Inicial**
```javascript
// Definir onde começar a desenhar (X, Y)
wplaceBot.setStartPosition(100, 100);
```

### **4.2 Velocidade/Delay**
```javascript
// Delay entre pixels (em milissegundos)
wplaceBot.setDelay(1000);  // 1 segundo
wplaceBot.setDelay(2000);  // 2 segundos (mais seguro)
wplaceBot.setDelay(500);   // 0.5 segundos (mais rápido)
```

### **4.3 Controlar o Bot**
```javascript
// Iniciar o desenho
wplaceBot.start();

// Parar o desenho
wplaceBot.stop();

// Ver status
console.log('Bot rodando:', wplaceBot.isRunning);
```

---

## 🎯 **5. Exemplo Completo Passo-a-Passo**

### **Exemplo 1: Desenhar um Coração**

```javascript
// 1. Certifique-se de que o bot está carregado
// (execute o fetch acima primeiro)

// 2. Carregar a imagem do coração
wplaceBot.loadHeartImage();

// 3. Definir onde desenhar (coordenadas X, Y)
wplaceBot.setStartPosition(200, 150);

// 4. Definir velocidade (2 segundos entre pixels)
wplaceBot.setDelay(2000);

// 5. Iniciar o desenho
wplaceBot.start();

// Para parar a qualquer momento:
// wplaceBot.stop();
```

### **Exemplo 2: Usar Imagem Personalizada**

```javascript
// 1. Use o conversor ou editor para gerar este código
// 2. Cole o código gerado (exemplo):

const minha_imagemData = [
    { x: 0, y: 0, color: '#FF0000' },
    { x: 1, y: 0, color: '#00FF00' },
    { x: 0, y: 1, color: '#0000FF' },
    { x: 1, y: 1, color: '#FFFF00' }
];

function loadMinha_imagem() {
    wplaceBot.loadImageFromData(minha_imagemData, 'minha_imagem');
    wplaceBot.setStartPosition(100, 100);
    wplaceBot.setDelay(1000);
    console.log('✅ Imagem carregada! Use wplaceBot.start() para desenhar');
}

// 3. Executar a função
loadMinha_imagem();

// 4. Iniciar o desenho
wplaceBot.start();
```

---

## ⚠️ **6. Dicas Importantes**

### **6.1 Antes de Começar**
- ✅ **Verifique se há espaço** livre no canvas
- ✅ **Teste com imagens pequenas** primeiro
- ✅ **Use delay de pelo menos 1000ms** para evitar sobrecarga
- ✅ **Certifique-se de que está logado** no wplace.live

### **6.2 Durante o Desenho**
- ⏸️ **Pode parar a qualquer momento** com `wplaceBot.stop()`
- 👀 **Monitore o console** para ver o progresso
- 🔄 **Se der erro, recarregue a página** e comece novamente

### **6.3 Resolução de Problemas**

#### **"Canvas não encontrado"**
```javascript
// Recarregue a página e tente novamente
location.reload();
```

#### **"WPlace Bot não encontrado"**
```javascript
// Carregue o bot novamente
fetch('https://raw.githubusercontent.com/gcampos04/wplace-automation/main/wplace-bot.js').then(r=>r.text()).then(eval)
```

#### **Bot não está funcionando**
```javascript
// Verificar se o bot existe
console.log(typeof wplaceBot);

// Reinicializar se necessário
wplaceBot.init();
```

---

## 📱 **7. Comandos Úteis no Console**

### **7.1 Status e Informações**
```javascript
// Ver se o bot está rodando
console.log('Status:', wplaceBot.isRunning ? 'Rodando' : 'Parado');

// Ver posição atual
console.log('Posição:', wplaceBot.startX, wplaceBot.startY);

// Ver delay atual
console.log('Delay:', wplaceBot.delay + 'ms');

// Ver quantos pixels restam
console.log('Progresso:', wplaceBot.currentPixel + '/' + wplaceBot.pixels.length);
```

### **7.2 Configurações Rápidas**
```javascript
// Configuração rápida para teste
wplaceBot.loadHeartImage();
wplaceBot.setStartPosition(100, 100);
wplaceBot.setDelay(1500);

// Configuração para imagem grande (mais lenta)
wplaceBot.setDelay(3000);

// Configuração para imagem pequena (mais rápida)
wplaceBot.setDelay(800);
```

---

## 🎉 **8. Exemplo de Uso Completo**

### **Sequência Completa do Zero:**

1. **Abrir wplace.live**
2. **Pressionar F12** (abrir console)
3. **Colar e executar:**
   ```javascript
   fetch('https://raw.githubusercontent.com/gcampos04/wplace-automation/main/wplace-bot.js').then(r=>r.text()).then(eval)
   ```
4. **Aguardar mensagem de confirmação**
5. **Escolher uma opção:**
   
   **Opção A - Coração simples:**
   ```javascript
   wplaceBot.loadHeartImage();
   wplaceBot.setStartPosition(100, 100);
   wplaceBot.setDelay(1000);
   wplaceBot.start();
   ```
   
   **Opção B - Usar painel:**
   - Clicar em "📁 Carregar Imagem"
   - Selecionar arquivo
   - Clicar "▶️ Iniciar"
   
   **Opção C - Conversor/Editor:**
   - Clicar "🔧 Conversor" ou "🎨 Editor"
   - Criar/converter imagem
   - Copiar script gerado
   - Colar no console

6. **Acompanhar o progresso no console**
7. **Parar quando necessário:** `wplaceBot.stop()`

---

**🎯 Pronto! Agora você pode desenhar qualquer coisa no wplace.live automaticamente!**
