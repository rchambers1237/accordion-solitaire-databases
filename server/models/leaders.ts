import mongoose, { Schema, Document } from 'mongoose';

interface UserData {
    userId: string;
    userName: string;
    time: string;
}

interface LeadersDocument extends Document {
    list: UserData[]; // Defines list as an array of UserData objects
}
  
const LeadersSchema = new Schema<LeadersDocument>({
    list: {
        type: [
            {
                userId: { type: String, required: true },
                userName: { type: String, required: true },
                time: { type: String, required: true },
            },
        ],
        required: true,
    },
});
  
const Leaders = mongoose.model<LeadersDocument>('Leader', LeadersSchema);
  
export default Leaders;
