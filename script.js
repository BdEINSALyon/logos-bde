$(function () {
    $('img').click(function () {
        window.open($(this).attr('src'), '_blank');
    })
});

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
            var classes = [];
            if (picName.indexOf("white") > -1) {
                classes.push("black_background");
            }
            return classes.join(' ');
        },
        updateTeams: function(data) {
            this.teams = data.teams;
        }
    }
});
