/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import AstroLogo from "@/components/svg/AstroLogo.astro"
import Express from "@/components/svg/Express.astro"
import Java from "@/components/svg/Java.astro"
import JavaScript from "@/components/svg/JavaScript.astro"
import Nest from "@/components/svg/Nest.astro"
import Next from "@/components/svg/Next.astro"
import NodeJs from "@/components/svg/NodeJs.astro"
import Oracle from "@/components/svg/Oracle.astro"
import React from "@/components/svg/React.astro"
import Spring from "@/components/svg/Spring.astro"
import Tailwind from "@/components/svg/Tailwind.astro"
import TypeScript from "@/components/svg/TypeScript.astro"

export const frontMatter = {
	title: "Home | Víctor Manuel Ordiales García | Veriel.dev",
	description:
		"Víctor Manuel Ordiales García is a software engineer with experience in web development, mobile development, and cloud computing.",
	canonical: "https://veriel.dev",
}
type TypeInput = astroHTML.JSX.HTMLInputTypeAttribute;
export const homePage = {
	heroSection: {
		title: "Hola, Soy <span>Veriel.dev</span>",
		description:
			"¡Hola! Soy Víctor Manuel Ordiales García, <span style='color: #fff;'>Desarrollador Web Full Stack</span>, <span style='color: #fff;'>Graduado en Física</span> y actualmente trabajo en <span style='color: #fff;'>Viewnext S.A</span>. Me apasiona el mundo de la programación y el desarrollo web, combinando mi experiencia técnica con una sólida formación científica para crear soluciones digitales innovadoras y eficientes.",
	},
	skillsSection: {
		title: "Habilidades",
	},
	skills: [
		{ title: "JavaScript", icon: JavaScript },
		{ title: "TypeScript", icon: TypeScript },
		{ title: "NestJS", icon: Nest },
		{ title: "React", icon: React },
		{ title: "NextJS", icon: Next },
		{ title: "NodeJS", icon: NodeJs },
		{ title: "Express", icon: Express },
		{ title: "Java", icon: Java },
		{ title: "Tailwind", icon: Tailwind },
		{ title: "Astro", icon: AstroLogo },
		{ title: "Spring", icon: Spring },
		{ title: "OWCS", icon: Oracle },
	],
	experienceSection: {
		title: "Experiencia",
	},
	experiences: [
		{
			title: "Desarrollador OWCS",
			company: "Viewnext S.A",
			date: "Agosto 2021 - Febrero 2023",
			description:
				"Realización y mantenimiento de proyectos y evolutivos dentro del marco del CMS Oracle Web Center Site (OWCS)",
		},
		{
			title: "Desarrollador Full Stack",
			company: "Viewnext S.A",
			date: "Febero 2023 - Actualidad",
			description:
				"Realización y mantenimiento de proyectos y evolutivos Full Stack. Todo esto hacienco uso de Spring Framework para el Backend y OWCS como CMS",
		},
		{
			title: "I + D",
			company: "eCapure3D S.L",
			date: "Abril 2021 - Junio 2021",
			description:
				"Algoritmos predictivos y análisis de datos dentro de un  modelo 3D basado en variables climáticas",
		},
	],
	aboutSection: {
		title: "Sobre Mi",
		description:
			"Graduado en Física y desarrollador full stack con habilidades sólidas en JavaScript (JS), TypeScript (TS), Java y sistemas de gestión de contenido como Oracle WebCenter Sites (OWCS).<br/> <br/>Mi formación en Física me ha proporcionado una mentalidad analítica y resolutiva, mientras que mi experiencia en desarrollo me permite crear soluciones técnicas eficientes y escalables. <br/> <br/>He trabajado en proyectos desafiantes que requieren un enfoque meticuloso y estratégico para la implementación de sistemas de gestión de contenido que optimicen la experiencia del usuario y la eficiencia operativa. Estoy comprometido a seguir creciendo profesionalmente y aplicar mis habilidades para enfrentar nuevos desafíos en el ámbito del desarrollo de software y la gestión de contenido en línea.",
	},
	projectsSection: {
		title: "Proyectos",
	},
	projects: [
		{
			title: "To Do React ",
			description: "Listado de tareas realizada en React",
			github: "https://github.com/samuraiOrDev/To-Do-React",
			demo: "https://tod-do-react.vercel.app/",
			article: "#project-1",
		},
		{
			title: "Portfolio Web",
			description: "Portafolio web realizado en NextJS",
			github: "https://github.com/samuraiOrDev/samuraiordev.vercel.app/",
			demo: "https://samuraiordev.vercel.app/",
			article: "#project-2",
		},
		{
			title: "Pokedex",
			description: "Pokedex realizado en NextJs",
			github: "https://github.com/samuraiOrDev/samuraiordev.vercel.app/",
			demo: "https://pokedex-samuraiordev.vercel.app/",
			article: "#project-3",
		},
		{
			title: "Blog Personal",
			description:
				"Un blog personal donde puedes compartir tus pensamientos y experiencias.",
		},
		{
			title: "E-commerce App",
			description:
				"Una aplicación de comercio electrónico donde los usuarios pueden comprar y vender productos.",
		},
		{
			title: "Gestor de Finanzas",
			description:
				"Una herramienta para gestionar tus finanzas personales, realizar seguimiento de gastos e ingresos.",
			github: "https://github.com/samuraiOrDev/GestorFianzas",
		},
		{
			title: "Plataforma de Aprendizaje",
			description:
				"Una plataforma educativa en línea que ofrece cursos sobre una variedad de temas.",
			demo: "https://pokedex-samuraiordev.vercel.app/",
			article: "#project-4",
		},
		{
			title: "App de Recetas",
			description:
				"Una aplicación donde puedes descubrir y compartir recetas de cocina.",
			demo: "https://pokedex-samuraiordev.vercel.app/",
			article: "#project-4",
		},
	],
	formContactSection: {
		title: "Contacto",
		subTitle: "Gracias por visitar mi web personal!!",
		description:
			"Espero que hayas disfrutado explorando mi trbajo y que hayas obtenido una idea clara de mis habilidades y experiencia",
		email: "vmordialesg@gmail.com",
		tel: "685394859",
		inputs: {
			name: {
				type: "text" as TypeInput,
				name: "name",
				placleholder: "Nombre y Apellidos",
			},
			email: {
				type: "email" as TypeInput,
				name: "email",
				placeholder: "Correo electrónico",
			},
			tel: {
				type: "tel" as TypeInput,
				name: "phone",
				placeholder: "Teléfono",
			},
			website: {
				type: "text" as TypeInput,
				id: "web-site",
				name: "website",
				placeholder: "Tu web personal (si existe)",
			},
			message: {
				name: "message",
				rows: "5",
				placeholder: "En qué puedo ayudarte ?",
			},
		},
	},
}
