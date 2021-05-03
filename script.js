// 辞書の場所を指定 extensionAPIを利用して相対的にパスを指定する
const dicPath = chrome.extension.getURL("./kuromoji/dict/")
const $reviewAll = document.getElementsByClassName('a-expander-content reviewText review-text-content a-expander-partial-collapse-content');
let reviewNum = 0;
let teviews = [];
// const xhr = nww XMLHttpRequest();

let xhr = new DOMParser()
let doc = xhr.parseFromString(stringContainingHTMLSource, "text/html")


const reviewAnlyze = (arg) => {
    kuromoji.builder({ dicPath: dicPath }).build(function (err, tokenizer) {
        if(err){
            console.log(err);
          } else {
            // tokenizer is ready
            let path = tokenizer.tokenize(arg);
            console.log(path);
          }
})};

while (reviewNum < $reviewAll.length ){
    reviewNum ++;
    let reviewText = $reviewAll[reviewNum].textContent;
    let reviewText = reviewText.replace(/r?\n/g, "");
    // let reviewText = reviewText.replace(/\s+/g, '');
    console.log(reviewText);
    reviewAnlyze(reviewText);
}

// let arg = "すもももももももものうち"
// kuromoji.builder({ dicPath: dicPath }).build(function (err, tokenizer) {
//     if(err){
//         console.log(err);
//       } else {
//         // tokenizer is ready
//         let path = tokenizer.tokenize(arg);
//         console.log(path);
//       }
//     });
