function clear(obj){
    obj.innerHTML = ''
}
///needs to be able to clear anything in any situation
function clearInp(obj){
    obj.value = ''
}
export {clear, clearInp}