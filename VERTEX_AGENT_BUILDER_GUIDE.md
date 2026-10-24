# Guía de Despliegue y Entrenamiento: Vertex AI Agent Builder en Google Cloud

Esta guía explica paso a paso cómo conectar este proyecto con **Vertex AI Agent Builder** en Google Cloud para entrenar el agente con los documentos e información de tu negocio (**AXON Legal / AXON Global S.A.S.**).

---

## 1. ¿Cómo funciona la arquitectura?

El backend de la aplicación (`server.ts`) ya viene con soporte nativo de doble motor (*Dual Engine*):

1. **En Google Cloud (Producción):** 
   - Detecta automáticamente las credenciales de servicio de Google Cloud (**Application Default Credentials - ADC**).
   - Se conecta directamente a tu agente de **Vertex AI Agent Builder** o a tu **Data Store de Documentos** a través de la API oficial de Google Cloud.
   - Responde con base en los documentos de tu empresa (código procesal, jurisprudencia, manuales, minutas, tarifas) e incluye las **fuentes citadas**.
2. **En Desarrollo Local (o si aún no has configurado Vertex):**
   - Utiliza la API de **Google Gemini** o el motor normativo de contingencia para que la app funcione siempre sin caídas.

---

## 2. Paso a Paso en Google Cloud Console

### Paso 1: Habilitar las APIs necesarias
En tu consola de Google Cloud ([console.cloud.google.com](https://console.cloud.google.com/)):
1. Selecciona tu proyecto o crea uno nuevo (ej. `axon-legal-prod`).
2. Ve a **APIs y servicios > Biblioteca de APIs**.
3. Habilita las siguientes APIs:
   - **Vertex AI Search and Conversation API** (`discoveryengine.googleapis.com`)
   - **Dialogflow API** (`dialogflow.googleapis.com`)
   - **Cloud Run API** (`run.googleapis.com`)

### Paso 2: Crear el Agente en Vertex AI Agent Builder
1. En el menú lateral de Google Cloud, ve a **Vertex AI > Agent Builder**.
2. Haz clic en **Crear aplicación** (Create App).
3. Tienes dos opciones recomendadas:
   - **Opción A (Recomendada para Documentos del Negocio - Search & Conversation):**
     - Selecciona **Búsqueda (Search)** o **Chat**.
     - En tipo de datos, selecciona **No estructurados (Unstructured)**.
   - **Opción B (Conversacional Avanzado / Flujos - Dialogflow CX GenAI):**
     - Selecciona **Chat** y crea un agente conversacional.

### Paso 3: Crear el Data Store y Cargar tus Documentos
1. Durante la creación (o en la pestaña **Data Stores**), haz clic en **Nuevo almacén de datos (New Data Store)**.
2. Selecciona la fuente de datos:
   - **Cloud Storage:** Sube una carpeta con todos los PDFs de tu negocio:
     * Leyes y Códigos de Colombia (CGP, Código Penal Militar Ley 1407, Régimen Disciplinario Ley 1952).
     * Folletos y brochure corporativo de AXON Legal.
     * Preguntas frecuentes y modelos de minutas.
   - **Sitio web:** Puedes ingresar la URL de tu sitio web para que rastree e indexe la información automáticamente.
3. Asigna un nombre al Data Store (ej. `axon-legal-docs`).
4. Toma nota del **ID del Almacén de datos (Data Store ID)** o del **ID de la aplicación (Engine ID / Agent ID)**.

---

## 3. Despliegue en Google Cloud Run

Para desplegar la aplicación en Cloud Run:

### Opción A: Usando el comando de Google Cloud CLI (`gcloud`)
Ejecuta en la terminal de tu proyecto:
```bash
# 1. Construir la imagen o desplegar directo desde el código
gcloud run deploy axon-legal-web \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars VERTEX_PROJECT_ID="tu-proyecto-gcp",VERTEX_LOCATION="global",VERTEX_AGENT_ID="id-de-tu-agente",VERTEX_DATASTORE_ID="id-del-datastore"
```

### Opción B: Desde la Consola de Cloud Run
1. Ve a **Cloud Run** > **Crear servicio**.
2. Conecta tu repositorio o sube el contenedor.
3. En la sección **Variables de entorno (Environment Variables)**, agrega:

| Variable | Valor de Ejemplo | Descripción |
| :--- | :--- | :--- |
| `VERTEX_PROJECT_ID` | `axon-legal-prod` | ID de tu proyecto en Google Cloud |
| `VERTEX_LOCATION` | `global` o `us-central1` | Región donde creaste el agente en Vertex AI |
| `VERTEX_AGENT_ID` | `9b2c3d4e-xxxx-xxxx` | ID del Agente conversacional (si usas Chat App) |
| `VERTEX_DATASTORE_ID`| `axon-legal-docs_xxxx` | ID del almacén con los documentos de la empresa |
| `VERTEX_COLLECTION_ID` | `default_collection` | Colección por defecto de Vertex AI |
| `GEMINI_API_KEY` | *(tu API key)* | Clave de respaldo para desarrollo o fallback |

---

## 4. Permisos de la Cuenta de Servicio (IAM)

Asegúrate de que la cuenta de servicio de Cloud Run (usualmente `[NUMERO_PROYECTO]-compute@developer.gserviceaccount.com`) tenga asignado el rol:
- **Usuario de Vertex AI** (`roles/aiplatform.user`) o **Administrador de Discovery Engine** (`roles/discoveryengine.admin` / `roles/discoveryengine.editor`).

---

## 5. Verificación de Funcionamiento

Una vez desplegado en Cloud Run:
1. Abre tu aplicación web.
2. Abre el **Asesor Jurídico IA (Dra. Andrea Morales)**.
3. El botón superior en la barra del chat mostrará **"Vertex AI Activo"** en verde.
4. Cuando le preguntes algo sobre los documentos que subiste, el agente responderá usando la información de tus documentos e incluirá la etiqueta:
   `⚡ Vertex AI Agent Builder (Documentos de Empresa)` y la lista de fuentes citadas.
