package entities;

public class TentEntity {
    int id;
    String name;
    String img;
    int price;
    int rate;
    String description;

    public TentEntity(){

    }

    public TentEntity(int id, String name, String img, int price, int rate, String description) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.rate = rate;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
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
        return "TentEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", img='" + img + '\'' +
                ", price=" + price +
                ", rate=" + rate +
                ", description='" + description + '\'' +
                '}';
    }
}
