let words = ["apple", "banana", "circle", "dolphin", "elf", "frog", "great", "hello", "internet", "joke", "kangaroo", "lump", "monkey", "narwhal" ];


function search(word) {
    for (let i = 0; i < words.length; i++) {
        if (words[i] === (word) ) {
            return words.includes(word);
        } 
    }
   return false;
}

function addWord(word){
    words.push(word);
    words.splice(words.length, 0, (word));

}

export {search, addWord};