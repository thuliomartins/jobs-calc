let data = {
    name: "Thulio Barbosa",
    avatar: "https://avatars.githubusercontent.com/u/96076381?s=400&u=ecd8da83c107f389d5cae59a5e300cd2f1c8729d&v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,
    "value-hour": 75
};

module.exports = {

    get() {
        return data;
    },

    update(newData) {
        data = newData; 
    }

}