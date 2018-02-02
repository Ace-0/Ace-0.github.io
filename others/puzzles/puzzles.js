var varBlocks= {
	temp:null, //=document.getElementsByClassName("block");
	elems:new Array,  //=[[temp[0],temp[1],temp[2],temp[3]],[temp[4],temp[5],temp[6],temp[7]],[temp[8],temp[9],temp[10],temp[11]],[temp[12],temp[13],temp[14],temp[15]]];
	game_box:null,
	empty:{
		x:3,
		y:3,
	},
	frag:null,
	elem_empty:new Array,
	stack:new Array,
};
var varControl={
	start_button:null,
	recover_button:null,
	is_start:false,
	is_recover:false,
	first_load:true,
};
window.onload=function(){
	init();
	appendimg();

	varControl.start_button=document.getElementById("start_button");
	varControl.recover_button=document.getElementById("recover_button");
//	break_map();
	varControl.start_button.onclick=function(){
		if(!varControl.is_start){
			init();
			varControl.is_start=true;
			console.log(varControl.is_start);
			start_game();
			varControl.is_recover=false;
		}else {
			varControl.is_start=true;
		}
	};
	varControl.recover_button.onclick=function(){
		if(varControl.is_start&&!varControl.is_recover){
			recover();
			varControl.is_start=false;
			varControl.first_load=false;
		}
	};
//	break_map();
//	recover();
}
function swapclassname(first,second){
	//	console.log(first,second);
		var temp=first.className;
		first.className=second.className;
		second.className=temp;
}
function swappos(i,j){
	var temp_x=varBlocks.empty.x;
	var temp_y=varBlocks.empty.y;
	var temp_e=varBlocks.elems[temp_x][temp_y];
	varBlocks.elems[temp_x][temp_y]=varBlocks.elems[i][j];
	varBlocks.elems[i][j]=temp_e;
	varBlocks.empty.x=i;
	varBlocks.empty.y=j;
}
function empty_nearby(row,col){

		
		if(row===varBlocks.empty.x&&(col===varBlocks.empty.y-1||col===varBlocks.empty.y+1)){
			return true;
		}else if(col===varBlocks.empty.y&&(row===varBlocks.empty.x-1||row===varBlocks.empty.x+1)){
			return true;
		}else 
		return false;
	}
function init(){
	while(varBlocks.stack.length!=0){
		varBlocks.stack.pop();
	}
	varBlocks.game_box=document.getElementById("game_zone");
	varBlocks.empty.x=3;
	varBlocks.empty.y=3;
	
}
function appendimg(){
	var whole_pic=document.createDocumentFragment();
	for(var i=0;i<4;i++){ varblocks.elems[i]="[];" }="" for(var="" i="0;i<4;i++){" var="" rowarr="new" array;="" j="0;j<4;j++){" one="document.createElement("div");" one.classname="block" +"="" row-"+(i+1)+"="" col-"+(j+1);="" one.id="d" +(i+1)+"-"+(j+1);="" one.onclick="(function(){" return="" function(){="" temp_x="varBlocks.empty.x;" temp_y="varBlocks.empty.y;" move(this,getpos(this));="" instack(temp_x,temp_y);="" }})();="" rowarr[j]="one;" whole_pic.appendchild(one);="" varblocks.game_box.appendchild(whole_pic);="" function="" move(one,pos){="" console.log(varcontrol.is_start);="" if(!varcontrol.is_start){="" return;="" if(empty_nearby(pos.x,pos.y)){="" console.log(this,varblocks.elems[varblocks.empty.x][varblocks.empty.y]);="" swapclassname(one,varblocks.elems[varblocks.empty.x][varblocks.empty.y]);="" console.log(i,j);="" swappos(pos.x,pos.y);="" getpos(id){="" console.log(id);="" name="id.className;" x="name[10];" y="name[16];" {="" x:="" parseint(x)-1,="" y:="" parseint(y)-1,="" complete(){="" if(varblocks.elems[i][j].id!="d" +(i+1)+"-"+(j+1)){="" false;="" true;="" break_map(){="" while(true){="" dir_x,dir_y;="" dir="parseInt(x%4);" if(dir="=0){" dir_x="varBlocks.empty.x-1;" dir_y="varBlocks.empty.y;" if(!inborder(dir_x,dir_y)){="" continue;="" }else="" move(varblocks.elems[dir_x][dir_y],getpos(varblocks.elems[dir_x][dir_y]));="" break;="" instack(temp_x,temp_y){="" varblocks.stack.push(varblocks.elems[temp_x][temp_y]);="" inborder(row,col){="" if(row<="3&&row">=0&&col<=3&&col>=0){
		return true;
	}else{
		return false;
	}
}
function recover(){
	while(!complete()){
		console.log(varBlocks.stack.length);
		var temp=varBlocks.stack.pop();
		console.log(temp);
		move(temp,getpos(temp));
	}
	varControl.is_recover=true;
}
function start_game(){
//	init();
	break_map();
}</=3&&col></4;i++){>