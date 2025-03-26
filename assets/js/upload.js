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
// Update feedback handler
var feedback = function(res) {
    var statusDiv = document.querySelector('.upload-status');
    
    if (res.success) {
        var link = res.data.link.replace(/^http:/i, 'https:');
        statusDiv.innerHTML = `
            <div class="upload-result">
                <input value="${link}" readonly class="link-box">
                <img src="${link}" class="preview">
            </div>
        `;
    } else {
        statusDiv.innerHTML = 'Upload failed. Please try another image.';
    }
};

// Initialize Imgur client
var imgurClient = new Imgur({
    clientid: '146def7f79c7a87', // Replace with your ID
    callback: feedback
});

// Connect button to file input
document.querySelector('.upload-button').addEventListener('click', function() {
    document.getElementById('imgurUpload').click();
});

// Handle file selection
document.getElementById('imgurUpload').addEventListener('change', function(e) {
    Array.from(e.target.files).forEach(file => {
        imgurClient.matchFiles(file, document.body); // Status will append to body
    });
    e.target.value = ''; // Reset input
});

// Initialize with modified options
