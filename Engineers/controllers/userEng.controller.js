const UserEngineer = require('../models/userEng.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    register: (req, res) => {
        const userEngineer = new UserEngineer(req.body);
        console.log(userEngineer);
        userEngineer.save()
            .then(() => {
                console.log("Successfully Registered");
                res.json({ message: "Successfully Registered!", userEngineer: userEngineer })
            })
            .catch((err) => {
                console.log("Registration Not Successful!");
                res.status(400).json(err);
            });
    },


    login: (req, res) => {
        console.log(req.body);

        UserEngineer.findOne({ email: req.body.email })
            .then((userEngineerRecord) => {
                if(userEngineerRecord === null ) {
                    res.status(400).json({ message: "Error in login" });
                } else {
                    bcrypt.compare(req.body.password, userEngineerRecord.password)
                        .then((passwordValid) => {
                            if(passwordValid) {
                                console.log("Password is Valid");
                                res
                                    .cookie("userEngineerData", { email: userEngineerRecord.email })
                                    .cookie("userEngineerToken",
                                        jwt.sign({
                                            userEngineer_id: userEngineerRecord._id,
                                            email : userEngineerRecord.email
                                        }, process.env.JWT_SECRET),
                                        {
                                            expires: new Date(Date.now() + 9000000), 
                                            httpOnly: true 
                                        }  
                                    )
                                    .json({
                                        message: "Successfully Logged In!",
                                        userEngineerLoggedIn: userEngineerRecord.email,
                                    })
                            } else {
                                res.status(400).json({ message: "Password didn't match!" })
                            }
                        })
                }
            })
            .catch((err) => {
                res.status(400).json({ message: "Email not found" });
            })

      
    },

    logout: (req, res) => {
        console.log("Logged Out!");
        res.clearCookie("userEngineerToken");
        res.json({ message: "You have logged out!" });
    }
}