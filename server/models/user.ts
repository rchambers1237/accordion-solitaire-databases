import mongoose, { Schema, Document } from 'mongoose';

interface CardObject {
    rank: number,
    suit: string,
    className: string,
}

interface GameState {
    tableau: CardObject[];
    startTime: Date; // Should these be arrays to accmodate stops and restarts of the same game? The indices will align the stops and starts.
    endTime?: Date; // Optional property
}

interface UserDocument extends Document {
    id: string;
    email: string;
    username: string;
    password: string;
    gamestate: GameState; // Strongly typed GameState
}
  
const GameStateSchema = new Schema<GameState>({
    tableau: { type: Schema.Types.Mixed, required: true }, // Use Schema.Types.Mixed for flexible objects
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: false }, // Optional property
});
  
const UserSchema = new Schema<UserDocument>({
    id: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    gamestate: { type: GameStateSchema, required: true }, // Embed GameStateSchema
});
  
const Users = mongoose.model<UserDocument>('User', UserSchema);
  
export default Users;
