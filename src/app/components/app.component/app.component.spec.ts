import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header.component/header.component';
import { ToolboxComponent } from '../toolbox.component/toolbox.component';
import { CoursesComponent } from '../courses.component/courses.component';
import { CourseComponent } from '../course.component/course.component';
import { FooterComponent } from '../footer.component/footer.component';
import { LogoComponent } from '../logo.component/logo.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ToolboxComponent,
        CoursesComponent,
        CourseComponent,
        FooterComponent,
        LogoComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ang-app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ang-app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();;
  }));
});
