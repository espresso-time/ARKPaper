(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{362:function(e,t,a){e.exports=a.p+"static/media/logo_w.ed7b3372.png"},363:function(e,t,a){e.exports=a.p+"static/media/logo.2e85d5d4.png"},370:function(e,t,a){e.exports=a.p+"static/media/ark-blue.4823dc40.png"},371:function(e,t,a){e.exports=a.p+"static/media/ark-dark.7b617342.png"},372:function(e,t,a){e.exports=a.p+"static/media/chill-pink.2f42265a.png"},373:function(e,t,a){e.exports=a.p+"static/media/christmas-postcard.ecf0cb0e.png"},374:function(e,t,a){e.exports=a.p+"static/media/heart-pink.d7f4fb3a.png"},375:function(e,t,a){e.exports=a.p+"static/media/impressive-red.cc6dfc9e.png"},376:function(e,t,a){e.exports=a.p+"static/media/classic-red.340aa53e.png"},377:function(e,t,a){e.exports=a(864)},382:function(e,t,a){},383:function(e,t,a){},384:function(e,t,a){},467:function(e,t){},469:function(e,t){},504:function(e,t){},505:function(e,t){},80:function(e,t,a){"use strict";(function(e,n){a.d(t,"d",function(){return m}),a.d(t,"a",function(){return u}),a.d(t,"c",function(){return d}),a.d(t,"b",function(){return p});var s=a(62),r=a.n(s),l=a(163),i=a(368),o=a.n(i);e._bitcore&&delete e._bitcore;var c=a(813),m=function(e,t){o.a.instantiate(function(a){t(function(e,t){return function(e){return!e||e&&!h(e)?{error:!0,reason:"Passphrase not valid"}:{passphrase:e,address:l.Identities.Address.fromPassphrase(e,23)}}(t)}(0,e))})},u=function(e){return Array.apply(null,Array(16)).map(function(t){return e})},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.random(),t=(160+Math.floor(160*e))/100;return{step:t=t>=.01?t:.1+5*t,percentage:0,seed:u("00"),byte:u(0)}}(),t=e.byte,a=e.seed,n=e.percentage,s=e.step,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.random(),i=t.map(function(e,t){return e?null:t}).filter(function(e){return null!==e}),o=i.length>0?i[parseInt(l*i.length,10)]:parseInt(l*t.length,10),c=function(e,t,a){for(var n=e;n.length<a;)n=t+n;return n}(r.a.randomBytes(1)[0].toString(16),"0",2);return{seed:a.map(function(e,t){return t===o?c:e}),byte:i.length>0?t.map(function(e,t){return t===o?1:e}):u(0),percentage:n+s,step:s}},p=function(e){var t=e.seed;return new c(new n(t.join(""),"hex")).toString()},h=function(e){var t,a=e.replace(/ +/g," ").trim();try{t=a.split(" ").length>=12&&c.isValid(a)}catch(n){t=!1}return t}}).call(this,a(14),a(1).Buffer)},861:function(e,t,a){},862:function(e,t,a){},863:function(e,t,a){},864:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(361),l=a.n(r),i=a(34),o=a(68),c=(a(382),a(383),a(384),a(362)),m=a.n(c),u=a(363),d=a.n(u),p=a(98);function h(){return s.a.createElement("div",{className:"hero-head"},s.a.createElement("nav",{className:"navbar"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(i.b,{to:"/",className:"navbar-item"},s.a.createElement("img",{src:m.a,alt:"Logo",className:"hide-print"}),s.a.createElement("img",{src:d.a,alt:"Logo",className:"only-print logo-print"}))),s.a.createElement("div",{id:"navbarMenuHeroB",className:"navbar-menu"},s.a.createElement("div",{className:"navbar-end"},s.a.createElement(i.b,{to:"/how-it-works",className:"navbar-item"},"What is a paper wallet?"),s.a.createElement("span",{className:"navbar-item"},s.a.createElement(p.Offline,null,s.a.createElement("p",{className:"has-text-success"},s.a.createElement("strong",null,"Offline"))),s.a.createElement(p.Online,null,window&&window.process&&window.process.type?s.a.createElement("p",{className:"has-text-success"},s.a.createElement("strong",null,"Online")):s.a.createElement("a",{href:"https://github.com/espresso-time/ARKPaper/releases",className:"button is-info is-inverted"},s.a.createElement("span",null,"Download and use it offline")))))))))}function f(){return s.a.createElement("nav",{className:"is-fullwidth has-text-centered"},s.a.createElement("div",{className:"container"},s.a.createElement("p",{className:"footer-text"},"Built with ",s.a.createElement("i",{className:"fa fa-heart"})," by"," ","Espresso")))}var g=a(366),E=a.n(g),b=a(97),w=a.n(b),v=Object(o.f)(function(e){return s.a.createElement(y,e)});function y(e){return s.a.createElement(E.a,{path:e.location,initialStyle:{opacity:0},transition:"opacity 0.5s ease-in",finalStyle:{opacity:1}},e.children)}var N=v;function x(){return s.a.createElement("div",{className:"container has-text-centered landing"},s.a.createElement(N,null,s.a.createElement("h1",{className:"title"},"ARK paper wallet"),s.a.createElement(p.Offline,null,s.a.createElement("h1",{className:"subtitle"},"(You are using this tool offline)")),s.a.createElement("p",{className:"subtitle"},"Create your Ark paper wallet offline in 2 easy steps"),s.a.createElement(i.b,{to:"/start",className:"button is-primary"},s.a.createElement("i",{className:"fa fa-cog fa-fw slow-spin","aria-hidden":"true"})," ","Create/Import a wallet"),s.a.createElement(i.b,{to:"/how-it-works",className:"button is-primary"},s.a.createElement("i",{className:"fa fa-question-circle fa-fw","aria-hidden":"true"})," How it works"),window&&window.process&&window.process.type?"":s.a.createElement(p.Online,null,s.a.createElement("a",{href:"https://github.com/espresso-time/ARKPaper/releases",className:"button is-primary"},s.a.createElement("i",{className:"fa fa-download fa-fw","aria-hidden":"true"})," ","Download offline version"))))}function k(){return s.a.createElement("div",{className:"container has-text-centered"},s.a.createElement(N,null,s.a.createElement("p",{className:"title"},"Alrighty! Let's create a paper wallet. ",s.a.createElement("br",null),"How do do you want to create a paper wallet?"),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-three-fifths is-offset-one-fifth"},s.a.createElement("div",{className:"buttons are-medium is-centered"},s.a.createElement(i.b,{to:"/create-wallet",className:"button is-info"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-wallet"})),s.a.createElement("span",null,"New from scratch")),s.a.createElement(i.b,{to:"/create-wallet?created=true",className:"button is-info"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-lock"})),s.a.createElement("span",null,"Existing passphrase")),s.a.createElement(i.b,{to:"/create-wallet?blueprint=true",className:"button is-info"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-map"})),s.a.createElement("span",null,"Just blueprint")))))))}v.contextTypes={router:w.a.object.isRequired};var _=a(54),A=a(63),O=a(64),j=a(66),R=a(65),P=a(67),K=function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(j.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).setMessage=function(e){var t=!1,n=e.target.value,s=a.props.themes[a.props.themeName].message_length;(n=n.substring(0,s)).length>=s&&(t=!0),a.props.setMessage(n,t)},a.renderSecondaryToolbar=function(){if(a.props.showInsert)return s.a.createElement("div",{className:"is-second-row"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-4 is-offset-2"},s.a.createElement("div",{className:"field is-horizontal"},s.a.createElement("div",{className:"field-body"},s.a.createElement("div",{className:"field"},s.a.createElement("p",{className:"control"},s.a.createElement("label",{htmlFor:"message-input"}," ",s.a.createElement("i",{className:"fa fa-address-card fa-fw","aria-hidden":"true"})," ","Address:"),s.a.createElement("input",{className:"input message-input",type:"text",placeholder:"Add an address",onChange:function(e){return a.props.setAddress(e)}})))))),s.a.createElement("div",{className:"column is-4"},s.a.createElement("div",{className:"field is-horizontal"},s.a.createElement("div",{className:"field-body"},s.a.createElement("div",{className:"field"},s.a.createElement("p",{className:"control"},s.a.createElement("label",{htmlFor:"message-input"}," ",s.a.createElement("i",{className:"fa fa-key fa-fw","aria-hidden":"true"})," ","Passphrase:"),s.a.createElement("input",{className:"input message-input",type:"text",placeholder:"Add a passphrase",onChange:function(e){return a.props.setPassphrase(e)}}))))))))},a}return Object(P.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"tools has-text-right bottom20 hide-print"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-4"},s.a.createElement("div",{className:"field is-horizontal"},s.a.createElement("div",{className:"field-body"},s.a.createElement("div",{className:"field"},s.a.createElement("p",{className:"control"},s.a.createElement("label",{htmlFor:"message-input"}," ",s.a.createElement("i",{className:"fa fa-envelope fa-fw","aria-hidden":"true"})," ","Message:"),s.a.createElement("input",{className:"input message-input",type:"text",placeholder:"Add a message",onChange:function(t){return e.setMessage(t)}}),this.props.max_message?s.a.createElement("span",{className:"has-text-warning"},s.a.createElement("strong",null,"Maximum length of the message reached")):""))))),s.a.createElement("div",{className:"column is-3"},s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("div",{className:"select"},s.a.createElement("select",{onChange:this.props.changeTheme},Object.keys(this.props.themes).map(function(t){return s.a.createElement("option",{key:t,value:t,selected:e.props.themeName===t}," ",e.props.themes[t].label," ")}))),s.a.createElement("div",{className:"icon is-small is-left iconized"},s.a.createElement("i",{className:"fa fa-paint-brush has-text-dark-grey"}))))),s.a.createElement("div",{className:"column is-5"},s.a.createElement("div",{className:"buttons is-right"},s.a.createElement("button",{className:"button is-dark",onClick:window.print,style:{marginTop:0}},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-download fa-fw"})),s.a.createElement("span",null,"Print")),s.a.createElement("button",{className:"button is-primary",onClick:this.props.createWallet,style:{marginTop:0}},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-sync-alt fa-fw"})),s.a.createElement("span",null,"Generate new wallet"))))),this.renderSecondaryToolbar())}}]),t}(n.Component),T=a(367),W=a.n(T);function C(e){var t=Object(_.a)({},e.wallet);return s.a.createElement("div",{className:"image"},s.a.createElement("img",{src:e.image,alt:"",className:""}),s.a.createElement("p",{className:"text-over-address is-size-4 has-text-dark"},s.a.createElement("strong",null,t.address||"")),s.a.createElement("p",{className:"text-over-passphrase is-size-4 has-text-dark"},s.a.createElement("strong",null,t.passphrase||"")),s.a.createElement("p",{className:"text-over-message is-size-4 has-text-dark"},s.a.createElement("strong",null,e.message||"")),s.a.createElement("span",{className:"qr-code"},function(e){return e&&e.address&&e.address.length?s.a.createElement(W.a,{value:e.address}):s.a.createElement("div",null)}(t)))}var I=function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(j.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).renderExtraBox=function(e){if(e.address&&e.passphrase)return s.a.createElement("div",{className:"notification is-warning has-text-left info-box extra-details"},s.a.createElement("p",null,s.a.createElement("strong",null,"Send the funds to this address: (Public)")," ",s.a.createElement("br",null),e.address),s.a.createElement("p",{className:"top20"},s.a.createElement("strong",null,"Access the funds with this passphrase: (Do not share this information with anybody) ")," ",s.a.createElement("br",null),e.passphrase))},a}return Object(P.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=Object(_.a)({},this.props.wallet);return e&&e.address||(e={address:"_________________________________________"}),s.a.createElement("div",{className:"container infos"},s.a.createElement("div",{className:"notification is-warning has-text-left info-box notification-topped"},s.a.createElement("h1",{className:"title is-5 has-text-dark"},"What to do now?"),s.a.createElement("p",{className:""},"This is a real wallet. You can use it for yourself in order to store your ARK or you top it up and gift it to a friend.",s.a.createElement("br",null),"Now you can access this wallet with ARK Wallet Desktop by entering the 12 words passphrase. The balance of this wallet is ________________ ARK. You will need to send some ARK to the address"," ",e.address," (e.g. from an exchange) in order to make it show in the block explorer.",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("strong",null,"Never ever give anybody your passphrase"),". Whoever has this passphrase can access the ARK contained in this wallet. Make sure that you store this paper wallet carefully and you make a backup of it. If you lose these credentials there is no way to get them back.",s.a.createElement("br",null),s.a.createElement("br",null),"Now you can print this wallet, save it as pdf and store it for yourself or eventually gift it to one of your friends.",s.a.createElement("br",null),s.a.createElement("br",null))),this.renderExtraBox(e),s.a.createElement("div",{className:"notification is-warning has-text-left info-box notification-topped hide-print"},s.a.createElement("h1",{className:"title is-5 has-text-dark"},"Disclaimer"),s.a.createElement("p",{className:""},'By using this software you accept the terms and conditions. This software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. in no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.',s.a.createElement("br",null),s.a.createElement("br",null))))}}]),t}(n.Component),S=a(165),M=a(80),B=function(e){function t(){var e;return Object(A.a)(this,t),(e=Object(j.a)(this,Object(R.a)(t).call(this))).state={step:"info",lastCaptured:{x:0,y:0},zeroSeed:Object(M.a)("00"),seedDiff:Object(M.a)(0)},e.seedGeneratorBoundToThis=e.seedGenerator.bind(Object(S.a)(e)),document.addEventListener("mousemove",e.seedGeneratorBoundToThis,!0),e}return Object(P.a)(t,e),Object(O.a)(t,[{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this.seedGeneratorBoundToThis,!0)}},{key:"isTouchDevice",value:function(){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)}},{key:"seedGenerator",value:function(e){var t;"string"===typeof e?t=!0:t=Math.sqrt(Math.pow(e.pageX-this.state.lastCaptured.x,2)+Math.pow(e.pageY-this.state.lastCaptured.y,2))>120;if(t&&(!this.state.data||this.state.data.percentage<100)){this.setState({lastCaptured:{x:e.pageX,y:e.pageY}});var a=this.state.data?this.state.data.seed:this.state.zeroSeed,n=Object(M.c)(this.state.data),s=a.map(function(e,t){return e!==n.seed[t]?t:null}).filter(function(e){return null!==e});this.setState({data:n,seedDiff:s})}else if(this.state.data&&this.state.data.percentage>=100&&!this.state.passphrase){var r=Object(M.b)(this.state.data);this.setState({passphrase:r}),this.props.setPassphraseFromGenerator(r)}}},{key:"percentage",value:function(){var e=this.state.data?parseFloat(this.state.data.percentage+"").toFixed(1):0;return e>=100?100:e}},{key:"render",value:function(){var e=this,t=this.isTouchDevice(this.props.agent);return s.a.createElement("div",null,s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-8 is-offset-2"},t?s.a.createElement("div",null,s.a.createElement("p",{className:"title-seed-message"},"Enter text below to generate random bytes"),s.a.createElement("input",{className:"input message-input",type:"text",placeholder:"Enter random text",onChange:function(t){return e.seedGeneratorBoundToThis(t.target.value)}})):s.a.createElement("p",{className:"title-seed-message"},"Move your mouse to create some entropy... ",s.a.createElement("br",null),"This is like a magic process to make sure your wallet is generated randomly."))),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-8 is-offset-2"},s.a.createElement("div",{className:"column is-8 is-offset-2"},"Progress:"," ",this.percentage()," ","%",s.a.createElement("progress",{className:"progress is-success",value:this.percentage(),max:"100"},"75%")))))}}]),t}(n.Component),z=a(369),G=(a(861),a(862),a(863),a(370)),D=a.n(G),q=a(371),F=a.n(q),Y=a(372),L=a.n(Y),J=a(373),H=a.n(J),U=a(374),X=a.n(U),V=a(375),$=a.n(V),Q=a(376),Z=a.n(Q),ee={arkBlue:{label:"Ark Blue",image:D.a,style:"baseWallet",message_length:88},arkDark:{label:"Ark Dark",image:F.a,style:"baseWallet",message_length:88},chillPink:{label:"Chill Pink",image:L.a,style:"baseWallet",message_length:88},classicRed:{label:"Classic Red",image:Z.a,style:"baseWallet",message_length:88},heartPink:{label:"Heart Pink",image:X.a,style:"baseWallet",message_length:88},christmasPostcard:{label:"Christmas Postcard",image:H.a,style:"christmasPostcard",message_length:59},impressiveRed:{label:"Impressive Red",image:$.a,style:"baseWallet",message_length:88}},te=function(e){function t(e){var a;Object(A.a)(this,t),(a=Object(j.a)(this,Object(R.a)(t).call(this,e))).query={},a.createWallet=function(){a.setState({current:"generate",wallet:{}})},a.changeTheme=function(e){var t=ee[e.target.value];a.setState({label:t.label,image:t.image,style:t.style,themeName:e.target.value})},a.setMessage=function(e,t){a.setState({message:e,max_message:t})},a.setAddress=function(e){var t=Object(_.a)({},a.state.wallet);t.address=e.target.value,a.setState({wallet:t})},a.setPassphraseFromGenerator=function(e){Object(_.a)({},a.state.wallet).passphrase=e,Object(M.d)(e,function(e){a.setState({wallet:e,current:"show"})})},a.setPassphrase=function(e){var t=Object(_.a)({},a.state.wallet);t.passphrase=e.target.value,t.passphrase=t.passphrase.substring(0,122),a.setState({wallet:t})};var n=ee.arkBlue;return a.query=Object(z.parse)(a.props.location.search.substr(1)),a.state={wallet:{},image:n.image,style:n.style,name:n.name,label_theme:n.label,themeName:"arkBlue",showInsert:!1,current:"generate"},a}return Object(P.a)(t,e),Object(O.a)(t,[{key:"componentWillMount",value:function(){this.query.blueprint||this.query.created?this.setState({current:"show"}):this.setState({current:"generate"}),this.query.blueprint||(this.query.created?this.setState({showInsert:!0}):this.createWallet())}},{key:"render",value:function(){var e=Object(_.a)({},this.state.wallet),t={},a=this.state.current;return t.generate=s.a.createElement(B,{setPassphraseFromGenerator:this.setPassphraseFromGenerator.bind(this)}),t.show=s.a.createElement(N,null,s.a.createElement("div",{className:this.state.style+" image-wrapper"},s.a.createElement(C,{wallet:e,message:this.state.message,image:this.state.image}),s.a.createElement(K,{wallet:e,changeTheme:this.changeTheme,createWallet:this.createWallet,setMessage:this.setMessage,max_message:this.state.max_message,themeName:this.state.themeName,themes:ee,showInsert:this.state.showInsert,setPassphrase:this.setPassphrase,setAddress:this.setAddress}),s.a.createElement(I,{wallet:e}))),s.a.createElement("div",{className:"container has-text-centered"},t[a])}}]),t}(n.Component);function ae(){return s.a.createElement("div",{className:"container has-text-centered"},s.a.createElement(N,null,s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-8 is-offset-2 has-text-left"},s.a.createElement("h1",{className:"title top35"},"What is a paper wallet?"),s.a.createElement("p",null,"One of the most exciting things you can do with your ARK is to send them to a piece of paper."),s.a.createElement("p",null,"First of all, the first rule of crypto-club is: Your keys\u200a\u2014\u200aYour ARK, Not your keys\u200a\u2014\u200aNot your ARK."),s.a.createElement("p",null,"In the most specific sense, an ARK paper wallet is a document containing all of the data necessary to access a the wallet from ARK Desktop Wallet.",s.a.createElement("br",null)),s.a.createElement("h2",{className:"title top35"},"What are the benifits of having a paper wallet?"),s.a.createElement("p",null,"A paper wallet can be generated offline and allows you to have a copy of your copy literally on a piece of paper"),s.a.createElement("h2",{className:"title top35"},"What can I do with a paper wallet?"),s.a.createElement("p",null,"With an ARK paper wallet you can store you ARK passphrase away of a computer. If the paper wallet is stored properly then this might be considered an extra layer of security in storing your passphrase"),s.a.createElement("p",null,"Another use case of a paper wallet is to gift it to friends for example for Christmas. Let's say you want to give 10 ARK to John, but John doesn't know how to create an ARK wallet. You could create an ARK Paper Wallet for John, send some ARK to the generated address and then gift the paper wallet to him."),s.a.createElement("h2",{className:"title top35"},"Is this application communicating with any server?"),s.a.createElement("p",null,"No, ARKPaper is running only in your browser. This means that when you visit ARKPaper you are downloading the application in your browser and is running it locally. No data is transmitted to any server and there is no tracking/analytics software in place. In order to verify this, you can analyze on"," ",s.a.createElement("a",{href:"https://github.com/espresso-time/ARKPaper/releases",className:"underlined"}," ","Github"," ")," ","the source code. In order to avoid any doubts, downloading the software from Github and running it offline is encouraged."),s.a.createElement("h2",{className:"title top35"},"How do I generate the paper wallet offline?"),s.a.createElement("p",null,"The code of"," ","ARKPaper"," ","is open source. You can improve it and submit a PR to the repository. If you need assistance, feel free to contact Espresso on the ARK chat."),s.a.createElement("p",null,"The safest way to generate a wallet is"," ",s.a.createElement("a",{href:"https://github.com/espresso-time/ARKPaper/releases",className:"underlined"},"to download the application here"),", transfer it into an usb drive, start an offline linux distribution, and open the index.html."),s.a.createElement("p",null,"If you don't want to bother to use an offline linux distribution, you can just download"," ",s.a.createElement("a",{href:"https://github.com/espresso-time/ARKPaper/releases",className:"underlined"},"ARKpaper.zip from here"),", unzip it and execute the index.html. There is no need to be connected to internet while running the ARKpaper app.")))))}function ne(){return s.a.createElement("div",{className:"small-screen hide-print"},s.a.createElement("section",{className:"hero is-info is-fullheight",style:{background:"linear-gradient(126deg, #e1ebee -23%, #061c6d)"}},s.a.createElement(h,null),s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container has-text-centered"},s.a.createElement("h1",null,"In order to use ARKPaper, please increase the width of this window to at least 1024px..."))),s.a.createElement(f,null)))}var se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(s.a.createElement(function(){return s.a.createElement(i.a,null,s.a.createElement("div",{className:"only-big-screen"},s.a.createElement("div",null,s.a.createElement("section",{className:"hero is-info is-fullheight",style:{background:"linear-gradient(126deg, #e1ebee -23%, #061c6d)"}},s.a.createElement(h,null),s.a.createElement("div",{className:"hero-body"},s.a.createElement(o.c,null,s.a.createElement(o.a,{exact:!0,path:"/",component:x}),s.a.createElement(o.a,{exact:!0,path:"/start",component:k}),s.a.createElement(o.a,{path:"/create-wallet",component:te}),s.a.createElement(o.a,{path:"/how-it-works",component:ae}),s.a.createElement(o.a,{component:x}))),s.a.createElement(f,null)))),s.a.createElement(ne,null))},null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ARKPaper",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/ARKPaper","/service-worker.js");se?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):re(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):re(e)})}}()}},[[377,1,2]]]);
//# sourceMappingURL=main.d204e771.chunk.js.map