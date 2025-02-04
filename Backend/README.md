# User Authentication API

## User Login Endpoint

### Endpoint: `/users/login`

### Method: POST

### Description
This endpoint allows users to log in by providing their email and password. Upon successful authentication, it returns a JSON Web Token (JWT).

### Request Body
The request body must be in JSON format and contain the following:

- `email` (String, required): User's email address (must be a valid email address).
- `password` (String, required): User's password (must be a valid password).

---

## User Registration Endpoint

### Endpoint: `/users/register`

### Method: POST

### Description
This endpoint is used to register a new user. It validates the input data, checks if the email is already in use, hashes the password, creates a new user, and returns a JSON Web Token (JWT) along with the user data.

### Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).

#### Example Request:
```json
{
  "fullname": {
    "firstname": "SampleUserName",
    "lastname": "SampleUserName"
  },
  "email": "Sample@sample.com",
  "password": "password123"
}

