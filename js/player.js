/**
 * Created by msjrIT on 2016/11/17.
 */
function goLeft(){
    go(600);
}
function goRight(){
    go(-600);
}
var going=false;

function go(detx){
    var targetX=(parseInt($("#land_table").css("left"))+detx);
    if(targetX>=-1205&&targetX<=0&&!going){
        going=true;
        $("#land_table").css("left",targetX+"px");
        setTimeout(function(){
            going=false;
        },1000);
    }
}
function showTip(tar){
    if($($(tar).next()).is(":hidden")){
        $($(tar).next()).css("display","block");
    }else{
        $($(tar).next()).css("display","none");
    }
}