
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="SlideShow.ascx.cs" Inherits="usercontrols_SlideShow" %>
<link href="okra.css" rel="stylesheet" />
<script type="text/javascript">
    var currentslide = 0;
    var totalsides = parseInt(<%= HiddenCount.Value%>);
    var myvar;
    $(this).load(function () {
        myvar = setInterval(loop,<%= this.Interval %>);
    });

    function loop(){
        if(currentslide<(totalsides-1)){
            $('#<%= this.ID%>_slide' + currentslide).fadeOut({duration:1000,queue:false});
            $('#<%= this.ID%>_slide' + (currentslide + 1)).fadeIn({duration:1000,queue:false});
            currentslide++;
        }else {
            currentslide = 0;
            $('#<%= this.ID%>_slide' + (totalsides -1)).fadeOut({duration:1000,queue:false});
            $('#<%= this.ID%>_slide' + 0).fadeIn({duration:1000,queue:false});
        }
    }

    function goRight(){
        if(currentslide<(totalsides-1)){
            loop();
            clearInterval(myvar);
            myvar=setInterval(loop,<%= this.Interval %>);
        }
    }
    function goLeft(){
        if(currentslide>0){
            reverse();
            clearInterval(myvar);
            myvar=setInterval(loop,<%= this.Interval %>);
        }
    }

    function reverse(){
        $('#<%= this.ID%>_slide' + currentslide).fadeOut({duration:1000,queue:false});
        $('#<%= this.ID%>_slide' + (currentslide - 1)).fadeIn({duration:1000,queue:false});
        currentslide = currentslide-1;
    }
</script>
<div id="slidecontainer" runat="server" class ="slidecontainer">
    <div id="SlideL" class="slideL gradLeftRight" onclick="goLeft()">
        <div id="SlideLeft" class="slideLeft"></div>
    </div>
    <div id="SlideR" class="slideR gradRightLeft" onclick="goRight()">
        <div id="SlideRight" class="slideRight"></div>
    </div>
    <input id="HiddenCount" type="hidden" runat="server"/>
</div>