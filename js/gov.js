/**
 * Created by msjrIT on 2016/11/14.
 */
var Fen = 0;//根据按钮点击状态判断是比赛中（45）还是休息中（15）
var miao = 0;
var flag = true;//true 开始，false 结束
var timer;
var year = 0;//模拟数据库财年数据
function start(){
   if(flag){//财年开始
       year = $("#fiscal_year").html();
       //在此调用数据库，标记X财年开始
       //数据保存成功调用一下代码，修改页面状态
       $("#statu").removeClass("i_start").addClass("i_end_z");//改变按钮样式
       $("#statu").html("结束");
       clearInterval(timer);
       Fen = 45;
       miao = 60;
       flag = false;
   }else{
       year = $("#fiscal_year").html();
       //在此调用数据库，标记X财年结束
       //数据保存成功调用一下代码，修改页面状态
       $("#statu").removeClass("i_end_z").addClass("i_start");//改变按钮样式
       $("#statu").html("开始");
       clearInterval(timer);
       Fen = 15;
       miao = 60;
       flag = true;
   }
    $(".count_down").css("display","inline-block");
    timer=setInterval(
        function()
        {
            if(Fen==0&&miao==1)//分钟数=0的时候
            {
                clearInterval(timer);
            }
            if(Fen>=0&&Fen<=10)//分钟数0~10
            {
                miao--;
                if(miao==0)//秒数等于0的时候
                {
                    miao=60;
                    $("#XS").get(0).innerHTML="0"+Fen+":"+"00";
                }
                if(miao>0&&miao<10)//秒数0~10的时候
                {
                    miao="0"+miao;
                    $("#XS").get(0).innerHTML="0"+Fen+":"+miao;
                }
                if(miao>=10&&miao!=60)//秒数大于等于10的时候
                {
                    if(miao==59)
                    {
                        Fen--
                    }
                    $("#XS").get(0).innerHTML="0"+Fen+":"+miao;
                }
            }
            if(Fen>10)//分钟数大于10的时候
            {
                miao--;
                if(miao==0)//秒数等于0的时候
                {
                    miao=60;
                    $("#XS").get(0).innerHTML=Fen+":"+"00";
                }
                if(miao>0&&miao<10)//秒数0~10的时候
                {
                    miao="0"+miao;
                    $("#XS").get(0).innerHTML=Fen+":"+miao;
                }
                if(miao>=10&&miao!=60)//秒数大于等于10的时候
                {
                    if(miao==59)
                    {
                        Fen--
                    }
                    $("#XS").get(0).innerHTML=Fen+":"+miao;
                }
            }
        },
        1000
    )
}