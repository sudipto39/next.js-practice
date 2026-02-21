import mongoose, {Schema, Document} from "mongoose";
// import { unique } from "next/dist/build/utils";
export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
}

const UserSchema: Schema<User> = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        default: "user"
    },
    verifyCode: {
        type: String
    },
    verifyCodeExpiry: {
    type: Date,
    required: [true, 'Verify Code Expiry is required'],
  },
    isVerified: {
        type: Boolean,
        default: false
    }
})

const User = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);

export default User;