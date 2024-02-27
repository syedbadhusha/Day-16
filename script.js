var counterhead = document.createElement('h1');

setTimeout(function(){
    var counterid = document.querySelector('h1')
    counterid.innerText=`COUNTER: 10`;
    setTimeout(function(){
        counterid.innerText=`COUNTER: 9`;
        setTimeout(function(){
            counterid.innerText=`COUNTER: 8`;
            setTimeout(function(){
                counterid.innerText=`COUNTER: 7`;
                setTimeout(function(){
                    counterid.innerText=`COUNTER: 6`;
                    setTimeout(function(){
                        counterid.innerText=`COUNTER: 5`;
                        setTimeout(function(){
                            counterid.innerText=`COUNTER: 4`;
                            setTimeout(function(){
                                counterid.innerText=`COUNTER: 3`;
                                setTimeout(function(){
                                    counterid.innerText=`COUNTER: 2`;
                                    setTimeout(function(){
                                        counterid.innerText=`Happy Independance Day`;
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)

document.body.append(counterhead)
