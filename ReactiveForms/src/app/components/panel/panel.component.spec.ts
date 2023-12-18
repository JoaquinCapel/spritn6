import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './panel.component';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe restar un numero de pagina cuando se llama a minusPages', () => {
    const initialValue = component.formPanel.get('numberPages')?.value;
    component.minusPages();
    const updatedValue = component.formPanel.get('numberPages')?.value;
    expect(updatedValue).toEqual(Math.max(initialValue - 1, 1));
  });

  it('debe sumar un numero de pagina cuando se llama a plusPages', () => {
    const initialValue = component.formPanel.get('numberPages')?.value;
    component.plusPages();
    const updatedValue = component.formPanel.get('numberPages')?.value;
    expect(updatedValue).toEqual(initialValue + 1);
  });

  it('debe restar un numero de lenguage cuando se llama a minusLanguages', () => {
    const initialValue = component.formPanel.get('numberLanguages')?.value;
    component.minusLanguages();
    const updatedValue = component.formPanel.get('numberLanguages')?.value;
    expect(updatedValue).toEqual(Math.max(initialValue - 1, 1));
  });

  it('debe sumar un numero de lenguage cuando se llama a plusLanguages', () => {
    const initialValue = component.formPanel.get('numberLanguages')?.value;
    component.plusLanguages();
    const updatedValue = component.formPanel.get('numberLanguages')?.value;
    expect(updatedValue).toEqual(initialValue + 1);
  });
});

