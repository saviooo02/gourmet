
# Gourmet

(./src/assets/Gourmet_img.png)

This AI-Powered Recipe Generator is a web application that uses the GroqCloud API to generate recipes based on user-inputted ingredients, cooking time, and cuisine type. The frontend is built with React and styled with Tailwind CSS, while the backend is powered by Express.js and Node.js


## Features

- **Ingredient Input**: Users can input various ingredients, specify cooking time, and choose a cuisine type.
- **AI-Generated Recipes**: The application utilizes GroqCloud API to generate creative and unique recipes.
- **Responsive Design**: The interface is fully responsive, making it accessible on all device types.

## Prerequisites

- Node.js: Ensure that Node.js is installed on your machine.

- GroqCloud API Key: Sign up for a GroqCloud account and get your API key.



## Getting Started


Clone the Repository

```bash
  git clone https://github.com/saviooo02/gourmet.git
  cd recipe-generator
```
Install Dependencies

- For the frontend

 ```bash
  cd frontend
  npm install
```
- For the backend

 ```bash
  cd backend
  npm install
```
Configure Environment Variables

```bash
GROQCLOUD_API_KEY=your_groqcloud_api_key
```
Running the Project

- Start the backend server
```bash
cd backend
npm start
```
- Start the Frontend
```bash
cd frontend
npm run dev
```
The frontend should be running at http://localhost:5173 and the backend at http://localhost:3000.
## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.

