- [Aprendiendo Node.js](#aprendiendo-nodejs)
  - [Introducción](#introducción)
    - [Por qué Node.js?](#por-qué-nodejs)
  - [Instalación](#instalación)
    - [Instalación de Node.js desde el sitio web oficial](#instalación-de-nodejs-desde-el-sitio-web-oficial)
    - [Instalación para soporte de diversas versiones](#instalación-para-soporte-de-diversas-versiones)
      - [Verificar versiones de node](#verificar-versiones-de-node)
      - [Instalar otras versiones de node](#instalar-otras-versiones-de-node)
      - [Cambiar de version de node](#cambiar-de-version-de-node)
      - [Desinstalar versiones de node](#desinstalar-versiones-de-node)
      - [Establecer una version de node por defecto](#establecer-una-version-de-node-por-defecto)
  - [Primeros pasos](#primeros-pasos)
    - [Errores comunes](#errores-comunes)
  - [Sistema Clásico de Exportación/Importación](#sistema-clásico-de-exportaciónimportación)
    - [Exportar módulos](#exportar-módulos)
    - [Importar módulos](#importar-módulos)
  - [Sistema de Exportación/Importación de ES Modules](#sistema-de-exportaciónimportación-de-es-modules)
    - [Utilización de ES Modules](#utilización-de-es-modules)
  - [Módulos Nativos](#módulos-nativos)
    - [Usando el módulo `os`](#usando-el-módulo-os)
    - [Usando el módulo `fs`](#usando-el-módulo-fs)
  - [Promesas en Node.js](#promesas-en-nodejs)
  - [Asincronía Paralela](#asincronía-paralela)
  - [Modulo `node:path`](#modulo-nodepath)
  - [Leyendo los archivos de la ruta](#leyendo-los-archivos-de-la-ruta)
  - [El objeto `process`](#el-objeto-process)
  - [Ls avanzado](#ls-avanzado)
  - [Por fin npm](#por-fin-npm)
    - [Inicializando un proyecto de Node.js](#inicializando-un-proyecto-de-nodejs)
    - [¿Qué es el archivo `package.json`?](#qué-es-el-archivo-packagejson)
    - [Instalando paquetes de Node.js](#instalando-paquetes-de-nodejs)
    - [Aclaraciones](#aclaraciones)
  - [Utilizando paquetes de Node.js](#utilizando-paquetes-de-nodejs)
  - [Dependencias de desarrollo](#dependencias-de-desarrollo)
    - [Configuración de standard](#configuración-de-standard)
  - [Iniciando un servidor HTTP](#iniciando-un-servidor-http)
    - [Obteniendo un puerto disponible](#obteniendo-un-puerto-disponible)

# Aprendiendo Node.js

En este documento se escriben lo que he aprendido sobre Node.js.


## Introducción

Node.js es un entorno de ejecución para JavaScript construido sobre el motor V8 de Google Chrome. Node.js utiliza un modelo de operaciones de entrada y salida sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. Node.js es ideal para aplicaciones en tiempo real con una gran cantidad de conexiones simultáneas.
Node.js es monohilo, lo que significa que todo el código se ejecuta en un solo hilo.

Todo lo encontrado en estas anotaciones son las classes/videos que he visto en el curso de [Node.js de midudev](https://www.youtube.com/playlist?list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7).

### Por qué Node.js?

- **Rendimiento**: Node.js es muy rápido debido a su motor V8 y la forma en que maneja las operaciones de entrada y salida.
- **Escalabilidad**: Node.js es altamente escalable debido a su modelo de operaciones de entrada y salida sin bloqueo.
- **Comunidad**: Node.js tiene una gran comunidad de desarrolladores que contribuyen a su crecimiento.
- **Facilidad de aprendizaje**: Node.js es fácil de aprender si ya conoces JavaScript.
- **JavaScript en todas partes**: Node.js te permite usar JavaScript en el lado del servidor y en el lado del cliente.
- **NPM**: Node.js tiene un gran ecosistema de paquetes gracias a NPM (Node Package Manager).
- **Herramientas**: Node.js tiene muchas herramientas y marcos de trabajo que facilitan el desarrollo de aplicaciones.
- **APIs**: Node.js es ideal para crear APIs RESTful.
- **Aplicaciones en tiempo real**: Node.js es ideal para aplicaciones en tiempo real como chats, juegos en línea, etc.

## Instalación

Hay 2 formas principales de instalar Node.js:

### Instalación de Node.js desde el sitio web oficial

Puedes descargar e instalar Node.js desde el sitio web oficial de Node.js: [https://nodejs.org](https://nodejs.org).
Esto solo hará que se instale una version de node.js en la maquina.

### Instalación para soporte de diversas versiones

Puedes descargar e instalar Node.js desde el sitio web oficial de Node.js: [https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager).
Esto para windows.

En el cual encontraremos las siguientes instrucciones:

> Tenemos que tener en cuenta que se necesita tener rust instalado en la maquina.

```bash
# Instala fnm (Fast Node Manager)
winget install Schniz.fnm

# Si lo anterior no funciona, puedes instalarlo con cargo
cargo install fnm

# configura el entorno de fnm
fnm env --use-on-cd | Out-String | Invoke-Expression

# Agrega el comando anterior a tu perfil de PowerShell para que se ejecute automáticamente
notepad $PROFILE
# Agrega la siguiente línea al archivo y guarda los cambios
fnm env --use-on-cd | Out-String | Invoke-Expression

# download and install Node.js
fnm use --install-if-missing 20

# verifica que la versión correcta de Node.js esté en el entorno
node -v # should print `v20.16.0`

# verifica que la versión correcta de npm esté en el entorno
npm -v # should print `10.8.1`
```

#### Verificar versiones de node

Para verificar las versiones de node que tenemos instaladas en la maquina tenemos que hacerlo con el siguiente comando:

```bash
fnm ls
```

#### Instalar otras versiones de node

```bash
fnm install 14 # Instala la version 14 de node
```

#### Cambiar de version de node

```bash
fnm use 14 # Cambia a la version 14 de node
```

#### Desinstalar versiones de node

```bash
fnm uninstall 14 # Desinstala la version 14 de node
```

#### Establecer una version de node por defecto

```bash
fnm default 14 # Establece la version 14 de node como la version por defecto
```

## Primeros pasos

Para comenzar a trabajar con Node.js, puedes crear un archivo JavaScript y ejecutarlo con Node.js. Por ejemplo, crea un archivo llamado `index.js` con el siguiente contenido:

```javascript
console.log('Hola, mundo!');
```

Para ejecutar el archivo con Node.js, abre una terminal y escribe el siguiente comando:

```bash
node index.js
```

### Errores comunes

Con node.js es común que se nos presente errores a la hora de usarlo.

- No existe el objeto global `window` en node.js, por lo que si intentamos usarlo nos dará un error.
- No existe el objeto `document` en node.js, por lo que si intentamos usarlo nos dará un error.

La variable `global` es la que se usa en node.js para referirse al objeto global.

> Si queremos que esto funcione en node.js como en el navegador utilizamos la variable global `globalThis`.

## Sistema Clásico de Exportación/Importación

La forma regular de trabajar con archivos en node.js es utilizando CommonJS, el cual es un sistema de módulos que se utiliza en node.js.

CommonJS es lo común que se utiliza en node.js para importar y exportar módulos.
No esta deprecado pero se esta utilizando cada vez menos.

### Exportar módulos

Para exportar un módulo en CommonJS, se utiliza la propiedad `module.exports` o `exports`.

```javascript
// exportar un módulo
function saludar() {
  console.log('Hola, amigo!');
}

module.exports = {
  nombre: 'Juan',
  edad: 30,
  saludar
};
```

### Importar módulos

Para importar un módulo en CommonJS, se utiliza la función `require`.

```javascript
// importar un módulo
const persona = require('./persona');

console.log(persona.nombre); // Juan
console.log(persona.edad); // 30
persona.saludar(); // Hola, amigo!
```

## Sistema de Exportación/Importación de ES Modules

ES Modules es un sistema de módulos que se utiliza en los navegadores y en Node.js. ES Modules es el estándar de JavaScript para importar y exportar módulos.

### Utilización de ES Modules

Para poder decirle a node que vamos a trabajar com módulos cambiamos la extension del archivo a lo que queramos utilizar:

- `.js` para CommonJS
- `.cjs` para CommonJS
- `.mjs` para ES Modules

Para exportar un módulo en ES Modules, se utiliza la palabra clave `export`.

```javascript
// math.mjs
export function sum(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}
```

Para importar un módulo en ES Modules, se utiliza la palabra clave `import`.

```javascript
// index.mjs
import { sum, sub } from './math.mjs';

console.log(sum(5, 3)); // 8
console.log(sub(5, 3)); // 2
```

## Módulos Nativos

Node.js tiene módulos nativos que se pueden utilizar sin necesidad de instalarlos. Algunos de los módulos nativos más comunes son:

- `fs`: Módulo para trabajar con el sistema de archivos.
- `http`: Módulo para crear servidores HTTP.
- `https`: Módulo para crear servidores HTTPS.
- `path`: Módulo para trabajar con rutas de archivos.
- `os`: Módulo para trabajar con el sistema operativo.

### Usando el módulo `os`

La convención para importar módulos nativos en Node.js es la siguiente: `node:<nombre_del_modulo>`.

```javascript
const os = require('node:os');

console.log('Información del sistema operativo');
console.log('----------------------------------\n');

console.log('Nombre del sistema operativo:', os.platform());
console.log('Versión del sistema operativo:', os.version());
console.log('Arquitectura del sistema operativo:', os.arch());
console.log('CPUs:', os.cpus());
console.log('Memoria total:', os.totalmem() / 1024 / 1024 / 1024, 'GB');
console.log('Memoria libre:', os.freemem() / 1024 / 1024 / 1024, 'GB');
console.log('UpTime:', os.uptime() / 60 / 60, 'horas');
console.log('Hostname:', os.hostname());
```

### Usando el módulo `fs`

El módulo `fs` es un módulo nativo de Node.js que se utiliza para trabajar con el sistema de archivos.

Obteniendo información de un archivo con el módulo `fs`.
```javascript
const fs = require('node:fs');

console.log('Leyendo un archivo con Node.js');
console.log('--------------------------------\n');

const stats = fs.statSync('learn-node.md');
console.log('stats:', stats);

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  (stats.size / 1024).toFixed(2) + 'KB',
);
```

Leyendo el contenido de un archivo con el módulo `fs`.

```javascript
// Esto es de forma sincrona
const fs = require('node:fs');

const text = fs.readFileSync('learn-node.md', 'utf-8');

console.log(text);
```

Leyendo el contenido de un archivo con el módulo `fs` de forma asíncrona.
Esto para no bloquear el hilo principal de node.js.
```javascript
const fs = require('node:fs');

fs.readFile('learn-node.md', 'utf-8', (err, data) => { // Como tercer parámetro se pasa una función de callback 
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
```

Leyendo el contenido de un archivo con el módulo `fs` de forma asíncrona y utilizando promesas.
```javascript
const fs = require('node:fs/promises'); // Se utiliza el modulo fs pero con promesas

fs.readFile('learn-node.md', 'utf-8')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
```

## Promesas en Node.js

Las promesas son un mecanismo para trabajar con código asíncrono en JavaScript. Las promesas se utilizan en Node.js para trabajar con operaciones asíncronas como leer un archivo, hacer una solicitud HTTP, etc.

Anteriormente se utilizaba el sistema de callbacks para trabajar con código asíncrono en Node.js, pero las promesas son una forma más limpia y fácil de trabajar con código asíncrono.

Ahora se están utilizando las promesas en Node.js para trabajar con código asíncrono.

```javascript
const fs = require('node:fs/promises');

fs.readFile('learn-node.md', 'utf-8')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
```

Si por alguna razón no existe la version en promesas de un modulo se puede utilizar el modulo `node:util` para convertirlo a promesas.

```javascript
const fs = require('node:fs');
const { promisify } = require('node:util');

const readFile = promisify(fs.readFile);

readFile('learn-node.md', 'utf-8')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
```

## Asincronía Paralela

La asincronía paralela es una técnica que se utiliza en Node.js para ejecutar múltiples operaciones asíncronas al mismo tiempo. Esto se logra utilizando `Promise.all()`.

```javascript
const fs = require('node:fs/promises');

Promise.all([
  fs.readFile('learn-node.md', 'utf-8'),
  fs.readFile('learn-node.md', 'utf-8'),
  fs.readFile('learn-node.md', 'utf-8'),
])
  .then(data => { // data es un array con los datos de los archivos
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
```

## Modulo `node:path`

El módulo `path` es un módulo nativo de Node.js que se utiliza para trabajar con rutas de archivos.

Estos son algunos de sus método:

- `path.sep`: Devuelve el separador de rutas de archivos del sistema operativo.
- `path.join()`: Une varias rutas de archivos en una sola ruta. Esto pasándole como argumentos las rutas que queremos unir. // path.join('carpeta', 'archivo.txt')
- `path.resolve()`: Resuelve una ruta absoluta a partir de una ruta relativa. // path.resolve('carpeta', 'archivo.txt')
- `path.dirname()`: Devuelve el directorio de una ruta de archivo. // path.dirname('carpeta/archivo.txt')
- `path.basename()`: Devuelve el nombre del archivo de una ruta de archivo. // path.basename('carpeta/archivo.txt')
A este le pasas un segundo argumento que es la extensión del archivo que quieres quitar.
- `path.extname()`: Devuelve la extensión de un archivo de una ruta de archivo. // path.extname('carpeta/archivo.txt')

## Leyendo los archivos de la ruta

pequeño ejemplo de como leer los archivos de una ruta.

```javascript
const fs = require('node:fs/promises');

fs.readdir('.')
  .then(files => {
    files.forEach(file => {
      console.log(file);
    });
  })
  .catch(err => {
    console.error(err);
  });
```

## El objeto `process`

El objeto `process` es un objeto global de Node.js que proporciona información y control sobre el proceso de Node.js. El objeto `process` tiene muchas propiedades y métodos que se pueden utilizar para interactuar con el proceso de Node.js.

Algunas de las propiedades y métodos más comunes del objeto `process` son:

| Propiedad/Método                 | Descripción                                                              |
| -------------------------------- | ------------------------------------------------------------------------ |
| `process.argv`                   | Devuelve una matriz con los argumentos de la línea de comandos.          |
| `process.env`                    | Devuelve un objeto con las variables de entorno del sistema.             |
| `process.exit({0\|1})`           | Finaliza el proceso de Node.js con un código de salida. (Exitoso\|Error) |
| `process.cwd()`                  | Devuelve el directorio de trabajo actual del proceso.                    |
| `process.pid`                    | Devuelve el ID de proceso del proceso.                                   |
| `process.platform`               | Devuelve la plataforma del sistema operativo.                            |
| `process.uptime()`               | Devuelve el tiempo de actividad del proceso en segundos.                 |
| `process.memoryUsage()`          | Devuelve información sobre el uso de memoria del proceso.                |
| `process.on({type}, {function})` | Permite registrar manejadores de eventos para eventos específicos.       |


## Ls avanzado

Un ejemplo de como listar los archivos de una ruta de forma avanzada.

```javascript
const fs = require('node:fs/promises');
const path = require('node:path');

const dir = process.argv[2] ?? './';

async function ls (dir) {
  let files
  // Leemos el directorio
  try {
    files = await fs.readdir(dir)
  } catch (err) {
    console.error(`No se pudo leer el directorio ${dir}`)
    process.exit(1)
  }

  // Obtenemos la información de los archivos
  const filesPromises = files.map(file => {
    const filePath = path.join(dir, file)

    try {
      return fs.stat(filePath) // Información del archivo
    } catch (err) {
      console.error(`No se pudo leer el archivo ${file}`)
      process.exit(1)
    }
  })

  // Mostramos la información de los archivos
  Promise.all(filesPromises)
    .then(filesStats => {
      const maxFileNameLength = Math.max(...files.map(file => file.length)) // Longitud del nombre del archivo más largo

      filesStats.forEach((stats, i) => {
        const fileType = stats.isDirectory() ? 'D -' : 'F -';     // D - Directorio, F - Archivo
        const file = files[i];                                    // Nombre del archivo
        const fileSize = `${(stats.size / 1024).toFixed(2)} KB`;  // Tamaño del archivo en KB
        const lastModified = stats.mtime.toLocaleString();        // Fecha de la última modificación

        console.log(`${fileType} ${file.padEnd(maxFileNameLength)} ${fileSize.padStart(8)} - ${lastModified}`);
      })
    }
  )
}

ls(dir);
```

## Por fin npm

npm (Node Package Manager) es el administrador de paquetes de Node.js. npm se utiliza para instalar, actualizar y administrar paquetes de Node.js. npm es el ecosistema de paquetes más grande del mundo y se utiliza para compartir y reutilizar código en Node.js.

Algunos comandos comunes de npm son:

| Comando                            | Descripción                                                                               |
| ---------------------------------- | ----------------------------------------------------------------------------------------- |
| `npm init`                         | Inicializa un proyecto de Node.js.                                                        |
| `npm install {package}`            | Instala un paquete de Node.js.                                                            |
| `npm install {package} --save`     | Instala un paquete de Node.js y lo guarda en las dependencias del proyecto.               |
| `npm install {package} --save-dev` | Instala un paquete de Node.js y lo guarda en las dependencias de desarrollo del proyecto. |
| `npm install {package} -E`         | Instala un paquete de Node.js con una versión específica.                                 |
| `npm install {package} -D`         | Instala un paquete de Node.js como dependencia de desarrollo.                             |
| `npm install -g {package}`         | Instala un paquete de Node.js de forma global.                                            |
| `npm list`                         | Lista todas las dependencias del proyecto.                                                |
| `npm outdated`                     | Muestra las dependencias que están desactualizadas.                                       |
| `npm install`                      | Instala todas las dependencias del proyecto.                                              |
| `npm uninstall {package}`          | Desinstala un paquete de Node.js.                                                         |
| `npm update {package}`             | Actualiza un paquete de Node.js.                                                          |


### Inicializando un proyecto de Node.js

Para inicializar un proyecto de Node.js, puedes ejecutar el comando `npm init` en la terminal. Esto creará un archivo `package.json` en el directorio actual con la configuración del proyecto.

```bash
npm init
```

Respondemos las preguntas que nos hace el comando `npm init` y se creara el archivo `package.json` con la configuración del proyecto.

- `name`: Nombre del proyecto.
- `version`: Versión del proyecto.
- `description`: Descripción del proyecto.
- `entry point`: Archivo de entrada del proyecto.
- `test command`: Comando de prueba del proyecto.
- `git repository`: Repositorio de Git del proyecto.
- `keywords`: Palabras clave del proyecto.
- `author`: Autor del proyecto.
- `license`: Licencia del proyecto.

Si nos queremos saltar todas las preguntas podemos hacerlo con el siguiente comando:

```bash
npm init -y
```

O bien con el siguiente comando:

```bash
npm init --yes
```

### ¿Qué es el archivo `package.json`?

El archivo `package.json` es un archivo de metadatos de un proyecto de Node.js. El archivo `package.json` contiene información sobre el proyecto, como el nombre del proyecto, la versión del proyecto, las dependencias del proyecto, los scripts del proyecto, etc.

El archivo `package.json` tiene la siguiente estructura:

```json
{
  "name": "learn-node", // Nombre del proyecto
  "version": "1.0.0", // Versión del proyecto
  "description": "In this project learn node.js", // Descripción del proyecto
  "main": "index.js", // Archivo de entrada del proyecto
  "scripts": { // Scripts del proyecto (comandos de npm run -)
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": { // Repositorio de Git del proyecto
    "type": "git",
    "url": "https://github.com/user/repo.git"
  },
  "keywords": [ // Palabras clave del proyecto
    "learn",
    "node",
    "nodejs",
    "MauricioDMO"
  ],
  "author": "Mauricio Martínez - MauricioDMO", // Autor del proyecto
  "license": "ISC" // Licencia del proyecto
}
```

### Instalando paquetes de Node.js

Para instalar un paquete de Node.js, puedes ejecutar el comando `npm install {package}` en la terminal. Esto instalará el paquete en el directorio `node_modules` del proyecto y lo guardará en las dependencias del proyecto.

```bash
npm install {package}
```

Vamos a instalar como primera dependencia el paquete `picocolors` que es un paquete que nos permite darle color a la consola.

```bash
npm install picocolors
```

Esto nos creara una carpeta llamada `node_modules` en la cual se guardan todas las dependencias del proyecto.

Y también se creara una carpeta llamada `package-lock.json` que es un archivo que se utiliza para guardar la información de las dependencias del proyecto.

Ademas de esto se actualizara el archivo `package.json` con la dependencia que acabamos de instalar.

```json
{
  "name": "learn-node",
  "version": "1.0.0",
  ...
  "dependencies": {
    "picocolors": "^1.0.1" // Dependencia instalada con su ultima versión debido al símbolo ^
  }
}
```

> El símbolo `^` significa que se instalará la última versión compatible del paquete.\
> Esto significa que si la versión actual es `1.0.1` y la última versión es `1.1.0` se instalará la versión `1.1.0`.
> Si la versión actual es `1.0.1` y la última versión es `2.0.0` no se instalará la versión `2.0.0`.

### Aclaraciones

- No se debe subir la carpeta `node_modules` a un repositorio de Git.
- Se debe subir el archivo `package.json` y el archivo `package-lock.json` a un repositorio de Git.
- Para instalar todas las dependencias de un proyecto de Node.js, se debe ejecutar el comando `npm install` en la terminal.
- Cada dependencia instalada instalará sus propias dependencias en la carpeta `node_modules`.
- Para desinstalar una dependencia de un proyecto de Node.js, se debe ejecutar el comando `npm uninstall {package}` en la terminal.
- Para actualizar una dependencia de un proyecto de Node.js, se debe ejecutar el comando `npm update {package}` en la terminal.
- Para ver las dependencias de un proyecto de Node.js, se debe ejecutar el comando `npm list` en la terminal.

## Utilizando paquetes de Node.js

Para utilizar un paquete de Node.js, puedes importarlo en tu archivo JavaScript y utilizarlo en tu código.

```javascript
const picocolors = require('picocolors');

console.log(picocolors.green('Hola, mundo!'));
```

## Dependencias de desarrollo

Las dependencias de desarrollo son paquetes que se utilizan durante el desarrollo de un proyecto de Node.js, pero no se utilizan en la aplicación final. Las dependencias de desarrollo se guardan en el archivo `package.json` en la sección `devDependencies`.

Vamos a instalar como primera dependencia de desarrollo el paquete `standard` que es un paquete que nos permite darle formato al código.

```bash
npm install standard -D
```

Luego de haberla instalado se actualizara el archivo `package.json` con la dependencia de desarrollo que acabamos de instalar.

```json
{
  "name": "learn-node",
  "version": "1.0.0",
  ...
  "devDependencies": {
    "standard": "^17.1.0" // Dependencia de desarrollo instalada con su ultima versión debido al símbolo ^
  }
}
```

### Configuración de standard

Para configurar `standard` abrimos el archivo `package.json` y agregamos la siguiente configuración.

```json
{
  "name": "learn-node",
  "version": "1.0.0",
  ...
  "eslintConfig": {
    "extends": "standard"
  }
}
```

> Para que esto funcione tenemos que instalar `eslint` como extension de visual studio code.

## Iniciando un servidor HTTP

Para iniciar un servidor HTTP en Node.js, puedes utilizar el módulo `http` de Node.js. El módulo `http` proporciona una API para crear servidores HTTP en Node.js.

```javascript
const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('Nueva conexión') // Se imprime en la consola cada vez que se hace una nueva conexión
  res.end('Hola mundo') // Se envía la respuesta al cliente
})

server.listen(0, () => { // El puerto 0 significa que se elige un puerto disponible
  console.log(`Servidor en el puerto http://localhost:${server.address().port}`) // Se obtiene el puerto del servidor
})
```

### Obteniendo un puerto disponible

Vamos a crear una función que nos permita obtener un puerto disponible.

```javascript
const net = require('node:net') // Se importa el módulo net de Node.js que es un módulo para trabajar con redes

function getFreePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {  // Se intenta escuchar en el puerto deseado
      const { port } = server.address()
      server.close(() => resolve(port))
    })

    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') { // Si el puerto está en uso
        server.close(() => getFreePort(desiredPort + 1).then(port => resolve(port))) // Se intenta con el siguiente puerto
      } else {
        reject(error)
      }
    })
  })
}

module.exports = { getFreePort }
```

Con esto podemos obtener un puerto disponible para nuestro servidor HTTP.

> En un ambiente de producción no se recomienda utilizar una variable de entorno para el puerto, ya que nuestro proveedor de hosting puede asignar un puerto diferente.

```javascript
const http = require('node:http')

const desiredPort = process.env.PORT ?? 3000 // Se obtiene el puerto del entorno o se utiliza el puerto 3000

const server = http.createServer((req, res) => {
  console.log('Conexión') 
  res.end('Hola mundo')
})

server.listen(desiredPort, () => {  // Se obtiene el puerto del entorno o se utiliza el puerto 3000
  console.log(`Servidor en el puerto http://localhost:${server.address().port}`)
})
```

> El archivo `.env` es un archivo de configuración que se utiliza para guardar variables de entorno, pero este no es algo de node, hay unas dependencias que nos ayudan a leer un archivo `.env` como la dependencia `dotenv`.
