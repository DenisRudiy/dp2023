package Entity;

public class TentEntity {
    private String name;
    private String img;
    private float price;
    private int rate;
    private String description;

    public TentEntity(String name, String img, float price, int rate, String description) {
        this.name = name;
        this.img = img;
        this.price = price;
        this.rate = rate;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "{\"name\": \""+name+"\", \"img\": \""+img+"\", \"price\": "+price+", \"rate\": "+rate+", \"description\": \""+description+"\"}";
    }
}
