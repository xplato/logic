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
