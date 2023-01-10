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

export const capitalize = (word: string) => {
	return word.charAt(0).toUpperCase() + word.slice(1)
}
