google.maps.__gjsload__('stats', function(_){var $Z=function(a,b,c){var d=[];_.Nb(a,function(a,c){d.push(c+b+a)});return d.join(c)},a_=function(a,b,c,d){var e={};e.host=window.document.location&&window.document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},b_=function(a){var b={};_.Nb(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return $Z(b,":",",")},d_=function(a,b,c,d,e){var f=_.O(_.R,23,500);var g=_.O(_.R,22,2);this.D=a;this.F=
b;this.G=f;this.l=g;this.C=c;this.m=d;this.B=e;this.f=new _.ek;this.b=0;this.j=_.Sa();c_(this)},c_=function(a){window.setTimeout(function(){e_(a);c_(a)},Math.min(a.G*Math.pow(a.l,a.b),2147483647))},f_=function(a,b,c){a.f.set(b,c)},e_=function(a){var b=a_(a.F,a.C,a.m,a.B);b.t=a.b+"-"+(_.Sa()-a.j);a.f.forEach(function(a,d){a=a();0<a&&(b[d]=Number(a.toFixed(2))+(_.Cm()?"-if":""))});a.D.b({ev:"api_snap"},b);++a.b},g_=function(a,b,c,d,e){this.m=a;this.C=b;this.l=c;this.f=d;this.j=e;this.b=new _.ek;this.B=
_.Sa()},h_=function(a,b,c){this.l=b;this.f=a+"/maps/gen_204";this.j=c},i_=function(){this.b=new _.ek},j_=function(a){var b=0,c=0;a.b.forEach(function(a){b+=a.fo;c+=a.Gn});return c?b/c:0},k_=function(a,b,c,d,e){this.B=a;this.C=b;this.m=c;this.j=d;this.l=e;this.f={};this.b=[]},l_=function(a,b,c,d){this.j=a;_.A.bind(this.j,"set_at",this,this.l);_.A.bind(this.j,"insert_at",this,this.l);this.B=b;this.C=c;this.m=d;this.f=0;this.b={};this.l()},m_=function(){this.j=_.P(_.R,6);this.C=_.zf();this.b=new h_(_.rg[35]?
_.P(_.Af(_.R),11):_.iw,_.jj,window.document);new l_(_.Yi,(0,_.p)(this.b.b,this.b),_.Ff,!!this.j);var a=_.P(new _.tf(_.R.data[3]),1);this.D=a.split(".")[1]||a;this.F={};this.B={};this.m={};this.G={};this.ea=_.O(_.R,0,1);_.ij&&(this.l=new d_(this.b,this.D,this.ea,this.j,this.C))};
g_.prototype.D=function(a){var b=void 0,b=_.m(b)?b:1;this.b.isEmpty()&&window.setTimeout((0,_.p)(function(){var a=a_(this.C,this.l,this.f,this.j);a.t=_.Sa()-this.B;var b=this.b;_.fk(b);for(var e={},f=0;f<b.b.length;f++){var g=b.b[f];e[g]=b.H[g]}_.oz(a,e);this.b.clear();this.m.b({ev:"api_maprft"},a)},this),500);b=this.b.get(a,0)+b;this.b.set(a,b)};
h_.prototype.b=function(a,b){b=b||{};var c=_.Rk().toString(36);b.src="apiv3";b.token=this.l;b.ts=c.substr(c.length-6);a.cad=b_(b);a=$Z(a,"=","&");a=this.f+"?target=api&"+a;this.j.createElement("img").src=a;(b=_.Vb.__gm_captureCSI)&&b(a)};i_.prototype.f=function(a,b,c){this.b.set(_.Gb(a),{fo:b,Gn:c})};k_.prototype.D=function(a){this.f[a]||(this.f[a]=!0,this.b.push(a),2>this.b.length&&_.Bz(this,this.F,500))};
k_.prototype.F=function(){for(var a=a_(this.C,this.m,this.j,this.l),b=0,c;c=this.b[b];++b)a[c]="1";a.hybrid=+_.fm();this.b.length=0;this.B.b({ev:"api_mapft"},a)};l_.prototype.l=function(){for(var a;a=this.j.removeAt(0);){var b=a.kn;a=a.timestamp-this.C;++this.f;this.b[b]||(this.b[b]=0);++this.b[b];if(20<=this.f&&!(this.f%5)){var c={};c.s=b;c.sr=this.b[b];c.tr=this.f;c.te=a;c.hc=this.m?"1":"0";this.B({ev:"api_services"},c)}}};m_.prototype.T=function(a){a=_.Gb(a);this.F[a]||(this.F[a]=new k_(this.b,this.D,this.ea,this.j,this.C));return this.F[a]};m_.prototype.S=function(a){a=_.Gb(a);this.B[a]||(this.B[a]=new g_(this.b,this.D,1,this.j,this.C));return this.B[a]};m_.prototype.f=function(a){if(this.l){this.m[a]||(this.m[a]=new _.QA,f_(this.l,a,function(){return b.Ta()}));var b=this.m[a];return b}};m_.prototype.O=function(a){if(this.l){this.G[a]||(this.G[a]=new i_,f_(this.l,a,function(){return j_(b)}));var b=this.G[a];return b}};
var n_=new m_;_.Xc("stats",n_);});
