import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// @ts-ignore
import { launches } from '../mocks/launches.js'
import { AppComponent } from './app.component';

describe('App', () => {

  let fixture: ComponentFixture<AppComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    // defin the TestBedConfiguration
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should call get API once', () => {
    const req = httpMock.expectOne('https://api.spacexdata.com/v2/launches');
    expect(req.request.method).toBe("GET");
  });

  it('should render mission names', fakeAsync(() => {
    const req = httpMock.expectOne('https://api.spacexdata.com/v2/launches');
    req.flush(launches);
    fixture.detectChanges();
    tick(100);
    const textContent = fixture.nativeElement.textContent;
    launches.forEach((x: any) => expect(textContent).toContain(x.mission_name));
  }));
});
