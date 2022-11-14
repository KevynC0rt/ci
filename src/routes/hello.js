const router = require('express').Router();


router.route('/').get((req,res)=>{
    msg = `Hello ${req.query.name || "World"} from get request`;
    res.json({msg});
})

router.route('/:lang').get((req,res)=>{
    switch(req.params.lang){
        case "es":
            msg = "Hola mundo!!";
            break;
        case "en":
            msg = "Hello word!!"
            break;
        case "fr":
            msg = "Bonjuour monde!!";
            break;
        default:
            msg = "Hello walt!!";
    }
    res.json({msg});
})
router.route('/').post((req,res)=>{
    // msg = `Hello ${req.body.name || "world"} from post request`;
    let result = req.body.a + req.body.b;
    res.json({result});
})

module.exports = router;