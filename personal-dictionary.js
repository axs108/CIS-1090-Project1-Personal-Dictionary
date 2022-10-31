let words = [];


function search(word){
    return words.includes(word);
}

function addWord(word){
    words.push(word);
}

export {search, addWord};