const container = document.querySelector('.container');
const containerBody = document.querySelector('.container__body');

function updateMargin() {
  const containerHeight = container.offsetHeight;
  containerBody.style.marginTop = `${containerHeight + 10}px`;
}

// Вызываем при загрузке и при изменении размера окна
window.addEventListener('load', updateMargin);
window.addEventListener('resize', updateMargin);

const card_working = [
        ["Вид деятельности", "Действия оператора", "Инструменты / Интерфейс", "Когнитивная нагрузка", "Типичные ошибки", "Требования к дизайну"],
        ["Запуск двигателя", "Установка селектора START, перевод Fuel Control в RUN", "Рычаг стартера, переключатель топлива, индикаторы N2, EGT", "Средняя (следование процедуре)", "Подача топлива до 20% N2 → горячий старт", "Автоблокировка «горячего старта» FADEC"],
        ["Контроль параметров", "Мониторинг N1, N2, EGT, FF, вибраций", "Экраны EICAS, указатели", "Высокая (сканирование 5-7 параметров)", "Пропуск превышения EGT", "Цветовая маркировка (зеленый/желтый/красный), тренды"],
        ["Режим TOGA (взлёт)", "Установка РУД в положение TOGA", "Рычаги управления двигателем (РУД), кнопка TO/GA", "Низкая (автоматика)", "—", "Тактильная засечка на РУД, подсветка"],
        ["Переход CLB/CRZ", "Нажатие CLB/CON или уборка закрылков", "Кнопка на РУД, FMC", "Низкая", "Задержка перехода → перерасход топлива", "Автоматический переход по высоте"],
        ["Реакция на отказ", "Опознание аварийного режима (Alternate)", "Сообщение EICAS, сигнализация", "Экстремально высокая", "Неправильная идентификация режима", "Четкое текстовое оповещение + звук"],
        ["Наземное обслуживание", "Подключение GPU/проверка APU; осмотр лопаток вентилятора", "Внешняя панель, стремянка", "Средняя (физическая + чек-лист)", "Повреждение композитных лопастей", "Просторный капот, нескользящие площадки"]
    ];

    // 6. Функциональный анализ
    const functionalData = [
        ["Функция", "Реализована?", "Эргономика", "Интерфейс", "Недостаток / Предложение по улучшению"],
        ["Запуск в одно действие", "Да (Auto‑Start)", "Отлично", "Один переключатель", "—"],
        ["Предотвращение Hot Start", "Да (FADEC)", "Отлично", "Автоматическое", "—"],
        ["Контроль EGT", "Да, цифровой", "Хорошо", "Полоса + цифры", "Нет предупреждения тренда (рекомендуется добавить линейку ускорения роста EGT)"],
        ["Переход TOGA→CLB", "Автоматический", "Средне", "Нет индикации перехода", "Добавить светодиодный индикатор «CLB ACTIVE» на РУД"],
        ["Аварийный режим Alternate", "Да", "Плохо", "Сообщение EICAS", "Добавить тактильное сопровождение (вибрация РУД)"],
        ["Наземный осмотр вентилятора", "Физический доступ", "Удовлетворительно", "Отсутствует", "Добавить встроенную LED‑подсветку в разъёме сплиттера"]
    ];

    // 7. Дизайнерские решения
    const designSolutionsData = [
        ["Зона", "Существующее решение", "Новое дизайн‑решение"],
        ["Кабина пилотов – РУД", "Стандартные рычаги, кнопка TOGA", "Интеграция OLED‑дисплея на рукоятку: отображение текущего режима (TOGA/CLB/CRZ/IDLE), ограничений N1 и EGT margin"],
        ["Панель FADEC", "Текст на экране EICAS", "Цветовая динамическая подсветка обода РУД: синий (Idle), зелёный (CLB), красный (TOGA), жёлтый (Alternate)"],
        ["Моторный отсек (обслуживание)", "Открытый капот, титан/композиты", "Нанесение QR‑кодов на каждую лопатку вентилятора для мгновенного доступа к истории вибраций"],
        ["Пульт наземного запуска", "Механические кнопки, манометр", "Сенсорный планшет с защитой IP67 + схема двигателя в реальном времени"],
        ["Контейнер двигателя (nacelle)", "Прямые линии, серый цвет", "Эргономичная зона захвата (утопленные поручни) + контрастная жёлтая маркировка опасных зон"]
    ];

    // 8. Предпроектный анализ (целевая аудитория)
    const audienceData = [
        ["Пользователь", "Потребность", "Сценарий", "Ключевой критерий дизайна"],
        ["Пилот авиакомпании", "Минимум отвлечения внимания", "Взлёт в сложных метеоусловиях", "Автоматика + чёткая индикация режима"],
        ["Бортинженер (старые 777)", "Контроль резервирования", "Отказ канала EEC A", "Отображение статуса каналов (A/B) одним взглядом"],
        ["Авиатехник", "Быстрый доступ, безопасность", "Осмотр композитных лопастей после птицеудара", "Физический доступ шаговой доступности + подсветка"],
        ["Проектировщик FADEC", "Сбор полётных данных", "Чтение трендов EGT за 1000 циклов", "USB‑порт с защитной заглушкой и логотипом"],
        ["Менеджер по топливной эффективности", "Оптимизация расхода топлива", "Анализ CLB‑режима", "Графический интерфейс с прогнозом экономии"]
    ];

    // 10. Анализ формы, масштаба, материалов, сборки
    const optimizationData = [
        ["Параметр", "Существующее (GE90‑115B)", "Оптимизация (дизайн‑проект)"],
        ["Форма", "Круглый воздухозаборник, цилиндрический корпус, сопло", "Лёгкое сужение в зоне турбины (уменьшение лобового сопротивления на 2 %)"],
        ["Масштаб", "Диаметр 3.4 м, длина 7.3 м", "Без изменений (сохранение креплений к крылу)"],
        ["Принцип сборки", "Модульный (вентилятор, компрессор, турбина — отдельные секции)", "Внедрение быстрого замка V‑band между модулями — сокращение времени замены с 8 до 3 часов"],
        ["Материалы", "Титановые сплавы, Inconel 718, CMC, углеродное волокно", "Замена Inconel в малонагруженных креплениях на аддитивный титан (3D‑печать) — снижение веса на 12 %"],
        ["Технология изготовления", "Литьё монокристаллических лопаток, препреги, механическая обработка", "Аддитивное производство рабочих колёс компрессора низкого давления — интеграция 3 деталей в 1"],
        ["Оптимизация (дизайн для обслуживания)", "Осмотр лопаток через боинговский стандартный капот", "Откидной капот на газовых упорах + встроенный LED‑светильник с датчиком движения"]
    ];

    // 11. Таблица сравнения режимов FADEC
    const fadecModesData = [
        ["Режим", "Тяга, % от TOGA", "EGT, °C", "N1, %", "Использование"],
        ["TOGA", "100 %", "до 1050 °C (лимит)", "до 110.5 %", "Взлёт, уход на 2 круг"],
        ["CLB", "80–85 %", "950–1000", "95–100", "Набор высоты"],
        ["CRZ", "~60 %", "750–850", "60–70", "Крейсер"],
        ["IDLE", "3–5 %", "<500", "20–25", "Земля, руление"]
    ];

    // универсальная функция рендера таблицы
    function renderTable(containerId, dataArray) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container #${containerId} not found`);
            return;
        }
        if (!dataArray || dataArray.length === 0) return;

        let html = '<table class="data-table">';
        // заголовки
        html += '<thead><tr>';
        for (let header of dataArray[0]) {
            html += `<th>${header}</th>`;
        }
        html += '</tr class="table-row"></thead class="table-header"><tbody>';
        // строки данных
        for (let i = 1; i < dataArray.length; i++) {
            html += '<tr>';
            for (let cell of dataArray[i]) {
                html += `<td class="table-cell">${cell}</td>`;
            }
            html += '</tr>';
        }
        html += '</tbody></table>';
        container.innerHTML = html;
    }

    // вызов рендера всех таблиц
    renderTable('work-activity-table', card_working);
    renderTable('functional-table', functionalData);
    renderTable('design-solutions-table', designSolutionsData);
    renderTable('audience-table', audienceData);
    renderTable('optimization-table', optimizationData);
    renderTable('fadec-modes-table', fadecModesData);

    // Дополнительно: небольшие улучшения визуализации для отдельных ячеек (доп. интерактив не требуется)
    // Можно добавить стилизацию для выводов в info-block, но всё уже гармонично.
// --------------------------------------------------------------
    // 1. Построение графика (Canvas)
    // --------------------------------------------------------------
    const canvas = document.getElementById('startChart');
    const ctx = canvas.getContext('2d');

    // Размеры canvas (физические, для расчётов)
    const width = 700;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    // Опорные точки графика: время (сек) -> N2 (%)
    // Моторинг: линейно от (0,0) до (20,20)
    // Подача топлива + разгон: от (20,20) до (55,55) почти линейно, но с небольшим изгибом (ускорение)
    // Выход на Idle: от (55,55) до (62,65) экспоненциальное насыщение
    function computeN2(t) {
        if (t <= 0) return 0;
        if (t <= 20) {
            // моторинг
            return (20 / 20) * t;
        } else if (t <= 55) {
            // активный разгон (плавная кривая, чуть выше прямой для реализма)
            let ratio = (t - 20) / 35; // 0..1
            // S-образный для большей реалистичности: легкая выпуклость
            let smooth = Math.pow(ratio, 1.2);
            return 20 + smooth * 35;
        } else {
            // выход на холостой ход 65% (Idle range 60-70, берём 65)
            let idleVal = 65;
            let remaining = idleVal - 55;
            let tau = (t - 55) / 8; // постоянная времени
            let growth = remaining * (1 - Math.exp(-Math.min(tau, 3)));
            return Math.min(55 + growth, idleVal);
        }
    }

    // Рисование сетки и осей
    function drawGridAndAxes() {
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = "#ccc";
        ctx.lineWidth = 0.5;
        ctx.fillStyle = "#1e2a3a";
        ctx.font = "12px 'Segoe UI'";

        // вертикальные линии (время)
        for (let t = 0; t <= 70; t += 10) {
            let x = 60 + (t / 70) * (width - 120);
            ctx.beginPath();
            ctx.moveTo(x, 40);
            ctx.lineTo(x, height - 40);
            ctx.stroke();
            ctx.fillText(t + "s", x - 10, height - 20);
        }
        // горизонтальные линии (N2 %)
        for (let n2 = 0; n2 <= 100; n2 += 10) {
            let y = height - 40 - (n2 / 100) * (height - 80);
            ctx.beginPath();
            ctx.moveTo(60, y);
            ctx.lineTo(width - 60, y);
            ctx.stroke();
            ctx.fillText(n2 + "%", 25, y + 4);
        }

        // Стрелки и подписи осей
        ctx.beginPath();
        ctx.moveTo(60, height - 40);
        ctx.lineTo(width - 60, height - 40);
        ctx.lineTo(width - 65, height - 45);
        ctx.moveTo(width - 60, height - 40);
        ctx.lineTo(width - 65, height - 35);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(60, height - 40);
        ctx.lineTo(60, 40);
        ctx.lineTo(55, 45);
        ctx.moveTo(60, 40);
        ctx.lineTo(65, 45);
        ctx.stroke();

        ctx.fillStyle = "#2d3748";
        ctx.fillText("Время, с", width - 70, height - 15);
        ctx.save();
        ctx.translate(25, height/2);
        ctx.rotate(-Math.PI/2);
        ctx.fillText("N2, %", -10, 0);
        ctx.restore();
    }

    // Рисование кривой N2(t)
    function drawCurve() {
        ctx.beginPath();
        ctx.strokeStyle = "#2c5282";
        ctx.lineWidth = 3;
        let first = true;
        for (let xPx = 60; xPx <= width - 60; xPx++) {
            let t = ((xPx - 60) / (width - 120)) * 70;
            let n2 = computeN2(t);
            let y = height - 40 - (n2 / 100) * (height - 80);
            if (first) {
                ctx.moveTo(xPx, y);
                first = false;
            } else {
                ctx.lineTo(xPx, y);
            }
        }
        ctx.stroke();
    }

    // отметки пороговых линий: 20% (подача топлива) и 55% (отключение стартера)
    function drawThresholds() {
        const y20 = height - 40 - (20 / 100) * (height - 80);
        const y55 = height - 40 - (55 / 100) * (height - 80);
        ctx.beginPath();
        ctx.setLineDash([6, 8]);
        ctx.strokeStyle = "#e67e22";
        ctx.lineWidth = 2;
        ctx.moveTo(60, y20);
        ctx.lineTo(width - 60, y20);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "#ecc94b";
        ctx.moveTo(60, y55);
        ctx.lineTo(width - 60, y55);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "#e67e22";
        ctx.font = "12px 'Segoe UI'";
        ctx.fillText("Подача топлива (20% N2)", width-190, y20-5);
        ctx.fillStyle = "#ecc94b";
        ctx.fillText("Стартер отключён (55% N2)", width-200, y55-5);
    }

    function renderGraph() {
        drawGridAndAxes();
        drawCurve();
        drawThresholds();
        // дополнительная отметка Idle зоны
        const yIdle = height - 40 - (65 / 100) * (height - 80);
        ctx.beginPath();
        ctx.strokeStyle = "#2d6a4f";
        ctx.setLineDash([4, 6]);
        ctx.moveTo(60, yIdle);
        ctx.lineTo(width - 60, yIdle);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "#2d6a4f";
        ctx.fillText("Idle (65%)", width-90, yIdle-4);
    }

    renderGraph();

    