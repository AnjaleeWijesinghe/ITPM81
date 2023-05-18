const router = require("express").Router();
let donor = require("../models/donerModel");

//http//localhost:8080/doner/add

router.route("/add").post((req, res) => {
    
    const name= req.body.name;
    const contactnumber = Number(req.body.age);
    const address = req.body.address;
    const totaldonations = Number(req.body.totaldonations);
    const memberid = Number(req.body.memberid);


const newDonor = new donor({

    name,
    contactnumber,
    address,
    totaldonations,
    memberid


})

newDonor.save().then(() => {
    res.json("Donor Added")
}).catch((err) => {
    console.log(err);
})

});

http://localhost:8080/doner/
router.route("/").get((req, res) => {
    donor.find().then((donors) => {
        res.json(donors);
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8080/doner/update/60f0b0b0c8b0c71f0c0b0b0b

router.route("/update/:id").put(async (req, res) => {

    let userId = req.params.id;
    const {name, contactnumber, address, totaldonations, memberid} = req.body;

    const updateDonor = {

        name,
        contactnumber,
        address,
        totaldonations,
        memberid

    }
    const update = await donor.findByIdAndUpdate(userId, updateDonor).then(() => {
        res.status(200).send({status: "User Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
});


router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await donor.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "User Deleted"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with deleting data", error: err.message});
    })
});

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    await donor.findById(userId).then((donor) => {
        res.status(200).send({status: "User fetched", donor});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })  
});


module.exports = router;
