const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserManagerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [ true, "Your firstname is required!"],
        minlength: [1, "Your first name must be more than 1 character long"]
    },

    lastname: {
        type: String,
        required: [ true, "Your last name is required!"],
        minlength: [1, "Your last name must be more than 1 character long"]
        
    },

    position: {
        type: String,
        required: [ true, "Your position is required!"],
        minlength: [ 3, "Your position must be more than 3 characters long"]
    },

    email: {
        type: String,
        required: [ true, "Email is required!"],
        minlength: [5, "Email must be more than 5 characters long"]
    },

    password: {
        type: String,
        required: [ true, "Password is required!"],
        minlength: [ 8, "Password must be at least 8 characters!"]
    }
}, { timestamps: true });

UserManagerSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value);

UserManagerSchema.pre("validate", function(next) {
    if(this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords do not match!");
    }
    next();
});

UserManagerSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then((hashedPassword) => {
            this.password = hashedPassword;
            next();
        })
})


const UserManager = mongoose.model("UserManager", UserManagerSchema);

module.exports = UserManager;