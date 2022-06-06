let title =  document.getElementById("title");

const Writen = () => {

    const textoArray = title.innerHTML.split('');
    title.innerHTML = "";

    textoArray.forEach((letter, i) => {
        setTimeout(() => {
            title.innerHTML += letter
            console.log(letter)
        }, 85 * i)
    });

};

Writen();