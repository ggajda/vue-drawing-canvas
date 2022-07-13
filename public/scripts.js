var convert = () => {
    const element = document.getElementById('pdf');
    const opt = {
        margin: 1,
        filename: 'PDFfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
    //html2pdf().set(opt).from(element).output('test.pdf', 'F');
}