/* code to show top two country names & their probability value as highlighted text */

// creating "div" element:
let container = document.createElement("div");
container.className = "container"
container.style.marginTop= "100px";
container.style.textAlign= "center";

// creating heading "h1" element:
let heading = document.createElement("h1");
heading.innerHTML="Predict Your Nationality by Your Name :";
heading.style.font="candara";

// creating input element:
let input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","Type names here...,");
input.id="name";
//styles by css:
input.style.width = "300px"
input.style.height = "30px"
input.style.fontFamily= "cursive"
input.style.borderRadius= "6px"

// creating button element:
let button = document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Click Me !";
//styles by css:
button.style.margin="15px";
button.style.borderRadius="10px";
button.style.boxShadow="black 1px 2px"
button.style.color ="white";
button.style.backgroundColor ="red";
button.style.width = "100px";
button.style.height = "30px";
button.style.fontSize = "15px"
// Add event listener to search button:
button.addEventListener("click",getdata);

let result1 = document.createElement("p");
//styles by css:
result1.style.fontFamily="Georgia, serif";
result1.style.fontSize= "20px";

let result2 = document.createElement("p");
//styles by css:
result2.style.fontFamily="Georgia, serif";
result2.style.fontSize= "20px";

//append the elements to body:
container.append(heading,input,button,result1,result2);
document.body.append(container);

//async funtion:
async function getdata() {
    let res = document.getElementById("name").value; //getting value by id
    try {
        //fetch from API
        let res1 = await fetch (`https://api.nationalize.io/?name=${res}`);
        let res2 = await res1.json();
       
        // function to get country id to country names:
        const regionNames = new Intl.DisplayNames(
            ['en'], {type: 'region'}
          );

          //result values:  Have uncommand the lines as per webcode class instructions:

         /*
          result1.innerHTML=
                ` <mark>   Country Name: ${(regionNames.of(res2.country[0].country_id))} ; 
                     Probability value : ${res2.country[0].probability} <span style="color:red">*</span> </mark>`

          result2.innerHTML=
                `<mark>  Country Name: ${(regionNames.of(res2.country[1].country_id))} ; 
                     Probability value : ${res2.country[1].probability}  <span style="color:red">*</span></mark>`
         */

    } catch (error) {
            result1.innerHTML= `<mark> No results found. </mark>`
            result2.innerHTML= `<mark> Failed to fetch data from API.</mark>` 
    }
    
} 

/* code to show top two country names & their probability value as highlighted text */