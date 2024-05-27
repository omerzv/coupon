package app.core.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import app.core.entity.Coupon;
import app.core.entity.Coupon.Category;
import app.core.entity.Customer;
import app.core.exception.CouponSystemException;
import app.core.service.CustomerService;
import app.core.utilities.JwtUtil;

@RestController
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	@Autowired
	private JwtUtil jwtUtil;

	@PutMapping("/purchase")
	public void purchaseCoupon(@RequestBody Coupon coupon, @RequestHeader String token) {
		try {
			int id=jwtUtil.extractId(token);
			customerService.purchaseCoupon(coupon.getId(),id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	@GetMapping("/coupons")
	public List<Coupon> getAllCustomerCoupons(@RequestHeader String token) {
		try {
			int id=jwtUtil.extractId(token);
			return customerService.getAllCoupons(id);

		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	@GetMapping("/coupons/category")
	public List<Coupon> getAllCouponsByCategory(@RequestParam Category category, @RequestHeader String token) {

		try {
			int id=jwtUtil.extractId(token);
			return customerService.getAllCouponsByCategory(category,id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	@GetMapping("/coupons/price")
	public List<Coupon> getAllCouponsByPrice(@RequestParam double price, @RequestHeader String token) {

		try {
			int id=jwtUtil.extractId(token);
			return customerService.getAllCouponsByPrice(price,id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	@GetMapping("/details")
	public Customer getDetails(@RequestHeader String token) {

		try {
			int id=jwtUtil.extractId(token);
			return customerService.getDetails(id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

}
