/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",            // build => out/
  images: { unoptimized: true } // next/image için zorunlu (aksi halde export hata verir)
};
export default nextConfig;
