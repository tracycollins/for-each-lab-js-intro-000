function iterativeLog(array, callback) {
  array.forEach(function(element,index, array){
    console.log(`${index}: ${element}`)
  })
}
