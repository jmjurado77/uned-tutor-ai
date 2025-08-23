// Configuración de la aplicación UNED Tutor AI
const APP_CONFIG = {
    // Información general
    version: '1.0.0',
    name: 'UNED Tutor AI',
    description: 'Agente IA para Acceso Universidad +25 - Matemáticas CCSS',

    // Configuración del estudiante por defecto
    defaultStudent: {
        name: 'Estudiante',
        targetScore: 8.0,
        studyHoursPerWeek: 10,
        preferredStudyTime: 'tarde',
        learningStyle: 'visual'
    },

    // Configuración del tutor IA
    aiTutor: {
        tone: 'motivador y profesional',
        personality: 'paciente, comprensivo, objetivo',
        responseLength: 'detallada pero concisa',
        includeExamples: true,
        adaptToProgress: true
    },

    // Configuración de notificaciones
    notifications: {
        studyReminders: true,
        progressUpdates: true,
        examAlerts: true,
        motivationalMessages: true
    },

    // Configuración de la interfaz
    ui: {
        theme: 'light',
        animations: true,
        charts: true,
        responsiveDesign: true
    }
};

// Datos de respuestas del chatbot IA
const AI_RESPONSES = {
    greetings: [
        "¡Hola! Soy tu tutor de Matemáticas para el acceso UNED. ¿En qué puedo ayudarte hoy?",
        "¡Buen día! ¿Qué tema te gustaría repasar o qué duda tienes?",
        "¡Hola! Estoy aquí para ayudarte a conseguir tu objetivo de aprobar con nota. ¿Empezamos?"
    ],

    motivation: [
        "¡Excelente progreso! Vas por buen camino hacia tu objetivo.",
        "Recuerda: cada ejercicio que resuelves te acerca más al éxito.",
        "Tu esfuerzo constante es la clave del éxito. ¡Sigue así!",
        "Prepararse para la universidad a los 25+ requiere valentía. ¡Admiro tu determinación!"
    ],

    studyTips: [
        "Para matemáticas, recomiendo sesiones de 45 minutos con descansos de 15.",
        "Practica problemas similares a los de exámenes anteriores.",
        "Los mapas mentales son excelentes para conectar conceptos matemáticos.",
        "Explica los conceptos en voz alta como si enseñaras a alguien más."
    ],

    weakPointsHelp: {
        derivadas: [
            "Para derivadas, domina primero las reglas básicas: potencia, producto, cociente y cadena.",
            "Practica derivando funciones simples antes de pasar a las compuestas.",
            "Recuerda: la derivada es la pendiente de la tangente en cada punto."
        ],
        limites: [
            "En límites, identifica primero el tipo de indeterminación.",
            "Para límites infinitos, divide por la potencia mayor del denominador.",
            "Los límites laterales son clave cuando hay discontinuidades."
        ],
        probabilidad: [
            "En probabilidad, dibuja siempre un diagrama de árbol o tabla.",
            "Identifica si los eventos son independientes o dependientes.",
            "La probabilidad condicionada cambia el espacio muestral."
        ]
    }
};

export { APP_CONFIG, AI_RESPONSES };
