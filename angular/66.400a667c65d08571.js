"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[66],{66:(S,u,s)=>{s.r(u),s.d(u,{AboutRoutes:()=>P});var h=s(177),e=s(3953),g=s(6369),r=s(1626),p=s(5558),v=s(6354),f=s(7673),A=s(8141),m=s(5312);let y=(()=>{class o{constructor(){this.http=(0,e.WQX)(r.Qq),this.watch=(0,e.vPA)(null),this.trackTv=m.c.traktTv,this.themoviedb=m.c.themoviedb,this.nowWatchingEndpoint=`${this.trackTv.apiURL}users/${this.trackTv.username}/watching`,this.recentlyWatchedEndpoint=`${this.trackTv.apiURL}sync/history`,(0,e.QZP)(()=>{this.getResult()})}movieData(t){const a=Array.isArray(t),i=a?t[0]:t;if("type"in i){const n="movie"===i.type,c=n?i.movie:i.show;return{type:i.type,headTitle:c.title,title:n?"Movie":`Season ${i.episode.season} - Episode ${i.episode.number}`,year:c.year,tmdb:c.ids.tmdb,isWatching:!a,watchedAt:a?t[0].watched_at:null,url:n?`${this.trackTv.url}movies/${i.movie.ids.slug}`:`${this.trackTv.url}shows/${i.show.ids.slug}/seasons/${i.episode.season}/episodes/${i.episode.number}`}}throw new Error("Invalid data format")}startEndDateByThisYear(){return{startDate:new Date(`${(new Date).getFullYear()}-01-01`).toISOString(),endDate:(new Date).toISOString()}}getWatching(){let t=new r.Lr;return t=t.append("Content-Type","application/json"),t=t.append("trakt-api-version",this.trackTv.version.toString()),t=t.append("trakt-api-key",this.trackTv.clientId),this.http.get(this.nowWatchingEndpoint,{headers:t}).pipe((0,p.n)(a=>{if(!a){t=t.append("Authorization",`Bearer ${this.trackTv.token}`);const{startDate:i,endDate:l}=this.startEndDateByThisYear();let n=(new r.Nl).set("start_at",i).set("end_at",l);return this.http.get(this.recentlyWatchedEndpoint,{params:n,headers:t}).pipe((0,v.T)(c=>this.movieData(c)))}return(0,f.of)(this.movieData(a))}))}getResult(){this.getWatching().pipe((0,p.n)(t=>{const a=new r.Lr({accept:"application/json",Authorization:`Bearer ${this.themoviedb.token}`});let i=(new r.Nl).set("include_image_language",this.themoviedb.language).set("end_at",this.themoviedb.language);return this.http.get(`${this.themoviedb.apiURL}${"movie"==t.type?"movie":"tv"}/${t.tmdb}/images`,{params:i,headers:a}).pipe((0,A.M)(c=>this.watch.set({...t,image:`https://image.tmdb.org/t/p/original/${c.posters[0].file_path}`})))})).subscribe()}static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275prov=e.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var F=s(9142);function E(o,d){if(1&o&&(e.j41(0,"p")(1,"b",3),e.EFF(2),e.k0s(),e.nrm(3,"br"),e.EFF(4),e.k0s()),2&o){const t=d.$implicit;e.R7$(2),e.JRh(t.title),e.R7$(2),e.SpI("",t.desc," ")}}function b(o,d){if(1&o&&(e.j41(0,"p")(1,"b",3),e.EFF(2),e.k0s(),e.nrm(3,"br"),e.j41(4,"a",7),e.EFF(5),e.k0s()()),2&o){const t=d.$implicit;e.R7$(2),e.SpI("",t.title,":"),e.R7$(2),e.Y8G("href",t.link,e.B4B),e.R7$(),e.JRh(t.desc)}}const P=[{path:"",component:(()=>{class o{constructor(){this.metaService=(0,e.WQX)(g.R),this.traktTvService=(0,e.WQX)(y),this.aboutDetails=[{title:"La sociedad",desc:"La Sociedad Argentina de Psicolog\xeda Jur\xeddica y Forense est\xe1 constituida por un conjunto de profesionales dedicados a la difusi\xf3n y promoci\xf3n del quehacer psico-jur\xeddico en la Argentina y el mundo.\n\n      Nuestro prop\xf3sito es articular en forma interdisciplinaria esta especialidad que desenvuelve un amplio y espec\xedfico \xe1mbito entre las relaciones del mundo del Derecho y la Psicolog\xeda tanto en su vertiente te\xf3rica, explicativa y de investigaci\xf3n, como en la aplicaci\xf3n, evaluaci\xf3n y tratamiento.\n      \n      Comprende el estudio, explicaci\xf3n, promoci\xf3n, evaluaci\xf3n, prevenci\xf3n y en su caso, asesoramiento y/o tratamiento de aquellos fen\xf3menos psicol\xf3gicos y de conducta  que definen el comportamiento jur\xeddico del individuo, mediante la utilizaci\xf3n de m\xe9todos propios de la Psicolog\xeda Cient\xedfica y cubriendo por lo tanto distintos \xe1mbitos y niveles de estudio e intervenci\xf3n, como ser: Psicolog\xeda Procesal Forense, Psicolog\xeda Aplicada a los Tribunales, Psicolog\xeda Penitenciaria, Psicolog\xeda Criminal,  Psicolog\xeda del Testimonio, Victimolog\xeda,  Mediaci\xf3n, \xc9tica y Mala Praxis, Psicolog\xeda de las Instituciones, la intersecci\xf3n con el Derecho Civil, Penal, Laboral y de Familia, como todo lo relacionado con el actuar pericial del Psic\xf3logo en el \xe1mbito Tribunalicio o como Consultor de Parte."},{title:"\xbfQue hacemos?",desc:"Brindamos asesoramiento, orientaci\xf3n y pr\xe1cticas a quienes han decidido ejercer esta apasionante disciplina, como as\xed tambi\xe9n todo lo relacionado con la divulgaci\xf3n cient\xedfica de las distintas actividades."},{title:"Asociaciones",desc:"La S.A.Psi.J. integra en calidad de afiliada la ASOCIACION LATINOAMERICANA DE PSICOLOGIA JURIDICA Y FORENSE (ALPJF), la EUROPEAN ASSOCIATION OF PSYCHOLOGY AND LAW (EAPL), la SOCIEDAD INTERAMERICANA DE PSICOLOGIA (S.I.P.), la ASOCIACION LATINOAMERICANA PARA LA FORMACION Y LA ENSE\xd1ANZA DE LA PSICOLOGIA (ALFEPSI) y ha sido reconocida por Asociaciones y Organizaciones de nivel nacional e internacional de Psicolog\xeda Jur\xeddica y/o Forense."},{title:"Nicho",desc:"Por otra parte, en la actualidad profesional argentino, somos la \xfanica instituci\xf3n que abordamos la pr\xe1ctica psicol\xf3gica desde el campo jur\xeddico, interpretando las vicisitudes que se ponen en juego en la actuaci\xf3n del Psic\xf3logo al momento de expedirse sobre casu\xedstica con gran contenido forense."}],this.contactInfo=[{title:"Direcci\xf3n",desc:"Heado, Buenos Aires, Argentina",link:"https://maps.app.goo.gl/dT2aE2RxeQTEA7ne7"},{title:"Telefono",desc:" (+54) 11-4971-4701",link:"https://api.whatsapp.com/send/?phone=5491149714701&text&type=phone_number&app_absent=0"},{title:"Email",desc:"sjuridicayforense@gmail.com",link:"mailto:sjuridicayforense@gmail.com"}],this.metaService.setMetaTags(`About - ${F.A.name}`,"Dive into a curated space to learn more about the person behind the name",["bio","biography","information","about","contact","detail"])}static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["about"]],standalone:!0,features:[e.aNF],decls:17,vars:1,consts:[[1,"flex","flex-col","max-w-screen-lg","justify-between","mx-auto","gap-16","dark:text-gray-200","overflow-y-hidden"],[1,"flex","flex-col","gap-5"],[1,"text-2xl","font-semibold","dark:text-white"],[1,"dark:text-white","text-black"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-8"],[1,"justify-start"],[4,"ngFor","ngForOf"],["target","_blank",1,"hover:underline",3,"href"]],template:function(a,i){1&a&&(e.j41(0,"section",0)(1,"div",1)(2,"h1",2),e.EFF(3,"Psicodiagnosticos clinico y forense"),e.k0s(),e.j41(4,"b",3),e.EFF(5,"Informes judiciales psicologicos"),e.k0s(),e.j41(6,"div",4)(7,"p",5),e.EFF(8,"Somos un grupo de profesionales Psic\xf3logos, Psicopedagogas y Abogados que orientamos nuestros servicios profesionales en el asesoramiento, orientaci\xf3n y consultor\xeda t\xe9cnica en los informes judiciales psicol\xf3gicos. Desde la redacci\xf3n de pericias psicol\xf3gicas hasta la confecci\xf3n de Psicodiagn\xf3sticos Cl\xednicos y Forenses para Estudios Jur\xeddicos, Periciales, instituciones m\xe9dicas y por solicitudes particulares de partes en el proceso judicial. Cuando hablamos de una evaluaci\xf3n psicodiagn\xf3stica, nos referimos a aquella \xe1rea de especializaci\xf3n de la Psicolog\xeda que tiene como tarea fundamental, la definici\xf3n de un diagn\xf3stico del estado de salud mental del paciente, bas\xe1ndose en la aplicaci\xf3n informada y sistem\xe1tica de test y otros medios de exploraci\xf3n psicol\xf3gicos. "),e.k0s(),e.j41(9,"p"),e.EFF(10," A trav\xe9s de este procedimiento tratamos de explorar rasgos de personalidad, mecanismos de defensa, conductas del sujeto, historia vital, \xe1reas vitales (social, familiar, laboral, acad\xe9mica, etc), sus aptitudes psicodin\xe1micas, el conflicto neur\xf3tico en escena, s\xedntomas, diagn\xf3stico y pron\xf3stico, con aplicaci\xf3n de baremos, DSM IV, DSM V, CIE 10, etc. y posibles tratamientos. Trabajamos todos los fueros: Penal, Civil y Comercial, Laboral, Familia, Contencioso Administrativo. En todos los casos, a la entrevista diagn\xf3stica cl\xednica \u2013 forense le siguen la realizaci\xf3n de un conjunto de bater\xedas de test, para luego culminar con el informe evaluatorio y la devoluci\xf3n. "),e.k0s()(),e.DNE(11,E,5,2,"p",6),e.k0s(),e.j41(12,"div",1)(13,"h1",2),e.EFF(14,"Comuniquese con S.A.Psi.J:"),e.k0s(),e.Z7z(15,b,6,3,"p",null,e.Vm6),e.k0s()()),2&a&&(e.R7$(11),e.Y8G("ngForOf",i.aboutDetails),e.R7$(4),e.Dyx(i.contactInfo))},dependencies:[h.NgFor],encapsulation:2})}return o})()}]}}]);