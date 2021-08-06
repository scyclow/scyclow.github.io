let e,t,n,o,r,s,c,i,l,f,u,a,C,h,p,T,E,k,I,_,g,d,O,S,W,M,R,L,A,P,N,w,F,b,v,H,x,V;const D=700,G=400,X=D/G,j=4,K=-D/2,U=D/2,Y=-G/2,$=G/2,m={1:[K,Y],2:[U,Y],3:[K,$],4:[U,$]};let B,y,q=!1,Q=!1;function setup(){const t=window.innerWidth/window.innerHeight;X<t?(B=createCanvas(window.innerHeight*X,window.innerHeight),e=window.innerHeight/G):X>t?(B=createCanvas(window.innerWidth,window.innerWidth/X),e=window.innerWidth/D):(B=createCanvas(window.innerWidth,window.innerHeight),e=window.innerWidth/D),y=createGraphics(D*j,G*j),noLoop(),colorMode(HSB,360,100,100,100),z()}function z(){const e=jt();e<.5?u="1":e<.75?u="5":e<7/8?u="10":e<.9375?u="20":e<31/32?u="50":e<63/64?u="100":e<127/128&&(u="2"),E=Kt(.2);const l="MAIN"==(V=Kt(.8125)?"MAIN":"STRIP");MAIN_CENTER_PIECE=re(),_=l&&Kt(.75),g=l&&(_&&Kt(.95)||Kt(.8));const D=jt();D<.0625?(a="DECO",h=!0):D<.625?a="NUMISMATIC":D<.8125?(a="VINTAGE",C=!0):a=D<.875?"ECHO":D<.9375?"DIGITAL":"LINE",L=Kt(.0625);const G=jt();let X;if(COLOR_SCHEME=G<.75?"FIAT":G<.9375?"CRYPTO":"BULLION",p="BULLION"===COLOR_SCHEME,IS_CRYPTO="CRYPTO"===COLOR_SCHEME,"FIAT"===COLOR_SCHEME)f=int(jt(0,360)),t=color(f,26,25),o=color($t(f-72),6,91),r=color($t(max(f-72,0)),6,91),n=color(f,16,55),i=color($t(f-145),80,64),LIGHT_ACCENT_C=color($t(f-145),55,64,30),s=color(max(f-10,0),80,54),c=s,R=Kt(.02);else if("CRYPTO"===COLOR_SCHEME){const e=(f=int(jt(0,360)))<275&&f>210;o=color($t(f-133),96,e?0:15),t=color(f,e?80:99,e?95:90),n=color(f,69,75),i=color($t(f-254),100,100),LIGHT_ACCENT_C=i,c=s=i,r=o}else f=int(jt(0,360)),t=color(f,26,25),Kt(.5)?(o=color(203,5,48),s=color(167,5,95),t=color(40,26,20),n=color(203,10,35),c=n,X=!0):(o=color(40,60,67),s=color(60,30,100),t=color(35,45,30),n=color(35,45,35),c=color(203,10,25)),i=t,LIGHT_ACCENT_C=n,r=o,T=!0;const j=Kt(.5)||p,K=X?s:r,U=!T||h||C||p?t:c;ROSETTE_FILL_C=C||j?K:U,ROSETTE_STROKE_C=C||j?U:K,T=!C&&Kt(.125);const Y=jt();!l||_||Y<.125?(k="STANDARD",I=Ue()):k=Y<.5?"WM2":Y<.8125?"WM1":C||h?Kt(.5)?"WM1":"WM2":Y<.9375||IS_CRYPTO?"FULL":"EMPTY",O=[0,1,3,5].includes(MAIN_CENTER_PIECE)&&"WM2"!==k&&Kt(.125),S=O&&Kt(.25),W=O&&Kt(.5),M=!g&&8!==I&&!W,serialSeed=jt(),H=serialSeed<.005?0:serialSeed<.01?1:serialSeed<.015?2:serialSeed<.02?3:serialSeed<.025?4:serialSeed<.03?5:serialSeed<.035?6:"",d=Kt(.02),A=Kt(.015),P=Kt(.01),N=Kt(.01),b=Kt(.01),w=Kt(.005),F=Kt(.005),x=!H&&!d&&Kt(.05),v=A||P||L}function J(){push();const e=Ut(),n=jt(0,100);p||strokeWeight(2);for(let r=-n;r<=D+n;r++){const c=1===e?r-D/2:D/2-r;stroke(lerpColor(o,R||p||T?s:t,R||p||IS_CRYPTO&&T?r/D:r/(5*D))),line(c+n,-G/2,c,G/2)}pop(),"FIAT"===COLOR_SCHEME&&$e(),"CRYPTO"!==COLOR_SCHEME&&Ye()}function draw(){translate(width/2,height/2),scale(e),noFill(),stroke(t),J(),N&&ee(),b&&Z(),"MAIN"===V?oe():We(),F&&te(),w&&ne(),console.log("$"+u)}function keyPressed(){83===keyCode&&saveCanvas(B,"FIM-"+Date.now(),"jpg")}function Z(){translate(-1)}function ee(){translate(jt(D/4,G/4)*Ut(),jt(D/4,G/4)*Ut()),rotate(jt(HALF_PI,-HALF_PI))}function te(){push(),fill(o),strokeWeight(0),beginShape(),vertex(jt(-D/2,D/2),-G/2),vertex(jt(-D/2,D/2),G/2),vertex(jt(-D/2,D/2),-G/2),endShape(),pop()}function ne(){for(let e=0;e<=D;e++)for(let t=0;t<=G;t++)strokeWeight(0),fill(0,0,100,jt(0,70)),rect(e-D/2,t-G/2,2)}function oe(){const e=g||v?se():[];let t=[],o=!1;if("STANDARD"===k)Ke();else if("WM2"===k)tt(t=he(e));else if("WM1"===k){const o=Ce(e);t=[o];const r=175*fe(o),s=80*ue(o,4===e.length),c=T?LIGHT_ACCENT_C:n;Kt(.8)?ft(r,s,c):ht(r+15,s,245,c)}else"FULL"===k&&(nt(),o=!0);switch(_&&_t(),ce(e),MAIN_CENTER_PIECE){case 0:break;case 1:ge();break;case 2:de();break;case 3:Ee();break;case 4:Oe()}if(O){const e=Ut();W?Ie(e):ke(e),S?ke(-1*e):Ie(-1*e)}pe(t.length||4===e.length?t:e,o)}function re(){if("MAIN"===V){const e=jt();return e<.6875?1:e<.8125?2:e<.9375?3:4}}function se(){const e=jt();return e<.25?[1,2,3,4]:e<.5?[1,4]:e<.75?[2,3]:e<.825?[1,2]:e<.9375?[3,4]:[int(jt(1,5))]}function ce(e=[]){const t=Kt(.125),n=4===e.length&&Kt(.5)?[Yt([1,3]),Yt([2,4])]:[],o=De(_e());e.forEach(e=>{const[r,s]=m[e],c=r+(e%2==1?57:-57),i=s+(e<3?57:-57),l=t||n.includes(e)?41.25:0;Pe(c,i,55,0,{...o,holeR:l}),Dt(c,i,.35,ROSETTE_FILL_C,ROSETTE_STROKE_C)})}console.log("000");const ie=e=>[1,2,3,4].filter(t=>!e.includes(t)),le=e=>({1:4,2:3,3:2,4:1})[e],fe=e=>e%2!=0?-1:1,ue=(e,t)=>t?0:e<3?-1:1,ae=(e,t)=>e.every((e,n)=>e===t[n])&&e.length===t.length,Ce=e=>4!==e.length&&e.length?1===e.length?le(e[0]):Yt(ie(e)):Yt([1,2,3,4]);function he(e){return 4!==e.length&&e.length?ae(e,[1,4])||ae(e,[2,3])?Yt([[1,4],[2,3]]):1===e.length?ie([e[0],le(e[0])]):[le(e[0]),le(e[1])]:Yt([[1,4],[2,3],[1,2],[3,4]])}function pe(e=[],t=!1){const n=115+(_?0:30),o=1===e.length?le(e[0]):Yt(ie(e)),r=Yt(ie([o,...e])),s=(_?150:120)*fe(o),c=150*fe(r);ot(s>0?s+85:s,n*ue(o),10,t),it(c<0?c-65:c,n*ue(r))}function Te(e,t=!1){if(push(),t||Kt(.25))rotate(.75*TWO_PI*e),it(-D/6-25,-D/3-80),ot(D/6+35,-D/3-80,10);else{const t=e>0;it((5*D/12+(t?30:-35))*-e,G/3+15),ot(t?70:-5,G/3+20,10)}pop()}function Ee(){const e=C?{c1:-1,c2:185}:{holeR:135,c1:1,c2:-1,r1:15,r2:14,..._e()};Pe(0,0,C?170:155,0,e);const t=jt();M||t<.1?Gt(0,0,2.3):t<.8?ft(0,0,ROSETTE_STROKE_C,C?.5:.7):t<.92?ht(0,0,200):t<.98&&lt(0,0,250)}function ke(e){const t=int(jt(3,11))*Ut();ve(210*e,20,40,0,Xe({strokeC:i,strokeW:1,rDiff:2,ignoreShrink:!0,c1:t,c2:(t+5)*Ut()}))}function Ie(e){Dt(205*e,20,.65,LIGHT_ACCENT_C,LIGHT_ACCENT_C)}const _e=()=>C?{}:{strokeC:ROSETTE_STROKE_C,innerC:T?ROSETTE_STROKE_C:n,outterC:ROSETTE_FILL_C};function ge(){const e=!C&&Kt(.5),t=Kt(.25)?Yt([1,2]):0,n=_e();Pe(0,0,150,0,n),e?Pe(0,0,70,0,{...n,holeR:60}):t&&(Pe(0,0,110,0,0,n),t>1&&Pe(0,0,70,0,0,n)),(M||e||t<2||Kt(.9375))&&Gt(0,0,1)}function de(){const e=Yt([1,2,3]),t=_e();if(3===e){const e=De(t);Pe(150,0,80,0,e),Pe(-150,0,80,0,e)}const n=De(t);if(Pe(110,0,100,0,n),Pe(-110,0,100,0,n),e>1){const e=De(t);Pe(60,0,130,0,e),Pe(-60,0,130,0,e)}Pe(0,0,150,0,De(t)),Pe(0,0,70,0,{...De(t),holeR:u?60:0}),Gt(0,0,.65)}function Oe(){const e=jt(),t=_e();if(e<.125){const e=De(t);Pe(25,-120,25,0,e),Pe(25,120,25,0,e),Pe(-25,-120,25,0,e),Pe(-25,120,25,0,e)}if(e<.25){const e=De(t);Pe(50,-90,45,0,e),Pe(50,90,45,0,e),Pe(-50,-90,45,0,e),Pe(-50,90,45,0,e)}if(e<.5){const e=De(t);Pe(90,-50,70,0,e),Pe(90,50,70,0,e),Pe(-90,-50,70,0,e),Pe(-90,50,70,0,e)}const n=De(t);Pe(130,0,90,0,n),Pe(-130,0,90,0,n),Gt(0,0,.65)}function Se(){const e=_e();Pe(0,0,120,0,De(e)),Pe(0,0,90,0,De(e)),Pe(0,0,60,0,De(e)),xt(u,-142,2,.65,t),xt(u,142,2,.65,t),xt(u,-140,0,.65,t,o),xt(u,140,0,.65,t,o)}function We(){Ke();const e=Ut();if(Kt(.1))return Re(e,!0),Re(0,!0),Re(-1*e,!0),void Te(e,!0);Kt(.5)&&Me(e),Re(e);const t=jt(),n=D/-6*e;if(t<.65||v){const t=_e();Pe(D/-6*e,0,180,0,t),(C||Kt(.3125))&&(Pe(D/-6*e,0,135,0,t),Pe(D/-6*e,0,90,0,t),C&&Pe(D/-6*e,0,70)),Kt(.1)&&ht(n,0,245)}else t<.9?(ft(n,0),(Kt(.1)||0===I)&&ht(n,0,245)):t<.97?ht(n,0,245):t<.99?Gt(n,0,3):lt(D/-6*e,0,300);Kt(.5)&&Ae(-1*e,1),Kt(.5)&&Ae(-1*e,-1),Te(e)}function Me(e=-1){push(),T&&stroke(c),line(D*e/6-1,20-G/2,D*e/6-1,G/2-20),line(D*e/6+1,20-G/2,D*e/6+1,G/2-20),pop()}function Re(e=-1,t=!1){if(Kt(.5)&&!t)Le(G/3*(Kt(.5)?1:-1),e);else{const t=Yt([1,2,3]);Le(-G/3,e,1!=t),Le(0,e,2!=t),Le(G/3,e,3!=t)}}function Le(e,t,n=!1){const o=jt(),r=D/3*t;o<.85||!n?Gt(r,e,1.1):Pe(r,e,55,0,_e())}function Ae(e=1,t=1){push(),strokeCap(SQUARE);const n=D/2*e,o=-G/2*t;line(n-35*e,o+20*t,n-10*e,o+20*t),line(n-10*e,o+20*t,n-10*e,o+45*t),line(n-35*e,o+25*t,n-15*e,o+25*t),line(n-15*e,o+25*t,n-15*e,o+45*t),pop()}function Pe(e,t,n,o=0,r={}){C&&(n*=.75),h&&(r={...r,fillC:ROSETTE_FILL_C,strokeMod:6});const s=C?Ge(r):Xe(r);s.innerC?be(e,t,n,o,s):("NUMISMATIC"===a?Fe:C?Ve:be)(e,t,n,o,{...s,strokeC:ROSETTE_FILL_C,fillC:ROSETTE_FILL_C,strokeMod:6}),Ne()(e,t,n,r.holeR||o,{...s,strokeC:ROSETTE_STROKE_C,innerC:!1})}conosle.log("1111");const Ne=()=>P?Yt([Fe,ve,xe,He,Ve]):["NUMISMATIC","DECO"].includes(a)?Fe:"ECHO"===a?ve:"DIGITAL"===a?xe:"LINE"===a?He:C?Ve:mt;function we(){Pe(0,0,90,0,Xe({fillC:ROSETTE_FILL_C,strokeMod:6}))}function Fe(e,t,n=200,o=100,r={},s=window){s.push(),r.strokeC&&s.stroke(r.strokeC),r.fillC&&s.fill(r.fillC);const c=r.strokeMod||1,i=r.points,l=je(e,t,i,r.c1,r.c2,r.r1,r.r2);for(let e=0;e<6;e++)s.strokeWeight(((r.strokeW||.7)+n/150-1)*c),qt(i,t=>{const[o,r]=l(n,t,e/3),[s,c]=l(.95*n,t,e/3);return t%2==0?[s,c]:[o,r]},s);let f=n,u=.75*n,a=0;for(;u>=o&&a<20;){s.strokeWeight((r.strokeW||1)+f/150-1);for(let e=0;e<6;e++)qt(i,t=>{const[n,o]=l(f,t,e/3),[r,s]=l(u,t,e/3);return t%2==0?[r,s]:[n,o]},s);(f=1.045*u)<10?u=0:u-.75*u<10?u=f-10:u*=.75,a++}s.pop()}function be(...e){ve(...e,!0)}function ve(e=0,t=0,n=200,o=100,r={},s=!1){push(),r.strokeC&&stroke(r.strokeC),s&&strokeWeight(2),r.strokeW&&strokeWeight(r.strokeW);const c=je(e,t,r.points,r.c1,r.c2,r.r1,r.r2),i=r.rDiff||(s?1:5),l=s?int(n/40):0;for(let e=o;e<=n+l;e+=i)!s&&!r.ignoreShrink&&strokeWeight(e*r.strokeW/130),r.innerC&&r.outterC&&stroke(lerpColor(r.innerC,r.outterC,(e-o)/(n-o))),Bt(r.points,t=>c(e,t));pop()}function He(e=0,t=0,n=200,o=100,r={}){push(),r.strokeC&&stroke(r.strokeC),r.strokeW&&strokeWeight(r.strokeW);const s=r.points/2,c=je(e,t,s,r.c1,r.c2,r.r1,r.r2);for(let e=0;e<s;e+=.2){const[t,r]=c(n,e),[s,i]=c(o,e);line(s,i,t,r)}pop()}function xe(e=0,t=0,n=200,o=100,r={}){He(e,t,n,o,r),ve(e,t,n,o,r)}function Ve(e=0,t=0,n=90,o=0,r={}){push(),r.strokeC&&stroke(r.strokeC),r.fillC&&fill(r.fillC),r.strokeW&&strokeWeight(r.strokeW);const s=n/r.r1,c=n/r.r2,i=r.points,l=i/r.c1,f=i/r.c2;qt(i,o=>{const r=o/i*TWO_PI,u=o/l*TWO_PI,a=o/f*TWO_PI,C=yt(r,n,e,t),[h,p]=yt(u,s,C[0],C[1]);return yt(a,c,h,p)}),pop()}const De=e=>C?Ge(e):Xe(e),Ge=e=>({c1:int(jt(1,13))*Ut(),c2:int(jt(170,192))*Ut(),r1:9,r2:5,strokeC:ROSETTE_STROKE_C,points:360,...e}),Xe=e=>({c1:int(jt(1,L?25:16))*Ut(),c2:int(jt(1,L?20:13))*Ut(),r1:L?jt(4,10):jt(10,20),r2:L?jt(4,10):jt(10,20),points:70,...e}),je=(e,t,n,o,r,s,c)=>{const i=n/o,l=n/r;return(o,r,f=0,u=null,a=null)=>{const C=(r+f)/n,h=(r+f)/i,p=(r+f)/l,T=u||1/s,E=a||1/c,k=1-T-E,[I,_]=yt(C*TWO_PI,o*k,e,t),[g,d]=yt(h*TWO_PI,o*T,I,_);return yt(p*TWO_PI,o*E,g,d)}};function Ke(){switch(I){case 0:et();break;case 1:Ze();break;case 2:Be();break;case 3:ye();break;case 4:qe();break;case 5:Qe();break;case 6:ze();break;case 7:Je();break;case 8:me()}}function Ue(){const e=jt();return Kt(IS_CRYPTO?.125:.01)?0:e<.125?1:e<.25?2:e<.375?3:e<.5?4:e<.625?5:e<.75?6:e<.875?7:8}function Ye(){push(),noFill(),strokeWeight(jt(.1,.5));for(let e=0;e<40;e++){stroke(p?s:Kt(.75)?t:i);const e=jt(-D/2,D/2),n=jt(-G/2,G/2),o=e+jt(-25,25),r=o+jt(-25,25),c=r+jt(-25,25),l=n+jt(-25,25),f=l+jt(-25,25),u=f+jt(-25,25);beginShape(),curveVertex(e+jt(-20,20),n+jt(-20,20)),curveVertex(e,n),curveVertex(o,l),curveVertex(r,f),curveVertex(c,u),endShape()}pop()}function $e(){push();for(let e=-D/2;e<D/2;e+=5)for(let t=-G/2;t<G/2;t+=5)strokeWeight(jt(1,2)),stroke(color(f,26,25,jt(0,40))),point(e+jt(-5,5),t+jt(-5,5));pop()}function me(){push(),strokeWeight(1);for(let e=-D/2;e<D/2;e+=20)for(let n=-G/2;n<G/2;n+=20){const o=jt(.01,.15),r=Kt(.3),s=r?0:jt(-10,10),c=r?0:jt(-10,10);Ht(Ft(),e+s+10,n+c+10,o,t)}pop()}function Be(){push(),stroke(t),strokeWeight(.5);for(let e=-D/2;e<D/2;e+=10)for(let t=-G/2;t<G/2;t+=10)Kt(.5)?line(e,t,e+10,t+10):line(e+10,t,e,t+10);pop()}function ye(){push(),noFill(),strokeWeight(.5);const e=T||Kt(.5);for(let t=0,n=0;t<=G+5;t+=15,n++){const o=t-G/2;beginShape(),curveVertex(-30-D/2,o-7.5);for(let t=0;t<D/30+2;t++){const r=n%2==0?t%2==0?7.5:-7.5:t%2==0?-7.5:7.5;curveVertex(30*t-D/2,o+r),e&&(fill(s),circle(30*t-D/2,o+r,4),noFill())}endShape()}pop()}function qe(){push(),noFill(),strokeWeight(.5);for(let e=0;e<D;e+=100)for(let t=0;t<G;t+=100)if(t/100%2==0&&e/100%2==0||t/100%2==1&&e/100%2==1)for(let n=0;n<100;n+=4)line(e-D/2,n+t+2-G/2,e+100-D/2,n+t+2-G/2);else for(let n=0;n<100;n+=4)line(n+e+2-D/2,t-G/2,n+e+2-D/2,t+100-G/2);pop()}function Qe(){push(),noFill(),strokeWeight(.5);for(let e=-5;e<G+8;e+=G/100){const t=e-G/2;beginShape(),curveVertex(-30-D/2,t-7.5);for(let e=0;e<D/30+2;e++)curveVertex(30*e-D/2,t+(e%2==0?7.5:-7.5));endShape()}pop()}function ze(){push(),strokeWeight(.35),T&&fill(LIGHT_ACCENT_C),stroke(n);for(let e=0;e<D;e+=10)for(let t=0;t<G;t+=10){const n=e-D/2,o=t-G/2;if(Kt(.5)){line(n,o,n+10,o+10);const e=jt();e<.15?circle(n,o,4):e<.3&&circle(n+10,o+10,4)}else{line(n+20,o,n,o+20);const e=jt();e<.15?circle(n+20,o,4):e<.3&&circle(n,o+20,4)}}pop()}function Je(){push(),strokeWeight(1),stroke(n);for(let e=-D/2-G/2;e<G/2+D/2;e+=5)line(e,-G/2,G/2+e,0),line(G/2+e,0,e,G/2);pop()}function Ze(){push(),strokeWeight(.35),stroke(n);for(let e=-D/2;e<D/2+1;e+=10)for(let t=-G/2;t<G/2+1;t+=10)circle(e,t,14);pop()}function et(){push();const e=int(jt(2,5));for(let n=0;n<D;n+=e)for(let r=0;r<G;r+=e)fill(lerpColor(o,t,jt(.75))),noStroke(),rect(D/2-n-e,G/2-r-e,e,e);pop()}function tt(e=[2,4]){push();const n=C?Fe:Ne(),o=Xe({strokeC:t,strokeW:.35}),r=jt(0,D/4);e.forEach(e=>n(m[e][0],m[e][1],D/2,r,o)),pop()}function nt(){Pe(0,0,D,0)}function ot(e,n,r,s){if(x)return;push(),noFill(),strokeWeight(1.5);let c=e-8*r,l=n+r/2;const f=[[c-jt(r),l-jt(r)],[c,l]];Qt(8,()=>{const e=Kt(.75),t=c+r*(1+.1*(e?-7:7))/2,n=l+(e?Kt(.85)?r*jt(0,.3):r*jt(1,1.5):-1*(Kt(.5)?r*jt(0,.3):r*jt(1,1.5))),o=c+r*jt(.9,1.1),s=l+r*jt(-.1,.1);f.push([t,n]),f.push([o,s]),c=o,l=s}),f.push([c+jt(r),l+jt(r)]),s?stroke(t):stroke(o),beginShape(),f.forEach(([e,t])=>curveVertex(e+1,t+1)),endShape(),s?stroke(i):stroke(t),beginShape(),f.forEach(([e,t])=>curveVertex(e,t)),endShape(),pop()}console.log("2222"),console.log("3333");let rt=e=>{let t=jt()+"";return t[2]!==e?t[2]:rt(e)},st=(e=2)=>jt().toFixed(3).slice(2,2+e);function ct(){let e="";const t=t=>Qt(t,()=>e+=st());if(0===H)t(2),e+=e;else if(1===H)t(2),e+=e.split("").reverse().join("");else if(2===H)t(4),e=e.split("").sort().join("");else if(3===H)t(4),e=e.split("").sort().reverse().join("");else if(4===H)e="00000"+st(3);else if(5===H)e="99999"+st(3);else if(6===H){const t=rt("0");Qt(8,()=>e+=Yt(["0",t]))}else t(4);return e}function it(e,n){if(x)return;push();const r=ct();fill(o),stroke(t),rect(e,n,d?72:60,20),Ht(r,e+30,n+10,.125,t,i),d&&(fill(i),stroke(i),qt(10,t=>yt(t*TWO_PI/10,t%2==0?2.5:6,e+63,n+10))),pop()}function lt(e,n,r=200){push(),strokeWeight(2),fill(o),arc(e,n,.9*r,r,0,TWO_PI),noFill(),Ht("$",e-.17*r,n-.125*r,.125,t),Ht("$",e+.17*r,n-.125*r,.125,t),circle(e-.17*r,n-.125*r,.1*r),circle(e+.17*r,n-.125*r,.1*r),arc(e,n,.6*r,.7*r,TWO_PI+.15*PI,.85*PI),pop()}function ft(e,t,n,o=1){push(),scale(o),n&&stroke(n);const r=jt();r<.3333?ut(e,t):r<.85?at(e,t):Ct(e,t),pop()}function ut(e=0,t=0,n=100){const o=1080/Yt([22,32,32.5,33,34,64,65,66,66.4]);Bt(1080,r=>{const s=r/1080*TWO_PI,[c,i]=yt(s,n/100+abs(75*sin(33*s)),e,t);return yt(r/o*TWO_PI,n,c,i)})}function at(e=0,t=0,n=100){const o=32*Yt([7,13,29,31,32,34,35,36,37,44,46,58,59,60,62,85,88,92,96]),r=5*n/6,s=4*n/6;Bt(o,n=>{const c=n/o*TWO_PI,[i,l]=yt(c,r+abs(30*sin(90*c)),e,t);return yt(n/32*TWO_PI,.8*s+abs(sin(360*c)),i,l)})}function Ct(e,t,n=100){Ut();const o=Yt([[10,96,2],[10,96,-4],[14,96,2],[15,29,-5],[720,-5,5],[720,6,-3],[720,-4,2],[720,-6,2],[720,-3,3],[720,-15,5],[50,-9,10]]),r=TWO_PI/o[0],s=.4*n,c=TWO_PI/o[1],i=.2*n,l=TWO_PI/o[2];Bt(720,o=>{const[f,u]=yt(o*r,n,e,t),[a,C]=yt(o*c,s,f,u);return yt(o*l,i,a,C)})}function ht(e=0,n=0,r,c=t){push();const i=T?s:o,l=Kt(.4275),f=jt(),u=!l&&Kt(.5),a=!l&&Kt(.5),C=!l&&!u&&!a&&Kt(.5),h=f<.85,p=f>=.85,E=Kt(.9),k=Kt(.65),I=Kt(.65),_=Kt(.65),g=Kt(.65),d=Kt(.65)||!(k||I||_||g),O=!k&&!_&&!d,S=5*r/250,W={tC:u,bC:a,e:l,iE:C,t:h,iT:p,p:E};k&&pt(e,n,r,c,9*S,W),I&&pt(e,n,r,O?c:i,7*S,W),_&&pt(e,n,r,c,5*S,W),g&&pt(e,n,r,O?c:i,3*S,W),d&&pt(e,n,r,c,S,W),pop()}function pt(e,t,n,o,r,{tC:s=!1,bC:c=!1,e:i=!1,iE:l=!1,t:f=!1,iT:u=!1,p:a=!1}){noFill(),strokeWeight(r),stroke(o),f&&It(e,t,n,1),u&&It(e,t,n,-1),i&&kt(e,t,n,130),l&&kt(e,t,n,230),a&&point(e,t,0),s&&Tt(e,t,n,1),c&&Tt(e,t,n,0)}function Tt(e,t,n,o=1){const{centerW:r}=Et(n),s=r/sin(radians(65)),c=cos(radians((1===o?235:124)/2))*(r/2);circle(e,t+c,s)}function Et(e){const t=sin(radians(60))*e,n=tan(radians(30))*e/2;return{tHeight:t,heightOfCenter:n,centerW:tan(radians(30))*(t-n)*2}}function kt(e,t,n,o,r=1){const{centerW:s}=Et(n),c=s*r/sin(radians(o/2)),i=cos(radians(o/2))*(c/2);arc(e,t+i,c,c,radians(270-o/2),radians(270+o/2),OPEN),arc(e,t-i,c,c,radians(90-o/2),radians(90+o/2),OPEN)}function It(e,t,n,o=1){const{tHeight:r,heightOfCenter:s}=Et(n);triangle(e-n/2,t+s*o,e+n/2,t+s*o,e,t+(r-s)*-o)}function _t(){const e=jt();if(e<.01)return Pt();const t=C?.5:.25;dt(()=>{if(e<t){const e=jt(),t=Ut()*(e<.75?2:3),n=Wt({degAdj:t}),o=8+n.radius;Mt(o,n),Kt(.25)&&Mt(o,Wt({degAdj:-1*t}))}else e<.55?Nt(60):e<.8?At(-10,Kt(.7)):e<.85?Ot(10,int(jt(20,200))):e<.9?St(20):Lt(20,int(jt(1,7)),Ut())})}console.log("4444"),console.log("5555");const gt=(e,t,n)=>{const o=int(t*X/(2*(X+1))),r=int(t/2-o),s=(D-2*n)/o,c=(G-2*n)/r,i=-G/2+n,l=G/2-n,f=-D/2+n,u=D/2-n,a=o+r,C=2*o+r,h=2*o+2*r;return e<o?[f+e*s,i]:e<a?[u,i+(e-o)*c]:e<C?[u-(e-a)*s,l]:e<h?[f,l-(e-C)*c]:[f+(e-h)*s,i]};function dt(e){push(),scale(1/j),y.scale(j),y.translate(D/2,G/2),y.noFill(),y.stroke(t),e(),image(y,-D*j/2,-G*j/2),pop()}function Ot(e,t){for(let n=0;n<2;n+=.5)qt(t,o=>{const[r,s]=gt(o+n,t,e),[c,i]=gt(o+n,t,e+20);return o%2==0?[c,i]:[r,s]},y)}function St(e=10){y.strokeWeight(1);const t=2*(D-2*e+(G-2*e))/3;Qt(t,n=>{const[o,r]=gt(n,t,e+3);y.circle(o,r,6)}),qt(t,n=>gt(n,t,e),y),qt(t,n=>gt(n,t,e+6),y)}function Wt(e){const t=jt(15,31),n=2===abs(e.degAdj)?jt(3,26):jt(1,13);return{radius:t,degAdj:e.degAdj,offsetAmt:n}}function Mt(e,t){const n=t.radius,o=t.degAdj,r=1/t.offsetAmt;for(let t=0;t<2;t+=r)qt(67,r=>{const[s,c]=gt(r+t,66,e);return yt((r+t)/o*TWO_PI,n,s,c)},y)}function Rt(e,t,n,o=1){const[r,s]=gt(e,t,n);return yt(e/5*o*TWO_PI,5,r,s)}function Lt(e=20,t=4,n=1){const o=50*t;if(h&&(y.fill(ROSETTE_FILL_C),y.stroke(ROSETTE_STROKE_C)),["NUMISMATIC","VINTAGE","DECO"].includes(a))for(let t=0;t<2;t+=.3333)qt(o,r=>{const[s,c]=Rt(r+t,o,e,n),[i,l]=Rt(r+t,o,e+22,n);return r%2==0?[i,l]:[s,c]},y);if(["ECHO","DIGITAL"].includes(a))for(let t=0;t<25;t+=5)qt(o,n=>Rt(n,o,e+t),y,n);if(["LINE","DIGITAL"].includes(a))for(let t=0;t<o;t+=.2){const[r,s]=Rt(t,o,e,n),[c,i]=Rt(t,o,e+22,n);y.line(r,s,c,i)}h&&(y.erase(),qt(o,t=>Rt(t,o,e+20,n),y),y.noErase())}function At(e=-10,n=!0){const o=int(jt(1,7));T?(y.push(),Qt(100,e=>{y.stroke(lerpColor(ROSETTE_STROKE_C,ROSETTE_FILL_C,(e+75)/150)),y.rectMode(CENTER),y.rect(0,0,D-e,G-e)}),y.pop()):y.background(ROSETTE_FILL_C),y.stroke(ROSETTE_STROKE_C),y.strokeWeight(1.1-o/12);const r=Ut(),s=["ECHO","DIGITAL"].includes(a)?6:0;Lt(e+2,o,r),Lt(e+19+s,o,r),Lt(e+36+2*s,o,r);const c=e+(n?35:55);y.stroke(t),y.erase(),y.fill(0),n?y.rect(c-D/2,c-G/2,D-2*c,G-2*c):y.rect(-D/2,c-G/2,D,G-2*c),y.noErase(),y.noFill(),n?(y.rect(c-D/2,c-G/2,D-2*c,G-2*c),St(c+5)):y.rect(-D/2,c-G/2,D,G-2*c)}function Pt(e=10){const n=Ft();Qt(80,o=>{const[r,s]=gt(o,80,e);xt(n,r,s,.1,t)})}function Nt(e){const n=-G/2,o=G/2,r=-D/2,s=D/2,c=e/1.5,i=jt(1,5),l=int(jt(4,11));y.stroke(t);for(let f=0;f<l;f++)f%2==0&&f!==l-1||y.erase(),y.fill(t),y.strokeWeight(e-f*i),y.line(r,n,s,n),y.line(s,n,s,o),y.line(s,o,r,o),y.line(r,o,r,n),y.circle(r+c,n+c,c),y.circle(r+c,o-c,c),y.circle(s-c,n+c,c),y.circle(s-c,o-c,c),f%2==0&&f!==l-1||y.noErase()}console.log("6666");const wt={1:"I",2:"II",5:"V",10:"X",20:"XX",50:"L",100:"C"};function Ft(){const e=jt();return!u||q&&e<.1?"$":E&&(!Q||e<.5)?(Q=!0,wt[u]):(q=!0,u)}function bt(e,t,n,o,r,s){push(),translate(t-25*o,n+40*o),scale(o),stroke(r),fill(s||r);let c=!1;beginShape(),zt[e].forEach((e,t)=>{"M"===e[0]?(c&&endContour(),0!==t&&(beginContour(),c=!0),vertex(e[1],e[2])):e.length>2?quadraticVertex(e[2],e[3],e[0],e[1]):vertex(e[0],e[1])}),c&&endContour(),endShape(),pop()}const vt={V:-14,C:-14,X:-12,XX:-11.5,L:-5.5,I:5.5,II:3.5,$:-3,4:-3,6:-3};function Ht(e,t,n,o,r,s){if(!e)return;const c=floor(e.length/2);for(let i=0;i<e.length;i++){const l=i-c,f=50*o*("XX"===e?1.4:1),u=(vt[e]||0)*o,a=f*l+(e.length%2==0?f/2:0);bt(e[i],t+a+u,n-3*o,o,r,s)}}function xt(...e){["10","20","50","II"].includes(e[0])&&(e[3]=.75*e[3]),"XX"===e[0]&&(e[3]=.65*e[3]),"100"===e[0]&&(e[3]=.65*e[3]),Ht(...e)}const Vt=(...e)=>xt(Ft(),...e);function Dt(e,t,n,o,r){const s=Ft();Ht(s,e+1,t+1,n,o),Ht(s,e-1,t-1,n,o),Ht(s,e-1,t+1,n,o),Ht(s,e+1,t-1,n,o),Ht(s,e,t,n,r)}function Gt(e,n,r){const s=Ft();xt(s,e+2,n+2,r,t),xt(s,e,n,r,p?t:o,p?o:T?c:t)}console.log("7777");let Xt=parseInt(tokenData.hash.slice(0,16),16);function jt(e,t){Xt^=Xt<<13,Xt^=Xt>>17;const n=((Xt^=Xt<<5)<0?1+~Xt:Xt)%1e3/1e3;return null!=t?e+n*(t-e):null!=e?n*e:n}const Kt=e=>jt()<e,Ut=()=>Kt(.5)?1:-1,Yt=e=>e[int(jt(e.length))],$t=e=>(e+360)%360,mt=()=>{};function Bt(e,t){beginShape(),curveVertex(...t(-1));for(let n=0;n<=e+1;n++)A&&rotate(.1),curveVertex(...t(n));endShape()}const yt=(e,t,n=0,o=0)=>[sin(e)*t+n,cos(e)*t+o],qt=(e,t,n=window)=>{n.beginShape(),n.curveVertex(...t(-1)),Qt(e+2,e=>{A&&n.rotate(.1),n.curveVertex(...t(e))}),n.endShape()};function Qt(e,t){for(let n=0;n<e;n++)t(n)}console.log("8888");const zt={0:[["M",26,1],[15,-3,20,1],[8,-15,11,-7],[5,-36,5,-24],[5,-36],[8,-56,5,-48],[16,-69,11,-65],[26,-73,20,-73],[26,-73],[37,-69,32,-73],[44,-56,41,-65],[47,-36,47,-48],[47,-36],[44,-15,47,-24],[36,-3,41,-7],[26,1,32,1],[26,1],[26,1],["M",26,-2],[35,-10,32,-2],[39,-36,39,-19],[39,-36],[35,-61,39,-53],[26,-70,32,-70],[26,-70],[17,-61,20,-70],[13,-36,13,-53],[13,-36],[17,-10,13,-19],[26,-2,20,-2],[26,-2]],1:[["M",42,0],[9,0],[8,-1,8,0],[8,-1],[9,-3,8,-3],[9,-3],[11,-3],[19,-4,16,-3],[22,-9,22,-6],[22,-9],[22,-57],[21,-61,22,-60],[18,-62,20,-62],[11,-63,16,-63],[11,-63],[9,-63],[8,-64,8,-63],[8,-64],[9,-66,8,-66],[9,-66],[19,-67,14,-66],[27,-71,23,-68],[27,-71],[28,-72,28,-72],[28,-72],[30,-70,30,-72],[30,-70],[30,-9],[40,-3,30,-3],[40,-3],[42,-3],[42,-3,42,-3],[43,-1,43,-2],[43,-1],[42,0,43,0],[42,0],[42,0]],2:[["M",47,-17],[43,-2],[40,0,42,0],[40,0],[8,0],[5,-1,6,0],[5,-1],[5,-2,5,-2],[5,-2],[5,-4,5,-3],[5,-4],[13,-17,8,-11],[24,-31,17,-23],[24,-31],[34,-45,31,-40],[37,-57,37,-51],[37,-57],[34,-66,37,-62],[25,-70,31,-70],[25,-70],[17,-68,20,-70],[14,-62,14,-65],[14,-62],[14,-60,14,-61],[15,-58,14,-59],[15,-58],[16,-56,16,-57],[17,-54,17,-55],[17,-54],[15,-50,17,-51],[11,-49,14,-49],[11,-49],[8,-51,9,-49],[6,-56,6,-52],[6,-56],[8,-64,6,-60],[15,-71,11,-68],[26,-73,20,-73],[26,-73],[38,-71,34,-73],[44,-64,42,-68],[46,-55,46,-59],[46,-55],[45,-47,46,-50],[41,-42,43,-44],[34,-34,38,-39],[34,-34],[31,-32,33,-33],[27,-28,29,-30],[27,-28],[13,-10,18,-19],[13,-10],[13,-9,13,-9],[13,-9],[15,-7,13,-7],[15,-7],[24,-7],[35,-8,31,-7],[40,-11,38,-9],[44,-18,42,-13],[44,-18],[45,-19,44,-19],[45,-19],[45,-19,45,-19],[45,-19],[46,-18,46,-18],[47,-18,47,-18],[47,-18],[47,-17],[47,-17]],3:[["M",31,-39],[30,-38,30,-39],[30,-38],[31,-38,30,-38],[31,-38],[43,-31,39,-36],[47,-20,47,-26],[47,-20],[45,-10,47,-15],[38,-2,43,-6],[24,1,33,1],[24,1],[13,-1,17,1],[7,-7,9,-4],[5,-14,5,-11],[5,-14],[7,-19,5,-17],[10,-20,8,-20],[10,-20],[14,-19,12,-20],[16,-15,16,-18],[16,-15],[15,-13,16,-14],[15,-13],[14,-11,14,-12],[13,-10,13,-10],[13,-10],[16,-4,13,-7],[23,-2,18,-2],[23,-2],[31,-4,28,-2],[37,-11,35,-7],[39,-20,39,-15],[39,-20],[35,-32,39,-28],[24,-37,31,-37],[24,-37],[22,-37,23,-37],[19,-36,20,-36],[19,-36],[17,-37,18,-36],[17,-38,17,-37],[17,-38],[17,-40,17,-39],[19,-41,18,-41],[19,-41],[22,-40,21,-41],[22,-40],[24,-40,23,-40],[24,-40],[32,-43,28,-40],[36,-55,36,-46],[36,-55],[33,-67,36,-63],[24,-70,29,-70],[24,-70],[19,-69,22,-70],[16,-64,16,-67],[16,-64],[17,-60,16,-62],[17,-60],[18,-58,18,-59],[18,-58],[16,-55,18,-56],[14,-53,15,-53],[14,-53],[9,-55,10,-53],[8,-60,8,-57],[8,-60],[10,-66,8,-62],[16,-71,12,-69],[26,-73,20,-73],[26,-73],[36,-71,32,-73],[43,-65,40,-69],[45,-56,45,-60],[45,-56],[41,-45,45,-50],[31,-39,38,-41],[31,-39],[31,-39]],4:[["M",47,-21],[48,-20,48,-21],[49,-18,49,-19],[49,-18],[48,-17,49,-17],[47,-16,48,-16],[47,-16],[40,-16],[38,-16,39,-16],[37,-14,37,-15],[37,-14],[37,-6],[39,-4,37,-4],[44,-3,41,-3],[44,-3],[46,-3],[47,-1,47,-3],[47,-1],[46,0,47,0],[46,0],[22,0],[21,-1,21,0],[21,-1],[22,-3,21,-3],[22,-3],[23,-3],[28,-4,26,-3],[30,-6,30,-4],[30,-6],[30,-14],[29,-16,30,-15],[28,-16,29,-16],[28,-16],[5,-16],[3,-17,4,-16],[3,-18,3,-17],[3,-18],[3,-19],[4,-22,3,-21],[4,-22],[33,-72],[35,-73,34,-73],[35,-73],[36,-73],[37,-71,37,-73],[37,-71],[37,-23],[38,-21,37,-22],[40,-21,39,-21],[40,-21],[47,-21],[47,-21],["M",30,-54],[30,-55,30,-55],[29,-56,29,-56],[29,-56],[27,-55,28,-56],[27,-55],[9,-23],[9,-22,9,-22],[9,-22],[11,-21,9,-21],[11,-21],[28,-21],[29,-21,29,-21],[30,-23,30,-22],[30,-23],[30,-54]],5:[["M",25,-47],[33,-45,29,-47],[42,-38,38,-43],[45,-23,45,-32],[45,-23],[42,-10,45,-16],[34,-2,39,-5],[23,1,29,1],[23,1],[14,0,19,1],[7,-5,10,-2],[4,-13,4,-9],[4,-13],[6,-18,4,-17],[9,-20,7,-20],[9,-20],[13,-19,11,-20],[14,-15,14,-17],[14,-15],[14,-12,14,-14],[14,-12],[13,-11,14,-11],[13,-9,13,-10],[13,-9],[16,-4,13,-6],[22,-2,19,-2],[22,-2],[29,-4,26,-2],[35,-12,33,-7],[37,-22,37,-16],[37,-22],[33,-37,37,-31],[23,-42,29,-42],[23,-42],[10,-35,16,-42],[10,-35],[9,-34,9,-34],[9,-34],[8,-34],[7,-34,8,-34],[7,-34],[7,-34],[6,-36,6,-35],[6,-36],[7,-70],[8,-72,7,-71],[9,-73,8,-73],[9,-73],[40,-73],[42,-72,41,-73],[42,-70,42,-71],[42,-70],[41,-67],[41,-66,41,-66],[39,-65,40,-65],[39,-65],[13,-65],[10,-63,11,-65],[10,-63],[10,-42],[11,-41,9,-41],[11,-41],[13,-42,12,-41],[13,-42],[19,-46,16,-45],[25,-47,22,-47],[25,-47],[25,-47]],6:[["M",30,-45],[40,-42,36,-45],[47,-35,44,-39],[49,-24,49,-30],[49,-24],[46,-11,49,-17],[39,-2,43,-6],[27,1,34,1],[27,1],[16,-2,21,1],[8,-13,11,-6],[5,-29,5,-20],[5,-29],[9,-53,5,-43],[19,-68,13,-63],[31,-73,25,-73],[31,-73],[39,-72,35,-73],[44,-69,42,-71],[45,-64,45,-66],[45,-64],[44,-60,45,-62],[40,-59,42,-59],[40,-59],[37,-61,38,-59],[35,-66,35,-63],[35,-66],[34,-69,35,-68],[30,-70,33,-70],[30,-70],[20,-62,24,-70],[14,-41,16,-53],[14,-41],[15,-40,14,-41],[16,-40,15,-40],[16,-40],[18,-41,17,-40],[18,-41],[30,-45,24,-45],[30,-45],[30,-45],["M",27,-2],[34,-5,31,-2],[38,-12,37,-8],[40,-23,40,-17],[40,-23],[36,-37,40,-34],[27,-41,32,-41],[27,-41],[20,-38,23,-41],[14,-30,16,-35],[14,-30],[13,-27,13,-28],[13,-27],[17,-9,14,-17],[27,-2,20,-2],[27,-2]],7:[["M",22,2],[18,-1,19,2],[17,-7,17,-3],[17,-7],[42,-63,17,-23],[42,-63],[42,-64,42,-63],[42,-64],[40,-65,42,-65],[40,-65],[26,-65],[16,-64,20,-65],[12,-60,13,-63],[8,-52,10,-58],[8,-52],[8,-52,8,-52],[7,-52,8,-52],[7,-52],[7,-52],[6,-52,6,-52],[5,-53,5,-52],[5,-53],[6,-54],[7,-61],[8,-66,8,-64],[9,-71,9,-69],[9,-71],[12,-73,10,-73],[12,-73],[47,-73],[49,-72,49,-73],[49,-72],[49,-71,49,-71],[49,-71],[49,-69,49,-70],[49,-69],[35,-43,39,-53],[29,-25,30,-33],[27,-6,27,-16],[27,-6],[22,2,27,2],[22,2],[22,2]],8:[["M",34,-41],[33,-40,33,-40],[33,-40],[34,-38,33,-39],[34,-38],[42,-33,39,-36],[47,-28,45,-31],[49,-19,49,-24],[49,-19],[46,-8,49,-13],[38,-1,43,-4],[27,1,33,1],[27,1],[16,-1,22,1],[8,-8,11,-3],[5,-17,5,-12],[5,-17],[8,-27,5,-24],[19,-35,12,-31],[19,-35],[20,-36,20,-36],[20,-36],[19,-38,20,-37],[19,-38],[10,-45,13,-41],[7,-55,7,-49],[7,-55],[9,-64,7,-60],[16,-71,11,-68],[26,-73,20,-73],[26,-73],[35,-72,31,-73],[42,-66,40,-70],[45,-57,45,-62],[45,-57],[34,-41,45,-47],[34,-41],[34,-41],["M",14,-58],[15,-52,14,-55],[20,-47,17,-49],[28,-42,23,-45],[28,-42],[29,-42,28,-42],[29,-42],[31,-42,30,-42],[31,-42],[37,-57,37,-48],[37,-57],[36,-63,37,-60],[32,-68,35,-66],[25,-70,30,-70],[25,-70],[19,-68,21,-70],[15,-64,16,-66],[14,-58,14,-61],[14,-58],["M",26,-2],[37,-6,33,-2],[41,-18,41,-11],[41,-18],[37,-27,41,-23],[25,-35,33,-30],[25,-35],[24,-35,24,-35],[24,-35],[22,-34,23,-35],[22,-34],[15,-27,18,-31],[13,-18,13,-22],[13,-18],[14,-10,13,-14],[19,-4,16,-6],[26,-2,22,-2],[26,-2]],9:[["M",25,-73],[37,-70,32,-73],[45,-59,42,-66],[48,-43,48,-52],[48,-43],[44,-19,48,-29],[34,-4,40,-9],[22,2,28,2],[22,2],[14,0,17,2],[9,-3,11,-1],[7,-8,7,-6],[7,-8],[9,-12,7,-10],[12,-13,10,-13],[12,-13],[16,-11,14,-13],[18,-6,17,-9],[18,-6],[19,-3,18,-4],[22,-2,20,-2],[22,-2],[33,-10,29,-2],[38,-30,37,-19],[38,-30],[38,-32,38,-31],[37,-33,38,-33],[37,-33],[35,-32,36,-33],[35,-32],[22,-27,30,-27],[22,-27],[12,-30,17,-27],[6,-37,8,-33],[4,-48,4,-42],[4,-48],[6,-60,4,-55],[14,-70,9,-66],[25,-73,19,-73],[25,-73],[25,-73],["M",25,-31],[33,-34,29,-31],[39,-42,37,-37],[39,-42],[39,-45,39,-43],[39,-45],[36,-62,39,-55],[25,-70,33,-70],[25,-70],[18,-67,21,-70],[14,-59,16,-64],[12,-49,12,-55],[12,-49],[16,-35,12,-38],[25,-31,21,-31],[25,-31]],$:[["M",41,-34],[48,-28,45,-32],[50,-20,50,-24],[50,-20],[47,-9,50,-14],[39,-1,44,-4],[29,1,34,1],[29,1],[29,3],[29,10],[28,12,29,11],[27,12,28,12],[27,12],[26,12,27,12],[26,10,26,11],[26,10],[26,3],[24,1,26,1],[24,1],[11,-5,16,0],[6,-17,6,-9],[6,-17],[7,-21,6,-20],[11,-23,8,-23],[11,-23],[14,-22,13,-23],[16,-18,16,-20],[16,-18],[15,-15,16,-16],[14,-13,15,-15],[14,-13],[14,-12,14,-13],[13,-10,13,-11],[13,-10],[16,-5,13,-7],[23,-3,19,-4],[23,-3],[24,-3],[25,-3,25,-3],[26,-5,26,-4],[26,-5],[26,-30],[24,-33,26,-32],[24,-33],[15,-37,18,-35],[15,-37],[9,-43,12,-40],[7,-52,7,-47],[7,-52],[9,-60,7,-56],[14,-67,10,-64],[24,-71,18,-70],[24,-71],[26,-73,26,-71],[26,-73],[26,-78],[26,-80,26,-79],[27,-80,27,-80],[27,-80],[28,-80,28,-80],[29,-78,29,-79],[29,-78],[29,-73],[31,-71,29,-71],[31,-71],[43,-66,38,-70],[48,-55,48,-62],[48,-55],[47,-51,48,-52],[43,-49,45,-49],[43,-49],[40,-50,41,-49],[38,-54,38,-52],[38,-54],[39,-57,38,-56],[39,-57],[40,-60,40,-59],[40,-60],[37,-65,40,-63],[31,-68,35,-67],[31,-68],[31,-68],[29,-66,29,-68],[29,-66],[29,-42],[31,-39,29,-40],[31,-39],[41,-34,38,-36],[41,-34],[41,-34],["M",21,-44],[23,-43],[24,-43,24,-43],[24,-43],[26,-44,26,-43],[26,-44],[26,-65],[25,-67,26,-66],[23,-67,24,-67],[23,-67],[16,-62,19,-66],[13,-54,13,-59],[13,-54],[15,-48,13,-51],[21,-44,17,-46],[21,-44],["M",31,-29],[30,-30,31,-30],[30,-30],[29,-28,29,-30],[29,-28],[29,-5],[29,-3,29,-4],[31,-3,30,-2],[31,-3],[40,-8,36,-4],[43,-17,43,-11],[43,-17],[36,-27,43,-23],[36,-27],[31,-29,35,-28],[31,-29]],I:[["M",35,0],[6,0],[6,-1,6,0],[6,-1],[6,-3,6,-3],[6,-3],[8,-3],[14,-4,12,-3],[16,-9,16,-6],[16,-9],[16,-63],[14,-68,16,-67],[8,-70,12,-70],[8,-70],[6,-70],[6,-71,6,-70],[6,-71],[6,-73,6,-73],[6,-73],[35,-73],[35,-72,35,-73],[35,-71,35,-72],[35,-71],[35,-70,35,-70],[35,-70],[33,-70],[26,-68,28,-70],[24,-63,24,-67],[24,-63],[24,-9],[26,-4,24,-5],[33,-3,28,-3],[33,-3],[35,-3],[35,-2,35,-3],[35,-1,35,-2],[35,-1],[35,0,35,0],[35,0],[35,0]],V:[["M",37,1],[35,0,36,1],[35,0],[13,-63],[9,-68,12,-67],[4,-70,6,-70],[4,-70],[2,-70],[2,-71,2,-70],[2,-71],[2,-73,2,-73],[2,-73],[30,-73],[31,-72,31,-73],[31,-71,31,-72],[31,-71],[30,-70,31,-70],[30,-70],[29,-70],[23,-69,25,-70],[21,-65,21,-68],[21,-65],[22,-63,21,-65],[22,-63],[31,-36],[39,-13],[41,-12,40,-12],[41,-12],[41,-12,41,-12],[42,-13,42,-13],[42,-13],[59,-62,57,-55],[59,-62],[59,-65,59,-63],[59,-65],[57,-69,59,-67],[53,-70,56,-70],[53,-70],[52,-70],[51,-71,51,-70],[51,-71],[52,-73,51,-73],[52,-73],[75,-73],[76,-72,76,-73],[76,-71,76,-72],[76,-71],[75,-70,76,-70],[75,-70],[74,-70],[67,-68,70,-70],[63,-62,64,-65],[63,-62],[55,-39,60,-54],[44,-8,50,-23],[44,-8],[42,0,43,-5],[42,0],[39,1,41,1],[39,1],[37,1],[37,1]],X:[["M",71,-3],[73,-3],[73,-2,73,-3],[74,-1,74,-2],[74,-1],[73,0,74,0],[73,0],[44,0],[43,-1,43,0],[43,-1],[44,-3,43,-3],[44,-3],[45,-3],[50,-4,48,-3],[51,-6,51,-5],[51,-6],[51,-9,51,-8],[51,-9],[37,-30],[36,-32,37,-32],[36,-32],[35,-31,35,-32],[35,-31],[33,-28],[27,-20,31,-26],[21,-11,23,-15],[21,-11],[20,-7,20,-9],[20,-7],[22,-4,20,-5],[26,-3,24,-3],[26,-3],[28,-3],[28,-2,28,-3],[29,-1,29,-2],[29,-1],[28,0,29,0],[28,0],[2,0],[2,-1,2,0],[2,-1],[2,-3,2,-3],[2,-3],[4,-3],[10,-5,6,-3],[17,-11,14,-8],[17,-11],[33,-35,27,-26],[33,-35],[33,-36,33,-36],[33,-36],[33,-38,33,-37],[33,-38],[17,-63],[13,-67,16,-66],[7,-69,10,-69],[7,-69],[4,-70,6,-70],[4,-70],[4,-71,4,-70],[4,-71],[4,-73,4,-73],[4,-73],[32,-73],[32,-72,32,-73],[32,-71,32,-72],[32,-71],[32,-70,32,-70],[32,-70],[30,-70],[26,-69,28,-70],[25,-66,25,-67],[25,-66],[26,-63,25,-65],[26,-63],[37,-45],[39,-44,38,-44],[39,-44],[40,-45,39,-44],[40,-45],[51,-62],[52,-65,52,-63],[52,-65],[51,-68,52,-67],[48,-69,50,-69],[48,-69],[46,-70,47,-70],[46,-70],[45,-71,45,-70],[45,-71],[46,-73,45,-73],[46,-73],[69,-73],[70,-72,69,-73],[70,-71,70,-72],[70,-71],[69,-70,70,-70],[69,-70],[67,-70],[61,-68,65,-70],[56,-62,58,-65],[56,-62],[42,-41,55,-60],[42,-41],[41,-40,41,-41],[41,-40],[42,-38,41,-39],[42,-38],[60,-9,58,-12],[60,-9],[65,-4,63,-6],[71,-3,68,-3],[71,-3],[71,-3]],L:[["M",61,-2],[58,0,60,0],[58,0],[6,0],[6,0,6,0],[6,-1,6,-1],[6,-1],[6,-3,6,-3],[6,-3],[8,-3],[14,-4,12,-3],[16,-9,16,-6],[16,-9],[16,-63],[14,-68,16,-67],[8,-70,12,-70],[8,-70],[6,-70],[6,-71,6,-70],[6,-71],[6,-73,6,-73],[6,-73],[35,-73],[35,-72,35,-73],[35,-71,35,-72],[35,-71],[35,-70,35,-70],[35,-70],[33,-70],[27,-68,29,-70],[24,-63,24,-67],[24,-63],[24,-9],[26,-4,24,-6],[33,-3,29,-3],[33,-3],[35,-3],[39,-3],[54,-7,48,-3],[64,-17,59,-11],[64,-17],[65,-18,64,-18],[65,-18],[66,-18,65,-18],[66,-18],[66,-17,66,-17],[66,-17],[66,-16],[63,-8],[61,-2],[61,-2]],C:[["M",40,1],[25,-3,32,1],[11,-15,17,-6],[6,-34,6,-23],[6,-34],[11,-55,6,-46],[23,-69,15,-64],[38,-73,30,-73],[38,-73],[44,-73,42,-73],[50,-71,47,-72],[50,-71],[53,-70,51,-70],[55,-70,54,-70],[55,-70],[59,-71,57,-70],[59,-71],[60,-71,60,-71],[60,-71],[61,-70,61,-71],[61,-70],[65,-56],[65,-55],[65,-55],[64,-54,65,-54],[64,-54,64,-54],[64,-54],[63,-54],[62,-54,63,-54],[62,-54],[59,-59,62,-55],[51,-67,56,-64],[39,-70,46,-70],[39,-70],[24,-63,29,-70],[17,-49,18,-57],[15,-37,15,-42],[15,-37],[19,-18,15,-25],[29,-7,23,-10],[41,-3,35,-3],[41,-3],[54,-7,49,-3],[64,-19,59,-11],[64,-19],[65,-19,65,-19],[65,-19],[66,-19,65,-19],[66,-19],[67,-18,67,-18],[67,-18],[67,-17,67,-17],[67,-17],[40,1,56,1],[40,1],[40,1]]};