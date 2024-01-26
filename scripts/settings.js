function settings() {
    const style = document.body.style;
    const v = i()
    const fontfamily = document.getElementById('fontFamily').value;
    const a = document.getElementById('text_color').value;
    const c = document.getElementById('text_size').value + "px";
    style.backgroundColor = v;
    style.color = a;
    style.fontSize = c;
    style.fontFamily = fontfamily;

    

    
} 
function i() {
    const v = document.getElementById('bg_color').value;
    console.log(v);
    return v
}
function getSystemInformation() {
    const systemInfo = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        cookieEnabled: navigator.cookieEnabled,
        doNotTrack: navigator.doNotTrack
    };

    if (navigator.hardwareConcurrency !== undefined) {
        systemInfo.cpuCores = navigator.hardwareConcurrency;
    }

    if (navigator.maxTouchPoints !== undefined) {
        systemInfo.touchPoints = navigator.maxTouchPoints;
    }

    if (navigator.bluetooth !== undefined) {
        systemInfo.bluetoothAvailable = true;
    }

    if (navigator.geolocation !== undefined) {
        systemInfo.geolocationAvailable = true;
    }

    if (navigator.mediaDevices !== undefined) {
        systemInfo.mediaDevicesAvailable = true;
    }

    if (navigator.permissions !== undefined) {
        systemInfo.permissionsAPIAvailable = true;
    }

    if (navigator.userAgentData !== undefined) {
        systemInfo.userAgentDataAvailable = true;
    }

    return systemInfo;
}

function displaySystemInformation() {
    const systemInfo = getSystemInformation();
    const systemInfoDiv = document.getElementById('system-info');

    let systemInfoString = "";

    if (systemInfo.userAgent !== undefined) {
        systemInfoString += `User Agent: ${systemInfo.userAgent}<br>`;
    }

    if (systemInfo.language !== undefined) {
        systemInfoString += `Browser Language: ${systemInfo.language}<br>`;
    }

    if (systemInfo.platform !== undefined) {
        systemInfoString += `Platform: ${systemInfo.platform}<br>`;
    }

    if (systemInfo.cookieEnabled !== undefined) {
        systemInfoString += `Cookies Enabled: ${systemInfo.cookieEnabled}<br>`;
    }

    if (systemInfo.doNotTrack !== undefined) {
        systemInfoString += `Do Not Track: ${systemInfo.doNotTrack}<br>`;
    }

    if (systemInfo.cpuCores !== undefined) {
        systemInfoString += `CPU Cores: ${systemInfo.cpuCores}<br>`;
    }

    if (systemInfo.touchPoints !== undefined) {
        systemInfoString += `Touch Points: ${systemInfo.touchPoints}<br>`;
    }

    if (systemInfo.bluetoothAvailable !== undefined) {
        systemInfoString += `Bluetooth Available: ${systemInfo.bluetoothAvailable}<br>`;
    }

    if (systemInfo.geolocationAvailable !== undefined) {
        systemInfoString += `Geolocation Available: ${systemInfo.geolocationAvailable}<br>`;
    }

    if (systemInfo.mediaDevicesAvailable !== undefined) {
        systemInfoString += `Media Devices Available: ${systemInfo.mediaDevicesAvailable}<br>`;
    }

    if (systemInfo.permissionsAPIAvailable !== undefined) {
        systemInfoString += `Permissions API Available: ${systemInfo.permissionsAPIAvailable}<br>`;
    }

    if (systemInfo.userAgentDataAvailable !== undefined) {
        systemInfoString += `User Agent Data Available: ${systemInfo.userAgentDataAvailable}<br>`;
    }

    systemInfoDiv.innerHTML = systemInfoString;
}

displaySystemInformation();
