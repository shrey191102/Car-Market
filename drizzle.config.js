import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { config } from "dotenv";
config({ path: '.env.local' });

export default defineConfig({
   out: './drizzle',
  schema: './configs/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_Jk1qwm6IWvdx@ep-plain-block-a8coto45-pooler.eastus2.azure.neon.tech/neondb?sslmode=require'
  },
});
