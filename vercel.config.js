module.exports = {
  builds: [
    {
      src: 'frontend', // Especifica la ruta a tu carpeta frontend
      use: '@vercel/react', // Usa el constructor de React
      out: 'public', // Directorio de salida para los archivos compilados
    },
  ],
};
