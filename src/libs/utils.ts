export const $ = <T extends HTMLElement>(
	selector: string,
	context: Document | HTMLElement = document,
) => context.querySelector<T>(selector);

export const $$ = <T extends HTMLElement>(
	selector: string,
	context: Document | HTMLElement = document,
) => context.querySelectorAll<T>(selector);

const animationAppear = (selector: string) => {
	const element = $(selector);
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("appear");
				} else {
					entry.target.classList.remove("appear");
					(entry.target as HTMLElement).style.opacity = "0";
				}
			});
		},
		{ threshold: 0.5 },
	);

	observer.observe(element as HTMLElement);
};

export const animationAppearElements = (selector: string) => {
	const element = $$(selector);
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("appear");
				} else {
					entry.target.classList.remove("appear");
					(entry.target as HTMLElement).style.opacity = "0";
				}
			});
		},
		{ threshold: 0.5 },
	);

	element.forEach((el) => observer.observe(el));
};

export default animationAppear;
