/**
 * Бот для автоматизации рисования на wplace.live
 * Инструкции:
 * 1. Откройте сайт wplace.live в браузере
 * 2. Откройте консоль разработчика (F12 > Консоль)
 * 3. Вставьте этот скрипт и нажмите Enter
 * 4. Настройте изображение и начальную позицию
 * 5. Запустите бот
 */

class WPlaceBot {
    constructor() {
        this.isRunning = false;
        this.delay = 1000; // Задержка между кликами в мс
        this.currentPixel = 0;
        this.pixels = [];
        this.startX = 0;
        this.startY = 0;
        this.canvas = null;
        this.colorPalette = [];
        this.selectedColor = '#000000';
    }

    // Инициализирует бот
    init() {
        console.log('🎨 WPlace Bot инициализирован!');
        this.findCanvas();
        this.findColorPalette();
        this.createControlPanel();
    }

    // Находит холст wplace
    findCanvas() {
        // Поиск различных возможных селекторов холста
        const possibleSelectors = [
            'canvas',
            '#canvas',
            '.canvas',
            '[data-testid="canvas"]',
            'canvas[width]',
            'canvas[height]'
        ];

        for (const selector of possibleSelectors) {
            const element = document.querySelector(selector);
            if (element) {
                this.canvas = element;
                console.log('✅ Холст найден:', selector);
                return;
            }
        }

        console.error('❌ Холст не найден. Убедитесь, что вы находитесь на wplace.live');
    }

    // Находит палитру цветов
    findColorPalette() {
        // Поиск элементов, которые могут быть цветами
        const colorElements = document.querySelectorAll('[id^="color-"]');
        
        colorElements.forEach(element => {
            const bgColor = window.getComputedStyle(element).backgroundColor;
            if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)') {
                this.colorPalette.push({
                    element: element,
                    color: bgColor
                });
            }
        });

        console.log(`✅ Найдено ${this.colorPalette.length} цветов в палитре`);
    }

    // Конвертирует цвет RGB в HEX
    rgbToHex(rgb) {
        const result = rgb.match(/\d+/g);
        if (!result) return '#000000';
        
        const [r, g, b] = result.map(num => parseInt(num));
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    // Находит ближайший цвет в палитре
    findClosestColor(targetColor) {
        if (this.colorPalette.length === 0) return null;

        let closestColor = this.colorPalette[0];
        let minDistance = Infinity;

        // Конвертирует целевой цвет в RGB
        const target = this.hexToRgb(targetColor);
        if (!target) return closestColor;

        this.colorPalette.forEach(paletteColor => {
            const rgb = this.rgbStringToObject(paletteColor.color);
            if (rgb) {
                const distance = Math.sqrt(
                    Math.pow(target.r - rgb.r, 2) +
                    Math.pow(target.g - rgb.g, 2) +
                    Math.pow(target.b - rgb.b, 2)
                );

                if (distance < minDistance) {
                    minDistance = distance;
                    closestColor = paletteColor;
                }
            }
        });

        return closestColor;
    }

    // Конвертирует HEX в RGB
    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    // Конвертирует строку RGB в объект
    rgbStringToObject(rgb) {
        const result = rgb.match(/\d+/g);
        if (!result || result.length < 3) return null;
        
        return {
            r: parseInt(result[0]),
            g: parseInt(result[1]),
            b: parseInt(result[2])
        };
    }

    // Выбирает цвет в палитре
    selectColor(color) {
        const closestColor = this.findClosestColor(color);
        if (closestColor && closestColor.element) {
            closestColor.element.click();
            this.selectedColor = color;
            console.log(`🎨 Выбран цвет: ${color}`);
            return true;
        }
        return false;
    }

    // Кликает в определенной позиции на холсте
    clickCanvas(x, y) {
        if (!this.canvas) return false;

        const rect = this.canvas.getBoundingClientRect();
        const canvasX = x + rect.left;
        const canvasY = y + rect.top;

        // Создает события мыши
        const events = ['mousedown', 'mouseup', 'click'];
        
        events.forEach(eventType => {
            const event = new MouseEvent(eventType, {
                bubbles: true,
                cancelable: true,
                clientX: canvasX,
                clientY: canvasY,
                button: 0
            });
            this.canvas.dispatchEvent(event);
        });

        console.log(`🖱️ Клик по (${x}, ${y})`);
        return true;
    }

    // Загружает простое изображение (массив цветов)
    loadSimpleImage(imageData, width, height) {
        this.pixels = [];
        
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const index = y * width + x;
                if (index < imageData.length) {
                    this.pixels.push({
                        x: x,
                        y: y,
                        color: imageData[index]
                    });
                }
            }
        }

        console.log(`📷 Изображение загружено: ${width}x${height} пикселей (${this.pixels.length} пикселей)`);
    }

    // Пример простого изображения — маленькое сердце
    loadHeartImage() {
        const heart = [
            '⬜', '🟥', '🟥', '⬜', '🟥', '🟥', '⬜',
            '🟥', '🟥', '🟥', '🟥', '🟥', '🟥', '🟥',
            '🟥', '🟥', '🟥', '🟥', '🟥', '🟥', '🟥',
            '🟥', '🟥', '🟥', '🟥', '🟥', '🟥', '🟥',
            '⬜', '🟥', '🟥', '🟥', '🟥', '🟥', '⬜',
            '⬜', '⬜', '🟥', '🟥', '🟥', '⬜', '⬜',
            '⬜', '⬜', '⬜', '🟥', '⬜', '⬜', '⬜'
        ];

        const colorMap = {
            '🟥': '#FF0000',
            '⬜': '#FFFFFF'
        };

        const imageData = heart.map(emoji => colorMap[emoji] || '#FFFFFF');
        this.loadSimpleImage(imageData, 7, 7);
    }

    // Пример изображения — смайлик
    loadSmileyImage() {
        const smiley = [
            '⬜', '⬜', '🟨', '🟨', '🟨', '⬜', '⬜',
            '⬜', '🟨', '🟨', '🟨', '🟨', '🟨', '⬜',
            '🟨', '🟨', '⬛', '🟨', '⬛', '🟨', '🟨',
            '🟨', '🟨', '🟨', '🟨', '🟨', '🟨', '🟨',
            '🟨', '⬛', '🟨', '🟨', '🟨', '⬛', '🟨',
            '⬜', '🟨', '⬛', '⬛', '⬛', '🟨', '⬜',
            '⬜', '⬜', '🟨', '🟨', '🟨', '⬜', '⬜'
        ];

        const colorMap = {
            '🟨': '#FFFF00',
            '⬛': '#000000',
            '⬜': '#FFFFFF'
        };

        const imageData = smiley.map(emoji => colorMap[emoji] || '#FFFFFF');
        this.loadSimpleImage(imageData, 7, 7);
    }

    // Запускает бот
    async start() {
        if (this.isRunning) {
            console.log('⚠️ Бот уже запущен!');
            return;
        }

        if (this.pixels.length === 0) {
            console.log('⚠️ Сначала загрузите изображение!');
            return;
        }

        this.isRunning = true;
        this.currentPixel = 0;
        console.log('🚀 Бот запущен!');

        while (this.isRunning && this.currentPixel < this.pixels.length) {
            const pixel = this.pixels[this.currentPixel];
            const x = this.startX + pixel.x;
            const y = this.startY + pixel.y;

            // Выбирает цвет
            if (this.selectColor(pixel.color)) {
                // Ожидает, пока цвет будет выбран
                await this.sleep(200);
                
                // Кликает на холсте
                this.clickCanvas(x, y);
                
                console.log(`✅ Пиксель ${this.currentPixel + 1}/${this.pixels.length} размещен в (${x}, ${y})`);
            }

            this.currentPixel++;
            
            // Ожидает перед следующим пикселем
            await this.sleep(this.delay);
        }

        this.isRunning = false;
        console.log('✅ Бот завершил работу!');
    }

    // Останавливает бот
    stop() {
        this.isRunning = false;
        console.log('⏹️ Бот остановлен!');
    }

    // Функция задержки
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Устанавливает начальную позицию
    setStartPosition(x, y) {
        this.startX = x;
        this.startY = y;
        console.log(`📍 Начальная позиция установлена: (${x}, ${y})`);
    }

    // Устанавливает задержку между кликами
    setDelay(ms) {
        this.delay = ms;
        console.log(`⏱️ Задержка установлена: ${ms}мс`);
    }

    // Загружает изображение из данных пикселей
    loadImageFromData(pixelData, name = 'Пользовательское изображение') {
        if (!Array.isArray(pixelData)) {
            console.error('❌ Данные изображения должны быть массивом объектов {x, y, color}');
            return false;
        }

        // Проверяет формат данных
        const isValidData = pixelData.every(pixel => 
            typeof pixel === 'object' && 
            typeof pixel.x === 'number' && 
            typeof pixel.y === 'number' && 
            typeof pixel.color === 'string'
        );

        if (!isValidData) {
            console.error('❌ Неверный формат. Каждый пиксель должен иметь {x, y, color}');
            return false;
        }

        this.pixels = pixelData.slice(); // Копия данных
        console.log(`✅ ${name} загружено: ${pixelData.length} пикселей`);
        
        // Вычисляет размеры изображения
        const maxX = Math.max(...pixelData.map(p => p.x));
        const maxY = Math.max(...pixelData.map(p => p.y));
        console.log(`📐 Размеры: ${maxX + 1}x${maxY + 1} пикселей`);
        
        // Подсчитывает уникальные цвета
        const uniqueColors = [...new Set(pixelData.map(p => p.color))];
        console.log(`🎨 Уникальных цветов: ${uniqueColors.length}`);

        return true;
    }

    // Загружает изображение из URL данных (data URL)
    async loadImageFromUrl(imageUrl, maxWidth = 50, maxHeight = 50) {
        try {
            console.log('🔄 Загрузка изображения из URL...');
            
            const img = new Image();
            img.crossOrigin = 'anonymous';
            
            return new Promise((resolve, reject) => {
                img.onload = () => {
                    try {
                        const pixelData = this.processImageToPixels(img, maxWidth, maxHeight);
                        this.loadImageFromData(pixelData, 'Изображение из URL');
                        resolve(true);
                    } catch (error) {
                        reject(error);
                    }
                };
                
                img.onerror = () => {
                    reject(new Error('Ошибка при загрузке изображения из URL'));
                };
                
                img.src = imageUrl;
            });
        } catch (error) {
            console.error('❌ Ошибка при загрузке изображения:', error);
            return false;
        }
    }

    // Обрабатывает HTML-изображение в данные пикселей
    processImageToPixels(img, maxWidth, maxHeight) {
        // Вычисляет размеры с сохранением пропорций
        const scale = Math.min(maxWidth / img.width, maxHeight / img.height);
        const width = Math.floor(img.width * scale);
        const height = Math.floor(img.height * scale);

        // Создает временный холст
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;

        // Рисует масштабированное изображение
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0, width, height);

        // Получает данные пикселей
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        const pixels = [];
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const index = (y * width + x) * 4;
                const r = data[index];
                const g = data[index + 1];
                const b = data[index + 2];
                const a = data[index + 3];

                // Игнорирует прозрачные пиксели
                if (a < 128) continue;

                const color = '#' + [r, g, b].map(x => {
                    const hex = x.toString(16);
                    return hex.length === 1 ? '0' + hex : hex;
                }).join('');

                pixels.push({ x, y, color });
            }
        }

        return pixels;
    }

    // Создает панель управления
    createControlPanel() {
        // Удаляет предыдущую панель, если она существует
        const existingPanel = document.getElementById('wplace-bot-panel');
        if (existingPanel) {
            existingPanel.remove();
        }

        const panel = document.createElement('div');
        panel.id = 'wplace-bot-panel';
        panel.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: #2c2c2c;
            color: white;
            padding: 15px;
            border-radius: 8px;
            font-family: Arial, sans-serif;
            font-size: 12px;
            z-index: 10000;
            width: 250px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        `;

        panel.innerHTML = `
            <h3 style="margin: 0 0 10px 0; color: #4CAF50;">🎨 WPlace Bot</h3>
            <div style="margin-bottom: 10px;">
                <label>Позиция X: <input type="number" id="startX" value="100" style="width: 60px;"></label>
                <label>Позиция Y: <input type="number" id="startY" value="100" style="width: 60px;"></label>
            </div>
            <div style="margin-bottom: 10px;">
                <label>Задержка (мс): <input type="number" id="delay" value="1000" style="width: 80px;"></label>
            </div>
            <div style="margin-bottom: 10px;">
                <button id="loadHeart" style="margin-right: 5px; margin-bottom: 5px;">❤️ Сердце</button>
                <button id="loadSmiley" style="margin-bottom: 5px;">😊 Смайлик</button>
            </div>
            <div style="margin-bottom: 10px;">
                <input type="file" id="imageInput" accept="image/*" style="display: none;">
                <button id="loadCustom" style="background: #FF9800; color: white; border: none; padding: 6px 10px; border-radius: 4px; margin-right: 5px; margin-bottom: 5px; font-size: 11px;">📁 Загрузить изображение</button>
                <button id="openConverter" style="background: #9C27B0; color: white; border: none; padding: 6px 10px; border-radius: 4px; margin-right: 5px; margin-bottom: 5px; font-size: 11px;">🔧 Конвертер</button>
                <button id="openEditor" style="background: #E91E63; color: white; border: none; padding: 6px 10px; border-radius: 4px; margin-bottom: 5px; font-size: 11px;">🎨 Редактор</button>
            </div>
            <div style="margin-bottom: 10px;">
                <button id="startBot" style="background: #4CAF50; color: white; border: none; padding: 8px 12px; border-radius: 4px; margin-right: 5px;">▶️ Запустить</button>
                <button id="stopBot" style="background: #f44336; color: white; border: none; padding: 8px 12px; border-radius: 4px;">⏹️ Остановить</button>
            </div>
            <div id="status" style="font-size: 11px; color: #ccc;">
                Статус: Готово
            </div>
        `;

        document.body.appendChild(panel);

        // Обработчики событий
        document.getElementById('startX').addEventListener('input', (e) => {
            this.setStartPosition(parseInt(e.target.value) || 0, this.startY);
        });

        document.getElementById('startY').addEventListener('input', (e) => {
            this.setStartPosition(this.startX, parseInt(e.target.value) || 0);
        });

        document.getElementById('delay').addEventListener('input', (e) => {
            this.setDelay(parseInt(e.target.value) || 1000);
        });

        document.getElementById('loadHeart').addEventListener('click', () => {
            this.loadHeartImage();
            document.getElementById('status').textContent = 'Статус: Сердце загружено';
        });

        document.getElementById('loadSmiley').addEventListener('click', () => {
            this.loadSmileyImage();
            document.getElementById('status').textContent = 'Статус: Смайлик загружен';
        });

        document.getElementById('startBot').addEventListener('click', () => {
            this.start();
            document.getElementById('status').textContent = 'Статус: Выполняется...';
        });

        document.getElementById('stopBot').addEventListener('click', () => {
            this.stop();
            document.getElementById('status').textContent = 'Статус: Остановлен';
        });

        document.getElementById('loadCustom').addEventListener('click', () => {
            document.getElementById('imageInput').click();
        });

        document.getElementById('imageInput').addEventListener('change', async (e) => {
            if (e.target.files.length > 0) {
                const file = e.target.files[0];
                try {
                    document.getElementById('status').textContent = 'Статус: Загрузка изображения...';
                    
                    const reader = new FileReader();
                    reader.onload = async (event) => {
                        try {
                            await this.loadImageFromUrl(event.target.result, 50, 50);
                            document.getElementById('status').textContent = 'Статус: Изображение загружено!';
                        } catch (error) {
                            console.error('Ошибка при обработке изображения:', error);
                            document.getElementById('status').textContent = 'Статус: Ошибка при загрузке изображения';
                        }
                    };
                    reader.readAsDataURL(file);
                } catch (error) {
                    console.error('Ошибка при чтении файла:', error);
                    document.getElementById('status').textContent = 'Статус: Ошибка при чтении файла';
                }
            }
        });

        document.getElementById('openConverter').addEventListener('click', () => {
            const converterPath = window.location.origin + window.location.pathname.replace(/[^/]*$/, '') + 'image-converter.html';
            window.open(converterPath, '_blank');
        });

        document.getElementById('openEditor').addEventListener('click', () => {
            const editorPath = window.location.origin + window.location.pathname.replace(/[^/]*$/, '') + 'pixel-editor.html';
            window.open(editorPath, '_blank');
        });
    }
}

// Инициализирует бот
const wplaceBot = new WPlaceBot();
wplaceBot.init();

// Доступные команды в консоли:
console.log(`
🎨 WPlace Bot загружен! 

Доступные команды:
- wplaceBot.setStartPosition(x, y) - Устанавливает начальную позицию
- wplaceBot.setDelay(ms) - Устанавливает задержку между кликами  
- wplaceBot.loadHeartImage() - Загружает изображение сердца
- wplaceBot.loadSmileyImage() - Загружает изображение смайлика
- wplaceBot.loadImageFromData(pixelData, name) - Загружает изображение из данных
- wplaceBot.loadImageFromUrl(url, maxWidth, maxHeight) - Загружает изображение из URL
- wplaceBot.start() - Запускает бот
- wplaceBot.stop() - Останавливает бот

🔧 Конвертер изображений:
Используйте панель управления или откройте image-converter.html для конвертации собственных изображений!

Или используйте панель управления в правом верхнем углу!
`);
