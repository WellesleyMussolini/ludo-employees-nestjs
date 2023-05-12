import * as mongoose from 'mongoose';
const { Types } = mongoose;

export const EmployeeSchema = new mongoose.Schema({
    id: Types.ObjectId,
    name: String,
    hired: Boolean,
    role: String,
});