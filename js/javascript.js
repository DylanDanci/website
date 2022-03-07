function activeAboutMe(){
    var el = document.getElementById("aboutme");
    if (el.className === "aboutme"){
        el.innerHTML = '< About me >';
        el.className = "activeAboutMe";
        var works = document.getElementById("works");
        works.innerHTML = 'Works';
        works.className = "works";
        var contacts = document.getElementById("contacts");
        contacts.innerHTML = 'Contacts';
        contacts.className = "contacts";
        var scroll = document.getElementById("aboutmePage")
        scroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }else if (el.className === "aboutme lightTheme"){
        el.innerHTML = '< About me >';
        el.className = "activeAboutMe";
        var works = document.getElementById("works");
        works.innerHTML = 'Works';
        works.className = "works lightTheme";
        var contacts = document.getElementById("contacts");
        contacts.innerHTML = 'Contacts';
        contacts.className = "contacts lightTheme";
        var scroll = document.getElementById("aboutmePage")
        scroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }else{
        var scroll = document.getElementById("aboutmePage")
        scroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function activeWorks(){
    var el = document.getElementById("works");
    if (el.className === "works"){
        el.innerHTML = '< Works >';
        el.className = "activeWorks";
        var aboutme = document.getElementById("aboutme");
        aboutme.innerHTML = 'About me';
        aboutme.className = "aboutme";
        var contacts = document.getElementById("contacts");
        contacts.innerHTML = 'Contacts';
        contacts.className = "contacts";
        var scroll = document.getElementById("worksPage")
        scroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }else if(el.className === "works lightTheme"){
        el.innerHTML = '< Works >';
        el.className = "activeWorks";
        var aboutme = document.getElementById("aboutme");
        aboutme.innerHTML = 'About me';
        aboutme.className = "aboutme lightTheme";
        var contacts = document.getElementById("contacts");
        contacts.innerHTML = 'Contacts';
        contacts.className = "contacts lightTheme";
        var scroll = document.getElementById("worksPage")
        scroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else{
        var scroll = document.getElementById("worksPage")
        scroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function activeContacts(){
    var el = document.getElementById("contacts");
    if (el.className === "contacts"){
        el.innerHTML = '< Contacts >';
        el.className = "activeContacts";
        var aboutme = document.getElementById("aboutme");
        aboutme.innerHTML = 'About';
        aboutme.className = "aboutme";
        var works = document.getElementById("works");
        works.innerHTML = 'Works';
        works.className = "works";
        var scroll = document.getElementById("contactsPage")
        scroll.scrollIntoView({ block: 'start' });
    }else if(el.className === "contacts lightTheme"){
        el.innerHTML = '< Contacts >';
        el.className = "activeContacts";
        var aboutme = document.getElementById("aboutme");
        aboutme.innerHTML = 'About';
        aboutme.className = "aboutme lightTheme";
        var works = document.getElementById("works");
        works.innerHTML = 'Works';
        works.className = "works lightTheme";
        var scroll = document.getElementById("contactsPage")
        scroll.scrollIntoView({ block: 'start' });
    }
    else{
        var scroll = document.getElementById("contactsPage")
        scroll.scrollIntoView({ block: 'start' });
    }
}

function disableAll(){
    var aboutme = document.getElementById("aboutme");
        aboutme.innerHTML = 'About me';
        aboutme.className = "aboutme";
    var works = document.getElementById("works");
        works.innerHTML = 'Works';
        works.className = "works";
        var contacts = document.getElementById("contacts");
        contacts.innerHTML = 'Contacts';
        contacts.className = "contacts";
}

// back to top script
var mybutton = document.getElementById("up");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function showaANCL(){
    var x = document.getElementById("body");
    document.getElementById("titoloANCL").style.display="block";
    document.getElementById("descrizioneANCL").style.display="block";

    if (x.className === ""){
        document.getElementById("photoANCL").classList.add("click");    
    }else{
        document.getElementById("photoANCL").classList.add("clickLight");
    }
    
}

function unshowaANCL(){
    var x = document.getElementById("body");
    document.getElementById("titoloANCL").style.display="none";
    document.getElementById("descrizioneANCL").style.display="none";

    if (x.className === ""){
        document.getElementById("photoANCL").classList.remove("click");;    
    }else{
        document.getElementById("photoANCL").classList.remove("clickLight");
    }
}

function showaRuffo(){
    var x = document.getElementById("body");
    document.getElementById("titoloRuffo").style.display="block";
    document.getElementById("descrizioneRuffo").style.display="block";

    if (x.className === ""){
        document.getElementById("photoRuffo").classList.add("click");    
    }else{
        document.getElementById("photoRuffo").classList.add("clickLight");
    }
}

function unshowaRuffo(){
    var x = document.getElementById("body");
    document.getElementById("titoloRuffo").style.display="none";
    document.getElementById("descrizioneRuffo").style.display="none";
    document.getElementById("photoRuffo").classList.remove("click");
 
    if (x.className === ""){
        document.getElementById("photoRuffo").classList.remove("click");;    
    }else{
        document.getElementById("photoRuffo").classList.remove("clickLight");
    }
}

function showaWebsite(){
    var x = document.getElementById("body");
    document.getElementById("titoloWebsite").style.display="block";
    document.getElementById("descrizioneWebsite").style.display="block";
    document.getElementById("photoWebsite").classList.add("click");

    if (x.className === ""){
        document.getElementById("photoWebsite").classList.add("click");    
    }else{
        document.getElementById("photoWebsite").classList.add("clickLight");
    }
}

function unshowaWebsite(){
    var x = document.getElementById("body");
    document.getElementById("titoloWebsite").style.display="none";
    document.getElementById("descrizioneWebsite").style.display="none";
    document.getElementById("photoWebsite").classList.remove("click");

    if (x.className === ""){
        document.getElementById("photoWebsite").classList.remove("click");;    
    }else{
        document.getElementById("photoWebsite").classList.remove("clickLight");
    }
}

function showaPysubot(){
    var x = document.getElementById("body");
    document.getElementById("titoloPysubot").style.display="block";
    document.getElementById("descrizionePysubot").style.display="block";
    document.getElementById("photoPysubot").classList.add("click");

    if (x.className === ""){
        document.getElementById("photoPysubot").classList.add("click");    
    }else{
        document.getElementById("photoPysubot").classList.add("clickLight");
    }
}

function unshowaPysubot(){
    var x = document.getElementById("body");
    document.getElementById("titoloPysubot").style.display="none";
    document.getElementById("descrizionePysubot").style.display="none";
    document.getElementById("photoPysubot").classList.remove("click");

    if (x.className === ""){
        document.getElementById("photoPysubot").classList.remove("click");;    
    }else{
        document.getElementById("photoPysubot").classList.remove("clickLight");
    }
}

function showaMinecraft(){
    var x = document.getElementById("body");
    document.getElementById("titoloMinecraft").style.display="block";
    document.getElementById("descrizioneMinecraft").style.display="block";
    document.getElementById("photoMinecraft").classList.add("click");

    if (x.className === ""){
        document.getElementById("photoMinecraft").classList.add("click");    
    }else{
        document.getElementById("photoMinecraft").classList.add("clickLight");
    }
}

function unshowaMinecraft(){
    var x = document.getElementById("body");
    document.getElementById("titoloMinecraft").style.display="none";
    document.getElementById("descrizioneMinecraft").style.display="none";
    document.getElementById("photoMinecraft").classList.remove("click");

    if (x.className === ""){
        document.getElementById("photoMinecraft").classList.remove("click");;    
    }else{
        document.getElementById("photoMinecraft").classList.remove("clickLight");
    }
}

function myFunction() {
  var x = document.getElementById("myNavbar");
  var y = document.getElementById("moon");
  if (x.className === "myNavbar") {
    x.className += " responsive";
    x.className += " cell";
    y.style.display = "none";
  } else {
    x.className = "myNavbar";
    y.style.display = "block";
  }
}

function theme(){
    var x = document.getElementById("body");
    var y = document.getElementById("aboutme");
    var z = document.getElementById("works");
    var a = document.getElementById("aboutmePage");
    var b = document.getElementById("big");
    var c = document.getElementById("love");
    var d = document.getElementById("hobbies");
    var e = document.getElementById("anno1");
    var f = document.getElementById("anno2");
    var g = document.getElementById("anno3");
    var h = document.getElementById("th");
    var i = document.getElementById("td1");
    var j = document.getElementById("td2");
    var k = document.getElementById("td3");
    var l = document.getElementById("works1");
    var m = document.getElementById("subworks");
    var n = document.getElementById("subworks2");
    var o = document.getElementById("contactsWrite1");
    var p = document.getElementById("p0");
    var q = document.getElementById("p1");
    var r = document.getElementById("p2");
    var s = document.getElementById("p3");
    var t = document.getElementById("p4");
    var u = document.getElementById("footer");
    var cv = document.getElementById("cv");
    var cl1 = document.getElementById("cl1");
    var cl2 = document.getElementById("cl2");
    var cl3 = document.getElementById("cl3");
    var cl4 = document.getElementById("cl4");
    var cl5 = document.getElementById("cl5");
    var git = document.getElementById("gitLight");
    var ln = document.getElementById("lnLight");
    var git2 = document.getElementById("git2");
    var up = document.getElementById("up");
    var ANCL = document.getElementById("photoANCL");
    var Ruffo = document.getElementById("photoRuffo");
    var website = document.getElementById("photoWebsite");
    var ds = document.getElementById("photoPysubot");
    var mc = document.getElementById("photoMinecraft");
    var menu = document.getElementById("menu");
    var moon = document.getElementById("moon");
    var w = document.getElementById("contacts");
    if (x.className === ""){
        x.className = "theme";
        y.classList.add("lightTheme");
        z.classList.add("lightTheme");
        w.classList.add("lightTheme");
        a.classList.add("lightDivAboutMe");
        b.classList.add("lightTheme");
        c.classList.add("lightTheme");
        c.classList.add("borderLight");
        d.classList.add("lightTheme");
        e.classList.add("lightTheme");
        f.classList.add("lightTheme");
        g.classList.add("lightTheme");
        h.classList.add("lightTheme");
        h.classList.add("borderLight");
        i.classList.add("lightTheme");
        j.classList.add("lightTheme");
        k.classList.add("lightTheme");
        l.classList.add("lightTheme");
        l.classList.add("borderLight");
        m.classList.add("lightTheme");
        m.classList.add("borderLight");
        n.classList.add("lightTheme");
        n.classList.add("borderLight");
        o.classList.add("lightTheme");
        o.classList.add("borderLight");
        p.classList.add("lightTheme");
        q.classList.add("lightTheme");
        r.classList.add("lightTheme");
        s.classList.add("lightTheme");
        t.classList.add("lightTheme");
        u.classList.add("lightTheme");
        u.classList.add("footerBorder");
        cv.classList.add("lightTheme");
        cv.classList.add("lightButton");
        cl1.classList.add("hoverLight");
        cl2.classList.add("hoverLight");
        cl3.classList.add("hoverLight");
        cl4.classList.add("hoverLight");
        cl5.classList.add("hoverLight");
        git.classList.add("lightGit");
        ln.classList.add("lightLinkedin");
        git2.classList.add("lightGit");
        up.classList.add("backToTopLight");
        ANCL.classList.add("boxLight");
        Ruffo.classList.add("boxLight");
        website.classList.add("boxLight");
        ds.classList.add("boxLight");
        mc.classList.add("boxLight");
        menu.classList.add("lightTheme");
        moon.classList.add("dark");
    }else{
        x.classList.remove("theme");   
        y.classList.remove("lightTheme");
        z.classList.remove("lightTheme");
        w.classList.remove("lightTheme");
        a.classList.remove("lightDivAboutMe");
        b.classList.remove("lightTheme");
        c.classList.remove("lightTheme");
        c.classList.remove("borderLight");
        d.classList.remove("lightTheme");
        e.classList.remove("lightTheme");
        f.classList.remove("lightTheme");
        g.classList.remove("lightTheme");
        h.classList.remove("lightTheme");
        i.classList.remove("lightTheme");
        j.classList.remove("lightTheme");
        k.classList.remove("lightTheme");
        l.classList.remove("lightTheme");
        m.classList.remove("lightTheme");
        n.classList.remove("lightTheme");
        o.classList.remove("lightTheme");
        p.classList.remove("lightTheme");
        q.classList.remove("lightTheme");
        r.classList.remove("lightTheme");
        s.classList.remove("lightTheme");
        t.classList.remove("lightTheme");
        u.classList.remove("lightTheme");
        u.classList.remove("footerBorder");
        cv.classList.remove("lightTheme");
        cv.classList.remove("lightButton");
        cl1.classList.remove("hoverLight");
        cl2.classList.remove("hoverLight");
        cl3.classList.remove("hoverLight");
        cl4.classList.remove("hoverLight");
        cl5.classList.remove("hoverLight");
        git.classList.remove("lightGit");
        ln.classList.remove("lightLinkedin");
        git2.classList.remove("lightGit");
        up.classList.remove("backToTopLight");
        ANCL.classList.remove("boxLight");
        Ruffo.classList.remove("boxLight");
        website.classList.remove("boxLight");
        ds.classList.remove("boxLight");
        mc.classList.remove("boxLight");
        menu.classList.remove("lightTheme");
        moon.classList.remove("dark");
        c.classList.remove("borderLight");
        h.classList.remove("borderLight");
        l.classList.remove("borderLight"); 
        m.classList.remove("borderLight");
        n.classList.remove("borderLight"); 
        o.classList.remove("borderLight"); 
        
    }
    
}

const feaders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.5,
    rootMaring: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnscroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

feaders.forEach(fader => {
    appearOnScroll.observe(fader);
})



document.getElementById("photoRuffo").onclick = function () {
location.href = "ruffo.html"}

document.getElementById("photoWebsite").onclick = function () {
location.href = "website.html"}

document.getElementById("photoPysubot").onclick = function () {
    location.href = "pysubot.html"}
document.getElementById("photoANCL").onclick = function () {
    location.href = "ancl.html"}
document.getElementById("photoMinecraft").onclick = function () {
location.href = "minecraft.html"}




function themeANCL(){
    var x = document.getElementById("body");
    var up = document.getElementById("up");
    var y = document.getElementById("aboutme");
    var git = document.getElementById("gitLight");
    var ln = document.getElementById("lnLight");
    var menu = document.getElementById("menu");
    var moon = document.getElementById("moon");
    var z = document.getElementById("works");
    var a = document.getElementById("aboutmePage");
    if (x.className === ""){
        x.className = "theme";
        y.classList.add("lightTheme");
        z.classList.add("lightTheme");
        a.classList.add("lightDivAboutMe");
        git.classList.add("lightGit");
        ln.classList.add("lightLinkedin");
        up.classList.add("backToTopLight");
        menu.classList.add("lightTheme");
        moon.classList.add("dark");
    }else{
        x.classList.remove("theme");   
        y.classList.remove("lightTheme");
        z.classList.remove("lightTheme");   
        a.classList.remove("lightDivAboutMe");     
        git.classList.remove("lightGit");
        ln.classList.remove("lightLinkedin");      
        up.classList.remove("backToTopLight");   
        menu.classList.remove("lightTheme");
        moon.classList.remove("dark");
       
        }
    }

    function themePysuBot(){
        var x = document.getElementById("body");
        var up = document.getElementById("up");
        var y = document.getElementById("aboutme");
        var z = document.getElementById("works");
        var a = document.getElementById("aboutmePage");
        var git = document.getElementById("gitLight");
        var ln = document.getElementById("lnLight");
        var menu = document.getElementById("menu");
        var moon = document.getElementById("moon");
        var b = document.getElementById("big");
        if (x.className === ""){
            x.className = "theme";
            y.classList.add("lightTheme");
            z.classList.add("lightTheme");
            a.classList.add("lightDivAboutMe");
            git.classList.add("lightGit");
            ln.classList.add("lightLinkedin");
            up.classList.add("backToTopLight");
            menu.classList.add("lightTheme");
            moon.classList.add("dark");
            b.classList.add("lightTheme");
            b.classList.add("borderLight");
        }else{
            x.classList.remove("theme");   
            y.classList.remove("lightTheme");
            z.classList.remove("lightTheme");   
            a.classList.remove("lightDivAboutMe");    
            git.classList.remove("lightGit");
            ln.classList.remove("lightLinkedin");      
            up.classList.remove("backToTopLight");   
            menu.classList.remove("lightTheme");
            moon.classList.remove("dark");
            b.classList.remove("lightTheme");
            b.classList.remove("borderLight");
            }
        }

        function themeRuffo(){
            var x = document.getElementById("body");
            var up = document.getElementById("up");
            var y = document.getElementById("aboutme");
            var git = document.getElementById("gitLight");
            var ln = document.getElementById("lnLight");
            var menu = document.getElementById("menu");
            var moon = document.getElementById("moon");
            var z = document.getElementById("works");
            var a = document.getElementById("aboutmePage");
            var b = document.getElementById("big");
            if (x.className === ""){
                x.className = "theme";
                y.classList.add("lightTheme");
                z.classList.add("lightTheme");
                a.classList.add("lightDivAboutMe");
                git.classList.add("lightGit");
                ln.classList.add("lightLinkedin");
                up.classList.add("backToTopLight");
                menu.classList.add("lightTheme");
                moon.classList.add("dark");
                b.classList.add("lightTheme");
                b.classList.add("borderLight");
            }else{
                x.classList.remove("theme");   
                y.classList.remove("lightTheme");
                z.classList.remove("lightTheme");   
                a.classList.remove("lightDivAboutMe");     
                git.classList.remove("lightGit");
                ln.classList.remove("lightLinkedin");      
                up.classList.remove("backToTopLight");   
                menu.classList.remove("lightTheme");
                moon.classList.remove("dark");
                b.classList.remove("lightTheme");
                b.classList.remove("borderLight");
                }
            }

            function themeMinecraft(){
                var x = document.getElementById("body");
                var up = document.getElementById("up");
                var y = document.getElementById("aboutme");
                var git = document.getElementById("gitLight");
                var ln = document.getElementById("lnLight");
                var menu = document.getElementById("menu");
                var moon = document.getElementById("moon");
                var z = document.getElementById("works");
                var a = document.getElementById("aboutmePage");
                var w = document.getElementById("contacts");
                var o = document.getElementById("contactsWrite1");
                var b = document.getElementById("big");
                if (x.className === ""){
                    x.className = "theme";
                    y.classList.add("lightTheme");
                    z.classList.add("lightTheme");
                    a.classList.add("lightDivAboutMe");
                    git.classList.add("lightGit");
                    ln.classList.add("lightLinkedin");
                    up.classList.add("backToTopLight");
                    menu.classList.add("lightTheme");
                    moon.classList.add("dark");
                    w.classList.add("lightTheme");
                    o.classList.add("lightTheme");
                    b.classList.add("lightTheme");
                    b.classList.add("borderLight");
                }else{
                    x.classList.remove("theme");   
                    y.classList.remove("lightTheme");
                    z.classList.remove("lightTheme");   
                    a.classList.remove("lightDivAboutMe");     
                    git.classList.remove("lightGit");
                    ln.classList.remove("lightLinkedin");      
                    up.classList.remove("backToTopLight");   
                    menu.classList.remove("lightTheme");
                    moon.classList.remove("dark");
                    w.classList.remove("lightTheme");
                    o.classList.remove("lightTheme");
                    b.classList.remove("lightTheme");
                    b.classList.remove("borderLight");
                    }
                }
