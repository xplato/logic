export const interweave = <T>([key, ...extras]: T[], values: T[] = []): T[] =>
	key === undefined ? values : [key, ...interweave(values, extras)]

export const range = (
	start: number,
	end: number,
	step: number = 1
): number[] => {
	return Array.from(
		{ length: (end - start) / step + 1 },
		(_, i) => start + i * step
	)
}
