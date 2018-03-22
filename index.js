const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const queries = require('./queries');

app.use(bodyParser.json());
app.use(cors());

app.get("/profiles", (req, res) => {
    queries.getprofiles().then(profile => {
        res.json(profile);
    }).catch(console.error);
});

app.get("/profiles/:id", (request, response) => {
    queries.read(request.params.id).then(profiles => {
        profiles
            ? response.json({ profiles })
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/profiles", (request, response) => {
    queries.create(request.body).then(profiles => {
        console.log(request.body);
        response.status(201).json({ profiles });
    }).catch(console.error);
});

app.delete("/profiles/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.patch("/profiles/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(profiles => {
        response.json({ profiles: profiles[0] });
    }).catch(console.error);
});

app.get("/skills", (req, res) => {
    queries.getSkills().then(skill => {
        res.json(skill);
    }).catch(console.error);
});

app.get("/skills/:id", (request, response) => {
    queries.readSkill(request.params.id).then(skill => {
        skill
            ? response.json({ skill })
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/skills", (request, response) => {
    queries.createSkill(request.body).then(skill => {
        console.log(request.body);
        response.status(201).json({ skill });
    }).catch(console.error);
});

app.delete("/skills/:id", (request, response) => {
    queries.deleteSkill(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.patch("/skills/:id", (request, response) => {
    queries.updateSkill(request.params.id, request.body).then(skill => {
        response.json({ skills: skill[0] });
    }).catch(console.error);
});

app.use((request, response) => {
    response.sendStatus(404);
});

app.listen(process.env.PORT || 3000);