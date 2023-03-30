// const input = document.querySelector('.search')
// const ulList = document.querySelectorAll('li')

// const findSentence = () => {

//     ulList.forEach(element => {
//         const innerLiElement = element.innerHTML.toLowerCase()

//         if(innerLiElement.includes(input.value.toLowerCase())) {
//             element.style.display = 'block'
//         } else {
//             element.style.display = 'none'
//         }
//     })

// }

// input.addEventListener('keyup', findSentence)

// Second way to solve this problem.

const input = document.querySelector('.search')
const liElements = document.querySelectorAll('li')

const searchEninge = e => {

    const text = e.target.value.toLowerCase()
    console.log(text);

    liElements.forEach(element => {
        const lowerTextOfLiElement = element.textContent.toLowerCase()
        if(lowerTextOfLiElement.indexOf(text) !== -1) {
            element.style.display = 'block'
        } else {
            element.style.display = 'none'
        }
    })
}

input.addEventListener('keyup', searchEninge)

// third way solve

// const input = document.querySelector('input');
// const liItems = document.querySelectorAll('li');

// const filterList = () => {
// 	liItems.forEach((item) => {
// 		const match = new RegExp(input.value, 'i').test(item.textContent);

// 		if (!match) {
// 			item.style.display = 'none';
// 		} else {
// 			item.style.display = 'block';
// 		}
// 	});
// };

// input.addEventListener('keyup', filterList);
