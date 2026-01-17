import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { CoursesTable } from './schema';
import 'dotenv/config';

async function testConnection() {
  try {
    console.log('Testing database connection...');
    console.log('DATABASE_URL defined:', !!process.env.DATABASE_URL);

    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not defined in environment variables');
    }

    // Create Neon SQL client
    const sql = neon(process.env.DATABASE_URL);
    const db = drizzle(sql);

    // Test query
    const result = await db.select().from(CoursesTable).limit(1);

    console.log('Connection successful!');
    console.log('Query result:', result);

    return { success: true, data: result };
  } catch (error) {
    console.error('Database connection error:', error);
    return { success: false, error };
  }
}

// Run the test
testConnection().then((result) => {
  if (!result.success) {
    console.error('Connection test failed');
    process.exit(1);
  }
});
