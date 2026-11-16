const routineExercises = [
    { id: 'chest-barbell-bench', name: 'Press de banca con barra', muscle: 'Pecho' },
    { id: 'chest-incline-press', name: 'Press de pecho inclinado', muscle: 'Pecho' },
    { id: 'chest-dumbbell-fly', name: 'Aperturas con mancuernas', muscle: 'Pecho' },
    { id: 'chest-push-ups', name: 'Flexiones (push-ups)', muscle: 'Pecho' },
    { id: 'chest-smith-press', name: 'Press en máquina Smith', muscle: 'Pecho' },
    { id: 'chest-cable-fly', name: 'Aperturas en polea', muscle: 'Pecho' },
    { id: 'chest-dumbbell-bench', name: 'Press de banca con mancuernas', muscle: 'Pecho' },
    { id: 'chest-decline-barbell-press', name: 'Press declinado con barra', muscle: 'Pecho' },
    { id: 'chest-incline-dumbbell-fly', name: 'Aperturas inclinadas con mancuernas', muscle: 'Pecho' },
    { id: 'chest-machine-press', name: 'Press de pecho en máquina', muscle: 'Pecho' },
    { id: 'chest-incline-push-ups', name: 'Flexiones inclinadas', muscle: 'Pecho' },
    { id: 'chest-decline-push-ups', name: 'Flexiones declinadas', muscle: 'Pecho' },
    { id: 'back-barbell-row', name: 'Remo con barra', muscle: 'Espalda' },
    { id: 'back-pull-ups', name: 'Dominadas (pull-ups)', muscle: 'Espalda' },
    { id: 'back-lat-pulldown', name: 'Jalones laterales (lat pulldown)', muscle: 'Espalda' },
    { id: 'back-machine-row', name: 'Remo en máquina', muscle: 'Espalda' },
    { id: 'back-one-arm-row', name: 'Remo con mancuerna unilateral', muscle: 'Espalda' },
    { id: 'back-extensions', name: 'Extensiones de espalda (back extensions)', muscle: 'Espalda' },
    { id: 'back-low-cable-row', name: 'Remo sentado en polea baja', muscle: 'Espalda' },
    { id: 'back-t-bar-row', name: 'Remo en T con barra', muscle: 'Espalda' },
    { id: 'back-close-grip-pulldown', name: 'Jalón al pecho con agarre estrecho', muscle: 'Espalda' },
    { id: 'back-cable-pullover', name: 'Pullover en polea alta', muscle: 'Espalda' },
    { id: 'back-chest-supported-row', name: 'Remo con pecho apoyado', muscle: 'Espalda' },
    { id: 'back-good-mornings', name: 'Buenos días con barra', muscle: 'Espalda' },
    { id: 'legs-squat', name: 'Sentadillas (squat)', muscle: 'Piernas' },
    { id: 'legs-press', name: 'Prensa de piernas', muscle: 'Piernas' },
    { id: 'legs-deadlift', name: 'Peso muerto (deadlift)', muscle: 'Piernas' },
    { id: 'legs-quad-extension', name: 'Extensiones de cuádriceps', muscle: 'Piernas' },
    { id: 'legs-leg-curl', name: 'Flexiones de isquiotibiales (leg curl)', muscle: 'Piernas' },
    { id: 'legs-lunges', name: 'Estocadas (lunges)', muscle: 'Piernas' },
    { id: 'legs-bulgarian-split-squat', name: 'Sentadilla búlgara', muscle: 'Piernas' },
    { id: 'legs-goblet-squat', name: 'Sentadilla goblet', muscle: 'Piernas' },
    { id: 'legs-hip-thrust', name: 'Hip thrust', muscle: 'Piernas' },
    { id: 'legs-romanian-deadlift', name: 'Peso muerto rumano', muscle: 'Piernas' },
    { id: 'legs-standing-calf-raise', name: 'Elevación de talones de pie', muscle: 'Piernas' },
    { id: 'legs-step-ups', name: 'Subidas al banco (step-ups)', muscle: 'Piernas' },
    { id: 'arms-dumbbell-curl', name: 'Curl de bíceps con mancuernas', muscle: 'Brazos' },
    { id: 'arms-dips', name: 'Fondos en barras paralelas (triceps dips)', muscle: 'Brazos' },
    { id: 'arms-tricep-extension', name: 'Extensión de tríceps con mancuerna', muscle: 'Brazos' },
    { id: 'arms-hammer-curl', name: 'Curl martillo con mancuernas', muscle: 'Brazos' },
    { id: 'arms-incline-curl', name: 'Curl de bíceps en banco inclinado', muscle: 'Brazos' },
    { id: 'arms-cable-tricep', name: 'Poleas cruzadas para tríceps', muscle: 'Brazos' },
    { id: 'arms-preacher-curl', name: 'Curl predicador con barra Z', muscle: 'Brazos' },
    { id: 'arms-concentration-curl', name: 'Curl concentrado con mancuerna', muscle: 'Brazos' },
    { id: 'arms-low-cable-curl', name: 'Curl de bíceps en polea baja', muscle: 'Brazos' },
    { id: 'arms-rope-pushdown', name: 'Extensión de tríceps en polea con cuerda', muscle: 'Brazos' },
    { id: 'arms-ez-bar-skullcrusher', name: 'Press francés con barra Z', muscle: 'Brazos' },
    { id: 'arms-close-grip-bench', name: 'Press de banca con agarre cerrado', muscle: 'Brazos' }
];

const routineDays = [
    { id: 'lunes', label: 'Lunes' },
    { id: 'martes', label: 'Martes' },
    { id: 'miercoles', label: 'Miércoles' },
    { id: 'jueves', label: 'Jueves' },
    { id: 'viernes', label: 'Viernes' },
    { id: 'sabado', label: 'Sábado' },
    { id: 'domingo', label: 'Domingo' }
];

const routineStorageKey = 'rutigym-rutina-personal-v1';
const routineExerciseById = new Map(routineExercises.map(exercise => [exercise.id, exercise]));
const routineDayById = new Map(routineDays.map(day => [day.id, day]));
const routineWeekElement = document.querySelector('#routine-week');
const routineCatalogElement = document.querySelector('#routine-catalog');
const routineMuscleFilter = document.querySelector('#routine-muscle-filter');
const routineSearch = document.querySelector('#routine-search');
const routineExerciseCount = document.querySelector('#routine-exercise-count');
const routineSelectedDay = document.querySelector('#routine-selected-day');
const routineEmpty = document.querySelector('#routine-empty');
const routineStatus = document.querySelector('#routine-status');
const routine = loadRoutine();
let selectedRoutineDay = routineDays[0].id;

function normalizeRoutineText(value) {
    return value.trim().toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function loadRoutine() {
    try {
        const savedRoutine = JSON.parse(localStorage.getItem(routineStorageKey) || '{}');
        return Object.fromEntries(routineDays.map(day => {
            const savedExercises = Array.isArray(savedRoutine[day.id]) ? savedRoutine[day.id] : [];
            const validExercises = [...new Set(savedExercises)].filter(exerciseId => routineExerciseById.has(exerciseId));
            return [day.id, validExercises];
        }));
    } catch {
        return Object.fromEntries(routineDays.map(day => [day.id, []]));
    }
}

function saveRoutine() {
    try {
        localStorage.setItem(routineStorageKey, JSON.stringify(routine));
        return true;
    } catch {
        return false;
    }
}

function setRoutineStatus(message) {
    routineStatus.textContent = message;
}

function renderRoutineWeek() {
    routineWeekElement.replaceChildren();

    routineDays.forEach(day => {
        const dayExercises = routine[day.id];
        const dayCard = document.createElement('article');
        dayCard.className = 'personal-routine__day';
        if (day.id === selectedRoutineDay) {
            dayCard.classList.add('personal-routine__day--selected');
        }

        const selectDayButton = document.createElement('button');
        selectDayButton.type = 'button';
        selectDayButton.className = 'personal-routine__day-select';
        selectDayButton.dataset.day = day.id;
        selectDayButton.setAttribute('aria-pressed', String(day.id === selectedRoutineDay));
        selectDayButton.setAttribute('aria-label', `Seleccionar ${day.label}, ${dayExercises.length} ejercicios`);

        const dayLabel = document.createElement('span');
        dayLabel.textContent = day.label;
        const dayCount = document.createElement('span');
        dayCount.className = 'personal-routine__day-count';
        dayCount.textContent = String(dayExercises.length);
        selectDayButton.append(dayLabel, dayCount);

        const exerciseList = document.createElement('ul');
        exerciseList.className = 'personal-routine__day-list';
        dayExercises.forEach(exerciseId => {
            const exercise = routineExerciseById.get(exerciseId);
            const exerciseItem = document.createElement('li');
            exerciseItem.className = 'personal-routine__day-item';

            const exerciseName = document.createElement('span');
            exerciseName.textContent = exercise.name;
            const removeButton = document.createElement('button');
            removeButton.type = 'button';
            removeButton.className = 'personal-routine__remove';
            removeButton.dataset.action = 'remove';
            removeButton.dataset.day = day.id;
            removeButton.dataset.exerciseId = exerciseId;
            removeButton.setAttribute('aria-label', `Quitar ${exercise.name} del ${day.label}`);
            removeButton.title = `Quitar ${exercise.name}`;
            removeButton.textContent = '×';

            exerciseItem.append(exerciseName, removeButton);
            exerciseList.appendChild(exerciseItem);
        });

        if (dayExercises.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.className = 'personal-routine__day-empty';
            emptyMessage.textContent = 'Sin ejercicios';
            dayCard.append(selectDayButton, emptyMessage);
        } else {
            dayCard.append(selectDayButton, exerciseList);
        }
        routineWeekElement.appendChild(dayCard);
    });

    const activeDay = routineDayById.get(selectedRoutineDay);
    routineSelectedDay.textContent = `Día seleccionado: ${activeDay.label}`;
}

function renderRoutineCatalog() {
    const selectedMuscle = routineMuscleFilter.value;
    const searchTerm = normalizeRoutineText(routineSearch.value);
    const visibleExercises = routineExercises.filter(exercise => {
        const matchesMuscle = selectedMuscle === 'todos' || exercise.muscle === selectedMuscle;
        const matchesSearch = normalizeRoutineText(exercise.name).includes(searchTerm);
        return matchesMuscle && matchesSearch;
    });

    routineCatalogElement.replaceChildren();
    visibleExercises.forEach(exercise => {
        const exerciseCard = document.createElement('article');
        exerciseCard.className = 'personal-routine__exercise';

        const exerciseCopy = document.createElement('div');
        const exerciseGroup = document.createElement('span');
        exerciseGroup.className = 'personal-routine__exercise-group';
        exerciseGroup.textContent = exercise.muscle;
        const exerciseName = document.createElement('h4');
        exerciseName.textContent = exercise.name;
        exerciseCopy.append(exerciseGroup, exerciseName);

        const addButton = document.createElement('button');
        addButton.type = 'button';
        addButton.className = 'personal-routine__add';
        addButton.dataset.action = 'add';
        addButton.dataset.exerciseId = exercise.id;
        const alreadyAdded = routine[selectedRoutineDay].includes(exercise.id);
        addButton.disabled = alreadyAdded;
        addButton.textContent = alreadyAdded ? 'Agregado' : '＋ Agregar';
        if (alreadyAdded) {
            addButton.setAttribute('aria-label', `${exercise.name} ya está en ${routineDayById.get(selectedRoutineDay).label}`);
        } else {
            addButton.setAttribute('aria-label', `Agregar ${exercise.name} a ${routineDayById.get(selectedRoutineDay).label}`);
        }

        exerciseCard.append(exerciseCopy, addButton);
        routineCatalogElement.appendChild(exerciseCard);
    });

    const exerciseLabel = visibleExercises.length === 1 ? 'ejercicio' : 'ejercicios';
    routineExerciseCount.textContent = `${visibleExercises.length} ${exerciseLabel}`;
    routineEmpty.hidden = visibleExercises.length !== 0;
}

function refreshRoutine() {
    renderRoutineWeek();
    renderRoutineCatalog();
}

routineWeekElement.addEventListener('click', event => {
    const removeButton = event.target.closest('[data-action="remove"]');
    if (removeButton) {
        const dayExercises = routine[removeButton.dataset.day];
        routine[removeButton.dataset.day] = dayExercises.filter(exerciseId => exerciseId !== removeButton.dataset.exerciseId);
        const wasSaved = saveRoutine();
        refreshRoutine();
        setRoutineStatus(wasSaved ? 'Ejercicio quitado de tu rutina.' : 'No se pudo guardar el cambio en este navegador.');
        return;
    }

    const selectDayButton = event.target.closest('[data-day]');
    if (selectDayButton) {
        selectedRoutineDay = selectDayButton.dataset.day;
        refreshRoutine();
        setRoutineStatus(`Ahora estás organizando el ${routineDayById.get(selectedRoutineDay).label}.`);
    }
});

routineCatalogElement.addEventListener('click', event => {
    const addButton = event.target.closest('[data-action="add"]');
    if (!addButton || addButton.disabled) {
        return;
    }

    const exercise = routineExerciseById.get(addButton.dataset.exerciseId);
    if (routine[selectedRoutineDay].includes(exercise.id)) {
        return;
    }

    routine[selectedRoutineDay].push(exercise.id);
    const wasSaved = saveRoutine();
    refreshRoutine();
    const status = `${exercise.name} se agregó al ${routineDayById.get(selectedRoutineDay).label}.`;
    setRoutineStatus(wasSaved ? status : `${status} No se pudo guardar en este navegador.`);
});

routineMuscleFilter.addEventListener('change', renderRoutineCatalog);
routineSearch.addEventListener('input', renderRoutineCatalog);

document.querySelector('#routine-clear').addEventListener('click', () => {
    const hasExercises = routineDays.some(day => routine[day.id].length > 0);
    if (!hasExercises || !window.confirm('¿Querés quitar todos los ejercicios de la semana?')) {
        return;
    }

    routineDays.forEach(day => {
        routine[day.id] = [];
    });
    const wasSaved = saveRoutine();
    refreshRoutine();
    setRoutineStatus(wasSaved ? 'La semana quedó vacía.' : 'La semana quedó vacía, pero no se pudo guardar el cambio.');
});

refreshRoutine();
if (routineDays.some(day => routine[day.id].length > 0)) {
    setRoutineStatus('Tu rutina guardada se recuperó en este navegador.');
}