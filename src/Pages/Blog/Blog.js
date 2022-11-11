import React from 'react';

const Blog = () => {
    return (
        <div className='mb-4'>
            <div className="container mx-auto mt-5 p-12">
                <h2 className='text-4xl text-primary text-center'>Difference between SQL and NoSQL</h2>
                <h2 className='text-2xl text-primary'>SQL Database</h2>
                <p className='text-teal-800 text-xl'>SQL stands for Structured Query Language. It's used for relational databases. A SQL database is a collection of tables that stores
                    a specific set of structured data.</p>
                <h2 className='text-2xl text-primary'>Non SQL Database</h2>
                <p className='text-teal-800 text-xl'>NoSQL databases (aka "not only SQL") are non-tabular databases and store data differently than relational tables. NoSQL databases
                    come in a variety of types based on their data model. The main types are document, key-value, wide-column, and graph. They provide
                    flexible schemas and scale easily with large amounts of data and high user loads.</p>
                <h2 className='text-3xl text-black'>Main Differences</h2>
                <h2 className='text-2xl text-primary'>Type</h2>
                <p className='text-teal-800 text-xl'>SQL databases are primarily called as Relational Databases (RDBMS);
                    whereas NoSQL database are primarily called as non-relational or distributed database. </p>
                <h2 className='text-2xl text-primary'>Language</h2>
                <p className='text-teal-800 text-xl'>SQL databases use structured query language and have a pre-defined schema for defining and manipulating data.
                    SQL is one of the most versatile and widely used query languages available, making it a safe choice for many use cases.
                    It’s perfect for complex queries.
                    NoSQL databases have dynamic schemas for unstructured data, and the data is stored in many ways.
                    We can use column-oriented, document-oriented, graph-based, or KeyValue store for our data. </p>
                <h2 className='text-2xl text-primary'>Database Scaling</h2>
                <p className='text-teal-800 text-xl'>In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by
                    increasing things like RAM, CPU or SSD.
                    But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or
                    adding more servers in your NoSQL database.</p>
                <h2 className='text-2xl text-primary'>Structure</h2>
                <p className='text-teal-800 text-xl'>SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or
                    wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such
                    as an accounting system or for legacy systems that were built for a relational structure. </p>

            </div>
            <div className="container mx-auto mt-5 p-12">
                <h2 className='text-4xl text-primary text-center'>What is JWT, and how does it work?</h2>
                <p className='text-teal-800 text-xl mb-2'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
                    Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that
                    the claims cannot be altered after the token is issued.</p>
                <p className='text-teal-800 text-xl'>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties.
                    What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid
                    for, or what permissions the client has been granted.
                </p>
                <p className='text-teal-800 text-xl'>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization
                    format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    Once decoded, you will get two JSON strings:
                    The header and the payload.
                    The signature. </p>

            </div>
            <div className="container mx-auto mt-5 p-12">
            <h2 className='text-4xl text-primary text-center mb-5'>What is the difference between javascript and NodeJS?</h2>
            <h2 className='text-2xl text-black'>Node JS</h2>
            <p className='text-teal-800 text-xl'>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
            <h2 className='text-2xl text-black'>Javascript</h2>
            <p className='text-teal-800 text-xl'>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
            </div>
            <div className="container mx-auto mt-5 p-12">
            <h2 className='text-3xl text-primary text-center mb-5'>How does NodeJS handle multiple requests at the same time?</h2>
                <p className='text-teal-800 text-xl mb-2'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
                <p className='text-teal-800 text-xl'>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blog;