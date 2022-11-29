export const formatText = (
	text: string,
	firstWord: string,
	secondWord: string
) => {
	const targetOne = text.indexOf(firstWord)
	const targetTwo = text.indexOf(secondWord)
	const firstPart = text.substring(0, targetOne)
	const secondPart = text.substring(targetOne + firstWord.length, targetTwo)
	const thirdPart = text.substring(targetTwo + secondWord.length, text.length)
	const arrList = thirdPart.split('. ')

	return { firstPart, secondPart, arrList }
}
