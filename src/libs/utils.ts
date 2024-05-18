import type { TypePropjects } from "@/components/home/ProjectsSection.astro"

export const $ = <T extends HTMLElement>(
	selector: string,
	context: Document | HTMLElement = document,
) => context.querySelector<T>(selector)

export const $$ = <T extends HTMLElement>(
	selector: string,
	context: Document | HTMLElement = document,
) => context.querySelectorAll<T>(selector)

const animationAppear = (selector: string) => {
	const element = $(selector)
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("appear")
				} else {
					entry.target.classList.remove("appear");
					(entry.target as HTMLElement).style.opacity = "0"
				}
			})
		},
		{ threshold: 0.5 },
	)

	observer.observe(element as HTMLElement)
}

export const animationAppearElements = (selector: string) => {
	const element = $$(selector)
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("appear")
				} else {
					entry.target.classList.remove("appear");
					(entry.target as HTMLElement).style.opacity = "0"
				}
			})
		},
		{ threshold: 0.5 },
	)

	element.forEach((el) => observer.observe(el))
}

export const animationTooltip = (level: string, tooltip: string) => {
	const levelElement = $(level) as HTMLElement
	const tooltipElement = $(tooltip) as HTMLElement

	levelElement.addEventListener("mouseover", () => {
		tooltipElement.style.display = "block"
		tooltipElement.style.animation = "fadeIn 0.5s forwards"
	})
	levelElement.addEventListener("mouseleave", () => {
		tooltipElement.style.animation = "fadeOut 0.5s forwards"
		setTimeout(() => {
			tooltipElement.style.display = "none"
		}, 500)
	})
}

export const getRamdonProjects = (projects: TypePropjects[], count: number) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return Array.from({ length: count }, () => projects[Math.floor(Math.random() * projects.length)])
}
export default animationAppear
