/**
 * Created by shafe_000 on 2014-12-14.
 */

function f() {
    $(document).ready(function (data) {
        $.get("http://len.iem.pw.edu.pl/~jereczem/apps/CW5/refresh_cat/", function (data) {

            $(".result").html(data);
            document.getElementById("allCategories").innerHTML = data;
        });
    });
}

setInterval(f,1000);