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
var feedback = function (res) {
    reportInfo(res, true);
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        document.querySelector('.status').classList.add('bg-image', 'center', 'mt-2', 'py-2');
        var content = `<div style="width: 95%;">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#url" role="tab" aria-controls="url" aria-selected="true">
                URL
            </a>
        </li>
    </ul>

    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="url" role="tabpanel" aria-labelledby="url-tab">
            <div class="my-2">
                <input class="form-control text-center" value="${get_link}" onclick="this.select();" readonly/>
            </div>
        </div>
    </div>

    <div class="upload-preview">
        <hr>
        <img class="img-fluid rounded mx-auto d-block" src="${get_link}" alt="Image"/>
    </div>
</div>
<style>.upload-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 10px;
    margin-top: 5px; /* Reducing unnecessary space */
    width: 100%;
    max-width: 300px;
    text-align: center;
}

.upload-preview img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
}</style>`;
        addImg('.status', content);
    }
};

new Imgur({
    clientid: '146def7f79c7a87', //You can change this ClientID
    callback: feedback
});
