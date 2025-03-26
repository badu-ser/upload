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
                <a class="nav-link active" data-toggle="tab" href="#url" role="tab" aria-controls="url" aria-selected="true">URL</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#html" role="tab" aria-controls="html" aria-selected="false">HTML</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#bbcode" role="tab" aria-controls="bbcode" aria-selected="false">BBCODE</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#md" role="tab" aria-controls="md" aria-selected="false">MARKDOW</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="url" role="tabpanel" aria-labelledby="url-tab">
                <div class="my-2"><input class="form-control" value="${get_link}" onclick="this.select();"/></div>
            </div>
            <div class="tab-pane fade" id="html" role="tabpanel" aria-labelledby="html-tab">
                <div class="my-2"><input class="form-control" value="\<img\ src='${get_link}'/>" onclick="this.select();"/></div>
            </div>
            <div class="tab-pane fade" id="bbcode" role="tabpanel" aria-labelledby="bbcode-tab">
                <div class="my-2"><input class="form-control" value="\[img\]${get_link}\[\/img\]" onclick="this.select();"/></div>
            </div>
            <div class="tab-pane fade" id="md" role="tabpanel" aria-labelledby="md-tab">
                <div class="my-2"><input class="form-control" value="![](${get_link})" onclick="this.select();"/></div>
            </div>
        </div>
        <hr><p><img class="img rounded mx-auto d-block" src="${get_link}" alt="Image"/></p>
        </div>`;
        addImg('.status', content);
    }
};

new Imgur({
    clientid: '146def7f79c7a87', //You can change this ClientID
    callback: feedback
});