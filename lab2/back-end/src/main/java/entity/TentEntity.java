package entity;

import java.io.Serializable;

public class TentEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	private String name;
	private String img;
	private int rate;
	private int price;
	private String description;



	public TentEntity(String name, String img, int rate, int price, String description) {
		super();
		this.description = description;
		this.name = name;
		this.img = img;
		this.rate = rate;
		this.price = price;
	}


	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getRate() {
		return rate;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "{\"name\": \""+name+"\",\"img\":\""+img+"\", \"price\":"+ price+", \"rate\":"+rate+", \"description\":\""+description+"\"}";
	}
	
	
	
	

}
