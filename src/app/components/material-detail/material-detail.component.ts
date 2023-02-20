import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Material } from 'src/material';
import { Store } from '@ngrx/store';
import { selectMaterialById } from 'src/app/state/selectors/materials.selectors';


@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.css']
})
export class MaterialDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private store: Store,
  ) {}

  id = this.route.snapshot.params['id'];
  material: Material = {id: -1, title: '', count: 0, description: ''}

  ngOnInit() {
    this.store.select(selectMaterialById(this.id))
      .subscribe(value => this.material = value || {id: -1, title: '', count: 0, description: ''})
  }
}
