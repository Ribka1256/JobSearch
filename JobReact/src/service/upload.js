
function setupUploader(uploadId, previewId, targetMainImage) {
    const upload = document.getElementById(uploadId);
    const preview = document.getElementById(previewId);

    upload.addEventListener("change", function () {
        const files = this.files;
        for (let file of files) {
            if (!file.type.startsWith("file/")) continue;

            const reader = new FileReader();
            reader.onload = function (e) {
                const imgSrc = e.target.result;

                targetArray.push(imgSrc);

                const img = document.createElement("img");
                img.src = imgSrc;
                img.style.width = "80px"; 
                img.style.cursor = "pointer";
                img.title = "Double click to delete";
                img.classList.add("selectable-item");

                // Click to show on model
                img.addEventListener("click", () => {
                    if(targetMainImage) {
                        targetMainImage.src = img.src;
                        targetMainImage.style.display = "block";
                    }
                });

                // NEW: Double click to delete mechanism
                img.addEventListener("dblclick", () => {
                    const index = targetArray.indexOf(imgSrc);
                    if (index > -1) targetArray.splice(index, 1);
                    img.remove();
                    // Clear main image if it was the one deleted
                    if (targetMainImage.src === imgSrc) {
                        targetMainImage.src = "";
                        targetMainImage.style.display = "none";
                    }
                });

                preview.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
        upload.value = "";
    });
}

// Initializing Uploaders
setupUploader("upload", "preview", mainM1);   