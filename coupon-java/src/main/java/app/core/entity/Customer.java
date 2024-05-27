package app.core.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@ToString(exclude = "coupons")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of="id")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String firstName;
	private String lastName;
	private String email;
	
	private String password;
	@JsonIgnore
	@ManyToMany
	@JoinTable(name = "customers_coupons",
	joinColumns =@JoinColumn(name="customer_id"),
	inverseJoinColumns=@JoinColumn(name="coupon_id") )
	private List<Coupon>coupons;
	
	public Customer(String firstName, String lastName, String email, String password) {

		this.id = 0;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.coupons = null;
	}
}













