import React from 'react';

export default function About() {
    const authors = [ "Bhawna", "Ashish", "Milo"];
    return(
        <>
         <h1> About Page</h1>
         <p> This is About page</p>
         <ul>
             {authors.map(author=><li key={author}> {author} </li>)}
         </ul>
        </> );
}
