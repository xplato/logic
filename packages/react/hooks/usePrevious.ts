// This hook tracks the state changes of `value`
// and returns the previously saved value.

import { useRef, useEffect } from "react"

export const usePrevious = <T>(value: T): T => {
	const ref = useRef<T>()

	useEffect(() => {
		ref.current = value
	}, [])

	if (ref.current) {
		return ref.current
	}

	return value
}