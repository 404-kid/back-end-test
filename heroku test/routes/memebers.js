const express = require('express');
const router = express.Router();

const queries = require('../queries');
// console.log(memebers);
router.get("/", (request, response, next) => {
    queries.list()
    console.log(queries.list())
    .then(memebers => {
        response.json({memebers});
    }).catch(next);
});

// router.get("/:id", (request, response, next) => {
//     queries.read(request.params.id).then(memeber => {
//         memeber
//             ? response.json({memeber})
//             : response.status(404).json({message: 'Not found'})
//     }).catch(next);
// });
//
// router.post("/", (request, response, next) => {
//     queries.create(request.body).then(memeber => {
//         response.status(201).json({memeber: memeber});
//     }).catch(next);
// });
//
// router.delete("/:id", (request, response, next) => {
//     queries.delete(request.params.id).then(() => {
//         response.status(204).json({deleted: true});
//     }).catch(next);
// });
//
// router.put("/:id", (request, response, next) => {
//     queries.update(request.params.id, request.body).then(memeber => {
//         response.json({memeber: memeber[0]});
//     }).catch(next);
// });

module.exports = router;
