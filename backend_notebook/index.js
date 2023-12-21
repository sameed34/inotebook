
const connectToMongo = require("./Db");
const express = require("express");
const router = require("./routes/Router");
const app = express();
const cors = require('cors');
const port = 3001;

 app.use(cors());
 app.use(express.json());
 app.use("/api", router);
 app.listen(port, () => {
  console.log(`iNoteBook listening on port http://localhost:${port}`);
  console.log('Connected MongoDb')
});
connectToMongo();
