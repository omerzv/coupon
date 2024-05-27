package app.core.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@ToString(exclude = {"company","customers"})
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of="id")
public class Coupon {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "company")
	private Company company;
	@Enumerated(EnumType.STRING)
	private Category category;
	private String title;
	private LocalDate startDate;
	private LocalDate endDate;
	private int amount;
	private double  price;
	private String image;
	@JsonIgnore
	@ManyToMany
	@JoinTable(name = "customers_coupons",
	joinColumns =@JoinColumn(name="coupon_id"),
	inverseJoinColumns=@JoinColumn(name="customer_id") )
	private List<Customer>customers;
	
	
	public enum Category {
		Food,Electricity,Restaurant,Vaction;
		
	}
}
