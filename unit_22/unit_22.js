//  Task 1
// Добавьте в код функции try catch так, чтобы вместо ошибки выводилось в out-1 цифра 1.


function t1() {
    // тут добавляете try
    let a = 22;

    try {
        let c = a + d;
    }
    // тут catch
    catch {
        document.querySelector('.out-1').innerHTML = 1;
    }
    // .. и вывод

}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-2.

function t2() {
    let a = 4;
    let b = 5;
    try {
        document.querySelector('.out-2222222').innerHTML = a * b;
    }
    catch {
        document.querySelector('.out-2').innerHTML = a * b;
    }


}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-3. Если его нет - создавайте в коде. 
// т.е. вы не знаете будет или нет он в html.

function t3() {
    let a = 4;
    let b = 5;
    try {
        document.querySelector('.out-3').innerHTML = a * b;
    }
    catch {
        let div = document.createElement('div');
        div.classList.add('out-3');
        div.innerHTML = a * b;
        document.querySelector('.b-3').after(div);
    }
    document.querySelector('.out-3').innerHTML = a * b;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Дана переменная a. В переменную делается push. Используя try catch отловите ошибки если они есть. Если ошибка вывести в out-4 число 0. Если не ошибка - то результирующий массив через пробел.

let a = [2, 3, 4];
// a = 5;

function t4() {
    out = '';
    try {
        a.push(7);

        for (let item of a) {
            out += `${item} `;
        }
    }
    catch {
        out = 0;
    }
    document.querySelector('.out-4').innerHTML = out;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Добавьте try, catch, finnaly так, чтобы в out-5 выводился 0 при ошибки. А в out-5-1 всегда выводилось слово 'finnaly';

function t5() {
    let p = document.querySelectorAll('p');
    try {
        p.push(3);
    }
    catch {
        document.querySelector('.out-5').innerHTML = 0;
    }
    finally {
        document.querySelector('.out-5-1').innerHTML = 'finnaly';
    }

}

document.querySelector('.b-5').onclick = t5;

