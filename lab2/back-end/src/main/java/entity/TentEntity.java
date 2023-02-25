package entity;

import java.io.Serializable;

public class TentEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    private int id;
    private String name;
    private String img;
    private int rate;
    private int price;
    private String description;


    public TentEntity() {

    }

    public TentEntity(int id, String name, String img, int rate, int price, String description) {
        super();
        this.id = id;
        this.description = description;
        this.name = name;
        this.img = img;
        this.rate = rate;
        this.price = price;
    }


    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
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
        return "{\"id\": "+id+",\"name\": \""+name+"\",\"img\":\""+img+"\", \"price\":"+ price+", \"rate\":"+rate+", \"description\":\""+description+"\"}";
    }

}