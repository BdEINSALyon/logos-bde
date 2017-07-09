var app = new Vue({
    el: "#teams",
    data: {
        teams: []
    },
    created: function () {
        var self = this;  // "this" changes inside the callback, so we need to use another variable.
        $.getJSON('./data.json', function (data) {
            self.updateTeams(data);
        })
    },
    methods: {
        getClasses: function(picName) {
            var classes = ["img-thumbnail"];
            if (picName.indexOf("white") > -1) {
                classes.push("black_background");
            }
            return classes.join(' ');
        },
        updateTeams: function(data) {
            this.teams = data.teams;
        },
        getLink: function(team, pic) {
            return team.folder + "/" + pic;
        }
    }
});
