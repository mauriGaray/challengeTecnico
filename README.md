
# Technical Challenge: User Login, and Access Token
In this proyect  we build an endpoint for new users to sign up with full name, email, and password. Ensure secure password hashing and input validation. Then another endpoint for users to authenticate with their credentials. Generate a secure access token (JWT) upon successful login and finally we serve the access token to authenticated users for subsequent requests.

The AppChallenge project consists of two main parts: client and server. In the 'client' folder, we have developed a user interface using React along with Tailwind CSS templates to streamline the development process. Additionally, we have integrated the RAYAPP logo to enhance the visual aesthetics of the application.

On the other hand, in the 'server' folder, we have implemented an API using Node.js to handle user login and registration requests. We have chosen to structure our application using the Model-View-Controller (MVC) design pattern (excluding the views part) to neatly organize our layers of business logic, data access, and presentation. Furthermore, we have adhered to the REST design principle to establish efficient and consistent communication between the client and the server. This ensures well-defined responsibilities in all aspects


## Tech Stack

**Client:** React,Axios, TailwindCSS.

**Server:** Node, Express, JWT, MySQL, Bcrypt.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_HOST`
`DB_USER`
`DB_PASS`
`DB_DATABASE`
`SECRET_KEY`

## Documentation

La documentación hecha con Swagger UI se encuentra en el endpoint /api-docs.

# challengeTecnico
