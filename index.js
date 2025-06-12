const messages = []

function writeCards(names,event){
    for(let name of names){
        let thanks = `Thank you, ${name}, for the wonderful ${event} gift!`
        messages.push(thanks)
    }
    console.log(messages)
    return messages;
}

writeCards();

function countDown(num){
    for(let i=num;i>=0;i--){
        console.log(i)
    }
}

countDown();