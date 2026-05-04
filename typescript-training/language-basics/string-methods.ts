let originalString: string = " Username : Admin | Password : admin123 ";
console.log(`"${originalString.replace(/[^a-zA-Z0-9]/g,"")}"`);