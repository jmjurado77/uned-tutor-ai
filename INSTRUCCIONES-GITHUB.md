# 🚀 Instrucciones Completas para Subir UNED Tutor AI a GitHub

## 📋 Preparación Inicial

### 1. Archivos que necesitas descargar:

Descarga todos estos archivos en una carpeta local llamada `uned-tutor-ai`:

**Archivos principales de la aplicación:**
- `index.html` - Aplicación web principal
- `style.css` - Estilos CSS completos
- `app.js` - Lógica JavaScript con IA
- `app_data_complete.json` - Datos completos del temario y exámenes

**Archivos de configuración del proyecto:**
- `package.json` - Dependencias y scripts
- `README.md` - Documentación completa
- `.gitignore` - Archivos a ignorar por Git
- `LICENSE` - Licencia MIT del proyecto
- `.github/workflows/deploy.yml` - Deploy automático
- `src/config/app-config.js` - Configuración de la IA

### 2. PDFs del material (opcional):
- Coloca los PDFs del temario y exámenes en `assets/pdfs/`
- Los PDFs ya están integrados en `app_data_complete.json`

## 🛠️ Pasos para crear el repositorio

### Paso 1: Crear repositorio en GitHub

1. Ve a [GitHub.com](https://github.com) e inicia sesión
2. Haz clic en el botón verde "New" o "+" → "New repository"
3. Configuración del repositorio:
   - **Repository name**: `uned-tutor-ai`
   - **Description**: `🎓 Agente IA Tutor para Curso de Acceso UNED +25 - Matemáticas Aplicadas a las Ciencias Sociales`
   - **Public** ✅ (para que funcione GitHub Pages gratis)
   - **NO** marques "Add a README file" (ya tenemos uno)
   - **NO** añadas .gitignore ni license (ya los tenemos)
4. Haz clic en "Create repository"

### Paso 2: Subir archivos desde la terminal

Abre la terminal/cmd en la carpeta `uned-tutor-ai` y ejecuta:

```bash
# Inicializar repositorio Git
git init

# Añadir todos los archivos
git add .

# Hacer el primer commit
git commit -m "🎓 Initial commit: UNED Tutor AI - Aplicación completa con análisis de exámenes y temario integrado"

# Conectar con GitHub (cambia TU-USUARIO por tu username)
git branch -M main
git remote add origin https://github.com/TU-USUARIO/uned-tutor-ai.git

# Subir archivos
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. En tu repositorio GitHub, ve a **Settings** (pestaña superior)
2. En el menú lateral izquierdo, busca **Pages**
3. En "Source", selecciona **Deploy from a branch**
4. Branch: **main**
5. Folder: **/ (root)**
6. Haz clic en **Save**
7. Espera 2-5 minutos

Tu aplicación estará disponible en:
`https://TU-USUARIO.github.io/uned-tutor-ai`

## 📱 Verificación de funcionamiento

### Funcionalidades que deben funcionar:

✅ **Dashboard principal**: Progreso por temas, gráficos, estadísticas
✅ **Chat IA Tutor**: Respuestas contextualizadas y motivadoras  
✅ **Análisis de exámenes**: Patrones de 50 preguntas reales (2021-2025)
✅ **Recursos**: Videos, ejercicios y materiales de estudio
✅ **Plan de estudio**: Calendario personalizado y objetivos

### Datos integrados:

- **5 exámenes oficiales** analizados (2021-2025)
- **50 preguntas reales** categorizadas por tema y tipo
- **Temario completo** estructurado en 5 capítulos
- **Patrones identificados**: Geometría analítica, Probabilidad y Estadística son los temas más frecuentes
- **Tipos de pregunta**: 40% cálculo directo, 28% aplicación conceptos

## 🔧 Personalización

### Para personalizar tu versión:

1. **Cambiar datos del estudiante**:
   - Edita `app.js` línea ~15: cambiar nombre, objetivos, progreso
   
2. **Añadir más exámenes**:
   - Edita `app_data_complete.json` añadiendo nuevos años/convocatorias
   
3. **Personalizar respuestas IA**:
   - Edita `src/config/app-config.js` para cambiar el tono y respuestas

4. **Modificar diseño**:
   - Edita `style.css` para cambiar colores, fuentes, layout

## 🆘 Solución de problemas

### Si GitHub Pages no funciona:
1. Verifica que el repositorio sea **público**
2. Comprueba que `index.html` esté en la raíz del proyecto
3. Espera 10-15 minutos tras el primer deploy
4. Revisa en Settings → Pages que esté configurado correctamente

### Si los gráficos no aparecen:
- Los gráficos usan Chart.js via CDN, necesitas conexión a internet

### Si el chat IA no responde:
- Las respuestas están pre-programadas en `app-config.js`
- Para IA real, necesitarías integrar OpenAI API (costo adicional)

## 🎯 Próximos pasos recomendados

1. **Añadir más exámenes**: Incorporar convocatorias adicionales
2. **Integrar IA real**: Conectar con OpenAI para respuestas dinámicas  
3. **Base de datos**: Usar localStorage para persistir progreso
4. **Móvil**: Mejorar diseño responsive
5. **Gamificación**: Añadir logros y puntuaciones

## 📞 Soporte

Si tienes problemas:
1. Revisa la consola del navegador (F12) para errores
2. Verifica que todos los archivos se subieron correctamente
3. Comprueba la configuración de GitHub Pages
4. Los datos están completamente integrados, no necesitas APIs externas

---

¡Tu agente IA tutor estará listo para ayudar a estudiantes del acceso UNED con análisis real de exámenes y un sistema de aprendizaje personalizado! 🎓✨