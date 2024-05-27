package app.core.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import app.core.entity.Company;
import app.core.entity.Customer;
import app.core.exception.CouponSystemException;
import app.core.service.AdminService;


@RestController
@RequestMapping("/signup")
public class SignUpController {

	@Autowired
	private AdminService service;

	@PutMapping("/company")
	public Company companySignUp(@RequestBody Company company) {

		try {
			return service.addCompany(company);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	@PutMapping("/customer")
	public Customer customerSignUp(@RequestBody Customer customer) {
		System.out.println("s");
		try {
			return service.addCustomer(customer);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

}
