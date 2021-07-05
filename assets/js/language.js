const ESP_LANG = "es";
const ENG_LANG = "en"

let objetoTexto = [{
        id: "menuBienvenido",
        [ESP_LANG]: "Bienvenidos",
        [ENG_LANG]: "Welcome"
    },
    {
        id: "menuSobreNosotros",
        [ESP_LANG]: "Sobre nosotros",
        [ENG_LANG]: "About us"
    },
    {
        id: "menuSobre4Tuna",
        [ESP_LANG]: "4Tuna",
        [ENG_LANG]: "4Tuna"
    },
    {
        id: "menuCasosDeExito",
        [ESP_LANG]: "Casos de éxito",
        [ENG_LANG]: "Success stories"
    },
    {
        id: "menuContacto",
        [ESP_LANG]: "Contáctanos",
        [ENG_LANG]: "Contact"
    },
    {
        id: "textoBienvenida",
        [ESP_LANG]: 'Bienvenidos al novedoso y moderno escenario de la gestión proactiva de procesos del negocio, un concepto innovador de mejoras creativas relevantes, mediante el uso intensivo de tecnología de siguiente generación.',
        [ENG_LANG]: 'We are passionate about turning each Client into a true "Success Case", we deliver to the Local and Global Industry, a Real Solution that finally ensures spectacular improvements in terms of Productivity, Efficiency and Profitability'
    },

]

function languageReady() {
    setLang();
    $(".changeLang").click(function () {
        insertParam("lang", this.id)
    })
}


function setLang() {
    let language = findGetParameter("lang")
    language = language || getLanguageBrowser()
    objetoTexto.forEach(element => {
        $(`#${element.id}`).html(element[language])
    })
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function insertParam(key, value) {
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);

    // kvp looks like ['key1=value1', 'key2=value2', ...]
    var kvp = document.location.search.substr(1).split('&');
    let i = 0;

    for (; i < kvp.length; i++) {
        if (kvp[i].startsWith(key + '=')) {
            let pair = kvp[i].split('=');
            pair[1] = value;
            kvp[i] = pair.join('=');
            break;
        }
    }

    if (i >= kvp.length) {
        kvp[kvp.length] = [key, value].join('=');
    }

    // can return this or...
    let params = kvp.join('&');

    // reload page with new params
    document.location.search = params;
}

function getLanguageBrowser() {
    let lang = window.navigator.language || window.navigator.userLanguage
    if (lang.includes("es"))
        return ESP_LANG

    if (lang.includes("en"))
        return ENG_LANG

}