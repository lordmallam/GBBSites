<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<%@ Register src="usercontrols/SlideShow.ascx" tagname="SlideShow" tagprefix="uc1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="css/default.css" rel="stylesheet" />
    <link href="usercontrols/okra.css" rel="stylesheet" />
     <link href='http://fonts.googleapis.com/css?family=Vollkorn' rel='stylesheet' type='text/css'/>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,700,800,600,300' rel='stylesheet' type='text/css'/>
    <link href='http://fonts.googleapis.com/css?family=Lato:400,700,400italic' rel='stylesheet' type='text/css'/>
    <script src="js/jquery-2.1.1.min.js"></script>
    <script src="js/default.js"></script>
    <script src="usercontrols/okra.js"></script>
</head>
<body class="opensans">
    <form id="form1" runat="server">
    <div class="maxWidth">
        <div id="headerDiv" class ="border-bottom-light">
            <div id="topmenudiv">
                <div class="innerwidth centeralize">
                    <div id="topmenu">
                        <a href="#">Directory & User Guide</a><a href="#">Vendor Portal</a><a href="#">Request a Quote</a>
                    </div>
                </div>
            </div>
            <div class="innerwidth centeralize">
                <a href="#"><div id="logodiv"></div></a>
                <div id="menusearchdiv">
                    <div id="searchdiv">
                        <input type="text" placeholder="What are you looking for?" />
                    </div>
                <div id="menudiv">
                <a href="#" class="radius5-left">HOME</a><a href="#">WHO WE ARE</a><a href="#" class="hasdropdown">SERVICES</a><a href="#">RESOURCES</a><a href="#" class="hasdropdown">OUR TEAM</a><a href="#" class="radius5-right">CONTACT US</a>
            </div>
                    
                    </div>
            </div>
    </div>
    <div id="bodyDiv">
        <div>

            <uc1:SlideShow ID="SlideShow1" runat="server" />

        </div>
    </div>
       <div id="footerDiv"></div>
   </div>
    </form>
</body>
</html>
