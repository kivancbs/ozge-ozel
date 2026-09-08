document.addEventListener('DOMContentLoaded',()=>{

    // Splash
    const splash=document.getElementById('splash');
    setTimeout(()=>splash.classList.add('done'),1600);

    // Header scroll
    const header=document.getElementById('header');
    window.addEventListener('scroll',()=>{
        header.classList.toggle('solid',window.scrollY>40);
        // active nav
        const sections=document.querySelectorAll('section[id]');
        let cur='';
        sections.forEach(s=>{
            if(window.scrollY>=s.offsetTop-100) cur=s.id;
        });
        document.querySelectorAll('.nav a').forEach(a=>{
            a.classList.toggle('on',a.getAttribute('href')==='#'+cur);
        });
    });

    // Mobile menu
    const toggle=document.getElementById('menuToggle');
    const mobileNav=document.getElementById('mobileNav');
    toggle.addEventListener('click',()=>{
        toggle.classList.toggle('open');
        mobileNav.classList.toggle('open');
        document.body.style.overflow=mobileNav.classList.contains('open')?'hidden':'';
    });
    document.querySelectorAll('.mobile-nav-inner a').forEach(a=>{
        a.addEventListener('click',()=>{
            toggle.classList.remove('open');
            mobileNav.classList.remove('open');
            document.body.style.overflow='';
        });
    });

    // Tabs / filter
    const tabs=document.querySelectorAll('.tab');
    const cards=document.querySelectorAll('.card');
    tabs.forEach(t=>{
        t.addEventListener('click',()=>{
            tabs.forEach(b=>b.classList.remove('active'));
            t.classList.add('active');
            const f=t.dataset.t;
            cards.forEach(c=>{
                c.classList.toggle('hide',f!=='all'&&c.dataset.c!==f);
            });
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
        a.addEventListener('click',e=>{
            e.preventDefault();
            const el=document.querySelector(a.getAttribute('href'));
            if(el){
                window.scrollTo({top:el.offsetTop-70,behavior:'smooth'});
            }
        });
    });

    // Location status
    function updateStatus(){
        const now=new Date();
        const d=now.getDay(),h=now.getHours()+now.getMinutes()/60;
        // Istanbul: Mon-Sat 10-19
        const ist=document.getElementById('istStatus');
        const istOpen=d>=1&&d<=6&&h>=10&&h<19;
        if(ist){
            ist.textContent=istOpen?'Açık':'Kapalı';
            ist.classList.toggle('closed',!istOpen);
        }
        // Dubai: Tue-Sun 10-19:30
        const dub=document.getElementById('dubaiStatus');
        const dubOpen=d!==1&&h>=10&&h<19.5;
        if(dub){
            dub.textContent=dubOpen?'Açık':'Kapalı';
            dub.classList.toggle('closed',!dubOpen);
        }
    }
    updateStatus();
    setInterval(updateStatus,60000);

    // Simple reveal
    const observer=new IntersectionObserver(entries=>{
        entries.forEach(e=>{
            if(e.isIntersecting){
                e.target.style.opacity='1';
                e.target.style.transform='translateY(0)';
                observer.unobserve(e.target);
            }
        });
    },{threshold:.08});

    document.querySelectorAll('.card,.branch,.rev,.point,.ig-box,.stat-grid,.contact-item,.cta-box').forEach(el=>{
        el.style.opacity='0';
        el.style.transform='translateY(16px)';
        el.style.transition='opacity .4s,transform .4s';
        observer.observe(el);
    });

});
