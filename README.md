Showcases an issue with dexie and auto incrementing keys when used in create-react-app.

Adding a new entry to a dexie db fails, if a primary key with auto-increment is used in a create-react-app environment.

In this case, the tables schema is:  
`++id, text`

In order to test this:
1. Clone this repository
2. yarn install
3. yarn start


Once the page opens an error will be thrown (it will be different depending on the browser used).  
On Firefox, the thrown error will be:  
`Unhandled Rejection (DataError): Data provided to an operation does not meet requirements.
 DataError: Data provided to an operation does not meet requirements.`

Declaring a non-inbound primary key works. (like `++, text`)