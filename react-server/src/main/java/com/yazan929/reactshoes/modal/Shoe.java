package com.yazan929.reactshoes.modal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "shoes")

public class Shoe {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private long id;
	

	private String photo;
	private String name;
	private String msg;
	
	public Shoe() {
	
	}
	
	
	public long getId() {
		return id;
	}
	public Shoe(String photo, String name, String msg) {
		super();
		this.photo = photo;
		this.name = name;
		this.msg = msg;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	
}


