import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent {
  categoryForm: FormGroup;
  isEditing: boolean = false;
categorie!:Categorie;
  constructor(private fb: FormBuilder, private categoryService: CategoriesService,private route: ActivatedRoute,private router: Router) {

    this.categoryForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', Validators.required],
      description: [''],
      available: [false]
    });
  }

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('id');

    if (categoryId) {
      this.isEditing = true;
      this.categoryService.getCategoryById(+categoryId).subscribe({
        next: (category) => {
          this.categoryForm.patchValue(category); // Pré-remplir le formulaire avec les données de la catégorie
        },
        error: (err) => {
          console.error('Erreur lors de la récupération de la catégorie:', err);
        }
      });
    }
  }

  onSave(): void {
    if (this.categoryForm.valid) {
      const category: Categorie = this.categoryForm.value;
      if (this.isEditing) {
        const categoryId = this.route.snapshot.paramMap.get('id'); // Ensure the ID is being captured here
        if (categoryId) {
          category.id = +categoryId; // Set the ID to the category data
          this.categoryService.updateCategory(category).subscribe({
            next: () => {
              console.log('Category updated successfully');
              this.router.navigate(['/']); // Navigate to the category list
            },
            error: (err) => {
              console.error('Error updating category:', err);
            }
          });
        }
      } else {
        this.categoryService.addCategory(category).subscribe({
          next: () => {
            console.log('Category added successfully');
            this.router.navigate(['/']); // Navigate to the category list
          },
          error: (err) => {
            console.error('Error adding category:', err);
          }
        });
      }
    }
  }
}
