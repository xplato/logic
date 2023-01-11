export const deepClone = <T>(object: T): T => {
	if (object === null || typeof object !== "object") {
		return object
	}

	if (Array.isArray(object)) {
		return object.map(item => deepClone(item)) as any
	}

	const copiedObject = {} as T
	for (const key in object) {
		// @ts-ignore
		if (object.hasOwnProperty(key)) {
			copiedObject[key] = deepClone(object[key])
		}
	}
	return copiedObject
}

export const omitFields = <T, Fields extends keyof T>(
	object: T,
	fields: Fields[]
): Omit<T, Fields> => {
	return Object.assign(
		{},
		object,
		Object.assign({}, ...fields.map(key => ({ [key]: undefined })))
	)
}

export const pickFields = <T, Fields extends keyof T>(
	object: T,
	fields: Fields[]
): Pick<T, Fields> => {
	const newObject = {} as Pick<T, Fields>
	for (const field of fields) {
		newObject[field] = object[field]
	}
	return newObject
}

export const removeFields = <T, Fields extends keyof T>(
	object: T,
	fields: Fields[]
): Pick<T, Exclude<keyof T, Fields>> => {
	const newObject = deepClone(object)
	for (const field of fields) {
		delete newObject[field]
	}
	return newObject
}
