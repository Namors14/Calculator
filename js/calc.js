'use_strict';
//Created by Namors14
//v 1.01
//snamor14@gmail.com

var production = 'corner';

$(function(){
        
        $('.product').on('click', function() {
         let prod = $(this).attr("id");
         select(prod);
         $( "#field" ).empty();
         switch(prod) {
    		case "corner":
    		$("#field").append('<div class="row"><div><span><input type="text" placeholder="Высота" name="height">&nbsp;мм</span></div><div><span><input type="text" placeholder="Толщ. стенки" name="tolst">&nbsp;мм</span></div><div class="output"><div class="lenght"><span><input type="text" placeholder="Длина" name="lenght">&nbsp;м</span> </div><div class="weight"><span><input type="text" placeholder="Вес" name="weight">&nbsp;кг</span></div></div></div>');
    		break;
    		case "sheet":
    		$("#field").append('<div class="row"><div class="col-md-12"><div class="row"><div class="col-md-12"><span><input type="text" placeholder="Толщина листа" name="tolst"></input>&nbsp;мм</span></div><div class="col-md-12"><span><input type="text" placeholder="Ширина листа" name="width"></input>&nbsp;мм</span></div><div class="col-md-12"><span><input type="text" placeholder="Длина листа" name="lenght"></input>&nbsp;мм</span></div></div></div><div class="col-md-12 output"><div class="row"><div class="col-md-12 square"></div><div class="col-md-12 kolvo"><span><input type="text" placeholder="Кол-во" name="kolvo"></input>&nbsp;шт</span></div><div class="col-md-12 weight"><span><input type="text" placeholder="Вес" name="weight"></input>&nbsp;кг</span></div></div></div></div>');
    		break;
    		case 'pipe':
    		$("#field").append('<div class="row"><div class="col-md-12"><div class="row"><div class="col-md-12"><span><input type="text" placeholder="Внешн. диаметр" name="diametr"></input>&nbsp;мм</span></div><div class="col-md-12"><span><input type="text" placeholder="Толщ. стенки" name="tolst"></input>&nbsp;мм</span></div></div></div><div class="col-md-12 output"><div class="row"><div class="col-md-12 lenght"><span><input type="text" placeholder="Длина" name="lenght"></input>&nbsp;м</span></div><div class="col-md-12 weight"><span><input type="text" placeholder="Вес" name="weight"></input>&nbsp;кг</span></div></div></div></div>');
    		break;
    		case 'circle':
    		$("#field").append('<div class="row"><div class="col-md-12"><div class="row"><div class="col-md-12"><span><input type="text" placeholder="Диаметр" name="diameter"></input>&nbsp;мм</span></div></div></div><div class="col-md-12 output"><div class="row"><div class="col-md-12 lenght"><span><input type="text" placeholder="Длина" name="lenght"></input>&nbsp;м</span></div><div class="col-md-12 weight"><span><input type="text" placeholder="Вес" name="weight"></input>&nbsp;кг</span></div></div></div></div>');  
    		break;
    		case 'pipe_prof':
    		$("#field").append('<div class="row"><div class="col-md-12"><div class="row"><div class="col-md-12"><span><input type="text" placeholder="Высота" name="height"></input>&nbsp;мм</span></div><div class="col-md-12"><span><input type="text" placeholder="Ширина" name="width"></input>&nbsp;мм</span></div><div class="col-md-12"><span><input type="text" placeholder="Толщина стенки" name="tolst"></input>&nbsp;мм</span></div></div></div><div class="col-md-12 output"><div class="row"><div class="col-md-12 lenght"><span><input type="text" placeholder="Длина" name="lenght"></input>&nbsp;м</span></div><div class="col-md-12 weight"><span><input type="text" placeholder="Вес" name="weight"></input>&nbsp;кг</span></div></div></div></div>');
     		break;
    		case 'square':
    		$("#field").append('<div class="row"><div class="col-md-12"><div class="row"><div class="col-md-12"><span><input type="text" placeholder="Ширина" name="width"></input>&nbsp;мм</span></div></div></div><div class="col-md-12 output"><div class="row"><div class="col-md-12 lenght"><span><input type="text" placeholder="Длина" name="lenght"></input>&nbsp;м</span></div><div class="col-md-12 weight"><span><input type="text" placeholder="Вес" name="weight"></input>&nbsp;кг</span></div></div></div></div>');
    		break;
    		case 'channel':
    		$("#field").append('<div class="row"><div class="col-md-12"><div class="row"><div class="col-md-12"><span><input type="text" placeholder="Высота" name="height"></input>&nbsp;мм</span></div><div class="col-md-12"><span><input type="text" placeholder="Ширина" name="width"></input>&nbsp;мм</span></div><div class="col-md-12"><span><input type="text" placeholder="Толщина стенки" name="tolst"></input>&nbsp;мм</span></div></div></div><div class="col-md-12 output"><div class="row"><div class="col-md-12 lenght"><span><input type="text" placeholder="Длина" name="lenght"></input>&nbsp;м</span></div><div class="col-md-12 weight"><span><input type="text" placeholder="Вес" name="weight"></input>&nbsp;кг</span></div></div></div></div>');
    		break;
    		case 'strip':
    		$("#field").append('<div class="row"><div class="col-md-12"><div class="row"><div class="col-md-12"><span><input type="text" placeholder="Толщина" name="tolst"></input>&nbsp;мм</span></div><div class="col-md-12"><span><input type="text" placeholder="Ширина" name="width"></input>&nbsp;мм</span></div></div></div><div class="col-md-12 output"><div class="row"><div class="col-md-12 lenght"><span><input type="text" placeholder="Длина" name="lenght"></input>&nbsp;м</span></div><div class="col-md-12 square"></div><div class="col-md-12 weight"><span><input type="text" placeholder="Вес" name="weight"></input>&nbsp;кг</span></div></div></div></div>');
    		break;
    		case 'balk':
    		$("#field").append('<div class="row"><div class="col-md-12"><div class="row"><div class="col-md-12"><span><input type="text" placeholder="Высота Балки" name="height"></input>&nbsp;мм</span></div><div class="col-md-12"><span><input type="text" placeholder="Ширина Балки" name="width"></input>&nbsp;мм</span></div><div class="col-md-12"><span><input type="text" placeholder="Толщ. перемички" name="tolst_perem"></input>&nbsp;мм</span></div><div class="col-md-12"><span><input type="text" placeholder="Толщ. полок" name="tolst_polok"></input>&nbsp;мм</span></div></div></div><div class="col-md-12 output"><div class="row"><div class="col-md-12 lenght"><span><input type="text" placeholder="Длина" name="lenght"></input>&nbsp;м</span></div><div class="col-md-12 weight"><span><input type="text" placeholder="Вес" name="weight"></input>&nbsp;кг</span></div></div></div></div>');
    		break;
    		case 'hexahedron':
    		$("#field").append('<div class="row"><div class="col-md-12"><div class="row"><div class="col-md-12"><span><input type="text" placeholder="Номер(диаметр)" name="diametr"></input>&nbsp;мм</span></div></div></div><div class="col-md-12 output"><div class="row"><div class="col-md-12 lenght"><span><input type="text" placeholder="Длина" name="lenght"></input>&nbsp;м</span></div><div class="col-md-12 weight"><span><input type="text" placeholder="Вес" name="weight"></input>&nbsp;кг</span></div></div></div></div>');
    		break;
    	}
    	out(production);
    	production = prod;


     });




});


function handler(event) {

	function str(el) {

		for(let i=1;i<11;i++) {
			let prod = search1(i);
			if(el.indexOf(prod) + 1) 
			{
				return prod;
			}
		}
  }

  function search1(iner) {
  	switch(iner)
	{
		case 1:
		return 'corner';
		break;
		case 2:
		return 'sheet';
		break;
		case 3:
		return 'pipe';
		break;
		case 4:
		return 'circle';
		break;
		case 5:
		return 'pipe_prof';
		break;
		case 6:
		return 'square';
		break;
		case 7:
		return 'channel';
		break;
		case 8:
		return 'strip';
		break;
		case 9:
		return 'balk';
		break;
		case 10:
		return 'hexahedron';
		break;
	}
  }

	if (event.type == 'mouseover') {
		let new1 = event.target.className;
		select(str(new1));
	 }
	 if(event.type == 'mouseout') {
	 	let new1 = event.target.className;
		out(str(new1));
	 }
}
function select(prod) {
	let noumber = type(prod);
	        $('#'+prod).empty();
    		$('#'+prod).append('<img src="img/'+noumber+'_0.png">');
    		$('#'+prod).css('background', 'linear-gradient(to top, #bb0000, #f09a9a)');
}
function out(prod) {
	let noumber = type(prod);
	        $('#'+prod).empty();
    		$('#'+prod).append('<img src="img/'+noumber+'_1.png">');
    		$('#'+prod).css('background', 'linear-gradient(to top right, #9aa3a9, #eaedf0)');
}
function type(product)
{
	switch(product)
	{
		case 'corner':
		return 1;
		break;
		case 'sheet':
		return 2;
		break;
		case 'pipe':
		return 3;
		break;
		case 'circle':
		return 4;
		break;
		case 'pipe_prof':
		return 5;
		break;
		case 'square':
		return 6;
		break;
		case 'channel':
		return 7;
		break;
		case 'strip':
		return 8;
		break;
		case 'balk':
		return 9;
		break;
		case 'hexahedron':
		return 10;
		break;
	}
}

var plotnost = {
	steel: 7850,
	chugun: 7200,
	aluminium: 2700,
	bronze: 8300,
	brass: 8450,
	magnessium: 1740,
	cuprum: 8900,
	nickel: 8800,
	tin: 7280,
	plumbum: 11350,
	titanium: 4500,
	zinc: 7135
}

function density(mat)
{
	return plotnost[mat];
}

function calculation(obj)
{
	let plotn = density(obj.material.value);

	switch(production)
	{
		case 'corner':
		corner(obj,plotn);
		break;
		case 'sheet':
		sheet(obj,plotn);
		break;
		case 'pipe':
		pipe(obj,plotn);
		break;
		case 'circle':
		circle(obj,plotn);
		break;
		case 'pipe_prof':
		pipe_prof(obj,plotn);
		break;
		case 'square':
		square(obj,plotn);
		break;
		case 'channel':
		channel(obj,plotn);
		break;
		case 'strip':
		strip(obj,plotn);
		break;
		case 'balk':
		balk(obj,plotn);
		break;
		case 'hexahedron':
		hexahedron(obj,plotn);
		break;
	}


}

function radius_zao(a)
{
	var arr = [];
	if(a<=25) { arr[0]=3.5; arr[1]=1.2; }
	  else if(a<=30) { arr[0]=4; arr[1]=1.3; }
	    else if(a<=45) { arr[0]=5; arr[1]=1.7; }
	      else if(a<=56) { arr[0]=6; arr[1]=2; }
	        else if(a<=63) { arr[0]=7; arr[1]=2.3; }
	          else if(a<=70) { arr[0]=8; arr[1]=2.7; }
	            else if(a<=80) { arr[0]=9; arr[1]=3; }
	               else if(a<=90) { arr[0]=10; arr[1]=3.3; }
	                 else if(a<=120) { arr[0]=12; arr[1]=4.2; }
	                   else if(a<=150) { arr[0]=14; arr[1]=4.6; }
	                     else if(a<=180) { arr[0]=16; arr[1]=5.3; }
	                       else if(a<=200) { arr[0]=18; arr[1]=6; }
	                         else if(a<=220) { arr[0]=21; arr[1]=7; }
	                           else if(a>220) { arr[0]=24; arr[1]=8; }

	return arr;
}

function corner(obj,plotn) {
	let height1 = obj.height.value;
	let rad=radius_zao(height1);
	let height = parseFloat(obj.height.value/1000);
	let tolst = parseFloat(obj.tolst.value/1000);
	let lenght = parseFloat(obj.lenght.value);
	let weight = parseFloat(obj.weight.value);
	let R = parseFloat(rad[0]/1000);
	let r = parseFloat(rad[1]/1000);
	if(!lenght) {
		lenght = weight/((((height+height-tolst)*tolst)+(1-Math.PI/4)*(R*R-2*r*r))*plotn);
		$('.lenght').empty();
		$('.lenght').append('<span>'+lenght.toFixed(2)+' м</span>');
	}
	if(!weight){
		weight = (((height+height-tolst)*tolst)+(1-Math.PI/4)*(R*R-2*r*r))*plotn*lenght;
		$('.weight').empty();
		$('.weight').append('<span>'+weight.toFixed(2)+' кг</span>');
	}
}

function sheet(obj,plotn) {
	let width = parseFloat(obj.width.value/1000);
	let tolst = parseFloat(obj.tolst.value/1000);
	let lenght = parseFloat(obj.lenght.value/1000);
	let kolvo = parseFloat(obj.kolvo.value);
	let weight = parseFloat(obj.weight.value);

	if(!kolvo) {
		kolvo = weight/(width*lenght*tolst*plotn);
		let square = width*lenght*kolvo;
		$('.square').empty();
	    $('.square').append('<span>'+square.toFixed(2)+' м<sup>2</sup></span>');
		$('.kolvo').empty();
		$('.kolvo').append('<span>'+kolvo.toFixed(2)+' шт</span>');
		
	}
	if(!weight) {
		weight = width*lenght*tolst*plotn*kolvo;
		let square = width*lenght*kolvo;
		$('.weight').empty();
		$('.weight').append('<span>'+weight.toFixed(2)+' кг</span>');
		$('.square').empty();
	    $('.square').append('<span>'+square.toFixed(2)+' м<sup>2</sup></span>');
	}
}

function pipe(obj,plotn) {
	let diametr = parseFloat(obj.diametr.value/1000);
	let tolst = parseFloat(obj.tolst.value/1000);
	let lenght = parseFloat(obj.lenght.value);
	let weight = parseFloat(obj.weight.value);
	if(!lenght) {
		lenght = weight/(((Math.PI*Math.pow((diametr/2),2))-(Math.PI*Math.pow((diametr/2-tolst),2)))*plotn);
		$('.lenght').empty();
		$('.lenght').append('<span>'+lenght.toFixed(2)+' м</span>');
	}
	if(!weight){
		weight = ((Math.PI*Math.pow((diametr/2),2))-(Math.PI*Math.pow((diametr/2-tolst),2)))*lenght*plotn;
		$('.weight').empty();
		$('.weight').append('<span>'+weight.toFixed(2)+' кг</span>');
	}
}

function circle(obj,plotn) {
	let diametr = parseFloat(obj.diameter.value/1000);
	let lenght = parseFloat(obj.lenght.value);
	let weight = parseFloat(obj.weight.value);
	if(!lenght) {
		lenght = weight/(((Math.PI*diametr*diametr)/4)*plotn);
		$('.lenght').empty();
		$('.lenght').append('<span>'+lenght.toFixed(2)+' м</span>');
	}
	if(!weight){
		weight = ((Math.PI*diametr*diametr)/4)*lenght*plotn;
		$('.weight').empty();
		$('.weight').append('<span>'+weight.toFixed(2)+' кг</span>');
	}
}

function pipe_prof(obj,plotn) {
	let height = parseFloat(obj.height.value/1000);
	let width = parseFloat(obj.width.value/1000);
	let tolst = parseFloat(obj.tolst.value/1000);
	let lenght = parseFloat(obj.lenght.value);
	let weight = parseFloat(obj.weight.value);
	if(!lenght) {
		lenght = weight/(2*(width+height-2.86*tolst)*tolst*plotn);
		$('.lenght').empty();
		$('.lenght').append('<span>'+lenght.toFixed(2)+' м</span>');
	}
	if(!weight){
		weight = 2*(width+height-2.86*tolst)*tolst*lenght*plotn;
		$('.weight').empty();
		$('.weight').append('<span>'+weight.toFixed(2)+' кг</span>');
	}
}

function square(obj,plotn) {
	let width = parseFloat(obj.width.value/1000);
	let lenght = parseFloat(obj.lenght.value);
	let weight = parseFloat(obj.weight.value);
	if(!lenght) {
		lenght = weight/(width*width*plotn);
		$('.lenght').empty();
		$('.lenght').append('<span>'+lenght.toFixed(2)+' м</span>');
	}
	if(!weight){
		weight = width*width*lenght*plotn;
		$('.weight').empty();
		$('.weight').append('<span>'+weight.toFixed(2)+' кг</span>');
	}
}

function channel(obj,plotn) {
	let width = parseFloat(obj.width.value/1000);
	let height = parseFloat(obj.height.value/1000);
	let tolst = parseFloat(obj.tolst.value/1000);
	let lenght = parseFloat(obj.lenght.value);
	let weight = parseFloat(obj.weight.value);
	if(!lenght) {
		lenght = weight/((width+2*(height-tolst))*tolst*plotn);
		$('.lenght').empty();
		$('.lenght').append('<span>'+lenght.toFixed(2)+' м</span>');
	}
	if(!weight){
		weight = (width+2*(height-tolst))*tolst*lenght*plotn;
		$('.weight').empty();
		$('.weight').append('<span>'+weight.toFixed(2)+' кг</span>');
	}
}

function strip(obj,plotn) {
	let width = parseFloat(obj.width.value/1000);
	let tolst = parseFloat(obj.tolst.value/1000);
	let lenght = parseFloat(obj.lenght.value);
	let weight = parseFloat(obj.weight.value);
	console.log(width,tolst,lenght, weight);
	if(!lenght) {
		lenght = weight/(width*tolst*plotn);
		let square = lenght*width;
		$('.lenght').empty();
		$('.lenght').append('<span>'+lenght.toFixed(2)+' м</span>');
		$('.square').empty();
	    $('.square').append('<span>'+square.toFixed(2)+' м<sup>2</sup></span>');
	}
	if(!weight){
		weight = width*tolst*lenght*plotn;
		let square = lenght*width;
		$('.square').empty();
	    $('.square').append('<span>'+square.toFixed(2)+' м<sup>2</sup></span>');
		$('.weight').empty();
		$('.weight').append('<span>'+weight.toFixed(2)+' кг</span>');
	}
}

function balk(obj,plotn) {
	let width = parseFloat(obj.width.value/1000);
	let height = parseFloat(obj.height.value/1000);
	let tolst_perem = parseFloat(obj.tolst_perem.value/1000);
	let tolst_polok = parseFloat(obj.tolst_polok.value/1000);
	let lenght = parseFloat(obj.lenght.value);
	let weight = parseFloat(obj.weight.value);
	if(!lenght) {
		lenght = weight/((2*width*tolst_polok+(height-2*tolst_polok)*tolst_perem)*plotn);
		$('.lenght').empty();
		$('.lenght').append('<span>'+lenght.toFixed(2)+' м</span>');
	}
	if(!weight){
		weight = (2*width*tolst_polok+(height-2*tolst_polok)*tolst_perem)*lenght*plotn;
		$('.weight').empty();
		$('.weight').append('<span>'+weight.toFixed(2)+' кг</span>');
	}
}

function hexahedron(obj,plotn) {
	let radius = parseFloat(obj.diametr.value/1000)/2;
	let lenght = parseFloat(obj.lenght.value);
	let weight = parseFloat(obj.weight.value);
	if(!lenght) {
		lenght = weight/(((2*radius*radius*Math.sqrt(3)))*plotn);
		$('.lenght').empty();
		$('.lenght').append('<span>'+lenght.toFixed(2)+' м</span>');
	}
	if(!weight){
		weight = ((2*radius*radius*Math.sqrt(3)))*lenght*plotn;
		$('.weight').empty();
		$('.weight').append('<span>'+weight.toFixed(2)+' кг</span>');
	}
}