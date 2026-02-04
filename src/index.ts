import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());

app.listen(8080, () => {
  console.log('Server is running on port 3000');
})

export default app;