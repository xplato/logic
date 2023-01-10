import {
	interweave,
	range,
	generateMods,
	deepCopy,
	omitFields,
	pickFields,
	removeFields,
} from "@xplato/logic"

const Home = () => {
	// Array
	const arr1 = [1, 2, 3]
	const arr2 = [4, 5, 6]

	console.log("interweave", interweave(arr1, arr2))
	console.log("range", range(0, 100, 5))

	// Dom
	const mods = generateMods({
		isOpen: true,
		isClosed: false,
		size: "sm",
		color: "red",
		light: true,
		dark: false,
	})
	console.log("generateMods", mods)

	// Skipping smoothScrolTo for now

	// Object
	const deepObject = {
		a: 1,
		b: {
			c: 2,
			d: {
				e: 3,
			},
		},
	}

	console.log("deepCopy", deepCopy(deepObject))

	const obj1 = { a: 1, b: 2, c: 3 }

	console.log("omitFields", omitFields(obj1, ["a", "b"]))
	console.log("pickFields", pickFields(obj1, ["a"]))
	console.log("removeFields", removeFields(obj1, ["a", "b"]))

	return <p>Open yo' console</p>
}

export default Home
