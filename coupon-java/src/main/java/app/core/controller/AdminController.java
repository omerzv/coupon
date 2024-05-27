package app.core.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import app.core.entity.Company;
import app.core.entity.Customer;
import app.core.exception.CouponSystemException;
import app.core.service.AdminService;



@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private AdminService adminService;

	@PostMapping("/addCompany")
	public Company addCompany(@RequestBody Company company, @RequestHeader String token) {
		
		try {
			Company comp=this.adminService.addCompany(company);
			comp.setPassword(null);
			return comp;
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

	}

	@PutMapping("/updateCompany")
	public Company updateCompany(@RequestBody Company company, @RequestHeader String token) {

		try {
			return this.adminService.updateCompany(company);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

	}

	@DeleteMapping("/deleteCompany")
	public void deleteCompany(@RequestParam int id, @RequestHeader String token) {

		try {
			this.adminService.deleteCompany(id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

	}

	@GetMapping("/getCompany/{id}")
	public Company getCompany(@PathVariable int id, @RequestHeader String token) {
			
		try {
			return adminService.getCompany(id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

	}

	@GetMapping("/getAllCompany")
	public List<Company> getAllCompanies(@RequestHeader String token) {
		try {
			return this.adminService.getAllCompanies();
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

	}

	@PostMapping("/addCustomer")
	public Customer addCustomer(@RequestBody Customer customer, @RequestHeader String token) {
		try {
			
			return this.adminService.addCustomer(customer);
			
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

	}

	@PutMapping("/updateCustomer")
	public Customer updateCustomer(@RequestBody Customer customer, @RequestHeader String token) {
		
		try {
			return this.adminService.updateCustomer(customer);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

	}

	@DeleteMapping("/deleteCustomer")
	public void deleteCustomer(@RequestParam int id, @RequestHeader String token) {

		try {
			this.adminService.deleteCustomer(id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

	}

	@GetMapping("/getCustomer/{id}")
	public Customer getCustomer(@PathVariable int id, @RequestHeader String token) {

		try {
			return adminService.getCustomer(id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

	}

	@GetMapping("/getAllCustomers")
	public List<Customer> getAllCustomers(@RequestHeader String token) {

		try {
			return this.adminService.getAllCustomers();
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

	}
}
