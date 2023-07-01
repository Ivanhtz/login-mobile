# Login Angular
---

La aplicación la realicé enfocada en la sencillez y funcionalidad, además de intentar personalizar lo máximo posible la maquetación, siendo totalmente adaptable a cualquier pantalla, las herramientas que utilicé fue Angular Material y SCSS, creando archivos personalizados tanto de reset como de variables de estilos.

## Características

- Cuenta con dos vistas públicas, dos formularios, ambos con gestión de errores y validadores
- En la parte superior tenemos la cabecera, presente en toda la app
- Dispone de un único botón para desplazarnos de un formulario a otro en función a donde nos encontremos
- En la misma cabecera y solo visible cuando tenemos un usuario logueado tenemos el botón de cerrar sesión, elimina el token y nos devuelve al formulario de login.
- También en esta parte privada, disponemos de una sección de usuarios registrados, donde podemos tener una vista general de todos los usuarios y además una individualizada de cada uno.
- Otra de las funcionalidades que tenemos en este apartado es la opción de eliminar usuarios, se colocó un pequeño modal como precaución para preguntarte si realmente estás seguro de borrarlo.
- La ruta privada, está protegida por un guard, si no hay un token de autenticación te redirige a la pantalla de login
- Finalmente, se creó un interceptor para el transporte del token en las peticiones.

## Dependencias

Login-Angular depende de las siguientes librerías:

- Angular - versión 16.0.1
- Angular CLI - versión 16.0.1
- Angular Material - versión 16.1.3

Asegúrate de tener estas dependencias instaladas antes de ejecutar la aplicación.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a Login-Angular, sigue estas pautas:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección de errores.
3. Realiza tus cambios con mensajes descriptivos en los commits.
4. Sube tus cambios a tu fork.
5. Envía una pull request a la rama `main` del repositorio original.

Asegúrate de que tu código cumpla con el estilo de codificación existente e incluya la documentación adecuada y una cobertura de pruebas apropiada.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más información.

## Agradecimientos

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)


## Autor

Si tienes alguna pregunta, sugerencia o problema, no dudes en contactarme a 
- [Iván Pizarroso](https://github.com/Ivanhtz).

---