# What is GraphQL?
* GraphQL is a powerful query language
* Allows for a more flexible & efficient approach than REST

## A RESTful Approach
* Endpoint for getting a particular book:
  * domain.com/books/:id
  * title, genre, reviews, authorId
* Endpoint for getting the author info of that book:
  * domain.com/authors/:id
  * name, age, biography, bookIds  

## A GraphQL Approach
* Query to get book data and it's author data (AND the other books)
* Get back the book information as well as all of the other related information using one http request rather than using multiole requests using the REST
* You can also be selective about what data you want returned instead of returning all of it
