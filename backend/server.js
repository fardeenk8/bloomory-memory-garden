const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const userRoutes = require('./routes/userRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('BloomoryAI backend is running');
});

const PORT = process.env.PORT || 5000;

const startServer = () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    startServer();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    startServer();
  });
