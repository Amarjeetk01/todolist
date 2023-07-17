const express=require("express");
const bodyParser=require("body-parser");
const app=express();

let items=["Buy Food","Cook Food","Eat Food"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
//     const today = new Date();
//     const day1 = today.getDay();
//     var day="";
//     // if(day1===0||day1===6){
//     //     day="Weekend"
//     //     // res.sendFile(__dirname+"ejs\todolist-v1\views\list.ejs");
//     // }
//     // else{

//     //     day="Working day"
//     //     // res.sendFile(__dirname+"ejs\todolist-v1\views\list.ejs");
//     // }
//     switch (day1) {
//         case 0:
//             day="Sunday"
//             break;
//         case 1:
//             day="Monday"
//             break;
//         case 2:
//             day="Tuesday"
//             break;
//         case 3:
//             day="Wednesday"
//             break;
//         case 4:
//             day="Thursday"
//             break;
//         case 5:
//             day="Friday"
//             break;
//         case 6:
//             day="Saturday"
//             break;
    
//         default:
//             console.log("Error, it is "+ day1);
//             break;
//     }
//     res.render('list', {kindOfDay: day});
// // Sunday - Saturday : 0 - 6



let options = { weekday: 'long',  month: 'long', day: 'numeric' };
    let today = new Date();
    let day1 = today.toLocaleDateString("en-US", options);
    let dayhi = today.toLocaleDateString("hi-IN", options);
    res.render('list', { kindOfDay: day1, kindOfDayhi: dayhi,newListItems:items });
// console.log(today.toLocaleDateString("en-US")); // 9/17
// console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17
// console.log(today.toLocaleDateString("hi-IN", options)); 
});
app.post("/",function(req,res){
    let item=req.body.newItems;
    items.push(item);
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
});