import{templates}from"templates";import{UserRequester}from"userRequester";const reviewsController=function(){let e,s=[];firebase.database().ref("/reviews/").once("value").then(s=>e=s.val()).then(e=>{for(let t of e){let e=t.id;s.push({id:e,title:t.title,author:t.author,commentsAmount:t.commentsAmount,date:t.date,shortDescription:t.shortDescription,description:t.description,picturePath:t.picturePath,comments:t.comments})}return s}).then(e=>{templates.getPage("reviews",e).done(()=>{$(document).ready(()=>{$("#dropdownMenuLink").click(()=>{$("#dropdownMenu").hasClass("hidden")?$("#dropdownMenu").removeClass("hidden"):$("#dropdownMenu").addClass("hidden")}),$("#title").text("Reviews"),$("#subtitle").text("Critic reviews at your disposal!"),$(".show-more").click(()=>{$(".post-small").addClass("hidden"),$(".post-extended").removeClass("hidden"),$(".comments").removeClass("hidden")}),$(".show-less").click(()=>{$(".post-small").removeClass("hidden"),$(".post-extended").addClass("hidden"),$(".comments").addClass("hidden")}),$("#2").addClass("hidden"),$(".review-one").click(()=>{$("#2").addClass("hidden"),$("#1").removeClass("hidden")}),$(".review-two").click(()=>{$("#1").addClass("hidden"),$("#2").removeClass("hidden")})})})})};export{reviewsController};