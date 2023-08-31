var instagramLink = document.getElementById("instagram-link");

        // Detect iOS
        var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        // Detect Android
        var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;

        if (isIOS || isAndroid) {
            instagramLink.href = "instagram://user?username=amova_oficial";
        } else {
            instagramLink.href = "https://www.instagram.com/amova_oficial/";
        }