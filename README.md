# mongoose-api-user-album-schema

## Working with mongoose schemas

Create a small API that can handle database interactions, while practising schema validation.

## Tasks

You will be creating a small REST API which connects to a database. This API will;

- create new users
- read existing users
- create articles
- read existing articles

### Task 1 - Getting ready

1. Setup your project with the dependencies [express](https://www.npmjs.com/package/express) and [mongoose](https://www.npmjs.com/package/mongoose)

2. Create the file `server.js`

3. Add the `express.json()` middleware to allow JSON to be read from the request `body` object

### Task 2 - Creating the User schema

1. Create the folder and file `models/User.js`

2. Create a mongoose schema in `User.js`, that matches following data sample;

```json
{
  "firstName": "Tony",
  "lastName": "Iommi",
  "bands": ["Black Sabbath", "Heaven and Hell"],
  "instrument": "guitar",
  "albums": [
    {
      "title": "Vol 4",
      "year": 1972
    },
    {
      "title": "Masters of Reality",
      "year": 1971
    }
  ],
  "birthday": "1950-12-09",
  "createdOn": 1649428492873
}
```

### Task 3 - Schema validation and model

1. Amend the schema so that the following fields are `required`:

   - `firstName`
   - `lastName`
   - `birthday`

2. Amend the schema so that the `createdOn` field will `default` to `Date.now`

3. Create a model for your schema, and export it

### Task 4 - Creating the Article schema and model

1. Create the file `Article.js` inside the `models` folder

2. Create a mongoose schema in `Artlcle.js`, that matches following data sample;

```json
{
  "title": "When was the last time you ate lasagna",
  "author": "604f3895f7c6568b0902115e",
  "keywords": ["food", "lasagna", "pasta"],
  "category": "Fooood",
  "comments": [
    {
      "text": "Bla bla bla i like pasta",
      "user": "604f3895f7c6568b0902115e"
    },
    {
      "text": "Bapa di bupi",
      "user": "604f3895f7c6568b0902115e"
    }
  ]
}
```

3. Amend the schema so that the following fields are `required`:

   - `title`
   - `author`

4. Create a model for your schema, and export it

### Task 4 - Creating endpoints for the User model

1. Create a `GET` endpoint for the path `/users` which **finds** **all** the users from the `User` model

2. Create a `POST` endpoint for the path `/users` which takes data from the request `body` object to **create** a new document in the `User` model

### Task 5 - Creating endpoints for the User model

1. Create a `GET` endpoint for the path `/articles` which **finds** **all** the users from the `Article` model

2. Create a `POST` endpoint for the path `/articles` which takes data from the request `body` object to **create** a new document in the `Article` model

## Bonus Task

### Create a new schema `album`

1. Create a separate `album` schema based on the properties in the `albums` field in the `user` schema

2. Modify the existing `albums` field to reference the new `album` schema as an array of subdocuments

### Create a new schema `comment`

1. Create a separate `comment` schema based on the properties in the `comments` field in the `article` schema

2. Modify the existing `comments` field to reference the new `comment` schema as an array of subdocuments
