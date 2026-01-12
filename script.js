function openWhatsApp(product) {
    let phone = "YOUR_PHONE_NUMBER"; // add your WhatsApp number here with country code, e.g., 923001234567
    let message = `Hello, I want to order: ${product}`;
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
