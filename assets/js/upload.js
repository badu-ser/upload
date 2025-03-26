function reportInfo(vars, showType = false) {
    if (showType === true) console.log(typeof vars);
    console.log(vars);
}

function addImg(ele, content) {
    var myDIV = document.querySelector(ele);
    var newContent = document.createElement('div');
    newContent.innerHTML = content;

    while (newContent.firstChild) {
        myDIV.appendChild(newContent.firstChild);
    }
}
var feedback = function(res) {
    var statusDiv = document.querySelector('.upload-status');
    statusDiv.innerHTML = '';
    
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        var content = `
            <div class="alert alert-success mt-3">
                <input class="form-control mb-2" value="${get_link}" onclick="this.select()">
                <img src="${get_link}" class="img-fluid rounded">
            </div>
        `;
        statusDiv.innerHTML = content;
    } else {
        statusDiv.innerHTML = `<div class="alert alert-danger">Upload failed: ${res.data.error}</div>`;
    }
};

// Initialize with modified options
var imgurClient = new Imgur({
    clientid: '146def7f79c7a87',
    callback: feedback
});

// Add click handler for the button
document.querySelector('.upload-button').addEventListener('click', function() {
    document.getElementById('imgurUpload').click();
});
new Imgur({
    clientid: '146def7f79c7a87', //You can change this ClientID
    callback: feedback
});
