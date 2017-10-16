var reg_tag = "<p>Hello, World.</p>";
var alt_tag = "<p>Hello, CoverMyMeds</p>";

for (var i = 1; i <= 300; i++) {
    if (i % 5 === 0) {
        var alt_el = document.createElement("div");
        alt_el.classList.add("box");
        alt_el.innerHTML = alt_tag;
        document.body.appendChild(alt_el);
    } else {
        var reg_el = document.createElement("div");
        reg_el.classList.add("box");
        reg_el.innerHTML = reg_tag;
        document.body.appendChild(reg_el);
    }
}