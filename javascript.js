var audio = new Audio("jumpscare.mp3");

    function randomise(max) {
        var num = Math.floor(Math.random() * max);
        if (num != 6) {                
            document.getElementById("monkey").src = num + ".jpg";
            if (document.getElementById("monkey").classList.contains("jumpscare")) {
                document.getElementById("monkey").classList.remove("jumpscare");
        }
                    
        } else {
            document.getElementById("monkey").src = num + ".jpg";
            document.getElementById("monkey").classList.add("jumpscare");
            audio.play();
        }
    }