function avg() {
    var sum = 0;
    for (a in arguments) {
        sum = sum + arguments[a];
        //console.log("sum="+sum);
    }
    return sum / arguments.length;
}
res = avg(1, 2, 3, 4);
console.log("avg=" + res);

m = [1, 2, 3];
res2 = avg.apply(null, m);
console.log("avg arr=" + res2);

function makeShout() {
    var phrase = "Привет!";
    var shout = function () {
        console.log(phrase);
    }
    phrase = "Готово!"
    return shout;
}
shout = makeShout();
// что выдаст?
console.log(shout());

function sum(x) {
    let plus = function (y) {
        return x + y;
    }
    return plus;
}

console.log(sum(2)(2));

var plus1 = sum(1);
console.log(plus1(2));

function makeProperty(o, name, predicate) {
    var value;
    o["get" + name] = function () { return value; };

    o["set" + name] = function (v) {
        if (predicate && !predicate(v))
            throw "set" + name + ": invalid value " + v;
        else
            value = v;
    };
}

/*Данная функция может быть использована для создания инкапсулированных данных 
с проверкой их типа; разобрать и объяснить вызов:*/

var o = {};
makeProperty(o, "Name", function (x) {
    return typeof x == "string";
});
o.setName("Frank");
console.log(o.getName());
try {o.setName(0);} catch (e){}

function info(obj, f){
    console.log("{");
    for (const prop in obj) {
        //console.log(prop+":"+obj[prop]);
        f(prop, obj[prop]);
    }
    console.log("}");
}
info({name: "John", age: 20}, (p,v)=>console.log(v+";"));
info({name: "John", age: 20, gender:"M"}, (p,v)=>console.log(`"${p}":"${v}"`));
