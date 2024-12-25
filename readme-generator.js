const fs = require("fs");
const path = require("path");


const packageData = require("./package.json");

const projectData = {
  name: packageData.name,
  description: packageData.description || "Sin descripción",
  installation: "npm install",
  usage: "npm start",
  license: packageData.license || "No especificada",
  author: packageData.author || "Anónimo",
  keywords: packageData.keywords
};


// Generar contenido para el README
const generateReadmeContent = (data) => `
# ${data.name}

${data.description}

## Keywords

\`${data.keywords.join(", ")}\`

## Descripción

${data.description}

## Instalación

\`\`\`
${data.installation}
\`\`\`

## Uso

\`\`\`
${data.usage}
\`\`\`

## Licencia

Este proyecto está bajo la licencia **${data.license}**.

## Autor

**${data.author}**
`;

// Ruta donde se creará el archivo README.md
const outputPath = path.join(__dirname, "README.md");

// Generar el archivo README.md
fs.writeFile(outputPath, generateReadmeContent(projectData), (err) => {
  if (err) {
    console.error("Error al generar el README.md:", err);
  } else {
    console.log("README.md generado con éxito en:", outputPath);
  }
});