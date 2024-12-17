function calculateQ() {
    let k = 0.1;
    let q = 0; 
    let results = []; 
    while (true) {
        q = Math.exp(-k / 2) * (k - 3 * Math.sqrt(k) + 1.2);
        results.push({ k: k.toFixed(1), q: q.toFixed(6) });
        if (q < 0.0001) {
            break;
        }
        k += 0.1;
    }
    displayResults(results);
}
function displayResults(results) {
    const output = document.getElementById("output");
    let tableHTML = "<table>";
    tableHTML += "<tr><th>k</th><th>q</th></tr>";
    results.forEach(result => {
        tableHTML += `<tr><td>${result.k}</td><td>${result.q}</td></tr>`;
    });

    tableHTML += "</table>";
    output.innerHTML = tableHTML;
}
function openCode(){
    window.open("https://github.com/roslyncl/-/blob/main/lab_2_2.html", "_blank");
}
