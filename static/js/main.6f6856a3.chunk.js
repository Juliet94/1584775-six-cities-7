(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{64:function(e,a,t){"use strict";t.r(a);var r,s=t(1),i=t.n(s),c=t(20),n=t.n(c),o=t(5),l=t(3),d=t(7),u=t(6),j=t(15),p=t(2),b=t.n(p),m=(b.a.shape({bedrooms:b.a.number.isRequired,city:b.a.shape({location:b.a.shape({latitude:b.a.number.isRequired,longitude:b.a.number.isRequired,zoom:b.a.number.isRequired}).isRequired,name:b.a.string.isRequired}).isRequired,description:b.a.string.isRequired,goods:b.a.arrayOf(b.a.string.isRequired).isRequired,host:b.a.shape({avatarUrl:b.a.string.isRequired,id:b.a.number.isRequired,isPro:b.a.bool.isRequired,name:b.a.string.isRequired}).isRequired,id:b.a.number.isRequired,images:b.a.arrayOf(b.a.string.isRequired).isRequired,isFavorite:b.a.bool.isRequired,isPremium:b.a.bool.isRequired,location:b.a.shape({latitude:b.a.number.isRequired,longitude:b.a.number.isRequired,zoom:b.a.number.isRequired}).isRequired,maxAdults:b.a.number.isRequired,previewImage:b.a.string.isRequired,price:b.a.number.isRequired,rating:b.a.number.isRequired,title:b.a.string.isRequired,type:b.a.string.isRequired}).isRequired,"/"),_="/login",h="/favorites",f="/offer/:id",O={main:{type:"main",classListElement:"cities__place-card place-card",classListElementWrapper:"cities__image-wrapper",cardImageWidth:260,cardImageHeight:200},offer:{type:"offer",classListElement:"near-places__card place-card",classListElementWrapper:"near-places__image-wrapper",cardImageWidth:260,cardImageHeight:200},favorite:{type:"favorite",classListElement:"favorites__card",classListElementWrapper:"favorites__image-wrapper",classInfo:"favorites__card-info",cardImageWidth:150,cardImageHeight:110}},v={card:{class:"place-card__bookmark-button button",width:18,height:19},offer:{class:"property__bookmark-button button",width:31,height:33}},x="#4481c3",g="#979797",N=["Paris","Cologne","Brussels","Amsterdam","Hamburg","Dusseldorf"],y={POPULAR:"Popular",PRICE_LOW:"Price: low to high",PRICE_HIGH:"Price: high to low",TOP_RATED:"Top rated first"},w="/hotels",R="/nearby",k="/comments",C="/favorite",q="/login",P="/logout",T={AUTH:"AUTH",NO_AUTH:"NO_AUTH",UNKNOWN:"UNKNOWN"},S="Paris",U=t(18),A=t(14),L="offers/changeCity",I="offers/changeSort",E="offers/changeActiveCard",F="data/fillOffersList",H="data/loadOffers",D="data/loadNearbyOffers",W="data/loadOffer",z="data/loadReviews",M="data/loadFavorites",B="data/updateFavorites",K="data/setIsDataLoadError",G="data/setIsOfferDataLoaded",J="data/setIsReviewSending",Y="user/requiredAuthorization",Q="user/logout",V="user/getUserData",X=Object(o.b)(L,(function(e){return{payload:e}})),Z=Object(o.b)(F,(function(e){return{payload:e}})),$=Object(o.b)(I,(function(e){return{payload:e}})),ee=Object(o.b)(E,(function(e){return{payload:e}})),ae=Object(o.b)(H,(function(e){return{payload:e}})),te=Object(o.b)(D,(function(e){return{payload:e}})),re=Object(o.b)(W,(function(e){return{payload:e}})),se=Object(o.b)(z,(function(e){return{payload:e}})),ie=Object(o.b)(M,(function(e){return{payload:e}})),ce=Object(o.b)(B,(function(e){return{payload:e}})),ne=Object(o.b)(G,(function(e){return{payload:e}})),oe=Object(o.b)(K,(function(e){return{payload:e}})),le=Object(o.b)(J,(function(e){return{payload:e}})),de=Object(o.b)(Y,(function(e){return{payload:e}})),ue=Object(o.b)(Q),je=Object(o.b)(V,(function(e){return{payload:e}})),pe={activeCityName:S,activeSortType:y.POPULAR,activePlaceCard:null},be=Object(o.c)(pe,(function(e){e.addCase(X,(function(e,a){e.activeSortType=y.POPULAR,e.activeCityName=a.payload})).addCase($,(function(e,a){e.activeSortType=a.payload})).addCase(ee,(function(e,a){e.activePlaceCard=a.payload}))})),me={authorizationStatus:T.UNKNOWN,userData:{}},_e=Object(o.c)(me,(function(e){e.addCase(de,(function(e,a){e.authorizationStatus=a.payload})).addCase(ue,(function(e){e.authorizationStatus=T.NO_AUTH})).addCase(je,(function(e,a){e.userData=a.payload}))})),he=Object(o.c)({offers:[],allOffers:[],nearbyOffers:[],favoritesOffers:[],offer:{},reviews:[],isDataLoaded:!1,isOfferDataLoaded:!1,isDataLoadError:!1,isReviewSending:!1},(function(e){e.addCase(ae,(function(e,a){e.allOffers=a.payload,e.offers=a.payload.filter((function(e){return e.city.name===S})),e.isDataLoaded=!0})).addCase(Z,(function(e,a){e.offers=e.allOffers.filter((function(e){return e.city.name===a.payload}))})).addCase(te,(function(e,a){e.nearbyOffers=a.payload})).addCase(re,(function(e,a){e.offer=a.payload,e.isOfferDataLoaded=!0})).addCase(se,(function(e,a){e.reviews=a.payload})).addCase(ie,(function(e,a){e.favoritesOffers=a.payload})).addCase(ce,(function(e,a){e.allOffers.find((function(e){return e.id===a.payload.id})).isFavorite=a.payload.isFavorite;var t=e.favoritesOffers.findIndex((function(e){return e.id===a.payload.id}));e.favoritesOffers.splice(t,1),0!==Object.keys(e.offer).length&&(e.offer.isFavorite=a.payload.isFavorite),e.offers.some((function(e){return e.id===a.payload.id}))&&(e.offers.find((function(e){return e.id===a.payload.id})).isFavorite=a.payload.isFavorite),e.nearbyOffers.some((function(e){return e.id===a.payload.id}))&&(e.nearbyOffers.find((function(e){return e.id===a.payload.id})).isFavorite=a.payload.isFavorite)})).addCase(ne,(function(e,a){e.isOfferDataLoaded=a.payload})).addCase(oe,(function(e,a){e.isDataLoadError=a.payload})).addCase(le,(function(e,a){e.isReviewSending=a.payload}))})),fe="OFFERS",Oe="DATA",ve="USER",xe=Object(A.c)((r={},Object(U.a)(r,fe,be),Object(U.a)(r,Oe,he),Object(U.a)(r,ve,_e),r)),ge=function(e){return e[ve].authorizationStatus},Ne=function(e){return e[ve].userData},ye=t(9),we=function(e){var a=Object(ye.a)(Object(ye.a)({},e),{},{host:Object(ye.a)(Object(ye.a)({},e.host),{},{avatarUrl:e.host.avatar_url,isPro:e.host.is_pro}),isFavorite:e.is_favorite,isPremium:e.is_premium,maxAdults:e.max_adults,previewImage:e.preview_image});return delete a.host.avatar_url,delete a.host.is_pro,delete a.is_favorite,delete a.is_premium,delete a.max_adults,delete a.preview_image,a},Re=function(e){var a=Object(ye.a)(Object(ye.a)({},e),{},{user:{avatarUrl:e.user.avatar_url,isPro:e.user.is_pro}});return delete a.user.avatar_url,delete a.user.is_pro,a},ke=function(){return function(e,a,t){return t.get(C).then((function(a){var t=a.data;e(ie(t.map(we)))}))}},Ce=function(e){var a=e.login,t=e.password;return function(e,r,s){return s.post(q,{email:a,password:t}).then((function(a){var t=a.data;localStorage.setItem("token",t.token),e(je(function(e){var a=Object(ye.a)(Object(ye.a)({},e),{},{avatarUrl:e.avatar_url,isPro:e.is_pro});return delete a.token,delete a.avatar_url,delete a.is_pro,a}(t)))})).then((function(){return e(de(T.AUTH))}))}},qe=t(0);var Pe=function(e){var a=e.isFavorite,t=e.id,r=e.buttonType,s=void 0===r?v.card:r,i=Object(l.b)(),c=Object(l.c)(ge),n=Object(u.h)();return Object(qe.jsxs)("button",{className:s.class,type:"button",onClick:function(){c===T.AUTH?i(function(e,a){return function(t,r,s){return s.post("".concat(C,"/").concat(e,"/").concat(a)).then((function(e){var a=e.data;t(ce(we(a)))})).catch((function(){return[]})).then(t(ke()))}}(t,a?0:1)):n.push(_)},children:[Object(qe.jsx)("svg",{className:"place-card__bookmark-icon",width:s.width,height:s.height,style:{stroke:a?x:g,fill:a?x:null},children:Object(qe.jsx)("use",{xlinkHref:"#icon-bookmark"})}),Object(qe.jsx)("span",{className:"visually-hidden",children:"To bookmarks"})]})},Te=function(e){return"".concat(20*e.toFixed(),"%")};var Se=function(e){var a=e.offer,t=e.pageType,r=e.setActivePlaceCard,s=(e.activePlaceCard,Object(l.b)()),i=a.id,c=a.previewImage,n=a.price,o=a.rating,j=a.title,p=a.type,b=a.isFavorite,m=a.isPremium,_=Te(o);return Object(qe.jsxs)("article",{className:"".concat(t.classListElement," place-card"),onMouseEnter:t.type===O.main.type?function(){r(i),s(ee(i))}:null,onMouseLeave:t.type===O.main.type?function(){null,s(ee(null))}:null,children:[m&&Object(qe.jsx)("div",{className:"place-card__mark",children:Object(qe.jsx)("span",{children:"Premium"})}),Object(qe.jsx)("div",{className:"".concat(t.classListElementWrapper," place-card__image-wrapper"),children:Object(qe.jsx)(d.b,{to:{pathname:Object(u.f)(f,{id:i})},children:Object(qe.jsx)("img",{className:"place-card__image",src:c,width:t.cardImageWidth,height:t.cardImageHeight,alt:"Place"})})}),Object(qe.jsxs)("div",{className:"place-card__info",children:[Object(qe.jsxs)("div",{className:"place-card__price-wrapper",children:[Object(qe.jsxs)("div",{className:"place-card__price",children:[Object(qe.jsxs)("b",{className:"place-card__price-value",children:["\u20ac",n]}),Object(qe.jsx)("span",{className:"place-card__price-text",children:"/\xa0night"})]}),Object(qe.jsx)(Pe,{isFavorite:b,id:i})]}),Object(qe.jsx)("div",{className:"place-card__rating rating",children:Object(qe.jsxs)("div",{className:"place-card__stars rating__stars",children:[Object(qe.jsx)("span",{style:{width:_}}),Object(qe.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),Object(qe.jsx)("h2",{className:"place-card__name",children:Object(qe.jsx)(d.b,{to:{pathname:Object(u.f)(f,{id:i})},children:j})}),Object(qe.jsx)("p",{className:"place-card__type",children:p})]})]})};var Ue=function(e){var a=e.offers,t=e.pageType,r=Object(s.useState)(null),i=Object(j.a)(r,2),c=i[0],n=i[1];return Object(qe.jsx)(qe.Fragment,{children:a.map((function(e){return Object(qe.jsx)(Se,{offer:e,pageType:t,setActivePlaceCard:n,activePlaceCard:c},e.id)}))})};var Ae=function(){return Object(qe.jsx)(d.c,{className:"header__logo-link",to:m,activeClassName:"header__logo-link--active",isActive:function(e,a){var t=a.pathname;return!!e&&t===m},children:Object(qe.jsx)("img",{className:"header__logo",src:"img/logo.svg",alt:"6 cities logo",width:"81",height:"41"})})};var Le=function(){var e=Object(l.b)(),a=Object(l.c)(Ne),t=a.avatarUrl,r=a.email;return Object(qe.jsxs)("ul",{className:"header__nav-list",children:[Object(qe.jsx)("li",{className:"header__nav-item user",children:Object(qe.jsxs)(d.b,{className:"header__nav-link header__nav-link--profile",to:h,children:[Object(qe.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper",children:Object(qe.jsx)("img",{src:t,alt:"user"})}),Object(qe.jsx)("span",{className:"header__user-name user__name",children:r})]})}),Object(qe.jsx)("li",{className:"header__nav-item",children:Object(qe.jsx)(d.b,{className:"header__nav-link",to:_,children:Object(qe.jsx)("span",{onClick:function(){e((function(e,a,t){return t.delete(P).then((function(){return localStorage.removeItem("token")})).then((function(){return e(ue())}))}))},className:"header__signout",children:"Sign out"})})})]})};var Ie=function(){return Object(qe.jsx)("ul",{className:"header__nav-list",children:Object(qe.jsx)("li",{className:"header__nav-item user",children:Object(qe.jsxs)(d.b,{className:"header__nav-link header__nav-link--profile",href:"#",to:_,children:[Object(qe.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),Object(qe.jsx)("span",{className:"header__login",children:"Sign in"})]})})})};var Ee=function(){var e=Object(l.c)(ge);return Object(qe.jsx)("header",{className:"header",children:Object(qe.jsx)("div",{className:"container",children:Object(qe.jsxs)("div",{className:"header__wrapper",children:[Object(qe.jsx)("div",{className:"header__left",children:Object(qe.jsx)(Ae,{})}),Object(qe.jsx)("nav",{className:"header__nav",children:e===T.AUTH?Object(qe.jsx)(Le,{}):Object(qe.jsx)(Ie,{})})]})})})};var Fe=function(e){var a=e.city;return Object(qe.jsx)("div",{className:"cities",children:Object(qe.jsxs)("div",{className:"cities__places-container cities__places-container--empty container",children:[Object(qe.jsx)("section",{className:"cities__no-places",children:Object(qe.jsxs)("div",{className:"cities__status-wrapper tabs__content",children:[Object(qe.jsx)("b",{className:"cities__status",children:"No places to stay available"}),Object(qe.jsxs)("p",{className:"cities__status-description",children:["We could not find any property available at the moment in ",a]})]})}),Object(qe.jsx)("div",{className:"cities__right-section"})]})})},He=t(17),De=function(e){return e[Oe].offers},We=function(e){return e[Oe].nearbyOffers},ze=function(e){return e[Oe].offer},Me=function(e){return e[Oe].reviews},Be=function(e){return e[Oe].favoritesOffers},Ke=function(e){return e[Oe].isDataLoaded},Ge=function(e){return e[Oe].isOfferDataLoaded},Je=function(e){return e[Oe].isDataLoadError},Ye=function(e){return e[Oe].isReviewSending},Qe=function(e){return e[fe].activeCityName},Ve=function(e){return e[fe].activeSortType},Xe=function(e){return e[fe].activePlaceCard},Ze=Object(He.a)(Qe,(function(e){return e[Oe].allOffers}),(function(e,a){return a.find((function(a){return a.city.name===e})).city}));var $e=function(){var e=Object(l.b)(),a=Object(l.c)(Qe);return Object(qe.jsx)("ul",{className:"locations__list tabs__list",children:N.map((function(t){return Object(qe.jsx)("li",{className:"locations__item",children:Object(qe.jsx)("a",{className:"locations__item-link tabs__item ".concat(t===a?"tabs__item--active":""),href:"#".concat(t),onClick:function(){e(X(t)),e(Z(t))},children:Object(qe.jsx)("span",{children:t})})},t)}))})},ea=t(16),aa=t.n(ea);t(26);var ta=function(e,a){var t=Object(s.useState)(null),r=Object(j.a)(t,2),i=r[0],c=r[1];return Object(s.useEffect)((function(){if(null!==e.current&&null===i){var t=aa.a.map(e.current,{center:{lat:a.location.latitude,lng:a.location.longitude},zoom:a.location.zoom});aa.a.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}).addTo(t),c(t)}}),[e,i,a]),i},ra=30;var sa=function(e){var a=e.offers,t=e.city,r=Object(l.c)(Xe),i=Object(s.useRef)(null),c=ta(i,t),n=aa.a.icon({iconUrl:"img/pin.svg",iconSize:[ra,ra],iconAnchor:[15,ra]}),o=aa.a.icon({iconUrl:"img/pin-active.svg",iconSize:[ra,ra],iconAnchor:[15,ra]});return Object(s.useEffect)((function(){var e=aa.a.layerGroup();return c&&(e.addTo(c),a.forEach((function(a){aa.a.marker({lat:a.location.latitude,lng:a.location.longitude},{icon:a.id===r?o:n}).addTo(e)})),c.flyTo([t.location.latitude,t.location.longitude],t.location.zoom)),function(){e.clearLayers()}}),[c,a,r]),Object(qe.jsx)("div",{id:"map",style:{height:"100%"},ref:i})},ia=Object.values(y);var ca=function(e){var a=e.sortType,t=Object(l.b)(),r=Object(s.useState)(!1),i=Object(j.a)(r,2),c=i[0],n=i[1],o=function(){return n(!c)};return Object(qe.jsxs)("form",{className:"places__sorting",action:"#",method:"get",children:[Object(qe.jsx)("span",{className:"places__sorting-caption",children:"Sort by "}),Object(qe.jsxs)("span",{className:"places__sorting-type",tabIndex:"0",onClick:o,children:[a,Object(qe.jsx)("svg",{className:"places__sorting-arrow",width:"7",height:"4",children:Object(qe.jsx)("use",{xlinkHref:"#icon-arrow-select"})})]}),Object(qe.jsx)("ul",{className:"".concat(c?"places__options--opened":""," places__options places__options--custom"),children:ia.map((function(e){return Object(qe.jsx)("li",{className:"".concat(a===e?"places__option--active":""," places__option"),tabIndex:"0",onClick:function(){t($(e)),o()},children:e},e)}))})]})},na=function(e,a){switch(e){case y.PRICE_HIGH:return a.slice().sort((function(e,a){return a.price-e.price}));case y.PRICE_LOW:return a.slice().sort((function(e,a){return e.price-a.price}));case y.TOP_RATED:return a.slice().sort((function(e,a){return a.rating-e.rating}));default:return a}};var oa=function(){var e=Object(l.c)(De),a=Object(l.c)(Qe),t=Object(l.c)(Ze),r=Object(l.c)(Ve);return Object(qe.jsxs)("div",{className:"".concat(e.length>0?"page page--gray":"page__main--index-empty page__main--index"," page--main"),children:[Object(qe.jsx)(Ee,{}),Object(qe.jsxs)("main",{className:"page__main page__main--index",children:[Object(qe.jsx)("h1",{className:"visually-hidden",children:"Cities"}),Object(qe.jsx)("div",{className:"tabs",children:Object(qe.jsx)("section",{className:"locations container",children:Object(qe.jsx)($e,{})})}),e.length>0?Object(qe.jsx)("div",{className:"cities",children:Object(qe.jsxs)("div",{className:"cities__places-container container",children:[Object(qe.jsxs)("section",{className:"cities__places places",children:[Object(qe.jsx)("h2",{className:"visually-hidden",children:"Places"}),Object(qe.jsxs)("b",{className:"places__found",children:[e.length," ",e.length>1?"places":"place"," to stay in ",a]}),Object(qe.jsx)(ca,{sortType:r}),Object(qe.jsx)("div",{className:"cities__places-list places__list tabs__content",children:Object(qe.jsx)(Ue,{offers:na(r,e),pageType:O.main})})]}),Object(qe.jsx)("div",{className:"cities__right-section",children:Object(qe.jsx)("section",{className:"cities__map map",children:Object(qe.jsx)(sa,{offers:e,city:t})})})]})}):Object(qe.jsx)(Fe,{city:a})]})]})},la=[{title:"perfect",id:5},{title:"good",id:4},{title:"not bad",id:3},{title:"badly",id:2},{title:"terribly",id:1}];var da=function(e){var a=e.handleRatingChange,t=e.rateChecked;return Object(qe.jsx)("div",{className:"reviews__rating-form form__rating",onChange:a,children:la.map((function(e){return Object(qe.jsxs)(i.a.Fragment,{children:[Object(qe.jsx)("input",{className:"form__rating-input visually-hidden",name:"rating",value:e.id,id:"".concat(e.id,"-stars"),type:"radio",checked:t===e.id}),Object(qe.jsx)("label",{htmlFor:"".concat(e.id,"-stars"),className:"reviews__rating-label form__rating-label",title:e.title,children:Object(qe.jsx)("svg",{className:"form__star-image",width:"37",height:"33",children:Object(qe.jsx)("use",{xlinkHref:"#icon-star"})})})]},e.id)}))})},ua=50,ja=300;var pa=function(e){var a=e.id,t=Object(l.b)(),r=Object(l.c)(Ye),i=Object(s.useState)({rating:"",text:""}),c=Object(j.a)(i,2),n=c[0],o=c[1];return Object(qe.jsxs)("form",{className:"reviews__form form",action:"#",method:"post",onSubmit:function(e){e.preventDefault(),t(function(e,a,t){return function(r,s,i){r(le(!0)),i.post("".concat(k,"/").concat(e),{comment:a,rating:t}).then((function(e){var a=e.data;r(le(!1)),r(se(a.map(Re)))}))}}(a,n.text,n.rating)),o({rating:"",text:""})},children:[Object(qe.jsx)("label",{className:"reviews__label form__label",htmlFor:"review",children:"Your review"}),Object(qe.jsx)(da,{handleRatingChange:function(e){var a=e.target;o(Object(ye.a)(Object(ye.a)({},n),{},{rating:a.value}))},rateChecked:+n.rating}),Object(qe.jsx)("textarea",{className:"reviews__textarea form__textarea",id:"review",name:"review",placeholder:"Tell how was your stay, what you like and what can be improved",minLength:ua,maxLength:ja,onChange:function(e){var a=e.target;o(Object(ye.a)(Object(ye.a)({},n),{},{text:a.value}))},value:n.text,disabled:r}),Object(qe.jsxs)("div",{className:"reviews__button-wrapper",children:[Object(qe.jsxs)("p",{className:"reviews__help",children:["To submit review please make sure to set ",Object(qe.jsx)("span",{className:"reviews__star",children:"rating"})," and describe your stay with at least ",Object(qe.jsx)("b",{className:"reviews__text-amount",children:"50 characters"}),"."]}),Object(qe.jsx)("button",{className:"reviews__submit form__submit button",type:"submit",disabled:r||!(n.text.length>=ua&&n.rating),children:"Submit"})]})]})};b.a.shape({comment:b.a.string.isRequired,date:b.a.string.isRequired,id:b.a.number.isRequired,rating:b.a.number.isRequired,user:b.a.shape({avatarUrl:b.a.string.isRequired,id:b.a.number.isRequired,isPro:b.a.bool.isRequired,name:b.a.string.isRequired}).isRequired}).isRequired;var ba=function(e){var a=e.review,t=a.comment,r=a.date,s=a.rating,i=a.user,c=Te(s),n=new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"long"});return Object(qe.jsxs)("li",{className:"reviews__item",children:[Object(qe.jsxs)("div",{className:"reviews__user user",children:[Object(qe.jsx)("div",{className:"reviews__avatar-wrapper user__avatar-wrapper",children:Object(qe.jsx)("img",{className:"reviews__avatar user__avatar",src:i.avatarUrl,width:"54",height:"54",alt:"Reviews avatar"})}),Object(qe.jsx)("span",{className:"reviews__user-name",children:i.name})]}),Object(qe.jsxs)("div",{className:"reviews__info",children:[Object(qe.jsx)("div",{className:"reviews__rating rating",children:Object(qe.jsxs)("div",{className:"reviews__stars rating__stars",children:[Object(qe.jsx)("span",{style:{width:c}}),Object(qe.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),Object(qe.jsx)("p",{className:"reviews__text",children:t}),Object(qe.jsx)("time",{className:"reviews__time",dateTime:r,children:n})]})]})};var ma=function(e){var a=e.reviews;return Object(qe.jsx)("ul",{className:"reviews__list",children:a.map((function(e){return Object(qe.jsx)(ba,{review:e},e.id)}))})};var _a=function(){return Object(qe.jsxs)("div",{style:{margin:"30% 50%"},children:[Object(qe.jsx)("svg",{className:"spinner",style:{animation:"rotate 2s linear infinite",zIndex:2,width:"50px",height:"50px"},children:Object(qe.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5",style:{stroke:"#009acc",strokeLinecap:"round",animation:"dash 1.5s ease-in-out infinite"}})}),Object(qe.jsx)("p",{children:"Loading..."})]})};var ha=function(){return Object(qe.jsxs)("div",{className:"page page--gray page--main",children:[Object(qe.jsx)("header",{className:"header",children:Object(qe.jsx)("div",{className:"container",children:Object(qe.jsx)("div",{className:"header__wrapper",children:Object(qe.jsx)(Ae,{})})})}),Object(qe.jsxs)("section",{style:{margin:"0 auto"},children:[Object(qe.jsx)("h1",{children:"404 Page Not Found"}),Object(qe.jsx)(d.b,{to:m,children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})]})};var fa=function(){var e=Object(l.b)(),a=Object(l.c)(ze),t=Object(l.c)(Me),r=Object(l.c)(Ze),i=Object(l.c)(We),c=Object(l.c)(Ge),n=Object(l.c)(Je),o=Object(l.c)(ge),d=+Object(u.i)().pathname.replace("/offer/","");ee(d);var j=a.images,p=a.title,b=a.isPremium,m=a.isFavorite,_=a.rating,h=a.type,f=a.bedrooms,x=a.maxAdults,g=a.price,N=a.goods,y=a.host,C=a.description,q=a.id,P=Te(_||0);return Object(s.useEffect)((function(){return e(function(e){return function(a,t,r){return r.get("".concat(w,"/").concat(e)).then((function(e){var t=e.data;return a(re(we(t)))})).catch((function(){return a(oe(!0))}))}}(d)),e(function(e){return function(a,t,r){return r.get("".concat(w,"/").concat(e).concat(R)).then((function(e){var t=e.data;return a(te(t.map(we)))}))}}(d)),e(function(e){return function(a,t,r){return r.get("".concat(k,"/").concat(e)).then((function(e){var t=e.data;return a(se(t.map(Re)))}))}}(d)),function(){e(ee(null)),e(ne(!1)),e(oe(!1))}}),[d,T]),n?Object(qe.jsx)(ha,{}):c?Object(qe.jsxs)("div",{className:"page",children:[Object(qe.jsx)(Ee,{}),Object(qe.jsxs)("main",{className:"page__main page__main--property",children:[Object(qe.jsxs)("section",{className:"property",children:[Object(qe.jsx)("div",{className:"property__gallery-container container",children:Object(qe.jsx)("div",{className:"property__gallery",children:j.slice(0,6).map((function(e){return Object(qe.jsx)("div",{className:"property__image-wrapper",children:Object(qe.jsx)("img",{className:"property__image",src:e,alt:h})},e)}))})}),Object(qe.jsx)("div",{className:"property__container container",children:Object(qe.jsxs)("div",{className:"property__wrapper",children:[b&&Object(qe.jsx)("div",{className:"property__mark",children:Object(qe.jsx)("span",{children:"Premium"})}),Object(qe.jsxs)("div",{className:"property__name-wrapper",children:[Object(qe.jsx)("h1",{className:"property__name",children:p}),Object(qe.jsx)(Pe,{id:q,isFavorite:m,buttonType:v.offer})]}),Object(qe.jsxs)("div",{className:"property__rating rating",children:[Object(qe.jsxs)("div",{className:"property__stars rating__stars",children:[Object(qe.jsx)("span",{style:{width:P}}),Object(qe.jsx)("span",{className:"visually-hidden",children:"Rating"})]}),Object(qe.jsx)("span",{className:"property__rating-value rating__value",children:_})]}),Object(qe.jsxs)("ul",{className:"property__features",children:[Object(qe.jsx)("li",{className:"property__feature property__feature--entire",children:h}),Object(qe.jsxs)("li",{className:"property__feature property__feature--bedrooms",children:[f," ",f>1?"Bedrooms":"Bedroom"]}),Object(qe.jsxs)("li",{className:"property__feature property__feature--adults",children:["Max ",x," ",x>1?"adults":"adult"]})]}),Object(qe.jsxs)("div",{className:"property__price",children:[Object(qe.jsxs)("b",{className:"property__price-value",children:["\u20ac",g]}),Object(qe.jsx)("span",{className:"property__price-text",children:"\xa0night"})]}),Object(qe.jsxs)("div",{className:"property__inside",children:[Object(qe.jsx)("h2",{className:"property__inside-title",children:"What's inside"}),Object(qe.jsx)("ul",{className:"property__inside-list",children:N.map((function(e){return Object(qe.jsx)("li",{className:"property__inside-item",children:e},e)}))})]}),Object(qe.jsxs)("div",{className:"property__host",children:[Object(qe.jsx)("h2",{className:"property__host-title",children:"Meet the host"}),Object(qe.jsxs)("div",{className:"property__host-user user",children:[Object(qe.jsx)("div",{className:"property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper",children:Object(qe.jsx)("img",{className:"property__avatar user__avatar",src:y.avatarUrl,width:"74",height:"74",alt:"Host avatar"})}),Object(qe.jsx)("span",{className:"property__user-name",children:y.name}),y.isPro&&Object(qe.jsx)("span",{className:"property__user-status",children:"Pro"})]}),Object(qe.jsx)("div",{className:"property__description",children:Object(qe.jsx)("p",{className:"property__text",children:C})})]}),Object(qe.jsxs)("section",{className:"property__reviews reviews",children:[Object(qe.jsxs)("h2",{className:"reviews__title",children:["Reviews \xb7 ",Object(qe.jsx)("span",{className:"reviews__amount",children:t.length})]}),Object(qe.jsx)(ma,{reviews:t}),o===T.AUTH&&Object(qe.jsx)(pa,{id:d})]})]})}),Object(qe.jsx)("section",{className:"property__map map",children:Object(qe.jsx)(sa,{offers:i.concat(a),city:r})})]}),Object(qe.jsx)("div",{className:"container",children:Object(qe.jsxs)("section",{className:"near-places places",children:[Object(qe.jsx)("h2",{className:"near-places__title",children:"Other places in the neighbourhood"}),Object(qe.jsx)("div",{className:"near-places__list places__list",children:Object(qe.jsx)(Ue,{offers:i,pageType:O.offer})})]})})]})]}):Object(qe.jsx)(_a,{})};var Oa=function(e){var a=e.favoriteOffers,t=e.favoriteCity;return Object(qe.jsxs)("li",{className:"favorites__locations-items",children:[Object(qe.jsx)("div",{className:"favorites__locations locations locations--current",children:Object(qe.jsx)("div",{className:"locations__item",children:Object(qe.jsx)("a",{className:"locations__item-link",href:"#",children:Object(qe.jsx)("span",{children:t})})})}),Object(qe.jsx)("div",{className:"favorites__places",children:a.map((function(e){return Object(qe.jsx)(Se,{offer:e,pageType:O.favorite},e.id)}))})]})};var va=function(e){var a=e.favoriteOffers,t=e.favoritesUniqueCities,r=Array.from(t);return Object(qe.jsx)("ul",{className:"favorites__list",children:r.map((function(e){return Object(qe.jsx)(Oa,{favoriteOffers:a.filter((function(a){return a.city.name===e})),favoriteCity:e},e)}))})};var xa=function(){return Object(qe.jsx)("footer",{className:"footer container",children:Object(qe.jsx)(d.b,{className:"footer__logo-link",to:m,children:Object(qe.jsx)("img",{className:"footer__logo",src:"img/logo.svg",alt:"6 cities logo",width:"64",height:"33"})})})};var ga=function(){return Object(qe.jsxs)("div",{className:"page page--favorites-empty",children:[Object(qe.jsx)(Ee,{}),Object(qe.jsx)("main",{className:"page__main page__main--favorites page__main--favorites-empty",children:Object(qe.jsx)("div",{className:"page__favorites-container container",children:Object(qe.jsxs)("section",{className:"favorites favorites--empty",children:[Object(qe.jsx)("h1",{className:"visually-hidden",children:"Favorites (empty)"}),Object(qe.jsxs)("div",{className:"favorites__status-wrapper",children:[Object(qe.jsx)("b",{className:"favorites__status",children:"Nothing yet saved."}),Object(qe.jsx)("p",{className:"favorites__status-description",children:"Save properties to narrow down search or plan your future trips."})]})]})})}),Object(qe.jsx)(xa,{})]})};var Na=function(){var e=Object(l.c)(Be);if(0===e.length)return Object(qe.jsx)(ga,{});var a=new Set;return e.forEach((function(e){return a.add(e.city.name)})),Object(qe.jsxs)("div",{className:"page",children:[Object(qe.jsx)(Ee,{}),Object(qe.jsx)("main",{className:"page__main page__main--favorites",children:Object(qe.jsx)("div",{className:"page__favorites-container container",children:Object(qe.jsxs)("section",{className:"favorites",children:[Object(qe.jsx)("h1",{className:"favorites__title",children:"Saved listing"}),Object(qe.jsx)(va,{favoriteOffers:e,favoritesUniqueCities:a})]})})}),Object(qe.jsx)(xa,{})]})};var ya=function(){var e=Object(l.b)(),a=Object(l.c)(ge),t=Object(u.h)(),r=Object(s.useState)(""),i=Object(j.a)(r,2),c=i[0],n=i[1];a===T.AUTH&&t.push(m);var o=Object(s.useRef)(null);return Object(qe.jsxs)("div",{className:"page page--gray page--login",children:[Object(qe.jsx)(Ee,{}),Object(qe.jsx)("main",{className:"page__main page__main--login",children:Object(qe.jsxs)("div",{className:"page__login-container container",children:[Object(qe.jsxs)("section",{className:"login",children:[Object(qe.jsx)("h1",{className:"login__title",children:"Sign in"}),Object(qe.jsxs)("form",{onSubmit:function(a){a.preventDefault(),e(Ce({login:o.current.value,password:c})),t.push(m)},className:"login__form form",action:"#",method:"post",children:[Object(qe.jsxs)("div",{className:"login__input-wrapper form__input-wrapper",children:[Object(qe.jsx)("label",{className:"visually-hidden",children:"E-mail"}),Object(qe.jsx)("input",{ref:o,className:"login__input form__input",type:"email",name:"email",placeholder:"Email",required:"true"})]}),Object(qe.jsxs)("div",{className:"login__input-wrapper form__input-wrapper",children:[Object(qe.jsx)("label",{className:"visually-hidden",children:"Password"}),Object(qe.jsx)("input",{onChange:function(e){n(e.target.value.trim())},className:"login__input form__input",type:"password",name:"password",placeholder:"Password",required:"true",value:c})]}),Object(qe.jsx)("button",{className:"login__submit form__submit button",type:"submit",children:"Sign in"})]})]}),Object(qe.jsx)("section",{className:"locations locations--login locations--current",children:Object(qe.jsx)("div",{className:"locations__item",children:Object(qe.jsx)(d.b,{className:"locations__item-link",href:"#",to:m,children:Object(qe.jsx)("span",{children:"Amsterdam"})})})})]})})]})};var wa=function(e){var a=e.render,t=e.path,r=e.exact,s=Object(l.c)(ge);return Object(qe.jsx)(u.b,{path:t,exact:r,render:function(e){return s===T.AUTH?a(e):Object(qe.jsx)(u.a,{to:_})}})};var Ra,ka=function(){var e=Object(l.c)(Ke),a=Object(l.c)(ge);return e&&a!==T.UNKNOWN?Object(qe.jsx)(d.a,{children:Object(qe.jsxs)(u.d,{children:[Object(qe.jsx)(u.b,{exact:!0,path:m,children:Object(qe.jsx)(oa,{})}),Object(qe.jsx)(u.b,{exact:!0,path:f,children:Object(qe.jsx)(fa,{})}),Object(qe.jsx)(wa,{exact:!0,path:h,render:function(){return Object(qe.jsx)(Na,{})}}),Object(qe.jsx)(u.b,{exact:!0,path:_,children:Object(qe.jsx)(ya,{})}),Object(qe.jsx)(u.b,{children:Object(qe.jsx)(ha,{})})]})}):Object(qe.jsx)(_a,{})},Ca=t(35),qa=t.n(Ca),Pa=401,Ta=null!==(Ra=localStorage.getItem("token"))&&void 0!==Ra?Ra:"",Sa=function(e){var a=qa.a.create({baseURL:"https://7.react.pages.academy/six-cities",timeout:5e3,headers:{"x-token":Ta}});return a.interceptors.response.use((function(e){return e}),(function(a){throw a.response.status===Pa&&e(),a})),a.interceptors.request.use((function(e){var a;return e.headers={"x-token":null!==(a=localStorage.getItem("token"))&&void 0!==a?a:""},e})),a}((function(){return Ua.dispatch(de(T.NO_AUTH))})),Ua=Object(o.a)({reducer:xe,middleware:function(e){return e({thunk:{extraArgument:Sa}})}});Ua.dispatch((function(e,a,t){return t.get(q).then((function(){return e(de(T.AUTH))})).catch((function(){}))})),Ua.dispatch((function(e,a,t){return t.get(w).then((function(a){var t=a.data;e(ae(t.map(we)))}))})),Ua.dispatch(ke()),n.a.render(Object(qe.jsx)(i.a.StrictMode,{children:Object(qe.jsxs)(l.a,{store:Ua,children:[Object(qe.jsx)(ka,{}),","]})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.6f6856a3.chunk.js.map