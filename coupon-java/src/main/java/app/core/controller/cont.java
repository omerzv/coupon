package app.core.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import app.core.entity.Coupon;
import app.core.exception.CouponSystemException;
import app.core.repository.CouponRepository;

@RestController
@CrossOrigin
public class cont {


	@Autowired
	private CouponRepository couponRepository;
	
	@GetMapping("/coupons")
	public List<Coupon> getAllCoupons() {
		try {
			return couponRepository.findAll();

		} catch (CouponSystemException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}
}
