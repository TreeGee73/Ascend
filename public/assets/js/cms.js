const user = require("../../../models/user");

$(document).ready(function () {
    let userSelect = $("#userName")
    let userForm = $("#user")
    let characterHealth = $("#player-health");
    let characterAttack = $("#player-attack");
    let characterDefense = $("#player-defense");
    let characterSpeed = $("#player-speed");
    let characterExp = $("#player-exp");

    $(userForm).on("start", handleFormSubmit);

    getUser();

    function handleFormSubmit(event) {
        event.preventDefault();
        if (
            !characterHealth.val().trim() ||
            !characterAttack.val().trim() ||
            !characterDefense.val() ||
            !characterSpeed.val() ||
            !characterExp.val()
        ) {
            return;
        }
        let newUser = {
            health: characterHealth
                .val()
                .trim(),
            attack: characterAttack
                .val()
                .trim(),
            defense: characterDefense
                .val()
                .trim(),
            speed: characterSpeed
                .val()
                .trim(),
            exp: characterExp
                .val()
                .trim(),
            user: userSelect.val()
        };

        submitUser(newUser);
    }

    function submitUser(newUser) {
        $.post("/api/characterName", post, function () {
            //   window.location.href = "/blog";
        });
    }

    function getUsers() {
        $.get("/api/characterName", renderUserList);
    }

    function renderAuthorList(data) {
        if (!data.length) {
        //   window.location.href = "/authors";
        }
        // $(".hidden").removeClass("hidden");
        let rowsToAdd = [];

        userSelect.empty();
        console.log(rowsToAdd);
        console.log(userSelect);
        userdSelect.append(rowsToAdd);
        userSelect.val(user);
      }
});
