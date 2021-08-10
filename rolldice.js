// var player1 = parseInt(document.getElementById("player1").value);
// var player2 = parseInt(document.getElementById("player2").value);

var player1 = 0
var player2 = 0
document.getElementById("player1").value = player1;
document.getElementById("player2").value = player2;
// console.log("Initial Values", player1, player2)


function roll()
{
        //   console.log(player1, player2); 
          if ((player1 < 30) && (player2 < 30))
          {
              player1 = player1 + Math.floor(Math.random() * 6) + 1;
              player2 = player2 + Math.floor(Math.random() * 6) + 1;
            //   console.log(player1, player2)
            //   console.log(typeof(player1), typeof(player2))
            //   console.log(player1, player2);
              document.getElementById("player1").value = player1;
              document.getElementById("player2").value = player2;
          }
          else
          {
              if (player1 >= 30)
              {
                
                document.getElementById("result").innerHTML ="<b>1<sup>st</sup> player won the match</b>";
              }
              else if (player2 >= 30)
              {
                document.getElementById("result").innerHTML ="<b>2<sup>nd</sup> player won the match</b>";
              }
              else if (player1 === player2)
              {
                document.getElementById("result").innerHTML ="<b>Match Tie</b>";
              }
              else
              {
                document.getElementById("result").innerHTML ="<b>Something went wrong</b>";
              }
          }
}
