var foods = ["Stuffed Potato Skins", "French Fries", "Chicken Wings","Herb Roasted Prime Rib","Ultimate Fondue","Chicken Fried Steak","Cinnamon Rolls with Icing","Chocolate Chip Cookie Sundae","Blue Ribbon Brownie"];
var calories = ['372','245.8','1,992','1,400','1,490','758','468','1,660','1,298'];
var carbs = ['43.3g','32.8g','32g','34.9g','42.6g','40.6g','40g','224g','172g'];
var fat = ['15.9g','12.00g','165g','71g','40g','30g','13g','51g','31g'];
var protein = ['17.6g','3.8g','18g','40g','19g','30g','3.6g','0g','0g'];
var description = [
    'this has a lot of carbohydrates and fat',
    'this has a lot of carbohydrates and fat with nearly no nutritional value.',
    'at almost 2000 calories, this fills the entire recommended intake of calories in one sitting.',
    'this has a large amount of calories, fat, and carbohydrates, although it does have a good amount of protein.',
    'this has a huge amount of calories and carbohydrates with little nutritional value.',
    'this has an excess of carbohydrates and fat, although it does have a good amount of protein.',
    'this has a lot of calories with very little protein.',
    'this has a huge amount of calories, carbohydrates and fat with literally no protein',
    'this has a huge amount of calories and carbohydrates with literally no protein.'
]

$(document).ready(function() {
    var leftOffset = $(".sec:first-child").offset().left;
    $(".top").css("padding-left", leftOffset)
    $("h2").css("margin-left", leftOffset);
    $(".button-tile").click(function() {
        console.log("ayy");
        var p = $(this).parent().parent().parent().offset();
        var inf = $(".info").clone().appendTo(".content");
        inf.css("left",p.left);
        inf.css("top",p.top);
        inf.css("display", "block");
        var num = 0;
        for (i = 0; i < foods.length; i++) {
            var name = $(this).parent().parent().parent().find("h3").html();
            console.info(name);
            if (foods[i] == name) {
                num = i;
                break;
            }
        }
        console.log($(this).html());
        if ($(this).html() == "NUTRITIONAL FACTS") {
            inf.find("ul").html('<li><span>Calories: </span>' + calories[num] + '</li><li><span>Carbs: </span>' + carbs[num] + '</li><li><span>Fat: </span>' + fat[num] + '<li><li><span>Protein: </span>' + protein[num] + '</li>');
        } else if ($(this).html() == "HEALTH REPORT") {
            inf.prepend('<span>This is unhealthy because: </span>' + description[num]);
        }
        //insert animation code here
        inf.css("animation","fade-in 0.25s")
    });
    $(document).on('click', '.back', function () {
        $(this).parent().parent().css("animation","fade-out 0.25s");
        $(this).parent().parent().one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
            $(this).remove();
//             console.log($(this).html());
        
        });
        
    });
});