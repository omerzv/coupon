package app.core.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import app.core.entity.Company;
import app.core.entity.Coupon;
import app.core.entity.Coupon.Category;
import app.core.exception.CouponSystemException;

@Service
@Transactional
@Scope("singleton")
public class CompanyService extends ClientService {
	private int companyId;
	
	/**
	 *@param email of the company
	 *@param password of the company
	 *@return if the company exist
	 *@apiNote
	 *if the company exist by the email and password 
	 *the id is save in this service
	 */
	
	public int getCompanyId() {
		return companyId;
	}
	@Override
	public boolean login(String email, String password) {
		Optional<Company>op= this.companyRepository.findByEmailAndPassword(email,password);
		if(op.isPresent()) {
			this.companyId=op.get().getId();
			return true; 
		}
		return false;
	}
	/**
	 * @param coupon the coupon to add
	 * @return 
	 * @throws CouponSystemException if coupon title is used (for this company)
	 */
	public Coupon addCoupon(Coupon coupon,int companyId) {
		boolean isExists=this.couponRepository.existsByTitleAndCompanyId(coupon.getTitle(), companyId);
		if(!isExists) {
			coupon.setCompany(getDetails(companyId));
			return this.couponRepository.save(coupon);
		}
		else {
			throw new CouponSystemException("the title is used!");
		}
	}
	/**
	 * @param coupon the coupon to update
	 * @return 
	 * @throws CouponSystemException if the coupon not found or if this company don't own the coupon
	 */
	public Coupon updateCoupon(Coupon coupon,int companyId) {
		Optional<Coupon> op=couponRepository.findById(coupon.getId());
		if(op.isPresent()) {
			Coupon updateCoupon=op.get();
			if(updateCoupon.getCompany().getId()!=companyId) {
				throw new CouponSystemException("this company don't own the coupon");
			}
			coupon.setCompany(updateCoupon.getCompany());
			return this.couponRepository.save(coupon);
		}else {
			throw new CouponSystemException("the coupon not found");
		}
	}
	/**
	 * @param couponId The id of the coupon to delete
	 * @throws CouponSystemException If the coupon not found or if this company don't own the coupon
	 */
	public void deleteCoupon(int couponId,int companyId) {
		Optional<Coupon> op=couponRepository.findById(couponId);
		if(op.isPresent()) {
			Coupon deleteCoupon=op.get();
			if(deleteCoupon.getCompany().getId()!=companyId) {
				throw new CouponSystemException("this company don't own the coupon");
			}
			this.couponRepository.deleteById(couponId);
		}
		else
			throw new CouponSystemException("the company not found");
	}
	/**
	 * @return All the company in the system
	 */
	public List<Coupon>  getAllCoupons(int companyId) {
		return this.couponRepository.findByCompanyId(companyId);
	}
	
	/**
	 * @return coupon with the same id as given
	 */
	public Coupon getCoupon(int couponId,int companyId) throws CouponSystemException {

		Optional<Coupon> opt = couponRepository.findByIdAndCompanyId(couponId, companyId);

		if (opt.isEmpty()) {
			throw new CouponSystemException("failed to get coupon - coupon " + couponId + " does not exist");
		}
		return opt.get();
	}
	
	/**
	 * @param category The category to look for
	 * @return All the coupon of this company with this category
	 */
	public List<Coupon>  getAllCouponsByCategory(Category category,int companyId) {
		return this.couponRepository.findByCompanyIdAndCategory(companyId,category);
	}
	/**
	 * @param price The top price to look for
	 * @return All this company coupons with price equal or lower to this price
	 */
	public List<Coupon>  getAllCouponsByPrice(double price,int companyId) {
		return this.couponRepository.findByCompanyIdAndPriceLessThanEqual(companyId,price);
	}
	
	/**
	 * @return The company of this service 
	 */
	public Company getDetails(int companyId) {
		Optional<Company> op = this.companyRepository.findById(companyId);
		if(op.isPresent()) return op.get();
		throw new CouponSystemException("the Company not found");
	}


}
