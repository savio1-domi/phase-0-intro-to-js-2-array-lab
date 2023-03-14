// Write your solution here!
/* Cats array is assigned an
initial value of ["Milo", "Otis", "Garfield"] */
let cats = ['Milo', 'Otis', 'Garfield']
// appends a cat to the end of the cats array
function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}
destructivelyAppendCat('Ralph')
// prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}
destructivelyPrependCat('Bob')
// Removes Last element in the array
function destructivelyRemoveLastCat(){
    let destructivelyRemoveLastCat = cats.pop()
    return destructivelyRemoveLastCat
}
destructivelyRemoveLastCat()
// Removes Last element in the array
function destructivelyRemoveFirstCat(){
    let destructivelyRemoveFirstCat = cats.shift()
    return destructivelyRemoveFirstCat
}
destructivelyRemoveFirstCat()
/* appends a cat to the cats array
   and returns a new array,
   leaving the cats array unchanged */
function appendCat(name){
    const catArr = [...cats, name]
    return catArr
}
appendCat('Broom')
/* prepends a cat to the cats array and returns
   new array, leaving the cats array unchanged */
function prependCat(name){
    const catArr = [name, ...cats]
    return catArr
}
prependCat('Arnold')
/* removes the first cat in the cats array
   and returns a new array, leaving the cats
   array unchanged */
function removeFirstCat(){
    const firstItem = cats.slice(1)
    return firstItem
}
removeFirstCat()
/* removes the first cat in the cats array
   and returns a new array, leaving the cats
   array unchanged */
function removeLastCat(){
    const lastItem = cats.slice(0,2)
    return lastItem
}
removeLastCat()







