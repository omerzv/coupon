package app.core.threads;

import java.time.LocalDate;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import app.core.entity.Coupon;
import app.core.repository.CouponRepository;
@Component
@EnableScheduling
public class Job  {
	@Autowired
	private CouponRepository couponRepository;
	
	/**
	 * Delete all expire coupon 
	 * run for the first time 20 seconds after the application start
	 *  after that the method run once a day
	 */
	@Scheduled(timeUnit = TimeUnit.SECONDS, fixedRate = 60*60*24,initialDelay = 20 )
	public void job() {
		
		List<Coupon> exCoupon=couponRepository.findByEndDateLessThanEqual(LocalDate.now());
		if(exCoupon.isEmpty())
			System.out.println("no expire coupons!");
		else {
			System.out.println("=====job====\n"+exCoupon+"\n=====job====");
			couponRepository.deleteAll(exCoupon);
		}
		
	}
}
