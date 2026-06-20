import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,


        },
        password: {
            type: String,
            required: true
        },
        mobile: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format."]

        }
    },
    { timestamps: true }

)

//hash passowrd before saving
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    // next();
})

//compare passowrd while login
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};
const User = mongoose.model("User", userSchema)
export default User


//bcrypt jwt token 