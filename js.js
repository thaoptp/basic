//  câu lệnh ( statements) end ; or khối lệnh end {}
//  biến variables name start chữ or'_' 3 kiểu dữ liệu chuỗi( đặt trong "") số, object

var abc = 'đây là JS '
    //alert(abc);
    /** 5 phép tính js
     * = phép gán
     * +;-;*;/ cộng trừ nhân chia 
     * % chia lấy phần dư
     * ++;-- cộng or trừ 1 đơn vị 
     */
var a = 5;
var b = 10
    //alert(a + b)
    /*phép tính,GÁN  a+=5;--- a=a+5 | a-=5 -- a=a-5 | a*=5 -- a=a*5 | a/= 5--- a=a/5 | a %=5-- a=a%5 */
    //PHÉP TÍNH VỚI CHUỖI 
var a1 = 'hello';
var b1 = ' everyone ';
var c = a1 + b1
    //alert(c); // sẽ ra hello everyone
var a2 = " i love "
    /** alert(a2 += "all") // hiện ra i love all
    phép gán | chuỗi + chuỗi= chuỗi | số + chuỗi = chuỗi + chuỗi | số + số = số  
    && và || hoặc */
    // IF AND ELSE neu thi
    /**  var a3 = 9;
     var b3 = 10;
     var c3 = 16;
    if (a3 > b3 || b3 > c3)
         alert('thai is bad boy');
    else(c3 > a3)
     alert('thai is good boy');*/

// CÁC LOẠI VÒNG LẶP 
/** var tong = 0;
 for (let i = 0; i <= 4; i++) {

     tong += i;
    console.log(tong, i)
 } alert(tong);
 chạy i=0 và i<=4 truoc rôi chay xuong tong sau đo len i ++ , kiem tra lai dk i<=4 chay xuong tong */
// VÒNG WHILE KIỂ TRA ĐK TRUOC
/* var sum = 0;
 var i = 1;
 while (i <= 4) {
     sum += i
     i++

     console.log(sum, i)
 }
 console.log(sum)*/
// VÒNG DO ,WHILE 
/* var a = 0;
 var sum = 0;
 do {
     sum += a;
     a++;
     console.log(a, sum)

 } while (a <= 4);
 console.log(sum)
    // chay truoc roi kiem tra dieu kien */
/**lệnh break kết thúc vòng lăp if ( i== 50 ){ break} khi i= 50 dừng lại 
 *  lệnh continue bỏ qua câu lệnh phía sau   */
// SWITCH CASE
var a = 101
switch (a) {
    case 1:
        a++;
        break;
    case 10:
        a += 5;
        break;
    default:

        a -= 10;
        //console.log(a);
        break;
}
// truong hop nao dung se chay cau lenh do 
/* case1 : ( k có câu lệnh ) nếu a bằng case 1 hoặc case 2 sẽ chạy 2 
 * case 1 : a++ ( k có break ) nếu a bằng case 1 chạy 1 and 2 , nếu case 2 sẽ chạy mình 2 */
// FUNCTION
/** function sumAB(a, b) {
    // statements
}
sumAB(1, 2);
*/
// FUNCTION trả về giá trị 

/** function sumAB2(a, b) {
    return a + b;
}
var x = sumAB2(5, 10);
var x1 = sumAB2(1, 2);
var x2 = x + x1;
trả về mới mang gía trị đi thực hiện khác 
*/
//ĐIỀU KHIỂN LỖI , JS ENGINE NGƯNG CTR KHI CÓ LỖI , MÌNH CẦN NGĂN LẠI ĐỂ CTR CHẠY KHI GẶP LÔIX
/** function chiaAB(a, b) {
    var t = a / b
    return t

}
try {
    var kq = chiaAB(15, 3); // code ma co the error
    alert(kq);

} catch (e) {
    alert(e.messages); // xử lí error chạy khi có error e,messages hiện thị lỗi 

} */
//TỰ TẠO LỖI, SAU THROW MỌI LỆNH ĐỀU K CHẠY
/*function chiaAB(a, b) {
    if (b == 0) {
        throw 'k có phép chia cho 0';

    }
    var t = a / b;
    return t;

}
try {
    var kq = chiaAB(15, 0); // code ma co the error
    alert(kq);

} catch (e) {
    alert(e); // xử lí error chạy khi có error e,messages hiện thị lỗi , k dùng e messages

}*/
// DỮ LIỆU ARRAY 
/*var xe_may = [" wave", "yamaha", "honda", 5, 6];
 var loaixe = xe_may[0]// 0 - key , wave- value se hien thi wave
 alert(loaixe);*/
/*var oto = new Array();
oto[3] = "yamaha"
oto['windy'] = "foxt "
alert(oto[3]); // tự đặt key cho value bằng số or chuỗi */
// DỮ LIỆU CHUỖI (" ")
/** MENTHOR - PT 
 * ten bien .  có thể chiều dài chuỗi, cắt chuỗi, thứ tự của kí tự , cắt chuỗi nhỏ phân biện bằng kí tự nào đó
 * ten bien. thay thế, viết hoa toàn bộ....
 */
var a = " i want to play game ";
var t = a.length;
//alert(t); // se hien thi do dai chuoi
// DỮ LIỆU NUMBER
/** MENTHOR
 * tên biến . toString() đôi tybe number thành tybe chuỗi , 
 * menthor lm tròn , lm tròn đổi thành chuỗi ...
 * Number() menthor chuyển dữ liệu thành số
 * parsenInt () chuyển chuỗi thành số int
 * parseFloat( ): chuyển chuỗi thành số float 
 
 var n = " 10.6787"
var x = parseInt(n);
alert(x);// hien thi 10 */
// Math and attibute , methor, tính sin , cos vvvv
/*var a = Math.pow(2, 5);
alert(a);*/
//DATE
/** var date = new Date , new Date (miliseconds,Date string)or( year.mont,day,hour,second,miliseconds)
 * .get Lấy cái gì đấy .getDate, day,vvv 
 */
//oop lập trình hướng đối tượng 
/** dữ liệu kiểu objec có attribute  and methor */
function A(name, age) {
    this.a = name;
    this.b = age;
    this.c = function() {
        return this.a + this.b;
    }
}
var thao = new A("thai", 21);

alert(thao.c())
    /* JS dom 
    * JS DOM SELECTOR- XÁC ĐỊNH ĐỐI TƯỢNG 
    var a = document.getElementByid(""),getElementsByTagName(""),getElementsByClassname(""),
    Var a = document.querySelector("#dic1.para")- lấy thẻ có id dic1 và class para
    var a = document.querySelectorAll()- lấy tất car selector
    * JS DOM CONTENT - reading the contentn or writing contrntn new
     - var reading = a.innerHTML ; ( lấy nội dung bên trong )/ a.outerHTML (  lấy cả thẻ <p>)  nếu lấy "s"
     thì thêm [ thẻ thứ mấy ] var a = document.getElementsByTagName  var b = a.innerHTML[0]
     - a.innerHTML = " đây là nội dung thay thế" a.outerHTML = " <p> đây là nội dung mới </p>"
    * JS DOM ATTRIBUTES - tager attributers of element HTML or editer attribute
    - var a = obj.getAttibute<"name attributer"> / <p class= "thao"> ->obj.getAttibute("class")-> thao
    -obj.setAttribute( " name attibute, new value") ( "class, Thai")-. <p class = "Thai">
    * JS DOM CSS - truy câp giá trị và edit lại 
    - var css = a.style.Tên js dom css = " new value" ( tra gg javascrip style css)
    or obj.getAttibute<"style, background - color : pink "> ( k cần nhớ cái trên )
    * JS DOM FORM VALUE