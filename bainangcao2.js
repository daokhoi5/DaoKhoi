<script>
function tong(){  
  var chuoi = prompt("nhap:")
  var myArray = chuoi.replace(/\\n|,/g,'');
  var Sum=0;
  console.log(myArray);
  for(var i=0; i<myArray.length; i++) {
          Sum += Number(myArray[i]);
          console.log(Sum);
      }
}
tong();
</script>
