const UserManager = require('../models/manager.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    register: (req, res) => {
        const userManager = new UserManager(req.body);
        console.log(userManager);
        userManager.save()
            .then(() => {
                console.log("Successfully Registered");
                res.json({ message: "Successfully Registered!", userManager: userManager })
            })
            .catch((err) => {
                console.log("Registration Not Successful!");
                res.status(400).json(err);
            });
    },


    login: (req, res) => {
        console.log(req.body);

        UserManager.findOne({ email: req.body.email })
            .then((userManagerRecord) => {
                if(userManagerRecord === null ) {
                    res.status(400).json({ message: "Error in login" });
                } else {
                    bcrypt.compare(req.body.password, userManagerRecord.password)
                        .then((passwordValid) => {
                            if(passwordValid) {
                                console.log("Password is Valid");
                                res
                                    .cookie("userManagerData", { email: userManagerRecord.email })
                                    .cookie("userManagerToken",
                                        jwt.sign({
                                            userManager_id: userManagerRecord._id,
                                            email : userManagerRecord.email
                                        }, process.env.JWT_SECRET),
                                        {
                                            expires: new Date(Date.now() + 9000000), 
                                            httpOnly: true 
                                        }  
                                    )
                                    .json({
                                        message: "Successfully Logged In!",
                                        userManagerLoggedIn: userManagerRecord.email,
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
        res.clearCookie("userManagerToken");
        res.json({ message: "You have logged out!" });
    }
}