package Entity;

public class EntityImg {
    private String img;

    public EntityImg(String img) {
        this.img = img;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    @Override
    public String toString() {
        return "{\"img\": \""+img+"\" }";
    }
}
