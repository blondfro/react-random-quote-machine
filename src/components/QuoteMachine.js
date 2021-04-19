import React, {useEffect, useState} from 'react';
import {quoteData} from '../data/quoteData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
        <div id="quote-box" className="justify-content-center">
            <div id="text">
                <h2>Author</h2>
                <h6 id="author">{currAuthor.author}</h6>
                <h4>Quote</h4>
                <p id="quote">{currAuthor.quote}</p>
            </div>
            <div>
                <span>
                    <a id="tweet-quote" href="https://twiter.com/">
                        <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            size="2x"
                            aria-hidden="true"
                            className="fa-twitter"
                        />
                    </a>
                </span>
                <button
                    id="new-quote"
                    type="button"
                    className="btn btn-primary"
                    onClick={getQuote}>Next Quote</button>
            </div>

        </div>
    )
}

export default QuoteMachine;