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
    bio: "Soy Antonio Dromundo, un desarrollador de software, apasionado viajero y eterno aprendiz de la vida. Mi búsqueda no se limita a escribir código; busco experiencias que me transformen, lugares que me desafíen y personas que me inspiren. Cuando no estoy frente a una pantalla, estoy explorando el mundo, entrenando Jiu Jitsu Brasileño o reflexionando sobre el impacto que cada viaje tiene en mi crecimiento personal. En “Viajero Fachero”, comparto mis aventuras, proyectos y aprendizajes, con el objetivo de inspirar a otros a tomar las riendas de su vida, explorar lo desconocido y encontrar su propio camino.",
  },
 
];




