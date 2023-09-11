//select btn and add event listener

const btn = document.querySelector('#new-quote');
const text = document.querySelector('#text');
const author = document.querySelector('#author');

async function getQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json()

    // Output the quote and author name
    text.innerHTML = quote.content;
    author.innerHTML = quote.author;
    console.log(quote.content)
    console.log(`- ${quote.author}`)
};

window.addEventListener('DOMContentLoaded', getQuote);

btn.addEventListener('click', getQuote);

//tweet quote
const tweetBtn = document.querySelector('#tweet-quote');
tweetBtn.addEventListener('click', tweetQuote);

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text.innerHTML} - ${author.innerHTML}`;
    window.open(twitterUrl, '_blank');
}

