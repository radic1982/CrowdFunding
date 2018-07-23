Klijentska aplikacija se builduje u zeljenu destinaciju WEBAPP bez problema.

TODO:

-Pozicionirati dugmice na login stranici, takodje SIGNUP dugme da bude isto kao i SIGNIN dugme.
    Pozicioniranje je uradjeno, srediti samo drugi deo taska!

-Na stranici LOGIN pomere se dugmici iz navbara prema sredini kada se pristupi ruti. Srediti to da bude isto kao
    HOME page.

-Dovrsiti API do kraja, bez DTO objekata, Radetov API u kontroleru UserController vraca <SecurityUser>,
    a nama je cilj da se iz kontrolera odmah dobavi zeljena lista POSTAVLJENIH projekata od strane
    korisnika dakle treba da vraca <List<Project>> osim u situaciji gde cemomorati da vracamo
    <List<SecurityUser>> jer kroz tu listu iteriramo i uzimamo liste projekata koje su postavili za svakog
    da bi ih dodali u tabele na stranici PROJECTS
    koja ce biti vidljiva cak i neulogovanim korisnicima.
    
-Popuniti bazu test podacima i testirati kroz Postman alat.

-Napraviti servise za komunikaciju sa nasim serverom, importe za observable kao i za ostale potrebne
    stvari pronacicete u authentication-service.ts fajlu i posluzite se time kao osnovom za rest servise.

NAPOMENE:

-Nemojte dirati verziju RXJS biblioteke niti importe za istu.

-Ne postavljajte globalne izmene za SCSS kao i HTML, styles.scss i index.html treba da budu prazni,
    app component.html sadrzi samo rutiranje, bez statickih settings-a.

IDEJE:

https://gyazo.com/4830c4e9e6e600924aa13afae154126e
-Na zadatom linku je slika mog privatnog PayPal.me naloga, pogledajte da moze da se unese inicijalna donacija,
    kaze just add the number at the end of the link :) Interpolacijom mozemo nakon sto korisnik unese zeljenu sumu,
    mimo atributa funds u Project modelu odraditi i redirekciju na ovako neki profil i uciniti da donacije stvarno rade
    
-Javljajte na viber ko je sta uzeo od aktivnih taskova i feedback na ideje.

@author Nemanja :D