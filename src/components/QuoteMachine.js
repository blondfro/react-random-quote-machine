import React, {useEffect, useState} from 'react';
import {quoteData} from '../data/quoteData';


function QuoteMachine() {
    const [authorQuotes, setAuthorQuotes] = useState(quoteData);
    const [currAuthor, setCurrAuthor] = useState({
        author: '',
        quote: ''
    })

    useEffect(()=> {
        // on load get an initial quote.
        getQuote()

    }, []);


    const getQuote = () => {
        let num = Math.floor(Math.random() * authorQuotes.length);
        console.log('the number is: ', num);
        let currentVal = authorQuotes[num];
        console.log('current quote: ', currentVal)
        setCurrAuthor({...currentVal});
    }

    return (
        <div>
            <h1>{currAuthor.author}</h1>
            <p>{currAuthor.quote}</p>
            <button onClick={getQuote}>Next</button>
        </div>
    )
}

export default QuoteMachine;