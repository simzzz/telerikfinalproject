import{templates}from"templates";import"bootstrap";import"popperjs";const homeController=function(){$(document).ready(()=>{templates.getPage("home",{}).done(()=>{$("#big-header").removeClass("header-main"),$("#big-header").addClass("header")}),jQuery.get("../templates/homeHeader.handlebars",e=>{$("#header").html(e),$("#dropdownMenuLink").click(()=>{$("#dropdownMenu").hasClass("hidden")?$("#dropdownMenu").removeClass("hidden"):$("#dropdownMenu").addClass("hidden")})})})};export{homeController};