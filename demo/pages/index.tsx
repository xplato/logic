import { interweave, range } from '@xplato/logic'

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const Home = () => {
	console.log(interweave(arr1, arr2))
	console.log(range(0, 100, 5))

	return <p>Open yo' console</p>
}

export default Home
