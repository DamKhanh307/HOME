document.addEventListener("DOMContentLoaded", function() {
    var lnInfoContainer = document.querySelector('.List-LN-Group');
    var lnInfoTemplate = lnInfoContainer.querySelector('.LN_info');
    var imageSrcs = ["./Illu_Cover/LN_2nd_Vol_02-00.jpg", "./Illu_Cover/LN_2nd_Vol_03-00.jpg", "./Illu_Cover/LN_2nd_Vol_04-00.jpg", "./Illu_Cover/LN_2nd_Vol_4.5-00.jpg","./Illu_Cover/LN_2nd_Vol_05-00.jpg", "./Illu_Cover/LN_2nd_Vol_06-00.jpg", "./Illu_Cover/LN_2nd_Vol_07-00.jpg", "./Illu_Cover/LN_2nd_Vol_08-00.jpg", "./Illu_Cover/LN_2nd_Vol_09-00.jpg", "./Illu_Cover/LN_2nd_Vol_9.5-00.jpg","./Illu_Cover/LN_2nd_Vol_10-00.jpg","./Illu_Cover/LN_2nd_Vol_10.25-00.webp"]
    
    var content = `ClassRoom Of The Elite Vol`
    var List_Name_Title = []
    var a_title = []
    for (i of imageSrcs){
        var vol = i.indexOf('Vol');
        var L = i.indexOf('-00');
        var done = i.slice(vol + 4, L);
        var t = i.slice(vol,L)
        List_Name_Title.push(`ClassRoom Of The Elite Vol ${done}`);
        a_title.push(t)
    }

    for (var i = 0; i < 12; i++) {
        var clonedLnInfo = lnInfoTemplate.cloneNode(true);
        
        var lnImage = clonedLnInfo.querySelector('img');
        lnImage.src = imageSrcs[i];

        var lnHeading = clonedLnInfo.querySelector('h3');
        lnHeading.textContent = List_Name_Title[i];

        var link_title = clonedLnInfo.querySelector('a')

        link_title.title = a_title[i]

        lnInfoContainer.appendChild(clonedLnInfo);
    }
})