let db;

// Loads local data and shows proper page when application is opened
document.addEventListener('DOMContentLoaded', async function(event) {
    await loadLocalInfo();
    showTab(db.tab);
});

// Saves the data into localStorage, except for font, when save button is clicked
function saveLocalInfo() {
    let cname = document.getElementsByName("cname")[0].value;
    
    window.localStorage.setItem("cname", cname);
    window.localStorage.setItem("tab", 1);

    window.location.reload();
}

// Loads the localStorage info when application is started, if there is no local data
// then create variables with arbitrary values
function loadLocalInfo() {
    let cname = window.localStorage.getItem("cname");
    let tab = window.localStorage.getItem("tab");
    let font = window.localStorage.getItem("font");
    
    if (tab == null) tab = 0;
    if (cname == null) cname = 'Client Name';
    if (font == null) font = "Veranda, serif;";

    db = {
        'cname': cname,
        'tab': tab,
        'font': font
    };
}

// Shows the page depending on whether the clients name is saved or not
function showTab(tab) {
    var x = document.getElementById("grid");

    // Based on whether its the first page (0), which users will set the client name and font
    // or the second page (1) which the users clients will see
    if (tab == 0) {
        x.innerHTML = `
            <div class="middle">
                <div class="font-choice">
                    <select name="fonts" id="fonts" onchange="changeFont(this)">
                        <option>Choose a Font Style</option>
                        <option class="font-choices" value="arial" style="font-family: Arial;">Arial</option>
                        <option class="font-choices" value="bahns" style="font-family: Bahnschrift;">Bahnschrift</option>
                        <option class="font-choices" value="calibri" style="font-family: Calibri;">Calibri</option>
                        <option class="font-choices" value="cambria" style="font-family: Cambria;">Cambria</option>
                        <option class="font-choices" value="candara" style="font-family: Candara;">Candara</option>
                        <option class="font-choices" value="corbel" style="font-family: Corbel;">Corbel</option>
                        <option class="font-choices" value="consolas" style="font-family: Consolas;">Consolas</option>
                        <option class="font-choices" value="courier" style="font-family: Courier;">Courier</option>
                        <option class="font-choices" value="ebrima" style="font-family: Ebrima;">Ebrima</option>
                        <option class="font-choices" value="franklin" style="font-family: Franklin Gothic Medium;">Franklin Gothic</option>
                        <option class="font-choices" value="gabriola" style="font-family: Gabriola;">Gabriola</option>
                        <option class="font-choices" value="gadugi" style="font-family: Gadugi;">Gadugi</option>
                        <option class="font-choices" value="georgia" style="font-family: Georgia, serif;">Georgia</option>
                        <option class="font-choices" value="helvetica" style="font-family: Helvetica;">Helvetica</option>
                        <option class="font-choices" value="inkfree" style="font-family: Ink Free;">Ink Free</option>
                        <option class="font-choices" value="leelaw" style="font-family: Leelawadee UI;">Leelawadee</option>
                        <option class="font-choices" value="luminari" style="font-family: Luminari;">Luminari</option>
                        <option class="font-choices" value="malgun" style="font-family: Malgun Gothic;">Malgun</option>
                        <option class="font-choices" value="nsimsum" style="font-family: NSimSum;">NSimSum</option>
                        <option class="font-choices" value="optima" style="font-family: Optima, sans-serif;">Optima</option>
                        <option class="font-choices" value="trebuchet" style="font-family: Trebuchet MS;">Trebuchet</option>
                    </select>
                </div>
                <br>
                <br>
                <div id="sample">
                    <p style="`+ db.font +` font-size: 20px;">
                        This is a sample of the font chosen above.
                        <br>
                        The quick brown fox jumps over the lazy dog.
                        <br>
                        0 1 2 3 4 5 6 7 8 9
                    </p>
                </div>
                <div class="client">
                    <br>
                    <br>
                    <br>
                    <br>
                    <p>What is the clients name?</p>
                    <input type="text" name="cname" value="" placeholder="Client Name..." />
                    <button id="save" onclick="saveData()">Save</button>
                </div>
            </div>
        `
    }
    else {
        x.innerHTML = `
            <div class="header">
                <button id="clear" onclick="clearData()">Clear Data</button>
            </div>
            <div class="grid-container middle" style="` + db.font + `">
                <div class="client">
                    <img class="grid-images" src="../Understanding You/Images/client.png">
                    <div class="top-client" onclick="openFolder()">Understanding You</div>
                    <div class="grid-client">`+ db.cname +`</div>
                </div>
                <div class="vision">
                    <input type="image" class="grid-images" src="../Understanding You/Images/vision.jpg" onclick="openFile('Vision')">
                    <div class="grid-text">Vision</div>
                </div>
                <div class="portfolio"> 
                    <input type="image" class="grid-images" src="../Understanding You/Images/portfolio.jpg" onclick="openFile('Portfolio Review')">
                    <div class="grid-text">Portfolio Review</div>
                </div>
                <div class="wheel">
                    <img class="grid-images" src="../Understanding You/Images/wheel.jpg">
                </div>
            </div>
        `
    }
}

// Calls saveData() and showTab() when information is saved on first page
function saveData() {
    saveLocalInfo();
    showTab(db.tab);
}

// Clears the data in the localStorage, for dev only
function clearData() {
    window.localStorage.clear();
}

// Calls the openFile function in main.js
function openFile(name) {
    window.Bridge.openFile(name);
}

// Calls the openFolder function in main.js
function openFolder() {
    window.Bridge.openFolder();
}

// Changes font style based on choice by user
function changeFont(fontstyle) {
    if (fontstyle.value == 'arial') {
        saveFont('font-family: Arial;');
    }
    else if (fontstyle.value == 'bahns') {
        saveFont('font-family: Bahnschrift;');
    }
    else if (fontstyle.value == 'calibri') {
        saveFont('font-family: Calibri;');
    }
    else if (fontstyle.value == 'cambria') {
        saveFont('font-family: Cambria; font-size: 20px;');
    }
    else if (fontstyle.value == 'candara') {
        saveFont('font-family: Candara;');
    }
    else if (fontstyle.value == 'corbel') {
        saveFont('font-family: Corbel;');
    }
    else if (fontstyle.value == 'consolas') {
        saveFont('font-family: Consolas;');
    }
    else if (fontstyle.value == 'courier') {
        saveFont('font-family: Courier;');
    }
    else if (fontstyle.value == 'ebrima') {
        saveFont('font-family: Ebrima;');
    }
    else if (fontstyle.value == 'franklin') {
        saveFont('font-family: Franklin Gothic Medium;');
    }
    else if (fontstyle.value == 'gabriola') {
        saveFont('font-family: Gabriola;');
    }
    else if (fontstyle.value == 'gadugi') {
        saveFont('font-family: Gadugi;');
    }
    else if (fontstyle.value == 'georgia') {
        saveFont('font-family: Georgia, serif;');
    }
    else if (fontstyle.value == 'helvetica') {
        saveFont('font-family: Helvetica;');
    }
    else if (fontstyle.value == 'inkfree') {
        saveFont('font-family: Ink Free;');
    }
    else if (fontstyle.value == 'leelaw') {
        saveFont('font-family: Leelawadee UI;');
    }
    else if (fontstyle.value == 'luminari') {
        saveFont('font-family: Luminari, fantasy;');
    }
    else if (fontstyle.value == 'malgun') {
        saveFont('font-family: Malgun Gothic;');
    }
    else if (fontstyle.value == 'nsimsum') {
        saveFont('font-family: NSimSum;');
    }
    else if (fontstyle.value == 'optima') {
        saveFont('font-family: Optima, sans-serif;');
    }
    else if (fontstyle.value == 'trebuchet') {
        saveFont('font-family: Trebuchet MS;');
    }
}

// Saves the font on font change by user
function saveFont(item) {
    window.localStorage.setItem("font", item);
    
    let x = document.getElementById("sample");

    // This is the sample style shown below the font dropdown
    x.innerHTML = `
        <p style="`+ db.font +` font-size: 20px;">
            This is a sample of the font chosen above.
            <br>
            The quick brown fox jumps over the lazy dog.
            <br>
            0 1 2 3 4 5 6 7 8 9
        </p>    
    `;

    // reloads the page to show the new font chosen
    window.location.reload();
}

