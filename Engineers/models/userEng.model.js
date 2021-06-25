const { EngineersSchema } = require('./engineers.model.js');

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserEngineerSchema = new mongoose.Schema({
    
    firstname: {
        type: String,
        required: [ true, "Your firstname is required!"]
    },

    lastname: {
        type: String,
        required: [ true, "Your last name is required!"]
    },

    email: {
        type: String,
        required: [ true, "Email is required!"]
    },

    password: {
        type: String,
        required: [ true, "Password is required!"],
        minlength: [ 8, "Password must be at least 8 characters!"]
    }
}, { timestamps: true });

UserEngineerSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value);

UserEngineerSchema.pre("validate", function(next) {
    if(this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords do not match!");
    }
    next();
});


UserEngineerSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then((hashedPassword) => {
            this.password = hashedPassword;
            next();
        })
})


const UserEngineer = mongoose.model("UserEngineer", UserEngineerSchema);

module.exports = UserEngineer;