var deck=40;
var redeck=deck;
var chdeck;
var turn;
var i;
var par=1;
var emptybox=1;
var indeck;
var janken;
var num;
var parbox=1;
var turn;
//欲しいカードは初手・マリガンにおいてすべてキープするものとする。
//初手・マリガンキープはしないカードの引ける確率を求める機能も追加していきたい。(翠嵐とか。)
//デッキの増減(afネメシス)には対応できておらず

function calculate(){
    //janken=document.draw.janken.selectedIndex;      //先攻なら0,後攻なら1
    //first_handpar(indeck);　
    redeck=sigma(redeck,3);         //初期に配られる3枚で目的のカードを引く確率
    marigan(redeck);        //マリガンで指定枚数戻して引き直し，確率を求める
    chdeck=parseFloat(document.draw.deck.value);
    turn=redeck-chdeck;
    //alert(turn);
    if(turn!=0){
        sigma(redeck,turn);
    }
    parbox=mathsigma(1);
    par=1-parbox;
    //alert(par);
    document.draw.par.value=par*100;
    redeck=deck;
    mathsigma(0);
}
function marigan(redeck){
    num=parseFloat(document.draw.marigan.selectedIndex);        //マリガン枚数の取得
    redeck=redeck+num;
    if(num!=0){
        redeck=sigma(redeck,num);
    }
    //alert(redeck);
    return redeck;
}
function sigma(redeck,i){
    var indeck=parseFloat(document.draw.wanna.value);
    var box;
    for(var j=0;j<i;j++){
        box=parseFloat(redeck-j-indeck)/(redeck-j)*emptybox;
        emptybox=box;
    }
    redeck=redeck-j;
    emptybox=1;
    mathsigma(box);
    //alert(parbox);
    //alert(redeck);
    return redeck;
}
function mathsigma(box){
    parbox=parbox*box;
    if(parbox==0){
        parbox=1;
    }
    return parbox;
}
