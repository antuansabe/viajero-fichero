export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Antonio Dromundo",
    slug: "antonio-dromundo",
    image: "./src/assets/authors/antonio.jpg",
    bio: "Soy un desarrollador de software apasionado por viajar, explorar nuevos destinos y capturar momentos a través de la fotografía. Cuando no estoy escribiendo código, estoy recorriendo el mundo, reflexionando sobre mis experiencias y encontrando inspiración en cada rincón. En “Viajero Fachero”, combino mis dos pasiones, compartiendo mis proyectos, reflexiones y fotos que narran las historias de mis aventuras globales.",
  }
  
];
