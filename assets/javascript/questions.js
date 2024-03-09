//* An array of objects containing questions, answer options, and correct answers *\\

const questions = [

    {
        questions: "What kind of language is JavaScript?",
        options: ["Object-Oriented", "Object-Based", "Hypertext-Markup-Language", "None of the above"],
        correctAnswer: "Object-Oriented"
    },

    {
        questions: "What does API stand for?",
        options: ["Application Programming Interface", "Automated Programming Interface", "Automated Protocol Interface", "None of the above"],
        correctAnswer: "Application Programming Interface"
    },
        
    {
        questions: "Which HTTP method is typically used to retrieve data from a server?",
        options: ["GET", "POST", "PUT", "DEELET"],
        correctAnswer: "GET"
    },

    {
        questions: "Which status code does the server return if the requested resource was not found?",
        options: ["200", "400", "404", "500"],
        correctAnswer: "404"
    },
    
    {
        questions: "Which content type is commonly used for sending data to the server?",
        options: ["application/json", "text/html", "application/xml", "text/plain"],
        correctAnswer: "application/json"
    },
    
    {
        questions: "What tool can be used to test and debug APIs?",
        options: ["Postman", "Insomnia", "cURL", "All of the above"],
        correctAnswer: "Postman"
    },
    
    {
        questions: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "JavaScript Ordered Notation", "JavaScript Online Notation"],
        correctAnswer: "JavaScript Object Notationn"
    },
    
    {
        questions: "Which HTTP status code indicatea a successful request?",
        options: ["200", "300", "400", "500"], 
        correctAnswer: "200"
    },
    
    {
        questions: "What does CORS stand for?",
        options: ["Cross-Origin Resource Sharing", "Cross-Origin Request Security", "Cross-Origin Resource Security"], 
        correctAnswer: "Cross-Origin Resource Sharing"
    },
    
    {
        questions: "Which HTTP method is used to update data on the server?",
        options: ["GET", "POST", "PUT", "DELETE"], 
        correctAnswer: "PUT"
    },
    
    {
        questions: "What is the maximun length of a URL in most web browsers?",
        options: ["256 characters", "512 characters", "1024 characters", "It varies depending on the browser"], 
        correctAnswer: "It varies depending on the browser" 
    },
    
    {
        questions: "What is the purpose of authentication in API's?",
        options: ["To verify the identity of users or clients", "To encrypt data during transmission", "To compress data before sending", "To define the structure of API responses"], 
        correctAnswer: "To verify the identity of users or clients" 
    },
];

module.exports = questions;















