import { TestBed } from '@angular/core/testing';
import { CustomerService } from './customer.service';
describe('CustomerService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(CustomerService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=customer.service.spec.js.map