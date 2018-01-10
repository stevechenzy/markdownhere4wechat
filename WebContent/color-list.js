/******************************************
	北河沿的微信公众号模板 颜色参考列表
    2018.1.5 随意复制使用

*******************************************/
var _color_rgb_triad = [
	
	"RGB(27,  177, 149)",
	"RGB(2,   37,   86)",
	"RGB(10,  81,  169)",
	"RGB(217, 83,   35)",
	"RGB(236, 158,  58)",
	"RGB(165, 6, 19)",
	"RGB(253, 161, 40)",
	"RGB(55, 134, 217)",
	"RGB(76, 75, 75)",
	"RGB(45, 177, 219)",
	"RGB(251, 64, 51)",
	"RGB(250, 148, 76)",
	"RGB(94, 108, 117)",
	"RGB(231, 231, 231)",
	"RGB(18, 101, 241)",
	"RGB(95, 210, 83)",
	"RGB(169, 169, 169)",
	"RGB(230, 230, 230)",
	"RGB(182, 81, 52)"
/*
	"RGB()",
	"RGB()",
	"RGB()",
	"RGB()",
	"RGB()",
*/	
];
function init_color_list (){
	console.log("here we are." );
	var div = document.getElementById("color-table");
	if (!div){
		//error
		alert ("color div not defined in html file");
		return;
	}
	div.style.border = "0";
	div.style.margin = "2em";
	
	_color_rgb_triad.forEach(function(_color, index){
		console.log(_color + '|' + index );
		// the demo color box;
		_box = document.createElement("div");
		_box.style = "border: black solid 1px;" +
					" margin-left:50px;" +
					" margin-right:20px;" +
					" width : 10em;" +
					" height : 1em;";
		_box.style.background = _color;
		_box.style.display = "table-cell";
		_box.style.verticalAglign = "middle";
		
		//the value of the color
		_span = document.createElement("span");
		_t = document.createTextNode(_color);
		_span.style.display = "table-cell";
		_span.style.paddingLeft = "0.5em";
		_span.appendChild (_t);
		
		//the line to holding the box and text;
		_p = document.createElement("p");
		//_p.style.display="table-cell";
		_p.style.lineHeight="1.8em";
		_p.style.verticalAlign = "middle";
		
		_p.appendChild(_box);
		_p.appendChild(_span);
		div.appendChild(_p);
		});
}
