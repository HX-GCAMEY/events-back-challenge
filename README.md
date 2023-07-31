# Gestión de eventos Backend developer

Crear una API RESTful utilizando Express.js o Nest.js y una base de datos MongoDB, MySQL o PostgreSQL para gestionar eventos con fecha, hora y descripción. Se considerará un punto extra la implementación de recordatorios opcionales para los eventos.

## Requerimientos:

Crear una base de datos MongoDB, MySQL o PostgreSQL según la preferencia del candidato, y definir un modelo llamado "Evento" con las siguientes propiedades:

- id: Identificador único del evento.
- titulo: Título del evento.
- fecha: Fecha del evento (en formato ISO 8601).
- hora: Hora del evento (en formato HH:mm).
- descripcion: Descripción del evento.
- recordatorio (opcional): Fecha y hora del recordatorio (en caso de que se haya configurado).

Elegir entre Express.js o Nest.js para crear las siguientes rutas y controladores que permitan interactuar con los eventos:

1. Ruta GET /eventos: Obtener todos los eventos existentes en la base de datos.
2. Ruta GET /eventos/:id: Obtener un evento específico por su ID.
3. Ruta POST /eventos: Agregar un nuevo evento a la base de datos. Los datos del evento se enviarán en el cuerpo de la solicitud en formato JSON.
4. Ruta PUT /eventos/:id: Actualizar los datos de un evento existente por su ID. Los datos actualizados del evento se enviarán en el cuerpo de la solicitud en formato JSON.
5. Ruta DELETE /eventos/:id: Eliminar un evento específico por su ID.
   Implementar una funcionalidad opcional (punto extra):
6. Ruta PUT /eventos/:id/recordatorio: Actualizar la fecha y hora del recordatorio de un evento existente. Los datos actualizados del recordatorio se enviarán en el cuerpo de la solicitud en formato JSON. Si el recordatorio no estaba configurado previamente, se debe crear.

\*\*\*Nota: Los candidatos deben asegurarse de manejar adecuadamente los casos de error, como eventos no encontrados o errores de la base de datos, y validar las entradas correctamente.

¡Buena suerte con el desafío! La elección de la base de datos y el framework para el enrutamiento dependerá de las preferencias y habilidades del candidato.
