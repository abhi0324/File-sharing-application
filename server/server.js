import express from 'express';
import router from './routes/routes.js';
import DBconnection from './database/db.js';
import cors from 'cors';
const app = express();


app.use(cors());
app.use('/', router);

DBconnection();
 
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});