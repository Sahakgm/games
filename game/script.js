let cards = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"],
count = 0,
win = 0,
c1,
c2,
_id_1_card,
_id_2_card,
card1,
card2;
    $('#btn').click(function(){
            $('#start_image').hide(400, function () {
                $('#block').show(400);
            });
            count = 0;
            win = 0;
            $(".col1 ._image").css("display", "block");
            $(".col1 ._img").css("display", "none");
            $(".col1").addClass("col");
            $(".col1").css("pointer-events", "auto");

            cards = cards.sort(Random);

            for(var i = 0; i <= cards.length; i++){
                var j =i+1;
                $('#img'+j).attr('src', cards[i]);
            }
            card1="";
            card2="";
    });

$(".col").on("click", function() {
       count++;
       var id = "#" + $(this).attr("id");
       $(id+" ._image").css("display", "none");
       $(id+" ._img").css("display", "block");
       $(id).css("pointer-events", "none");
       if(count % 2 == 0){
           $(".col").css("pointer-events", "none");
           card1 = $(id+" ._img").attr("id");
           _id_1_card = id;
       }
       else if ((count % 2) != 0) {
           card2 = $(id+" ._img").attr("id");
           _id_2_card = id;
       }
    setTimeout(function(){
        if(count % 2 === 0 && $(id+ ".col ._img").css("display")=="block"){
                    c1 = $('#'+card1).attr("src");
                    c2 = $('#'+card2).attr("src");
            if (c1 == c2){
                $(".col").css("pointer-events", "none");
                $(_id_1_card).removeClass("col");
                $(_id_2_card).removeClass("col");
                win++;
            }else{
                $('#'+card1).css("display", "none");
                $('#'+card2).css("display", "none");
                var block1 = $('#'+card1).parent().attr("id");
                var block2 = $('#'+card2).parent().attr("id");
                $('#'+block1+" ._image").css("display","block");
                $('#'+block2+" ._image").css("display","block");
            }
            $(".col").css("pointer-events", "auto");
            c1='';
            c2='';
        }
    }, 800);

    if (win == 3 && count%2 == 0){
        alert("You win");
        $('#block').hide(400, function () {
            $('#start_image').show(400);
        });
    }
});
function Random() {
    return Math.random() - 0.5;
}

