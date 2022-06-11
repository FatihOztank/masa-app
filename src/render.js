const iframeView = document.getElementById("iframe");


const callback = function(mutationList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
            if(mutation.addedNodes.length){
                console.log("mutations: ", mutation.addedNodes)
            }
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
            mutation.target
        }
    }
};

function anan(){
    const iframeDocument = iframeView.contentWindow.document;
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };


    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(iframeDocument, config);


//console.log("anan", iframeView.contentWindow.document.querySelectorAll("p"))
}