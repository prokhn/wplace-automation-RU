# 🖼️ Примеры пользовательских изображений

Этот файл содержит примеры использования преобразованных изображений в WPlace Bot, а также методы для создания собственных изображений.

## 🎨 Методы создания изображений

### 1. 🆕 Автоматический веб-конвертер (рекомендуется)
- Откройте `image-converter.html` в браузере
- Перетащите или выберите изображение (PNG, JPG, GIF)
- Настройте максимальный размер и режим цвета
- Просмотрите результат в реальном времени
- Сгенерируйте готовый скрипт
- Скопируйте и вставьте в консоль wplace.live

### 2. 📁 Прямая загрузка через панель
- Используйте кнопку "📁 Загрузить изображение" в панели бота
- Выберите изображение
- Оно будет автоматически масштабировано и загружено

### 3. Ручной метод (для простого пиксельного искусства)

```javascript
// Пример: Крест 5x5
const cross = [
    '#FFFFFF', '#FFFFFF', '#FF0000', '#FFFFFF', '#FFFFFF',
    '#FFFFFF', '#FFFFFF', '#FF0000', '#FFFFFF', '#FFFFFF', 
    '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000',
    '#FFFFFF', '#FFFFFF', '#FF0000', '#FFFFFF', '#FFFFFF',
    '#FFFFFF', '#FFFFFF', '#FF0000', '#FFFFFF', '#FFFFFF'
];

wplaceBot.loadSimpleImage(cross, 5, 5);
```

### 2. Метод с эмодзи (визуальный)

```javascript
// Пример: Квадрат с X
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

### 3. Метод с многострочной строкой

```javascript
// Пример: Стрелка вверх
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

## 🔧 Вспомогательные инструменты

### Функция для создания прямоугольника

```javascript
function createRectangle(width, height, color, borderColor = null) {
    const pixels = [];
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            // Если есть рамка и мы на границе
            if (borderColor && (x === 0 || x === width-1 || y === 0 || y === height-1)) {
                pixels.push(borderColor);
            } else {
                pixels.push(color);
            }
        }
    }
    
    return pixels;
}

// Использование:
const rect = createRectangle(8, 6, '#FF0000', '#000000');
wplaceBot.loadSimpleImage(rect, 8, 6);
```

### Функция для создания круга

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

// Использование:
const circle = createCircle(4, '#00FF00');
wplaceBot.loadSimpleImage(circle, 9, 9);
```

### Функция для простого текста

```javascript
function createText(text, color = '#000000', bgColor = '#FFFFFF') {
    // Простой шрифт 3x5
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
        // Добавьте больше букв по необходимости
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
            // Пространство между буквами
            pixels.push(bgColor);
        }
    }
    
    const width = letters.length * 4 - 1; // 3 + 1 пробел, минус последний пробел
    return { pixels, width, height: 5 };
}

// Использование:
const textData = createText('ABC', '#FF0000');
wplaceBot.loadSimpleImage(textData.pixels, textData.width, textData.height);
```

## 🎯 Готовые примеры

### Покебол (8x8)

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

### Флаг Бразилии (9x6)

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

### Пакман (7x7)

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

## 🛠️ Продвинутые советы

### 1. Конвертация реального изображения в пиксельное искусство

```javascript
// Используйте эту функцию для преобразования изображения в массив цветов
// (сначала нужно загрузить изображение на канвас)
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

### 2. Общая палитра цветов

```javascript
const commonColors = {
    'черный': '#000000',
    'белый': '#FFFFFF',
    'красный': '#FF0000',
    'зеленый': '#00FF00',
    'синий': '#0000FF',
    'желтый': '#FFFF00',
    'пурпурный': '#FF00FF',
    'голубой': '#00FFFF',
    'оранжевый': '#FFA500',
    'фиолетовый': '#800080',
    'розовый': '#FFC0CB',
    'серый': '#808080',
    'коричневый': '#8B4513',
    'лаймовый': '#32CD32',
    'темно-синий': '#000080'
};
```

### 3. Проверка изображения перед использованием

```javascript
function validateImage(pixels, width, height) {
    if (pixels.length !== width * height) {
        console.error(`❌ Ошибка: ожидалось ${width * height} пикселей, найдено ${pixels.length}`);
        return false;
    }
    
    // Проверка валидности всех цветов
    const invalidColors = pixels.filter(color => !/^#[0-9A-F]{6}$/i.test(color));
    if (invalidColors.length > 0) {
        console.error(`❌ Обнаружены некорректные цвета:`, invalidColors);
        return false;
    }
    
    console.log(`✅ Изображение валидно: ${width}x${height}`);
    return true;
}

// Использование:
if (validateImage(myPixels, 8, 8)) {
    wplaceBot.loadSimpleImage(myPixels, 8, 8);
}
```

## 📝 Базовый шаблон

```javascript
// Шаблон для создания собственных изображений
function createCustomImage() {
    // 1. Определите ваш дизайн (используйте эмодзи для лучшей визуализации)
    const design = [
        '⬜', '⬜', '⬜',
        '⬜', '🟦', '⬜',
        '⬜', '⬜', '⬜'
    ];
    
    // 2. Определите цвета
    const colorMap = {
        '⬜': '#FFFFFF',
        '🟦': '#0000FF'
    };
    
    // 3. Преобразуйте в массив цветов
    const pixels = design.map(emoji => colorMap[emoji] || '#FFFFFF');
    
    // 4. Определите размеры
    const width = 3;
    const height = 3;
    
    // 5. Проверьте и загрузите
    if (validateImage(pixels, width, height)) {
        wplaceBot.loadSimpleImage(pixels, width, height);
        return true;
    }
    
    return false;
}

// Используйте функцию
createCustomImage();
```
