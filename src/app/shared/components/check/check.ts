import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  imports: [],
  templateUrl: './check.html',
  styleUrl: './check.css',
})
export class Check {
  //for upload image
  isLoading = false;
  imagePreviews: string[] = [];
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    console.log("Image review",this.imagePreviews)
    Array.from(input.files).forEach((file) => {
          console.log("file", file)
      const reader = new FileReader();
      console.log("reader", reader)
      reader.onload = () => {
        this.imagePreviews.push(reader.result as string);
        // Also save to localStorage if you want persistence for multiple images:
        localStorage.setItem('savedImages', JSON.stringify(this.imagePreviews));
      };
      reader.readAsDataURL(file);
    });
      // Reset input value to allow re-selection of the same file
     input.value = '';
  }
  ngOnInit() {
    const saved = localStorage.getItem('savedImages');
    if (saved) {
      this.imagePreviews = JSON.parse(saved);
    }
  }
  selectedImageIndex: number | null = null;

selectImage(index: number) {
    if (this.imagePreviews.length > 1) {
    this.selectedImageIndex = index;
  }
}


  deleteSelectedImage() {
    if (this.imagePreviews.length === 1) {
    // If only one image, delete it without selection
    this.imagePreviews = [];
  } else if (this.selectedImageIndex !== null) {
    // If multiple images, delete the selected one
    this.imagePreviews.splice(this.selectedImageIndex, 1);
  }
// Update storage
// We immediately save the new array to localStorage so that refreshing the page won’t bring back deleted images.
  localStorage.setItem('savedImages', JSON.stringify(this.imagePreviews));
//   Clear selection
// After deleting, we set selectedImageIndex back to null so no image is “selected” anymore.
  this.selectedImageIndex = null;
}

}
