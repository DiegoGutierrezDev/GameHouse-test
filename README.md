# 🧩 Vue 3 Technical Test

Este proyecto está desarrollado con **Vue 3**, usando la **Composition API**, **CSS puro** y **Pinia** para la gestión del estado.

## 🚀 Cómo iniciar el proyecto

1. Clona este repositorio o copia la carpeta del proyecto.
2. Abre la terminal en la raíz del proyecto.
3. Ejecuta los siguientes comandos:

```bash
npm install        # Instala las dependencias
npm run format     # Formatea el código (opcional)
npm run dev        # Inicia el servidor de desarrollo de Vite
```

### 🔧 Backend (Fake API con Node.js)

Para iniciar el servidor Node.js y poder usar los endpoints proporcionados:

```bash
node @/../server/server.cjs
```

> ⚠️ Asegúrate de tener **Node.js** instalado.  
> Yo estoy usando la versión **v22.13.0**.

## 🧱 Estructura y decisiones técnicas

- Está desarrollado con **componentes reutilizables** en mente.
- Se ha creado un componente tipo layout llamado **`PageWrapper`**, que permite alternar entre versiones móvil y escritorio sin ensuciar el resto del código.
- Se usa **Pinia** para almacenar datos clave entre páginas, como:
  - El **correo electrónico** ingresado.
  - El **código de verificación** enviado por email.

## ✅ Funcionalidades implementadas

- Envío y validación de email con código OTP.
- Navegación paso a paso con estado compartido.
- Diseño adaptativo para móvil y escritorio.
- Componente OTP reutilizable.
