document.addEventListener('DOMContentLoaded', function() {
    // Check if the TV Input Device API is supported
    if (tizen.systeminfo.getCapability('http://tizen.org/feature/tv.inputdevice')) {
        console.log('TV Input Device API is supported.');
    } else {
        console.log('TV Input Device API is not supported.');
        return;
    }

    // Get the TVInputDeviceManager object
    var tvInputDeviceManager = tizen.tvinputdevice;

    // Register keys
    var keysToRegister = ["VolumeUp", "VolumeDown"];
    tvInputDeviceManager.registerKeyBatch(keysToRegister, function() {
        console.log('Keys registered successfully.');
    }, function(error) {
        console.error('Failed to register keys: ' + error.name);
    });

    // Map to store key codes
    var keyCodeMap = {};

    // Get the list of supported keys
    var supportedKeys = tvInputDeviceManager.getSupportedKeys();
    for (var i = 0; i < supportedKeys.length; i++) {
        keyCodeMap[supportedKeys[i].name] = supportedKeys[i].code;
    }

    // Navigation logic
    var icons = document.querySelectorAll('.icons-container .icon');
    var currentIndex = 0;

    // Function to set the active icon and apply hover effect
    function setActiveIcon(index) {
        icons.forEach((icon, i) => {
            if (i === index) {
                icon.classList.add('active');
                icon.style.backgroundColor = "#c7c3c7";
                icon.style.color = "#e6c910";
            } else {
                icon.classList.remove('active');
                icon.style.backgroundColor = "";
                icon.style.color = "white";
            }
        });
    }

    // Set the initial active icon
    setActiveIcon(currentIndex);

    // Handle key events
    window.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowUp':
                currentIndex = (currentIndex === 0) ? icons.length - 1 : currentIndex - 1;
                setActiveIcon(currentIndex);
                break;
            case 'ArrowDown':
                currentIndex = (currentIndex === icons.length - 1) ? 0 : currentIndex + 1;
                setActiveIcon(currentIndex);
                break;
            case 'ArrowLeft':
                currentIndex = (currentIndex === 0) ? icons.length - 1 : currentIndex - 1;
                setActiveIcon(currentIndex);
                break;
            case 'ArrowRight':
                currentIndex = (currentIndex === icons.length - 1) ? 0 : currentIndex + 1;
                setActiveIcon(currentIndex);
                break;
            case 'Enter':
                console.log('Enter key pressed on icon index: ' + currentIndex);
                var link = icons[currentIndex].querySelector('a');
                if (link) {
                    link.click();
                } else {
                    console.error('No link found for the active icon.');
                }
                break;
            case 'Back':
                console.log('Back key pressed.');
                // Handle Back key press if needed
                break;
            default:
                break;
        }
    });
});