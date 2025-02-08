const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');
const resultDiv = document.getElementById('predictionResult');
const loader = document.getElementById('loader');

// Drag and drop handlers
dropZone.addEventListener('click', () => fileInput.click());
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '#3498db';
});
dropZone.addEventListener('dragleave', () => {
    dropZone.style.borderColor = '#bdc3c7';
});
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '#bdc3c7';
    const file = e.dataTransfer.files[0];
    handleFile(file);
});

// File input handler
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    handleFile(file);
});

function handleFile(file) {
    if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        imagePreview.style.display = 'block';
        predictImage(file);
    };
    reader.readAsDataURL(file);
}

async function predictImage(file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
        loader.style.display = 'block';
        resultDiv.innerHTML = '';

        const response = await fetch('/predict', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error);
        }

        imagePreview.innerHTML = `<img src="${data.image_url}" alt="Result">`;
        resultDiv.innerHTML = `
            <h3>Prediction: ${data.prediction}</h3>
            <p>Confidence: ${data.confidence}%</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    } finally {
        loader.style.display = 'none';
    }
}