function findGCD(number1, number2) {
    // İki pozitif tamsayıyı başlat
    let num1 = parseInt(number1);
    let num2 = parseInt(number2);

    // Sonuç için bir değişken başlat
    let GCD;

    // Hatalı girişleri kontrol et
    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        return "Lütfen iki pozitif tamsayı giriniz.";
    }

    // İki sayının en büyük ortak bölenini bul
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    // Sonuç en büyük ortak böleni göster
    GCD = num1;
    return GCD;
}

// Kullanıcıdan iki pozitif tamsayı al
let number1 = prompt("İlk pozitif sayıyı giriniz:");
let number2 = prompt("İkinci pozitif sayıyı giriniz:");

// Sonucu ekrana yazdır
let result = findGCD(number1, number2);
console.log("En büyük ortak bölen:", result);
