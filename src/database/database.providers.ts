import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const database = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;

console.log()

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(`mongodb+srv://${database}:${password}@cluster0.8yjeswn.mongodb.net/?retryWrites=true&w=majority`),
    },
];