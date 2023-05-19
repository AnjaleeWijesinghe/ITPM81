const router =require("express").Router();
let doner = require('../models/donerModel');

router.route("/add").post((req,res)=>{

    const name =req.body.name;
    const contactnumber = req.body.contactnumber;
    const address = req.body.address;
    const totaldonations = req.body.totaldonations;
    const memberid = req.body.memberid;

    const newDoner = new doner({
        name,
        contactnumber,
        address,
        totaldonations,
        memberid
    })

    newDoner.save().then(()=>{
        res.json("Doner added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    doner.find().then((doners)=>{
        res.json(doners)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/update/:id").put(async (req, res) =>{
    let donerId = req.params.id;
    const{name,contactnumber,address,totaldonations,memberid} = req.body;

    const updatedoner ={
        name,
        contactnumber,
        address,
        totaldonations,
        memberid
    }

    const update = await doner.findByIdAndUpdate(donerId, updatedoner)
    .then(() =>{
        res.status(200).send({staus: "doner updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({staus: "Error with updated data",error: err.mesege});
    })
})

    router.route("/delete/:id").delete(async (req,res) =>{
        let donerId = req.params.id;

        await doner.findByIdAndDelete(donerId)
        .then(()=>{
            res.status(200).send({staus: "donor deleted"})
        }).catch((err) =>{
            console.log(err);
            res.status(500).send({staus: "Error with deleted data",error: err.mesege});
        })
})

    router.route("/get/:id").get(async (req,res) => {
        let donerId = req.params.id;
        const user = await doner.findById(donerId)
        .then((doner)=>{
            res.status(200).send({staus: "user fetched",doner})
        }).catch((err) =>{
            console.log(err);
            res.status(500).send({staus: "Error with get user",error: err.mesege});
        })
    })

module.exports = router;