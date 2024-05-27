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
import app.core.entity.Coupon;
import app.core.entity.Coupon.Category;
import app.core.exception.CouponSystemException;
import app.core.service.CompanyService;
import app.core.utilities.JwtUtil;


@RestController
@RequestMapping("/company")
@CrossOrigin
public class CompanyController {

	@Autowired
	private CompanyService companyService;
	@Autowired
	private JwtUtil jwtUtil;
	@PostMapping("/coupon")
	public Coupon addCoupon(@RequestBody Coupon coupon, @RequestHeader String token) {

		try {
			
			int id=jwtUtil.extractId(token);
			System.out.println(coupon);
			return this.companyService.addCoupon(coupon,id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	@PutMapping("/coupon")
	public Coupon updateCoupon(@RequestBody Coupon coupon, @RequestHeader String token) {
		
		try {
			
			int id=jwtUtil.extractId(token);
			return this.companyService.updateCoupon(coupon,id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

	}

	@DeleteMapping("/coupon")
	public void deleteCoupon(@RequestParam  int couponid, @RequestHeader String token) {

		try {
			int id=jwtUtil.extractId(token);
			
			this.companyService.deleteCoupon(couponid,id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

	}

	@GetMapping("/coupon/{id}")
	public Coupon getCoupon(@PathVariable int couponId, @RequestHeader String token) {

		try {
			int id=jwtUtil.extractId(token);
			return this.companyService.getCoupon(couponId,id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	@GetMapping("/coupon")
	public List<Coupon> getAllCoupons(@RequestHeader String token) {

		try {
			int id=jwtUtil.extractId(token);
			return this.companyService.getAllCoupons(id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	@GetMapping("/coupon/category")
	public List<Coupon> getAllCompanyCouponsByCategory(@RequestParam Category category,@RequestHeader String token) {
		
		try {
			int id=jwtUtil.extractId(token);
			return this.companyService.getAllCouponsByCategory(category,id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	@GetMapping("/coupon/price")
	public List<Coupon> getAllCompanyCouponsUpToPrice(@RequestParam double price,@RequestHeader String token) {

		try {
			int id=jwtUtil.extractId(token);
			return this.companyService.getAllCouponsByPrice(price,id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

	}

	@GetMapping("/details")
	public Company getDetails(@RequestHeader String token) {

		try {
			int id=jwtUtil.extractId(token);
			return companyService.getDetails(id);
		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

}
