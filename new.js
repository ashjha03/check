// $(document).ready(function(){
//     $.ajaxSetup({ cache: false });
//     $('#search').keyup(function(){
//      $('#result').html('');
//      $('#state').val('');
//      var searchField = $('#search').val();
//      var expression = new RegExp(searchField, "i");
//      $.getJSON('anime.json', function(data) {
//       $.each(data, function(key, value){
//        if (value.title.search(expression) != -1 || value.title.search(expression) != " ")
//        {
//          $('#container').html( `<div class="blog">
//          <div class="blog-img">
//              <img src="`+value.img_url+`">
//          </div>

//          <div class="blog-content">
//              <h1>`+value.title+`</h1>
             
//              </div>
//          </div>
// `);
//           console.log(value.img_url);
//        }else
//        {
//         $('#container').html( `<div class="blog">
//         <div class="blog-img">
//         </div>

//         <div class="blog-content">
//             <h1></h1>
            
//             </div>
//         </div>
// `);
//        }
//       });   
//      });
//     });
    
//     // $('#result').on('click', 'li', function() {
//     //  var click_text = $(this).text().split('|');
//     //  $('#search').val($.trim(click_text[0]));
//     //  $("#result").html('');
//     // });
//   

// document.getElementById("btn").addEventListener('click', loadData);

// function loadData() {
//     fetch('anime.json')
// .then(res => {
//     return res.json();
// })
// .then(data => {
//     data.map( ele => {
//         let v = document.createElement('h1');
//         v.innerText=ele.tite;
//         document.getElementById("container").append(v);
//     })
// })
// .catch(err => {
//     console.log(err);
// })
// }

// const a= JSON.parse(anime.json);

// console.log(a);

// document.getElementById("container").innerHTML = output;

// document.getElementById("container").innerHTML=output;

// }else{
//     output+='<div>something went wrong</div>';
// }

let output;
let list;
let i=1;
fetch('anime.json')
.then(res => {
    return res.json();
})
.then( function(data) {
    data.top.map(function(ele) {
        output += `<div style="display:flex;flex-wrap:wrap">
        <div><img src="${ele.img_url}"></div>
        <div><h1>${ele.title}</h1></div>
        <div><a href="${ele.batch_d}">Link D</a></div>
        <div><a href="${ele.batch_i}">Link L</a></div>
        </div>`;document.getElementById("container").innerHTML=output;

        ele.episo.map(function(lik, i){
            list += `<div><ul><li><a href="${lik}">Episode${i++}</a></li></ul></div>`;
          document.getElementById("container").append(lik);
        })
    })
})
.catch(err => console.log(err));
