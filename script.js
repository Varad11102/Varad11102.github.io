document.getElementById('download-btn').addEventListener('click', () => {
    const element = document.querySelector('.container');
    html2pdf(element, {
        margin:       0.5,
        filename:     'Resume_Boyanapally_Varadh_Kumar.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
});
