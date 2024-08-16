/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
      unoptimized: true, // Desactiva la optimización de imágenes
  },
};

export default nextConfig;
