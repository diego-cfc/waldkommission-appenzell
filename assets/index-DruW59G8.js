const u=e=>`./images/${e}`,T=e=>`./dokumente/${e}`,G=[{name:"Pirmin Frick",role:["Koordination","Organisation"],photo:u("mitglieder/pirmin-frick.jpg"),description:"Hält die Fäden zusammen: beruft Sitzungen ein, schlägt Termine vor und verfasst die offiziellen Sitzungsberichte der Kommission.",duties:["Sitzungen einberufen","Sitzungsberichte verfassen","Termine koordinieren"]},{name:"Diego Signer",role:"Sicherheit und Abwehr",title:"Vater von Töbi",photo:u("mitglieder/diego-signer.jpg"),description:"Verantwortlich für Sicherheit und Abwehr. Reichte am 6. März 2026 die Volksinitiative zur Suche nach der Taucherausrüstung ein – sie wurde einstimmig angenommen.",duties:["Schutz der Basis","Abwehr von Kreaturen","Volksinitiative Taucherausrüstung"]},{name:"Lorin Koch",role:["Bauleitung","Zoologische Hütung"],photo:u("mitglieder/lorin-koch.jpg"),description:"Leitet die Bauvorhaben der Kommission und ist laut Statuten zusätzlich für die oberste zoologische Hütung der Fauna zuständig.",duties:["Bauleitung","Infrastruktur","Wildbestand"]},{name:"Ennio Mock",role:["Allgemeine Arbeitskraft","Unterstützung"],title:"Senior Strategic Woodland Advisor",photo:u("mitglieder/ennio-mock.jpg"),description:"Packt überall mit an. Schlug am 3. September 2026 Minecraft als neues Gruppenprojekt vor – der Vorschlag fand Zustimmung.",duties:["Unterstützung aller Projekte","Initiant Projekt Minecraft","Server-Organisation"]}],x=[{date:"23. Januar 2026",title:"Gründung der Kommission",text:"Pirmin Frick, Diego Signer, Lorin Koch und Ennio Mock gründen die Gruppe. Noch am selben Tag findet das erste Treffen statt.",tag:"Meilenstein"},{date:"25. Januar 2026",title:"Erste Expedition in den Wald",text:"Der erste gemeinsame Einsatz in «The Forest» – koordiniert über Discord.",tag:"The Forest"},{date:"29. Januar 2026",title:"Eine neue Basis entsteht",text:"Die Kommission errichtet eine neue Basis. Beginn der Konstruktion mehrerer Infrastrukturen.",tag:"The Forest"},{date:"1.–2. Februar 2026",title:"Industrialisierung mit moderner Axt",text:"Ausbau der Ausrüstung: moderne Axt, Kettensäge und Kletterausrüstung – Rodung und Ausbau der Waldgebiete schreiten voran.",tag:"The Forest"},{date:"6. März 2026",title:"Erste dokumentierte Sitzung",text:"Ein offizieller Bericht legt die Ziele der kommenden Monate fest. Die Volksinitiative zur Taucherausrüstung wird einstimmig angenommen, die Gruppe trägt fortan den Namen «Waldkommission Appenzell».",tag:"Sitzung"},{date:"17. März 2026",title:"Ausblick: Höhle 5 und das «Loch im Loch»",text:"Zweiter Sitzungsbericht: Auffinden der Taucherausrüstung in Höhle 5, systematische Erkundung des «Loch im Loch» und die fortgesetzte Suche nach Tobias.",tag:"Sitzung"},{date:"28. März 2026",title:"Das Finale von «The Forest»",text:"Grosse Abschlusssitzung. Tobias wird gerettet – das Projekt «The Forest» gilt als abgeschlossen.",tag:"Meilenstein"},{date:"3. September 2026",title:"Neues Gruppenprojekt: Minecraft",text:"Das Projekt «Söhne des Waldes» wird zurückgestellt. Auf Vorschlag von Ennio Mock wendet sich die Kommission Minecraft zu.",tag:"Minecraft"},{date:"7. September 2026",title:"Der erste Server steht",text:"Ein eigener Minecraft-Server wird eingerichtet – die Kommission betritt ihre neue Welt.",tag:"Minecraft"},{date:"21. Oktober 2026",title:"Umzug auf einen neuen Server",text:"Die Kommission spielt auf einem neuen Server weiter. Grundstück, Starterbase und das primäre Bauprojekt nehmen Form an.",tag:"Minecraft"},{date:"22. Oktober 2026",title:"Statuten 2026 vorgelegt",text:"Die Statuten der Waldkommission werden den Mitgliedern vorgelegt. Sie treten in Kraft, sobald alle dem Entwurf zugestimmt haben.",tag:"Meilenstein"}],W=[{id:"alle",label:"Alle"},{id:"the-forest",label:"The Forest"},{id:"minecraft",label:"Minecraft"},{id:"organisation",label:"Organisation"}],H=[{cat:"the-forest",type:"Ressourcen",title:"Deforestation und Rodung der Waldgebiete",status:"done"},{cat:"the-forest",type:"Bau",title:"Konstruktion mehrerer Infrastrukturen zur Sicherung von Wohlstand, Sicherheit und Wohlbefinden",status:"done"},{cat:"the-forest",type:"Fauna",title:"Regulierung des Wildbestandes",status:"done"},{cat:"the-forest",type:"Erkundung",title:"Erforschung der Höhle 5 und Organisation des Tauchergerätes",status:"done"},{cat:"the-forest",type:"Erkundung",title:"Erkundung und Erforschung des Loches und des «Loch im Loch»",status:"done"},{cat:"the-forest",type:"Abwehr",title:"Eliminierung des Mutantenweibs",status:"done"},{cat:"the-forest",type:"Mission",title:"Rettung von Tobias",status:"done"},{cat:"minecraft",type:"Sicherheit",title:"Sicherung des Grundstücks",status:"done"},{cat:"minecraft",type:"Bau",title:"Konstruktion der Starterbase",status:"done"},{cat:"minecraft",type:"Fauna",title:"Schlachtung mehrerer Tiere",status:"done"},{cat:"minecraft",type:"Ressourcen",title:"Beschaffung von Diamanten",status:"done"},{cat:"minecraft",type:"Bau",title:"Primäres Bauprojekt",status:"active"},{cat:"minecraft",type:"Farmen",title:"Fertigstellung aller Farmen (z. B. Creeperfarm) – Vorsorge für die Elytra",status:"open"},{cat:"minecraft",type:"Kampf",title:"Den Enderdrachen gemeinsam zu viert bezwingen",status:"open"},{cat:"minecraft",type:"Erkundung",title:"Elytras aufsuchen",status:"open"},{cat:"minecraft",type:"Bau",title:"Baubeginn der Mainbase",status:"open"},{cat:"organisation",type:"Sitzungen",title:"Treffen nach Bedarf – Termine und Aufgaben werden klar abgesprochen",status:"active"},{cat:"organisation",type:"Beschlüsse",title:"Wichtige Entscheidungen gemeinsam – bei Uneinigkeit Abstimmung mit einfacher Mehrheit",status:"active"},{cat:"organisation",type:"Berichte",title:"Offizielle Sitzungsberichte vom 6. und 17. März 2026",status:"done"},{cat:"organisation",type:"Statuten",title:"Zustimmung aller Mitglieder zu den Statuten 2026",status:"open"}],B=[{id:"alle",label:"Alle"},{id:"active",label:"Laufend",match:["active"]},{id:"open",label:"Ausstehend",match:["open"]},{id:"done",label:"Erledigt",match:["done"]},{id:"offen",label:"Noch nicht erledigt",match:["active","open"]}],I={done:"Erledigt",active:"Laufend",open:"Ausstehend"},R=[{level:"laufend",label:"Laufend",items:[{title:"Primäres Bauprojekt in Minecraft",text:"Nach Grundstück und Starterbase hat die Kommission mit ihrem primären Bauprojekt begonnen.",image:u("bauprojekt-minecraft.jpg")},{title:"Inkrafttreten der Statuten 2026",text:"Die Statuten treten in Kraft, sobald alle Mitglieder dem Entwurf zugestimmt haben (Art. 9)."}]},{level:"geplant",label:"Geplant",items:[{title:"Sons of the Forest – Projekt «Söhne des Waldes»",text:"Das nächste grosse Projekt der Kommission. Damit alle mitspielen können, braucht es zuerst Hardware-Upgrades – die aktuelle Ausrüstung reicht für Sons of the Forest nicht aus.",support:!0}]},{level:"idee",label:"Unverbindliche Ideen",items:[{title:"Clan-Server «Waldclan»",text:"Am 20. Oktober 2026 vorgeschlagen: als Clan auf einem bestehenden Minecraft-Server auftreten."},{title:"RV There Yet?",tag:"Koop-Abenteuer",text:"Gemeinsam mit dem Wohnmobil den Weg nach Hause finden – ein Online-Koop-Spiel für die ganze Kommission."},{title:"Goat Simulator 3",tag:"Sandbox · bis 4 Spieler",text:"Physik-Chaos als Ziegenherde: lokal oder online im Koop mit bis zu drei Freunden."},{title:"Keep Gambling",tag:"Mehrspieler",text:"Mehrspieler-Spiel, in dem man mit oder gegen die Freunde Schulden abbezahlen muss."},{title:"Sons Of The Dream Forest",tag:"Survival · Early Access",text:"Survival-Simulation mit Lagerbau, Jagen, Fischen und Ackerbau – auch zusammen mit anderen Spielern."},{title:"Subnautica im Multiplayer",text:"Im März und Mai 2026 als mögliches Projekt angesprochen."},{title:"Raft",text:"Im Mai 2026 als mögliches Gruppenspiel genannt."}]}],V=[{name:"The Forest",status:"abgeschlossen",statusLabel:"Abgeschlossen",image:u("the-forest/basis-baumhaus.jpg"),imageAlt:"Die Basis der Kommission in The Forest mit Baumhaus, Palisaden und Steinmauer",cover:u("covers/the-forest.jpg"),art:"forest",period:"Januar – März 2026",description:"Das erste grosse Projekt der Kommission: Überleben im dichten Wald, Basisbau, Höhlenerkundung – und die Rettung von Tobias.",highlights:["Rodung und Infrastrukturbau","Erforschung von Höhle 5","Das «Loch im Loch»","Rettung von Tobias"]},{name:"Minecraft",status:"aktiv",statusLabel:"Aktiv",image:u("bauprojekt-minecraft.jpg"),imageAlt:"Bauprojekt in Minecraft",cover:u("covers/minecraft.jpg"),art:"cubes",period:"seit September 2026",description:"Das aktuelle Gruppenprojekt. Auf einem gemeinsamen Server baut die Kommission ihre neue Welt auf.",highlights:["Grundstück gesichert","Starterbase gebaut","Diamanten beschafft","Primäres Bauprojekt begonnen"]},{name:"Sons of the Forest",status:"geplant",statusLabel:"Geplant",cover:u("covers/sons-of-the-forest.jpg"),art:"sons",period:"Projekt «Söhne des Waldes»",description:"Die Fortsetzung des Waldabenteuers ist das nächste geplante Projekt. Im September 2026 wurde es vorerst zugunsten von Minecraft zurückgestellt – die Hardware reicht noch nicht aus.",highlights:["Hardware-Upgrades nötig","Spenden sind willkommen"],supportLink:!0}],C={title:"Spenden sind willkommen",text:"Für «Sons of the Forest» ist unsere Hardware zu schwach. Damit das Projekt «Söhne des Waldes» starten kann, müssen wir Upgrades kaufen. Jede Unterstützung hilft der Kommission, zurück in den Wald zu kommen.",cta:"Spende anbieten",subject:"Spende für Hardware-Upgrades (Sons of the Forest)"},Z=["RV There Yet?","Goat Simulator 3","Keep Gambling","Sons Of The Dream Forest","Subnautica (Multiplayer)","Raft","Schedule I"],L=[{id:"the-forest",title:"The Forest",text:"Basisbau, Höhlenexpeditionen und die Suche nach Tobias – das erste grosse Projekt.",period:"Januar – März 2026",cover:u("the-forest/basis-baumhaus.jpg")},{id:"minecraft",title:"Minecraft",text:"Das aktuelle Gruppenprojekt: gemeinsamer Server, Starterbase und das primäre Bauprojekt.",period:"seit September 2026",cover:u("minecraft-gruppe.jpg")},{id:"mitglieder",title:"Mitglieder",text:"Das Teamfoto und die Porträts der vier Gründungsmitglieder.",cover:u("mitglieder/team.jpg"),focus:"50% 12%"},{id:"kommission",title:"Kommission",text:"Das Wappen und Eindrücke rund um die Sessions.",cover:u("logo-waldkommission.png"),contain:!0}],b=(e,t,i,a)=>({src:u(`the-forest/${e}`),alt:`Spielszene aus The Forest: ${i}`,caption:t,album:"the-forest",size:a}),j=[{src:u("logo-waldkommission.png"),alt:"Wappen der Waldkommission Appenzell mit Tanne, Bergen, Pickel, Axt und Feuerzeug",caption:"Das Wappen der Waldkommission",album:"kommission",size:"big",contain:!0},{src:u("minecraft-gruppe.jpg"),alt:"Spielszene aus Minecraft: vier Spielfiguren der Kommission stehen zusammen auf einer Insel über den Wolken",caption:"Die Kommission vereint in Minecraft",album:"minecraft",size:"big"},{src:u("bauprojekt-minecraft.jpg"),alt:"Monumentales Bauwerk aus Stein, in einen Berg gebaut, in Minecraft",caption:"Bauprojekt in Minecraft",album:"minecraft",size:"big"},b("basis-baumhaus.jpg","Die Basis mit Baumhaus, Palisaden und Steinmauer","Basis mit Baumhaus, Palisaden und Steinmauer, zwei Spielfiguren mit Axt und Kettensäge","big"),b("baumhaus-nacht.jpg","Das Baumhaus am Abend","Baumhaus in einer Tanne im Abendlicht, darunter zwei Spielfiguren","tall"),b("blockhuette-feuer.jpg","Rast in der Blockhütte am Feuer","zwei Spielfiguren sitzen in einer Blockhütte neben dem Lagerfeuer","wide"),b("basisbau-rodung.jpg","Rodung und Basisbau","gerodete Wiese mit Baumstümpfen, Hütte und Baugerüst, im Vordergrund eine Axt"),b("hochebene.jpg","Unterwegs auf der Hochebene","zwei Spielfiguren in hohem Gras zwischen Holzgestellen, im Hintergrund nebliger Wald","wide"),b("huette-katana.jpg","Vor der Holzhütte – mit Katana","Holzhütte auf einer Wiese, im Vordergrund ein Katana","wide"),b("das-loch.jpg","«Das Loch»","riesiges Erdloch inmitten des Waldes"),b("hoehlenkarte.jpg","Die Höhlenkarte","Karte des Höhlensystems in der Hand der Spielfigur"),b("hoehlenkarte-routen.jpg","Routenplanung für die Höhlenerkundung","Höhlenkarte mit grün eingezeichneten Routen","wide"),b("hoehle-zeltlager.jpg","Zeltlager in der Höhle","drei orange Zelte in einer dunklen Höhle, im Vordergrund ein Feuerzeug","wide"),b("moderne-axt.jpg","Die moderne Axt","moderne Axt in den Händen der Spielfigur"),b("14-tage-ueberlebt.jpg","14 Tage überlebt","Überlebensbuch mit Statistik: 14 Tage überlebt","tall"),b("tobias.jpg","Tobias","der gesuchte Junge Tobias"),b("tobias-finale.jpg","Das Finale: Tobias gefunden","Tobias liegt bewusstlos am Boden","wide"),{src:u("the-forest/session-verpflegung.jpg"),alt:"Wasserflasche, Energydrink und Nüsse auf dem Schreibtisch vor dem Bildschirm",caption:"Verpflegung für die Session",album:"kommission",size:"tall"},{src:u("mitglieder/team.jpg"),alt:"Die vier Gründungsmitglieder nebeneinander vor einer Wand",caption:"Die Kommission – von links: Diego Signer, Pirmin Frick, Ennio Mock, Lorin Koch",album:"mitglieder",size:"big"},{src:u("mitglieder/pirmin-frick.jpg"),alt:"Porträt von Pirmin Frick",caption:"Pirmin Frick – Koordination, Organisation",album:"mitglieder"},{src:u("mitglieder/diego-signer.jpg"),alt:"Porträt von Diego Signer",caption:"Diego Signer – Sicherheit und Abwehr",album:"mitglieder"},{src:u("mitglieder/lorin-koch.jpg"),alt:"Porträt von Lorin Koch",caption:"Lorin Koch – Bauleitung, Zoologische Hütung",album:"mitglieder"},{src:u("mitglieder/ennio-mock.jpg"),alt:"Porträt von Ennio Mock",caption:"Ennio Mock – Allgemeine Arbeitskraft, Unterstützung",album:"mitglieder"}],O=[{group:"Grundlagen",items:[{title:"Statuten 2026",text:"Name und Zweck, Grundsätze, Mitgliedschaft, Zuständigkeiten, Sitzungen und Beschlüsse.",date:"Oktober 2026",href:T("Statuten_Waldkommission_Appenzell_2026.docx"),format:"DOCX",size:"1.3 MB"},{title:"Waldkommission Appenzell – Übersicht",text:"Gründungsdatum, Mitglieder mit Funktionen, Ziel und bisherige Projekte.",date:"Oktober 2026",href:T("Waldkommission_Appenzell_Uebersicht.docx"),format:"DOCX",size:"17 KB"}]}],U=[{date:"6. März 2026",title:"Ziele und geplante Aktivitäten der kommenden Monate",author:"Pirmin Frick",points:["Regulierung des Wildbestandes","Herstellung eines warmen Tracksuits","Fortlaufende Suche nach Tobias"],body:["Im Rahmen der heutigen Sitzung informiert die Waldkommission über die geplanten Schwerpunkte und Ziele für die nächsten Monate.","1. Regulierung des Wildbestandes – Ein zentrales Ziel der kommenden Monate ist die verstärkte Regulierung bestimmter Wildtierbestände. Insbesondere sollen mehrere Waschbären sowie Rehe gejagt werden. Die Weiterverarbeitung der Felle ist ebenfalls Teil der vorgesehenen Tätigkeiten.","2. Herstellung eines warmen Tracksuits – Dieses Vorhaben umfasst das Nähen geeigneter Kleidungsstücke aus verfügbaren Materialien, um bei längeren Aufenthalten im Wald ausreichend geschützt zu sein. Die praktische Umsetzung soll gemeinschaftlich erfolgen.","3. Fortlaufende Suche nach Tobias – Die Suche wird auch in den kommenden Monaten fortgesetzt. Weitere Hinweise oder Beobachtungen sollen gesammelt und gemeinsam ausgewertet werden.","Ergänzung: Per Volksinitiative von Diego Signer wird die Suche nach der Taucherausrüstung zum festen Ziel erklärt – einstimmig angenommen."]},{date:"17. März 2026",title:"Ausblick auf die kommenden Monate",author:"Pirmin Frick",points:["Taucherausrüstung in Höhle 5","Erkundung des «Loch im Loch»","Suche nach Tobias"],body:["Ein wesentliches Ziel ist das Auffinden der verschollenen Taucherausrüstung in Höhle 5. Dazu ist es erforderlich, das aktuelle Einsatzgebiet («das Loch») vorübergehend zu verlassen und die Suche in den angrenzenden Bereichen fortzuführen.","Darüber hinaus wurde beschlossen, das sogenannte «Loch im Loch» systematisch zu erkunden. Entsprechende Sicherheits- und Ausrüstungsfragen werden im Vorfeld geklärt.","Ein kontinuierliches Anliegen der Kommission bleibt weiterhin das Finden von Tobias. Die Suche wird parallel zu den anderen Aktivitäten fortgesetzt.","Die Kommission ist zuversichtlich, durch koordinierte Planung und Zusammenarbeit Fortschritte in allen genannten Bereichen zu erzielen."]}],N={channel:"cold_diegito",url:"https://www.twitch.tv/cold_diegito",host:"Diego Signer",text:"Auf Twitch überträgt die Kommission ihre Sessions live – vom Basisbau bis zur nächsten Expedition.",status:[{label:"Aktuelles Projekt",value:"Minecraft",note:"Primäres Bauprojekt läuft",state:"active"},{label:"Nächstes Projekt",value:"Sons of the Forest",note:"Hardware-Upgrades nötig",state:"planned"},{label:"Sessions",value:"Nach Absprache",note:"Meist am Abend"}]},A={email:"waldkommission.appenzell@gmail.com",links:[{label:"Instagram · Pirmin Frick",text:"@pirmin_frick",href:"https://www.instagram.com/pirmin_frick/"},{label:"Instagram · Diego Signer",text:"@not_dih_go",href:"https://www.instagram.com/not_dih_go/"},{label:"Twitch · Live-Sessions",text:"cold_diegito",href:"https://www.twitch.tv/cold_diegito"}],person:"Pirmin Frick",personRole:"Koordination und Organisation"};function F(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function y(e,t,i,a,s){const m=5+Math.floor(s()*4),o=t-i,h=t-i*.08,r=[],d=[];for(let w=1;w<=m;w++){const S=w/m,_=o+(h-o)*S,l=a/2*(.25+.75*S)*(.9+s()*.2),c=l*(.42+s()*.12),M=i/m*.28;r.push(`L${(e+l).toFixed(1)} ${_.toFixed(1)}`),w<m&&r.push(`L${(e+c).toFixed(1)} ${(_-M).toFixed(1)}`),d.unshift(`L${(e-l).toFixed(1)} ${(_+(s()-.5)*4).toFixed(1)}`),w<m&&d.unshift(`L${(e-c).toFixed(1)} ${(_-M).toFixed(1)}`)}const f=Math.max(2,a*.05);return`M${e.toFixed(1)} ${o.toFixed(1)} ${r.join(" ")} L${(e+f).toFixed(1)} ${h.toFixed(1)} L${(e+f).toFixed(1)} ${t} L${(e-f).toFixed(1)} ${t} L${(e-f).toFixed(1)} ${h.toFixed(1)} ${d.join(" ")} Z`}const J={far:{seed:11,count:70,hMin:90,hMax:170,base:430,fill:"var(--tree-far)",ground:400},mid:{seed:23,count:34,hMin:170,hMax:290,base:470,fill:"var(--tree-mid)",ground:445},near:{seed:41,count:13,hMin:300,hMax:470,base:505,fill:"var(--tree-near)",ground:480}};function Y(e){const t=J[e],i=F(t.seed),a=[];for(let o=0;o<t.count;o++){const h=1700/t.count,r=-50+o*h+i()*h;if(e==="near"&&r<980&&i()>.1)continue;const d=t.hMin+i()*(t.hMax-t.hMin);a.push(y(r,t.base+i()*10,d,d*(.36+i()*.1),i))}const s=t.ground,m=`M-20 ${s} C 300 ${s-18}, 600 ${s+14}, 900 ${s-6} S 1400 ${s+10}, 1620 ${s-8} L1620 520 L-20 520 Z`;return`<path fill="${t.fill}" d="${a.join(" ")} ${m}"/>`}function X(e=7){const t=F(e),i=[];for(let a=-20;a<1620;a+=18+t()*30){const s=40+t()*80;i.push(y(a,122,s,s*.42,t))}return`<svg viewBox="0 0 1600 120" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="${i.join(" ")} M-20 104 C 400 92, 800 116, 1620 98 L1620 121 L-20 121 Z"/></svg>`}function q(e){const t=F(e.length*97);if(e==="forest"||e==="sons"){const i=Array.from({length:9},(m,o)=>y(20+o*50+t()*20,240,110+t()*90,60+t()*20,t)).join(" "),a=Array.from({length:14},(m,o)=>y(o*34+t()*10,215,60+t()*50,34,t)).join(" ");return`<svg viewBox="0 0 440 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration: ${e==="sons"?"nächtlicher Wald":"dichter Wald im Abendlicht"}">
      <defs>
        <linearGradient id="sky-${e}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${e==="sons"?"#121c2a":"#3b5440"}"/>
          <stop offset="1" stop-color="${e==="sons"?"#22362c":"#a7a77a"}"/>
        </linearGradient>
        <linearGradient id="fog-${e}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#cfd8c4" stop-opacity="0"/>
          <stop offset="1" stop-color="#cfd8c4" stop-opacity=".35"/>
        </linearGradient>
      </defs>
      <rect width="440" height="240" fill="url(#sky-${e})"/>
      ${e==="sons"?'<circle cx="350" cy="62" r="26" fill="#e9dfc4" opacity=".85"/><circle cx="362" cy="56" r="24" fill="url(#sky-sons)"/>':'<circle cx="320" cy="70" r="40" fill="#f2d9a0" opacity=".25"/><circle cx="320" cy="70" r="22" fill="#f6e3b4" opacity=".75"/>'}
      <path d="${a}" fill="${e==="sons"?"#1b2a24":"#3d5a42"}" opacity=".9"/>
      <rect y="150" width="440" height="90" fill="url(#fog-${e})"/>
      <path d="${i}" fill="${e==="sons"?"#0a120e":"#12241a"}"/>
    </svg>`}return""}const $=(e,t="")=>`<svg viewBox="0 0 24 24" ${t}><path d="${e}"/></svg>`,k={crest:$("M12 2 4 5v6c0 5 3.4 9.6 8 11 4.6-1.4 8-6 8-11V5zm0 4 3.5 5H14l2.5 3.5H13V18h-2v-3.5H7.5L10 11H8.5z"),scroll:$("M6 3h11a3 3 0 0 1 3 3v1h-3v12a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3v-1h3V6a3 3 0 0 1 0 0zm3 5v1.5h6V8zm0 4v1.5h6V12z"),compass:$("M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m4.5 5.5-2.8 6.2-6.2 2.8 2.8-6.2zM12 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4"),people:$("M9 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m7.5 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6M2 19c0-3 4.2-5 7-5s7 2 7 5v1H2zm15.5-4.8c2.4.3 4.5 1.6 4.5 3.8v2h-4v-1c0-1.9-.2-3.4-.5-4.8"),axe:$("M14.5 2.5c3.5 0 6.5 2.8 7 6.5l-6.4-1-1.6 1.6L21 17l-2 2-7.5-7.5L3.4 19.6 2 18.2l8.1-8.1-.6-.6 2-2C10.6 5.6 12 2.5 14.5 2.5"),controller:$("M7 7h10a5 5 0 0 1 4.9 6l-.8 4a2.5 2.5 0 0 1-4.3 1.2L14.5 16h-5l-2.3 2.2A2.5 2.5 0 0 1 2.9 17l-.8-4A5 5 0 0 1 7 7m0 3v1.5H5.5V13H7v1.5h1.5V13H10v-1.5H8.5V10zm8.5.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"),doc:$("M6 2h8l6 6v14H6zm7.5 1.5V8.5h5z"),broadcast:$("M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M7.8 7.8l1.4 1.4a4 4 0 0 0 0 5.6l-1.4 1.4a6 6 0 0 1 0-8.4m8.4 0a6 6 0 0 1 0 8.4l-1.4-1.4a4 4 0 0 0 0-5.6zM5 5l1.4 1.4a8 8 0 0 0 0 11.2L5 19A10 10 0 0 1 5 5m14 0a10 10 0 0 1 0 14l-1.4-1.4a8 8 0 0 0 0-11.2z"),heart:$("M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3 4.5 6.6 4.5c2.1 0 3.5 1.1 4.4 2.4.9-1.3 2.3-2.4 4.4-2.4 3.6 0 5.7 3.7 4.2 7.2C19.5 16.4 12 21 12 21"),download:$("M11 3h2v9.2l3.3-3.3 1.4 1.4L12 16l-5.7-5.7 1.4-1.4 3.3 3.3zM4 19h16v2H4z")},g=(e,t=document)=>t.querySelector(e),z=(e,t=document)=>[...t.querySelectorAll(e)],p=e=>g(`[data-render="${e}"]`),n=(e="")=>String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),E=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Q=({href:e,title:t,text:i,icon:a})=>`
  <a class="ov-card reveal" href="${e}">
    <span class="ov-card__icon" aria-hidden="true">${a}</span>
    <h3>${n(t)}</h3>
    <p>${n(i)}</p>
    <span class="ov-card__more">Mehr erfahren <span aria-hidden="true">→</span></span>
  </a>`,ee=e=>`
  <li class="news-item reveal">
    <time>${n(e.date)}</time>
    <div>
      <span class="chip chip--${K(e.tag)}">${n(e.tag)}</span>
      <h3>${n(e.title)}</h3>
      <p>${n(e.text)}</p>
    </div>
  </li>`,te=(e,t)=>`
  <li class="timeline__item reveal ${t%2?"timeline__item--right":""}">
    <div class="timeline__dot" aria-hidden="true"></div>
    <article class="timeline__card">
      <time>${n(e.date)}</time>
      <span class="chip chip--${K(e.tag)}">${n(e.tag)}</span>
      <h3>${n(e.title)}</h3>
      <p>${n(e.text)}</p>
    </article>
  </li>`,ne=e=>`
  <details class="report reveal">
    <summary>
      <span class="report__meta">Sitzungsbericht · ${n(e.date)}</span>
      <strong>${n(e.title)}</strong>
      <ul class="report__points">${e.points.map(t=>`<li>${n(t)}</li>`).join("")}</ul>
      <span class="report__toggle">Bericht lesen</span>
    </summary>
    <div class="report__body">
      ${e.body.map(t=>`<p>${n(t)}</p>`).join("")}
      <p class="report__author">Verfasst von ${n(e.author)}</p>
    </div>
  </details>`,ie=e=>`
  <article class="member reveal">
    <div class="member__photo">
      <img src="${e.photo}" alt="Porträt von ${n(e.name)}" width="640" height="640" loading="lazy" />
    </div>
    <div class="member__body">
      <p class="member__role">${[].concat(e.role).map(t=>`<span>${n(t)}</span>`).join("")}</p>
      <h3>${n(e.name)}</h3>
      ${e.title?`<p class="member__title"><span>Titel</span>${n(e.title)}</p>`:""}
      <p class="member__text">${n(e.description)}</p>
      <ul class="member__duties">${e.duties.map(t=>`<li>${n(t)}</li>`).join("")}</ul>
    </div>
  </article>`,ae=e=>{const t=W.find(i=>i.id===e.cat);return`
  <li class="activity" data-cat="${e.cat}" data-status="${e.status}">
    <span class="activity__status activity__status--${e.status}">${I[e.status]}</span>
    <div>
      <p class="activity__meta">${n(t.label)} · ${n(e.type)}</p>
      <h3>${n(e.title)}</h3>
    </div>
  </li>`},se=(e,t)=>e.map(i=>`<button type="button" class="filter" data-filter="${i.id}" aria-pressed="${i.id===t}">${n(i.label)}</button>`).join(""),re=e=>`
  <div class="roadmap__col roadmap__col--${e.level} reveal">
    <h3 class="roadmap__label"><span class="roadmap__pip" aria-hidden="true"></span>${n(e.label)}</h3>
    ${e.items.map(t=>`
      <article class="project-card">
        ${t.image?`<img src="${t.image}" alt="" loading="lazy" width="576" height="306" />`:""}
        ${t.tag?`<span class="project-card__tag">${n(t.tag)}</span>`:""}
        <h4>${n(t.title)}</h4>
        <p>${n(t.text)}</p>
        ${t.support?'<a class="project-card__link" href="#unterstuetzen">Spenden willkommen <span aria-hidden="true">→</span></a>':""}
      </article>`).join("")}
  </div>`;function oe(e,t,i){return`
  <article class="live__channel reveal">
    <div class="live__screen" aria-hidden="true">
      <span class="live__badge"><span class="status__dot"></span>Twitch</span>
      <span class="live__icon">${k.broadcast}</span>
      <span class="live__handle">${n(e.channel)}</span>
    </div>
    <div class="live__body">
      <p class="live__host">Kanal von ${n(e.host)}</p>
      <h3>${n(e.channel)}</h3>
      <p>${n(e.text)}</p>
      <a class="btn btn--primary" href="${n(e.url)}" target="_blank" rel="noopener">Auf Twitch ansehen</a>
    </div>
  </article>
  <div class="live__info reveal">
    <ul class="live__status">
      ${e.status.map(a=>`
        <li class="${a.state?`is-${a.state}`:""}">
          <span class="live__label">${n(a.label)}</span>
          <strong>${n(a.value)}</strong>
          <span class="live__note">${n(a.note)}</span>
        </li>`).join("")}
    </ul>
    <div class="live__latest">
      <span class="live__label">Letzte Meldung · ${n(t.date)}</span>
      <strong>${n(t.title)}</strong>
      <p>${n(t.text)}</p>
    </div>
    <p class="live__follow">Folgen: ${i.map(a=>`<a href="${n(a.href)}" target="_blank" rel="noopener">${n(a.text)}</a>`).join(" · ")}</p>
  </div>`}const le=(e,t)=>`
  <div class="support__icon" aria-hidden="true">${k.heart}</div>
  <div class="support__body">
    <p class="eyebrow">Unterstützen</p>
    <h3 id="support-title">${n(e.title)}</h3>
    <p>${n(e.text)}</p>
  </div>
  <div class="support__action">
    <a class="btn btn--primary" href="mailto:${n(t.email)}?subject=${encodeURIComponent(e.subject)}">${n(e.cta)}</a>
    <small>per E-Mail an ${n(t.email)}</small>
  </div>`,ce=e=>`
  <article class="game game--${e.status} reveal">
    <div class="game__cover">
      ${e.image?`<img src="${e.image}" alt="${n(e.imageAlt)}" loading="lazy" width="576" height="306" />`:q(e.art)}
      <span class="status status--${e.status}"><span class="status__dot" aria-hidden="true"></span>${n(e.statusLabel)}</span>
    </div>
    <div class="game__body">
      ${e.cover?`<img class="game__poster" src="${e.cover}" alt="Offizielles Cover von ${n(e.name)}" width="300" height="450" loading="lazy" />`:""}
      <p class="game__period">${n(e.period)}</p>
      <h3>${n(e.name)}</h3>
      <p>${n(e.description)}</p>
      <ul class="game__highlights">${e.highlights.map(t=>`<li>${n(t)}</li>`).join("")}</ul>
      ${e.supportLink?'<a class="game__support" href="#unterstuetzen">Projekt unterstützen <span aria-hidden="true">→</span></a>':""}
    </div>
  </article>`,de=(e,t)=>`
  <button type="button" class="gallery__item ${e.size?`gallery__item--${e.size}`:""} ${e.contain?"gallery__item--contain":""}" data-index="${t}">
    <img src="${e.src}" alt="${n(e.alt)}" loading="lazy" />
    <span class="gallery__caption">${n(e.caption)}</span>
  </button>`,D=(e,t)=>`
  <a class="album ${e.contain?"album--contain":""}" href="#album/${e.id}">
    <span class="album__cover"><img src="${e.cover}" alt="" loading="lazy"${e.focus?` style="object-position:${e.focus}"`:""} /></span>
    <span class="album__body">
      <span class="album__meta">${t} ${t===1?"Foto":"Fotos"}${e.period?` · ${n(e.period)}`:""}</span>
      <strong class="album__title">${n(e.title)}</strong>
      <span class="album__text">${n(e.text)}</span>
      <span class="album__open">Album öffnen <span aria-hidden="true">→</span></span>
    </span>
  </a>`,ue=e=>`
  <div class="doc-group">
    <h3 class="doc-group__title reveal">${n(e.group)}</h3>
    <div class="doc-grid">
      ${e.items.map(t=>`
        <a class="doc reveal" href="${t.href}" download>
          <span class="doc__icon" aria-hidden="true">${k.doc}<em>${n(t.format)}</em></span>
          <span class="doc__body">
            <strong>${n(t.title)}</strong>
            <span>${n(t.text)}</span>
            <small>${n(t.date)} · ${n(t.format)} · ${n(t.size)}</small>
          </span>
          <span class="doc__action" aria-hidden="true">${k.download}</span>
        </a>`).join("")}
    </div>
  </div>`;function me(e){const t=[];return t.push(`<li><span>E-Mail</span><a href="mailto:${n(e.email)}">${n(e.email)}</a></li>`),e.links.forEach(i=>t.push(`<li><span>${n(i.label)}</span><a href="${n(i.href)}" target="_blank" rel="noopener">${n(i.text||i.href)}</a></li>`)),`
    <p class="contact__label">Ansprechperson</p>
    <p class="contact__person">${n(e.person)}</p>
    <p class="contact__role">${n(e.personRole)}</p>
    ${t.length?`<ul class="contact__list">${t.join("")}</ul>`:'<p class="contact__note">Offizielle Kontaktangaben wie E-Mail-Adresse oder Social-Media-Profile sind noch nicht hinterlegt. Bis dahin erfolgt der Kontakt direkt über die Mitglieder.</p>'}
    <ul class="contact__facts">
      <li><span>Region</span>Appenzell Innerrhoden &amp; Ausserrhoden</li>
      <li><span>Sitzungen</span>Nach Bedarf, gemeinsam vereinbart</li>
      <li><span>Gegründet</span>23. Januar 2026</li>
    </ul>`}function K(e){return e.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/[^a-z0-9]+/g,"-")}function he(){p("overview").innerHTML=[{href:"#ueber-uns",title:"Die Kommission",text:"Zweck, Ziele und Grundsätze aus den Statuten.",icon:k.crest},{href:"#geschichte",title:"Geschichte",text:"Von der Gründung bis zum Finale von «The Forest».",icon:k.scroll},{href:"#zukunft",title:"Projekte",text:"Laufende Vorhaben, Zurückgestelltes und neue Ideen.",icon:k.compass},{href:"#mitglieder",title:"Mitglieder",text:"Vier Gründungsmitglieder mit klaren Zuständigkeiten.",icon:k.people},{href:"#aktivitaeten",title:"Aktivitäten",text:"Rodung, Bau, Erkundung – alle Aktionen im Überblick.",icon:k.axe},{href:"#spiele",title:"Spiele",text:"The Forest, Minecraft und was als Nächstes kommt.",icon:k.controller}].map(Q).join(""),p("news").innerHTML=x.slice(-3).reverse().map(ee).join(""),p("live").innerHTML=oe(N,x.at(-1),A.links),p("timeline").innerHTML=x.map(te).join(""),p("reports").innerHTML=U.map(ne).join(""),p("members").innerHTML=G.map(ie).join(""),p("future").innerHTML=R.map(re).join(""),p("support").innerHTML=le(C,A),p("games").innerHTML=V.map(ce).join(""),p("game-ideas").innerHTML=`<strong>Ebenfalls im Gespräch:</strong> ${Z.map(n).join(" · ")} <em>(unverbindliche Ideen)</em>`,p("documents").innerHTML=O.map(ue).join(""),p("contact").innerHTML=me(A),z(".divider, .footer__trees").forEach((e,t)=>{e.innerHTML=X(5+t*13)}),ge(),pe()}function ge(){const e=p("filters"),t=p("activities"),i=p("activity-count"),a=p("activity-empty"),s={cat:"alle",status:"alle"},m=(h,r,d)=>`
    <div class="filter-group" role="group" aria-label="${r} filtern" data-group="${h}">
      <span class="filter-group__label">${r}</span>
      <div class="filters">${se(d,s[h])}</div>
    </div>`;e.innerHTML=m("cat","Projekt",W)+m("status","Status",B),t.innerHTML=H.map(ae).join("");const o=()=>{const h=B.find(d=>d.id===s.status).match;let r=0;z(".activity",t).forEach(d=>{const f=(s.cat==="alle"||d.dataset.cat===s.cat)&&(!h||h.includes(d.dataset.status));d.hidden=!f,f&&!E&&(d.style.animation="none",d.offsetWidth,d.style.animation=`fadeUp .45s ${r*.02}s both`),f&&r++}),z(".filter-group",e).forEach(d=>{z("[data-filter]",d).forEach(f=>f.setAttribute("aria-pressed",String(f.dataset.filter===s[d.dataset.group])))}),i.textContent=`${r} von ${H.length} Aktionen`,a.hidden=r>0};e.addEventListener("click",h=>{const r=h.target.closest("[data-filter]");r&&(s[r.closest(".filter-group").dataset.group]=r.dataset.filter,o())}),g("[data-reset]",a).addEventListener("click",()=>{s.cat="alle",s.status="alle",o()}),o()}function pe(){const e=l=>j.filter(c=>c.album===l).length;p("albums").innerHTML=L.map(l=>D(l,e(l.id))).join("");const t=p("album-page");let i=[];const a=l=>{const c=L.find(v=>v.id===l);if(!c)return!1;i=j.map((v,P)=>({...v,i:P})).filter(v=>v.album===l);const M=L.filter(v=>v.id!==l);return t.innerHTML=`
      <div class="container">
        <a class="album-page__back" href="#galerie"><span aria-hidden="true">←</span> Zurück zur Galerie</a>
        <header class="album-page__head">
          <p class="eyebrow">Album${c.period?` · ${n(c.period)}`:""}</p>
          <h1 class="section__title">${n(c.title)}</h1>
          <p class="section__intro">${n(c.text)} <span class="album-page__count">${i.length} ${i.length===1?"Foto":"Fotos"}</span></p>
        </header>
        <div class="gallery__grid">${i.map(v=>de(v,v.i)).join("")}</div>
        <nav class="album-page__more" aria-label="Weitere Alben">
          <p class="eyebrow">Weitere Alben</p>
          <div class="albums albums--small">${M.map(v=>D(v,e(v.id))).join("")}</div>
        </nav>
      </div>`,document.title=`${c.title} – Galerie – Waldkommission Appenzell`,!0};let s=!1;const m=()=>{const l=location.hash.match(/^#album\/([\w-]+)$/);if(l&&a(l[1])){s=!0,z("#nav-menu a").forEach(M=>M.classList.toggle("is-active",M.getAttribute("href")==="#galerie")),document.body.classList.add("is-album"),t.hidden=!1,window.scrollTo({top:0,behavior:"instant"});return}if(!s)return;s=!1,document.body.classList.remove("is-album"),t.hidden=!0,document.title="Waldkommission Appenzell";const c=location.hash&&g(location.hash);c&&c.scrollIntoView({behavior:"instant"})};window.addEventListener("hashchange",m),m();const o=g(".lightbox"),h=g("img",o),r=g("figcaption",o);let d=0;const f=()=>i.map(l=>l.i),w=l=>{d=l;const c=j[l];h.src=c.src,h.alt=c.alt,h.classList.toggle("is-contain",!!c.contain),r.textContent=c.caption},S=l=>{const c=f();w(c[(c.indexOf(d)+l+c.length)%c.length])};t.addEventListener("click",l=>{const c=l.target.closest(".gallery__item");c&&(w(+c.dataset.index),o.showModal(),document.body.classList.add("no-scroll"))}),o.addEventListener("close",()=>document.body.classList.remove("no-scroll")),g(".lightbox__close",o).addEventListener("click",()=>o.close()),g(".lightbox__nav--prev",o).addEventListener("click",()=>S(-1)),g(".lightbox__nav--next",o).addEventListener("click",()=>S(1)),o.addEventListener("click",l=>{l.target===o&&o.close()}),o.addEventListener("keydown",l=>{l.key==="ArrowLeft"&&S(-1),l.key==="ArrowRight"&&S(1)});let _=null;o.addEventListener("touchstart",l=>{_=l.touches[0].clientX},{passive:!0}),o.addEventListener("touchend",l=>{if(_===null)return;const c=l.changedTouches[0].clientX-_;Math.abs(c)>50&&S(c<0?1:-1),_=null})}function fe(){const e=g(".site-header"),t=g(".nav__toggle"),i=g("#nav-menu"),a=r=>{t.setAttribute("aria-expanded",String(r)),g(".sr-only",t).textContent=r?"Menü schliessen":"Menü öffnen",e.classList.toggle("is-open",r),document.body.classList.toggle("no-scroll",r)};t.addEventListener("click",()=>a(t.getAttribute("aria-expanded")!=="true")),i.addEventListener("click",r=>{r.target.closest("a")&&a(!1)}),document.addEventListener("keydown",r=>{r.key==="Escape"&&e.classList.contains("is-open")&&(a(!1),t.focus())}),window.matchMedia("(min-width: 1150px)").addEventListener("change",r=>{r.matches&&a(!1)});const s=()=>e.classList.toggle("is-scrolled",window.scrollY>40);s(),window.addEventListener("scroll",s,{passive:!0});const m=z("a",i),o=[g(".hero"),...m.map(r=>g(r.getAttribute("href"))).filter(Boolean)],h=new IntersectionObserver(r=>{r.forEach(d=>{d.isIntersecting&&m.forEach(f=>f.classList.toggle("is-active",f.getAttribute("href")===`#${d.target.id}`))})},{rootMargin:"-45% 0px -50% 0px"});o.forEach(r=>h.observe(r))}function be(){if(z(".hero__layer").forEach(s=>{s.innerHTML=Y(s.dataset.trees)}),E)return;const e=z(".hero__layer, .hero__fog"),t=g(".hero");let i=!1;const a=()=>{const s=window.scrollY;s<t.offsetHeight&&(e.forEach(m=>{const o=parseFloat(m.dataset.depth||.09);m.style.transform=`translate3d(0, ${s*o}px, 0)`}),g(".hero__content").style.transform=`translate3d(0, ${s*.15}px, 0)`,g(".hero__content").style.opacity=String(Math.max(0,1-s/(t.offsetHeight*.8)))),i=!1};window.addEventListener("scroll",()=>{i||(requestAnimationFrame(a),i=!0)},{passive:!0})}function ve(){const e=z(".reveal");if(E||!("IntersectionObserver"in window)){e.forEach(i=>i.classList.add("is-visible"));return}const t=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-visible"),t.unobserve(a.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});e.forEach(i=>{const a=[...i.parentElement.children].filter(s=>s.classList.contains("reveal"));i.style.setProperty("--delay",`${Math.min(a.indexOf(i),6)*70}ms`),t.observe(i)})}he();fe();be();ve();g("[data-year]").textContent=String(new Date().getFullYear());
