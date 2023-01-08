export const removeWhitespaceAndMakeLowerCase = (str: string) => {
	return str.toLowerCase().replace(/\s/g, "")
}

export const kebabize = (str: string) => {
	return str
		.replaceAll(" ", "-")
		.split("")
		.map((letter, index) => {
			if (letter === "-") {
				return "-"
			}

			return letter.toUpperCase() === letter
				? `${index !== 0 ? "-" : ""}${letter.toLowerCase()}`
				: letter
		})
		.join("")
}

export const toSlug = (str: string) => {
	return str.replaceAll(" ", "-").toLowerCase()
}

export const capitalize = (word: string) => {
	return word.charAt(0).toUpperCase() + word.slice(1)
}
