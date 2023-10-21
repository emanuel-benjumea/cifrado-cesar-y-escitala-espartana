# Algoritmos de Cifrado: Escítala y César
Este repositorio ofrece implementaciones en JavaScript de dos algoritmos de cifrado históricos: Escítala Espartana y Cifrado César. Estos métodos han sido empleados desde épocas antiguas para proteger la confidencialidad de mensajes y datos sensibles, utilizando técnicas de sustitución y transposición de caracteres para ocultar el significado de la información transmitida.

## Escítala Espartana
La Escítala Espartana se remonta al siglo V a.C. y fue utilizada por los espartanos como una herramienta para cifrar mensajes importantes durante la guerra. Este método implica enrollar una tira de pergamino alrededor de una vara de un diámetro específico y luego escribir el mensaje de manera horizontal a lo largo de la vara. Al desenrollar la tira, el mensaje aparece desordenado, pero puede ser fácilmente reconstruido si se utiliza una vara del mismo diámetro.


## Cifrado César
El Cifrado César, por otro lado, se atribuye a Julio César en el siglo I a.C. en la antigua Roma. Este cifrado implica desplazar cada letra del alfabeto un número fijo de posiciones hacia la derecha. Por ejemplo, con un desplazamiento de 3 posiciones, la letra 'A' se cifraría como 'D', 'B' como 'E' y así sucesivamente. Este método de cifrado ha sido una de las técnicas más simples pero efectivas utilizadas a lo largo de la historia.

## Uso de las Implementaciones
1. Escítala Espartana: La función escitalaEspartana(mensaje, numLineas) cifra un mensaje utilizando el algoritmo de la Escítala Espartana. Se le debe proporcionar el mensaje y el número de líneas como parámetros para realizar el cifrado.

2. Cifrado César: La función cifradoCesar(mensaje, clave) cifra un mensaje utilizando el cifrado César. Debes ingresar el mensaje y la clave (el número de posiciones a desplazar en el alfabeto) para cifrar el mensaje.

Estas implementaciones están acompañadas de una interfaz de usuario interactiva (index.html) que te permite probar y experimentar con los algoritmos fácilmente.

## Contenido del Repositorio

- **`escitala-espartana.js`**: Implementación del algoritmo de la Escítala Espartana.
- **`cifrado-cesar.js`**: Implementación del algoritmo del Cifrado César.
- **`index.html`**: Interfaz de usuario para cifrar y descifrar mensajes usando ambas técnicas.
- **`README.md`**: Este archivo, proporcionando información sobre el proyecto.

## Uso

1. Clona este repositorio en tu máquina local usando `git clone`.
2. Abre el archivo `index.html` en tu navegador web para acceder a la interfaz de usuario.
3. Ingresa el mensaje que deseas cifrar, ajusta los parámetros según sea necesario y haz clic en los botones correspondientes para cifrar y descifrar mensajes utilizando la Escítala Espartana y el Cifrado César.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras errores o mejoras posibles, siéntete libre de modifiacar el codigo

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
