import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Categorie from '../models/Categorie.js';

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.DB_URI);
    const cat = new Categorie({ name: 'General' });
    const saved = await cat.save();
    console.log('Created category id:', saved._id);
    await mongoose.disconnect();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
