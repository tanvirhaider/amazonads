




export default class Observer {
    constructor (element) {


        let targetElement = document.querySelector(element);
        let targetHeight = targetElement.clientHeight;
        let viewportHeight = window.innerHeight;

        console.log("element height: ", targetHeight);
        console.log("viewport height: ",viewportHeight);

        // if (targetHeight < viewportHeight) {
        //     var placeHolder = document.createElement("div");
        //     targetElement.appendChild (placeHolder);
        //     placeHolder.style.position = "absolute";
        //     placeHolder.style.height = viewportHeight + "px";
        //     placeHolder.style.width = 100 + "px";
        //     placeHolder.style.top = 0 + "px";
        // }


        function buildThresholdList() {
            let thresholds = [];
            let numSteps = 1000;
            for (let i=1.0; i<=numSteps; i++) {thresholds.push(i/numSteps);}
            thresholds.push(0);
            return thresholds;
        }

        function createObserver() {
            let observer;
            let options = {
                root: null,
                rootMargin: "0px",
                threshold: buildThresholdList()	
            };
    
            observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(targetElement);
        }

        function handleIntersect(entries, observer) {

            var windowHeight = window.innerHeight;
    
            var objectYpos = entries[0].boundingClientRect.y;
            var objectBottomPos = entries[0].boundingClientRect.bottom;
            var diff = (windowHeight - objectYpos);
            var percentageDisplayed = ( objectYpos / windowHeight) * 100;
    
            //if (diff < 0) { stopMediaInAGroup (whichPlayer); }
            //if (objectBottomPos < 0) { stopMediaInAGroup (whichPlayer); }

            console.group("observer: ",element);
            console.log("screen height: ",windowHeight);
            console.log("y position: ",objectYpos);
            console.log("percentage displayed: ",percentageDisplayed);
            console.log(" diff: ",diff);
            console.groupEnd("observer: ",element);
    
        }
    
        createObserver();

    }
}

