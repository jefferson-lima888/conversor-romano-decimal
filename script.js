//forma 1 de fazer o conversor

const Conversor = {
    altariscos: {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1e3
    },

    romanToDecimal: function(e) {
        let t = 0
          , o = null;
        for (let n = (e = e.toUpperCase()).length - 1; n >= 0; n--) {
            let l = e.charAt(n);
            for (let e in this.altariscos)
                if (l === e) {
                    let n = parseInt(this.altariscos[e]);
                    null !== o && n < o && (n *= -1),
                    t += n,
                    o = n
                }
        }
        return t
    },

    // decimalToRoman: function(e) {
    //     let t = ""
    //       , o = 0
    //       , n = e
    //       , l = [1e3, 500, 100, 50, 10]
    //       , a = ["M", "D", "C", "L", "X"]
    //       , r = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    //     for (let i = 0; i < l.length; i++) {
    //         if (o = parseInt(n / l[i]),
    //         n = e % l[i],
    //         o > 0)
    //             for (let e = 0; e < o; e++)
    //                 t += a[i];
    //         if (n < 10) {
    //             t += r[n - 1];
    //             break
    //         }
    //     }
    //     return t
    // }

};

//forma 2 de fazer o conversor

function romano2Int(romano) {
    let n = 0
    console.log(romano)

    const numeros= {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for (let i=0; i < (romano = romano.toUpperCase()).length; i++) {
        let atual = romano[i];
        let prox = romano[i+1];

        if(prox && numeros[prox] > numeros[atual]) {
            n -= numeros[atual];
        } else {
            n += numeros[atual];
        }
    }
    return n;
};

//outra forma de fazer o conversor

// document.getElementById("btnConverter1").addEventListener("click", function() {
//     let e = document.getElementById("romano1").value;
//     document.getElementById("decimal1").value = Conversor.romanToDecimal(e)
// });

document.getElementById("btnConverter1").addEventListener("click", function() {
    let e = document.getElementById("romano1").value;
    document.getElementById("decimal1").value = romano2Int(e)
    console.log('aqui', document.getElementById("decimal1").value = romano2Int(e))
});

// document.getElementById("btnConverter2").addEventListener("click", function() {
//     let e = parseInt(document.getElementById("decimal2").value);
//     document.getElementById("romano2").value = Conversor.decimalToRoman(e)
// });
