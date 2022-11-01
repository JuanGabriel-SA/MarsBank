export default function createId(array) {
    if(array.length == 0) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == array.length)
            return array.length + 1
    }
    return array.length
}