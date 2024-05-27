package app.core.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import app.core.entity.Coupon;
import app.core.entity.Coupon.Category;



public interface CouponRepository extends JpaRepository<Coupon, Integer>{
	
	Optional<Coupon> findByTitleAndCompanyId(String title, int companyId);
	
	boolean existsByTitleAndCompanyId(String title, int companyId);
	
	List<Coupon> findByCompanyId( int companyId);
	
	Optional<Coupon> findByIdAndCompanyId( int id,int companyId);
	
	List<Coupon> findByCompanyIdAndCategory( int companyId,Category category);
	
	List<Coupon> findByCompanyIdAndPriceLessThanEqual( int companyId,double price);
	
	List<Coupon> findByCustomersId(int customerId);
	
	List<Coupon> findByCustomersIdAndCategory(int customerId,Category category);
	
	List<Coupon> findByCustomersIdAndPriceLessThanEqual( int cusomerId,double price);
	
	List<Coupon> findByEndDateLessThanEqual(LocalDate endDate);
}
