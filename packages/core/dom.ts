import { kebabize } from "./string"

interface Mods {
	[key: string]: any
}

export const generateMods = (mods: Mods): string | string[] => {
	const keys = Object.keys(mods)

	if (keys.length === 0) {
		return ""
	}

	return keys.map(key => {
		const value = mods[key]

		if (value === true) {
			return kebabize(key)
		}

		if (!value) {
			return ""
		}

		return `${kebabize(key)}-${
			typeof value === "number" ? value : kebabize(value)
		}`
	})
}

export const smoothScrollTo = (elementID: string) => {
	const element = document.getElementById(elementID)
	if (element) {
		element.scrollIntoView({ behavior: "smooth" })
	}
}
