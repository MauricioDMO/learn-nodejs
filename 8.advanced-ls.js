const fs = require('node:fs/promises');
const path = require('node:path');

const dir = process.argv[2] ?? './';

async function ls (dir) {
  let files
  try {
    files = await fs.readdir(dir)
  } catch (err) {
    console.error(`No se pudo leer el directorio ${dir}`)
    process.exit(1)
  }

  const filesPromises = files.map(file => {
    const filePath = path.join(dir, file)

    try {
      return fs.stat(filePath) // Información del archivo
    } catch (err) {
      console.error(`No se pudo leer el archivo ${file}`)
      process.exit(1)
    }
  })

  Promise.all(filesPromises)
    .then(filesStats => {
      const maxFileNameLength = Math.max(...files.map(file => file.length))

      filesStats.forEach((stats, i) => {
        const fileType = stats.isDirectory() ? 'D -' : 'F -';
        const file = files[i];
        const fileSize = `${(stats.size / 1024).toFixed(2)} KB`;
        const lastModified = stats.mtime.toLocaleString();

        console.log(`${fileType} ${file.padEnd(maxFileNameLength)} ${fileSize.padStart(8)} - ${lastModified}`);
      })
    }
  )
}

ls(dir);