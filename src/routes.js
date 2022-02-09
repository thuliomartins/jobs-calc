const express = require("express");
const routes = express.Router();

const views = `${__dirname}/views/`;

const profile = {
    name: "Thulio Barbosa",
    avatar: "https://avatars.githubusercontent.com/u/96076381?s=400&u=ecd8da83c107f389d5cae59a5e300cd2f1c8729d&v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4

}

routes.get("/", (req, res) => res.render(`${views}index`));
routes.get("/job", (req, res) => res.render(`${views}job`));
routes.get("/job/edit", (req, res) => res.render(`${views}job-edit`));
routes.get("/profile", (req, res) => res.render(`${views}profile`, {profile}));

module.exports = routes;