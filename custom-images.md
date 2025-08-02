# 🖼️ Exemplos de Imagens Personalizadas

Este arquivo contém exemplos de como usar imagens convertidas no WPlace Bot, além de métodos para criar suas próprias imagens.

## 🎨 Métodos para Criar Imagens

### 1. 🆕 Conversor Web Automático (Recomendado)
- Abra `image-converter.html` no navegador
- Arraste ou selecione sua imagem (PNG, JPG, GIF)
- Configure tamanho máximo e modo de cor
- Visualize o resultado em tempo real
- Gere o script pronto para usar
- Copie e cole no console do wplace.live

### 2. 📁 Upload Direto no Painel
- Use o botão "📁 Carregar Imagem" no painel do bot
- Selecione sua imagem
- Será automaticamente redimensionada e carregada

### 3. Método Manual (Para Pixel Art Simples)

```javascript
// Exemplo: Cruz 5x5
const cruz = [
    '#FFFFFF', '#FFFFFF', '#FF0000', '#FFFFFF', '#FFFFFF',
    '#FFFFFF', '#FFFFFF', '#FF0000', '#FFFFFF', '#FFFFFF', 
    '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000',
    '#FFFFFF', '#FFFFFF', '#FF0000', '#FFFFFF', '#FFFFFF',
    '#FFFFFF', '#FFFFFF', '#FF0000', '#FFFFFF', '#FFFFFF'
];

wplaceBot.loadSimpleImage(cruz, 5, 5);
```

### 2. Método com Emojis (Visual)

```javascript
// Exemplo: Quadrado com X
const design = [
    '🟥', '⬜', '⬜', '⬜', '🟥',
    '⬜', '🟥', '⬜', '🟥', '⬜',
    '⬜', '⬜', '🟥', '⬜', '⬜',
    '⬜', '🟥', '⬜', '🟥', '⬜',
    '🟥', '⬜', '⬜', '⬜', '🟥'
];

const colorMap = {
    '🟥': '#FF0000',
    '⬜': '#FFFFFF'
};

const imageData = design.map(emoji => colorMap[emoji]);
wplaceBot.loadSimpleImage(imageData, 5, 5);
```

### 3. Método com String Multi-linha

```javascript
// Exemplo: Seta para cima
const arrow = `
⬜⬜🟦⬜⬜
⬜🟦🟦🟦⬜
🟦🟦🟦🟦🟦
⬜⬜🟦⬜⬜
⬜⬜🟦⬜⬜
`.trim().split('\n').join('');

const colors = {
    '🟦': '#0000FF',
    '⬜': '#FFFFFF'
};

const pixels = Array.from(arrow).map(char => colors[char] || '#FFFFFF');
wplaceBot.loadSimpleImage(pixels, 5, 5);
```

## 🔧 Ferramentas Auxiliares

### Função para Criar Retângulo

```javascript
function createRectangle(width, height, color, borderColor = null) {
    const pixels = [];
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            // Se tem borda e está na borda
            if (borderColor && (x === 0 || x === width-1 || y === 0 || y === height-1)) {
                pixels.push(borderColor);
            } else {
                pixels.push(color);
            }
        }
    }
    
    return pixels;
}

// Uso:
const rect = createRectangle(8, 6, '#FF0000', '#000000');
wplaceBot.loadSimpleImage(rect, 8, 6);
```

### Função para Criar Círculo

```javascript
function createCircle(radius, fillColor, bgColor = '#FFFFFF') {
    const size = radius * 2 + 1;
    const pixels = [];
    const center = radius;
    
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const distance = Math.sqrt((x - center) ** 2 + (y - center) ** 2);
            pixels.push(distance <= radius ? fillColor : bgColor);
        }
    }
    
    return pixels;
}

// Uso:
const circle = createCircle(4, '#00FF00');
wplaceBot.loadSimpleImage(circle, 9, 9);
```

### Função para Texto Simples

```javascript
function createText(text, color = '#000000', bgColor = '#FFFFFF') {
    // Fonte 3x5 simples
    const font = {
        'A': [
            '⬜🟦⬜',
            '🟦⬜🟦',
            '🟦🟦🟦',
            '🟦⬜🟦',
            '🟦⬜🟦'
        ],
        'B': [
            '🟦🟦⬜',
            '🟦⬜🟦',
            '🟦🟦⬜',
            '🟦⬜🟦',
            '🟦🟦⬜'
        ],
        'C': [
            '⬜🟦🟦',
            '🟦⬜⬜',
            '🟦⬜⬜',
            '🟦⬜⬜',
            '⬜🟦🟦'
        ]
        // Adicione mais letras conforme necessário
    };
    
    const letters = text.toUpperCase().split('');
    const pixels = [];
    
    for (let row = 0; row < 5; row++) {
        for (let letter of letters) {
            if (font[letter]) {
                const line = font[letter][row];
                for (let char of line) {
                    pixels.push(char === '🟦' ? color : bgColor);
                }
            }
            // Espaço entre letras
            pixels.push(bgColor);
        }
    }
    
    const width = letters.length * 4 - 1; // 3 + 1 espaço, menos último espaço
    return { pixels, width, height: 5 };
}

// Uso:
const textData = createText('ABC', '#FF0000');
wplaceBot.loadSimpleImage(textData.pixels, textData.width, textData.height);
```

## 🎯 Exemplos Prontos

### Pokébola (8x8)

```javascript
const pokeball = [
    '⬜', '⬜', '🟥', '🟥', '🟥', '🟥', '⬜', '⬜',
    '⬜', '🟥', '🟥', '🟥', '🟥', '🟥', '🟥', '⬜',
    '🟥', '🟥', '🟥', '🟥', '🟥', '🟥', '🟥', '🟥',
    '🟥', '🟥', '🟥', '⚫', '⚫', '🟥', '🟥', '🟥',
    '⬜', '⬜', '⬜', '⚫', '⚫', '⬜', '⬜', '⬜',
    '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜',
    '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜',
    '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜'
];

const pokeColors = {
    '🟥': '#FF0000',
    '⬜': '#FFFFFF', 
    '⚫': '#000000'
};

const pokeData = pokeball.map(emoji => pokeColors[emoji]);
wplaceBot.loadSimpleImage(pokeData, 8, 8);
```

### Bandeira do Brasil (9x6)

```javascript
const brasilFlag = [
    '🟩', '🟩', '🟩', '🟩', '🟩', '🟩', '🟩', '🟩', '🟩',
    '🟩', '🟩', '🟨', '🟨', '🟨', '🟨', '🟨', '🟩', '🟩',
    '🟩', '🟨', '🟨', '🔵', '🔵', '🔵', '🟨', '🟨', '🟩',
    '🟩', '🟨', '🟨', '🔵', '🔵', '🔵', '🟨', '🟨', '🟩',
    '🟩', '🟩', '🟨', '🟨', '🟨', '🟨', '🟨', '🟩', '🟩',
    '🟩', '🟩', '🟩', '🟩', '🟩', '🟩', '🟩', '🟩', '🟩'
];

const brasilColors = {
    '🟩': '#009B3A',
    '🟨': '#FFDF00',
    '🔵': '#002776'
};

const brasilData = brasilFlag.map(emoji => brasilColors[emoji]);
wplaceBot.loadSimpleImage(brasilData, 9, 6);
```

### Pac-Man (7x7)

```javascript
const pacman = [
    '⬜', '🟨', '🟨', '🟨', '🟨', '🟨', '⬜',
    '🟨', '🟨', '🟨', '🟨', '🟨', '⬜', '⬜',
    '🟨', '🟨', '🟨', '🟨', '⬜', '⬜', '⬜',
    '🟨', '🟨', '🟨', '⬜', '⬜', '⬜', '⬜',
    '🟨', '🟨', '🟨', '🟨', '⬜', '⬜', '⬜',
    '🟨', '🟨', '🟨', '🟨', '🟨', '⬜', '⬜',
    '⬜', '🟨', '🟨', '🟨', '🟨', '🟨', '⬜'
];

const pacColors = {
    '🟨': '#FFFF00',
    '⬜': '#FFFFFF'
};

const pacData = pacman.map(emoji => pacColors[emoji]);
wplaceBot.loadSimpleImage(pacData, 7, 7);
```

## 🛠️ Dicas Avançadas

### 1. Converter Imagem Real para Pixel Art

```javascript
// Use esta função para converter uma imagem para array de cores
// (precisa carregar a imagem em um canvas primeiro)
function imageToPixelArray(canvas, width, height) {
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, width, height);
    const pixels = [];
    
    for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        
        const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        pixels.push(hex);
    }
    
    return pixels;
}
```

### 2. Paleta de Cores Comum

```javascript
const commonColors = {
    'preto': '#000000',
    'branco': '#FFFFFF',
    'vermelho': '#FF0000',
    'verde': '#00FF00',
    'azul': '#0000FF',
    'amarelo': '#FFFF00',
    'magenta': '#FF00FF',
    'ciano': '#00FFFF',
    'laranja': '#FFA500',
    'roxo': '#800080',
    'rosa': '#FFC0CB',
    'cinza': '#808080',
    'marrom': '#8B4513',
    'lime': '#32CD32',
    'navy': '#000080'
};
```

### 3. Validar Imagem Antes de Usar

```javascript
function validateImage(pixels, width, height) {
    if (pixels.length !== width * height) {
        console.error(`❌ Erro: esperado ${width * height} pixels, encontrado ${pixels.length}`);
        return false;
    }
    
    // Verificar se todas as cores são válidas
    const invalidColors = pixels.filter(color => !/^#[0-9A-F]{6}$/i.test(color));
    if (invalidColors.length > 0) {
        console.error(`❌ Cores inválidas encontradas:`, invalidColors);
        return false;
    }
    
    console.log(`✅ Imagem válida: ${width}x${height}`);
    return true;
}

// Uso:
if (validateImage(meuPixels, 8, 8)) {
    wplaceBot.loadSimpleImage(meuPixels, 8, 8);
}
```

## 📝 Template Base

```javascript
// Template para criar suas próprias imagens
function createCustomImage() {
    // 1. Defina seu design (use emojis para visualizar melhor)
    const design = [
        '⬜', '⬜', '⬜',
        '⬜', '🟦', '⬜',
        '⬜', '⬜', '⬜'
    ];
    
    // 2. Mapeie as cores
    const colorMap = {
        '⬜': '#FFFFFF',
        '🟦': '#0000FF'
    };
    
    // 3. Converta para array de cores
    const pixels = design.map(emoji => colorMap[emoji] || '#FFFFFF');
    
    // 4. Defina dimensões
    const width = 3;
    const height = 3;
    
    // 5. Valide e carregue
    if (validateImage(pixels, width, height)) {
        wplaceBot.loadSimpleImage(pixels, width, height);
        return true;
    }
    
    return false;
}

// Use a função
createCustomImage();
```
