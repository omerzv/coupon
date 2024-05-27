package app.core.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import app.core.entity.Coupon;
import app.core.entity.Coupon.Category;
import app.core.entity.Customer;
import app.core.exception.CouponSystemException;

@Service
@Transactional
@Scope("prototype")
public class CustomerService extends ClientService {
	private int customerId;

	public int getCustomerId() {
		return customerId;
	}

	/**
	 * @param email    of the customer
	 * @param password of the customer
	 * @return If the customer exist
	 * @apiNote
	 *          If the customer exist by the email and password
	 *          the id is save in this service
	 **/
	@Override
	public boolean login(String email, String password) {
		Optional<Customer> op = this.customerRepository.findByEmailAndPassword(email, password);
		if (op.isPresent()) {
			this.customerId = op.get().getId();
			return true;
		}
		return false;
	}

	/**
	 * @param couponId the coupon to buy
	 * @throws If the coupon runs out,
	 *            this customer have this coupon,
	 *            the end date expire
	 *            or the coupon not found
	 */
	public void purchaseCoupon(int couponId, int id) {
		Optional<Coupon> op = this.couponRepository.findById(couponId);
		if (op.isPresent()) {
			Coupon purchaseCoupon = op.get();
			Customer thisCustomer = this.customerRepository.getById(id);

			if (purchaseCoupon.getAmount() <= 0)
				throw new CouponSystemException("the coupon run out");
			if (thisCustomer.getCoupons().contains(purchaseCoupon))
				throw new CouponSystemException("you have this coupon");
			if (purchaseCoupon.getEndDate().isBefore(LocalDate.now()))
				throw new CouponSystemException("the end date expire");

			purchaseCoupon.setAmount(purchaseCoupon.getAmount() - 1);
			thisCustomer.getCoupons().add(purchaseCoupon);

			this.customerRepository.save(thisCustomer);
		} else {
			throw new CouponSystemException("the coupon not found");
		}
	}

	/**
	 * @return All the customer coupon
	 */
	public List<Coupon> getAllCoupons(int id) {
		List<Coupon> coupons = couponRepository.findByCustomersId(id);
		return coupons;
	}

	/**
	 * @param category the category to look for
	 * @return All the coupons of this customer with this category
	 */
	public List<Coupon> getAllCouponsByCategory(Category category, int customerId) {

		return couponRepository.findByCustomersIdAndCategory(customerId, category);

	}

	/**
	 * @param price the top price to look for
	 * @return All this customer coupons with price equal or lower to this price
	 */
	public List<Coupon> getAllCouponsByPrice(double price, int customerId) {

		return couponRepository.findByCustomersIdAndPriceLessThanEqual(customerId, price);

	}

	/**
	 * @return The customer of this service
	 */
	public Customer getDetails(int customerId) {
		Optional<Customer> op = this.customerRepository.findById(customerId);
		if (op.isPresent())
			return op.get();
		throw new CouponSystemException("the customer not found");
	}

}
