
// QR Code Generator Script

const qrCode = new QRCodeStyling({
    width: 250,
    height: 250,
    type: "svg",
    data: "",
    dotsOptions: {
        color: "#000",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#fff"
    }
});

document.getElementById("generateBtn").addEventListener("click", function () {
    const inputData = document.getElementById("textInput").value.trim();
    const qrContainer = document.getElementById("qrCode");

    if (inputData === "") {
        alert("Please enter some text or URL to generate the QR Code.");
        return;
    }

    qrCode.update({ data: inputData });
    qrContainer.innerHTML = "";
    qrCode.append(qrContainer);
});

document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    qrCode.update({
        dotsOptions: {
            color: isDark ? "#fff" : "#000"
        },
        backgroundOptions: {
            color: isDark ? "#000" : "#fff"
        }
    });
});
