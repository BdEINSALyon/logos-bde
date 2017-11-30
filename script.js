var app = new Vue({
    el: "#teams",
    data: {
        teams: []
    },
    created: function () {
        var self = this;  // "this" changes inside the callback, so we need to use another variable.
        var xhr = new XMLHttpRequest();
        xhr.open('GET', './data.json', true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            var status = xhr.status;
            if (status === 200) {
                self.updateTeams(xhr.response);
            }
            else {
                console.error("Error loading JSON", xhr.response);
            }
        };
        xhr.send();
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
