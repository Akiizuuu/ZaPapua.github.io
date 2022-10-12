//HYPERLINK
AFRAME.registerComponent('url', {
    schema: {
        href: {default: ''}
    },
    init: function () {
    var data = this.data;
    this.el.addEventListener('click', function () {
        window.location.href = data.href;
    });
    }
});

//LOGIC PARIWISATA FOR BAGAN PARIWISATA
//PARIWISATA 1
AFRAME.registerComponent('display-pariwisata1', {
    schema: {
        angkatotalpariwisata1:{type:'number', default:0}
    },
    init:function(){
        let el = this.el;
        let data = this.data;
        el.setAttribute('value', `${data.angkatotalpariwisata1}`);
        el.addEventListener('increment-pariwisata1', function(event1){
            if(data.angkatotalpariwisata1 >= 0){
                data.angkatotalpariwisata1 += event1.detail.inc_amount_pariwisata1;
                console.log(data.angkatotalpariwisata1);
                el.setAttribute('value', `${data.angkatotalpariwisata1}`);
            }
        });
        el.addEventListener('decrement-pariwisata1', function(event2){
            if(data.angkatotalpariwisata1 == 0){
                data.angkatotalpariwisata1 = 0;
                el.setAttribute('value', `${data.angkatotalpariwisata1}`);
            }else if(data.angkatotalpariwisata1 > 0){
                data.angkatotalpariwisata1 += event2.detail.dec_amount_pariwisata1;
                console.log(data.angkatotalpariwisata1);
                el.setAttribute('value', `${data.angkatotalpariwisata1}`);
            }
        });
    }
});

AFRAME.registerComponent('incrementer-pariwisata1', {
    schema:{
        kenaikanbelipariwisata1:{type:'number', default:1}
    },
    init:function(){
        let el = this.el;
        let data = this.data;
        el.addEventListener('click', function(){
            let boxbelipariwisata1 = document.querySelector("#jumlah-pembelian-pariwisata1");
            boxbelipariwisata1.emit('increment-pariwisata1', {inc_amount_pariwisata1:data.kenaikanbelipariwisata1}, false);
        });
    }
});

AFRAME.registerComponent('decrementer-pariwisata1', {
    schema:{
        penurunanbelipariwisata1:{type:'number', default:-1}
    },
    init:function(){
        let el = this.el;
        let data = this.data;
        el.addEventListener('click', function(){
            let boxbelipariwisata1 = document.querySelector("#jumlah-pembelian-pariwisata1");
            boxbelipariwisata1.emit('decrement-pariwisata1', {dec_amount_pariwisata1:data.penurunanbelipariwisata1}, false);
        });
    }
});

//LOGIC MENU2
AFRAME.registerComponent('display-menu2', {
    schema: {
        angkatotalmenu2:{type:'number', default:0}
    },
    init:function(){
        let el = this.el;
        let data = this.data;
        el.setAttribute('value', `${data.angkatotalmenu2}`);
        el.addEventListener('increment-menu2', function(event1){
            if(data.angkatotalmenu2 >= 0){
                data.angkatotalmenu2 += event1.detail.inc_amount_menu2;
                console.log(data.angkatotalmenu2);
                el.setAttribute('value', `${data.angkatotalmenu2}`);
            }
        });
        el.addEventListener('decrement-menu2', function(event2){
            console.log('jalan');
            if(data.angkatotalmenu2 == 0){
                console.log('jalan lagi');
                data.angkatotalmenu2 = 0;
                el.setAttribute('value', `${data.angkatotalmenu2}`);
            }else if(data.angkatotalmenu2 > 0){
                console.log('jalan lagi lagi');
                data.angkatotalmenu2 += event2.detail.dec_amount_menu2;
                console.log(data.angkatotalmenu2);
                el.setAttribute('value', `${data.angkatotalmenu2}`);
            }
        });
    }
});

//RAYCASTER ADD FOR BAGAN MAKANAN
AFRAME.registerComponent('raycaster-disp',{
    init:function(){
        let makanan = document.querySelector('#makanan');
        let pariwisata = document.querySelector('#pariwisata');
        let tarian = document.querySelector('#tarian');
        let adat = document.querySelector('#adat');
        this.el.addEventListener('click', function(){
            makanan.removeAttribute('class', 'bisaklik');
            pariwisata.removeAttribute('class', 'bisaklik');
            tarian.removeAttribute('class', 'bisaklik');
            adat.removeAttribute('class', 'bisaklik');
        });
    }
});

AFRAME.registerComponent('raycaster-add', {
    init:function(){
        let bagan = document.querySelector('#makanan');
        let pariwisata = document.querySelector('#pariwisata');
        let tarian = document.querySelector('#tarian');
        let adat = document.querySelector('#adat');
        this.el.addEventListener('click',function(){
            makanan.setAttribute('class', 'bisaklik');
            pariwisata.setAttribute('class', 'bisaklik');
            tarian.setAttribute('class', 'bisaklik');
            adat.setAttribute('class', 'bisaklik');
        });
    }
});

//LOGIC MENU1
AFRAME.registerComponent('display-menu1', {
    schema: {
        angkatotalmenu1:{type:'number', default:0}
    },
    init:function(){
        let el = this.el;
        let data = this.data;
        el.setAttribute('value', `${data.angkatotalmenu1}`);
        el.addEventListener('increment-menu1', function(event1){
            if(data.angkatotalmenu1 >= 0){
                data.angkatotalmenu1 += event1.detail.inc_amount_menu1;
                console.log(data.angkatotalmenu1);
                el.setAttribute('value', `${data.angkatotalmenu1}`);
            }
        });
        el.addEventListener('decrement-menu1', function(event2){
            if(data.angkatotalmenu1 == 0){
                data.angkatotalmenu1 = 0;
                el.setAttribute('value', `${data.angkatotalmenu1}`);
            }else if(data.angkatotalmenu1 > 0){
                data.angkatotalmenu1 += event2.detail.dec_amount_menu1;
                console.log(data.angkatotalmenu1);
                el.setAttribute('value', `${data.angkatotalmenu1}`);
            }
        });
    }
});

AFRAME.registerComponent('incrementer-menu1', {
    schema:{
        kenaikanbelimenu1:{type:'number', default:1}
    },
    init:function(){
        let el = this.el;
        let data = this.data;
        el.addEventListener('click', function(){
            let boxbelimenu1 = document.querySelector("#jumlah-pembelian-menu1");
            boxbelimenu1.emit('increment-menu1', {inc_amount_menu1:data.kenaikanbelimenu1}, false);
        });
    }
});

AFRAME.registerComponent('decrementer-menu1', {
    schema:{
        penurunanbelimenu1:{type:'number', default:-1}
    },
    init:function(){
        let el = this.el;
        let data = this.data;
        el.addEventListener('click', function(){
            let boxbelimenu1 = document.querySelector("#jumlah-pembelian-menu1");
            boxbelimenu1.emit('decrement-menu1', {dec_amount_menu1:data.penurunanbelimenu1}, false);
        });
    }
});

//LOGIC MENU2
AFRAME.registerComponent('display-menu2', {
    schema: {
        angkatotalmenu2:{type:'number', default:0}
    },
    init:function(){
        let el = this.el;
        let data = this.data;
        el.setAttribute('value', `${data.angkatotalmenu2}`);
        el.addEventListener('increment-menu2', function(event1){
            if(data.angkatotalmenu2 >= 0){
                data.angkatotalmenu2 += event1.detail.inc_amount_menu2;
                console.log(data.angkatotalmenu2);
                el.setAttribute('value', `${data.angkatotalmenu2}`);
            }
        });
        el.addEventListener('decrement-menu2', function(event2){
            console.log('jalan');
            if(data.angkatotalmenu2 == 0){
                console.log('jalan lagi');
                data.angkatotalmenu2 = 0;
                el.setAttribute('value', `${data.angkatotalmenu2}`);
            }else if(data.angkatotalmenu2 > 0){
                console.log('jalan lagi lagi');
                data.angkatotalmenu2 += event2.detail.dec_amount_menu2;
                console.log(data.angkatotalmenu2);
                el.setAttribute('value', `${data.angkatotalmenu2}`);
            }
        });
    }
});

AFRAME.registerComponent('incrementer-menu2', {
    schema:{
        kenaikanbelimenu2:{type:'number', default:1}
    },
    init:function(){
        let el = this.el;
        let data = this.data;
        el.addEventListener('click', function(){
            let boxbelimenu2 = document.querySelector("#jumlah-pembelian-menu2");
            boxbelimenu2.emit('increment-menu2', {inc_amount_menu2:data.kenaikanbelimenu2}, false);
        });
    }
});

AFRAME.registerComponent('decrementer-menu2', {
    schema:{
        penurunanbelimenu2:{type:'number', default:-1}
    },
    init:function(){
        let el = this.el;
        let data = this.data;
        el.addEventListener('click', function(){
            let boxbelimenu2 = document.querySelector("#jumlah-pembelian-menu2");
            boxbelimenu2.emit('decrement-menu2', {dec_amount_menu2:data.penurunanbelimenu2}, false);
        });
    }
});